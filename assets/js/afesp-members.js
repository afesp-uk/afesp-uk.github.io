---
# Shows the names of AFESP members in green on the individual project pages and the events page, and links each
# name to that person's profile on the people page.
# Names come from _data/afesp_members.yml; a name is linked when the matching profile in
# _pages/people.md has an `anchor`. Also adds the email icon at the bottom of every page.
# Loaded on every page from footer_text in _config.yml.
---
{% assign people_page = site.pages | where: "permalink", "/people/" | first %}
(() => {
  const memberNames = {{ site.data.afesp_members | jsonify }};
  const profileAnchors = new Set({{ people_page.profiles | map: "anchor" | compact | jsonify }});
  const peoplePageUrl = "{{ '/people/' | relative_url }}";
  const projectsPath = "{{ '/projects/' | relative_url }}";
  const eventsPath = "{{ '/conferences/' | relative_url }}";

  // Other spellings used on the site, mapped to the profile anchor of the same person.
  const aliases = {
    "Tom Bayliss White": "thomas-white",
    "Thomas Bayliss White": "thomas-white",
    "Fernanda Pino Delgado": "fernanda-pino",
    "Chris O'Reilly": "chris-oreilly",
    "Chris O’Reilly": "chris-oreilly",
    "Andy Turner": "andrew-turner",
    "Robert Plant": "bob-plant",
    "Patricia de Rosnay": "patricia-rosnay",
    "Cameron Southgate-Ash": "cameron-southgate-as",
  };

  const run = () => {
    const path = window.location.pathname;
    // Individual project pages (for example /projects/phd_jamie_todd/) and the events page.
    const isProjectPage = path.startsWith(projectsPath) && path !== projectsPath;
    const isEventsPage = path === eventsPath || path === eventsPath.replace(/\/$/, "");
    if (!isProjectPage && !isEventsPage) {
      return;
    }
    const root = document.querySelector(".post article") || document.querySelector(".post");
    if (!root) {
      return;
    }

    const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

    // Longer, more specific spellings first so they win over shorter ones.
    const entries = Object.entries(aliases).map(([name, anchor]) => ({ pattern: escapeRegex(name).replace(/\\? /g, "\\s+"), anchor }));
    memberNames
      .map((fullName) => fullName.trim().split(/\s+/))
      .filter((parts) => parts.length >= 2)
      .forEach((parts) => {
        const first = escapeRegex(parts[0]);
        const surname = parts.slice(1).map(escapeRegex).join("\\s+");
        const initial = escapeRegex(parts[0].charAt(0));
        // Either: first name, an optional middle name or initial, then the surname;
        // or: dotted initials then the surname (for example "S. K. Panda").
        entries.push({
          pattern: `${first}(?:\\s+[A-Za-z][A-Za-z'’.\\-]*)?\\s+${surname}|${initial}\\.\\s*(?:[A-Z]\\.\\s*)?${surname}`,
          anchor: slugify(parts.join(" ")),
        });
      });
    entries.forEach((entry) => {
      entry.exact = new RegExp(`^(?:${entry.pattern})$`);
    });
    const memberRegex = new RegExp(`(?<![A-Za-z])(?:${entries.map((entry) => entry.pattern).join("|")})(?![A-Za-z])`, "g");
    const anchorFor = (text) => {
      const entry = entries.find((candidate) => candidate.exact.test(text));
      return entry && profileAnchors.has(entry.anchor) ? entry.anchor : null;
    };

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) =>
        node.parentElement && node.parentElement.closest("a, script, style, h1, h2, h3, .afesp-member") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
    });
    const textNodes = [];
    while (walker.nextNode()) {
      memberRegex.lastIndex = 0;
      if (memberRegex.test(walker.currentNode.nodeValue)) {
        textNodes.push(walker.currentNode);
      }
    }
    textNodes.forEach((node) => {
      const text = node.nodeValue;
      const fragment = document.createDocumentFragment();
      let last = 0;
      memberRegex.lastIndex = 0;
      let match = memberRegex.exec(text);
      while (match) {
        fragment.appendChild(document.createTextNode(text.slice(last, match.index)));
        const anchor = anchorFor(match[0]);
        const el = document.createElement(anchor ? "a" : "span");
        el.className = "afesp-member";
        el.textContent = match[0];
        if (anchor) {
          el.href = `${peoplePageUrl}#${anchor}`;
          el.title = "View profile on the people page";
        }
        fragment.appendChild(el);
        last = match.index + match[0].length;
        match = memberRegex.exec(text);
      }
      fragment.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(fragment, node);
    });
  };

  // Email (envelope) icon at the bottom of every page. Pages that list their own contact
  // addresses get an icon that writes to those addresses; all other pages write to the
  // general AFESP address. The home and about pages already have the icon from the theme.
  const addEmailIcon = () => {
    if (document.querySelector(".contact-icons")) {
      return;
    }
    const post = document.querySelector(".post");
    if (!post) {
      return;
    }
    const icons = document.createElement("div");
    icons.className = "contact-icons";
    const link = document.createElement("a");
    link.title = "Email";
    link.innerHTML = '<i class="fa-solid fa-envelope"></i>';
    icons.appendChild(link);

    let note = document.querySelector(".social .contact-note");
    // Pages listed in _data/page_contacts.yml get their addresses written out here.
    const pageContacts = {{ site.data.page_contacts | jsonify }} || {};
    const listed = pageContacts[window.location.pathname] || pageContacts[`${window.location.pathname}/`];
    if (!note && Array.isArray(listed) && listed.length > 0) {
      const social = document.createElement("div");
      social.className = "social";
      note = document.createElement("div");
      note.className = "contact-note";
      listed.forEach((address, index) => {
        if (index > 0) {
          note.appendChild(document.createTextNode(", "));
        }
        const a = document.createElement("a");
        a.href = `mailto:${address}`;
        a.textContent = address;
        note.appendChild(a);
      });
      social.appendChild(note);
      post.appendChild(social);
    }
    if (note) {
      const addresses = Array.from(note.querySelectorAll('a[href^="mailto:"]')).map((a) => a.getAttribute("href").replace(/^mailto:/, ""));
      link.href = `mailto:${addresses.join(",")}`;
      note.parentNode.insertBefore(icons, note);
    } else {
      link.href = "mailto:{{ site.data.socials.email }}";
      const social = document.createElement("div");
      social.className = "social";
      social.appendChild(icons);
      post.appendChild(social);
    }
  };

  const start = () => {
    run();
    addEmailIcon();
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
