
(() => {
  const memberNames = ["Abdou Ali","Alan Blyth","Alex Gao","Alison Fowler","Alison Stirling","Amber te Winkel","Amber te Winkle","Amber Winkel","Amber Winkle","Amos Lawless","Andreas Prein","Andrew Kenny","Andrew Turner","Anne Verhoef","Benoît Vannière","Birgit Sutzl","Bob Plant","Bryan Lawrence","Cameron Southgate-As","Celia Petty","Charlie Egan","Chris Holloway","Chris Merchant","Chris OReilly","Christel Prudhomme","Claire Bulgin","Cyril Morcrette","Deepak Gopalakrishnan","Deepti Dahiya","Elias Holm","Emily Black","Eviatar Bach","Fernanda Pino","Florian Pappenberger","Frederic Vitart","Gabrielle Ching-Johnson","Giacomo Giuliani","Gianpaolo Balsamo","Hamidreza Mosaffa","Hannah Cloke","Hei Tung Wu","Helen Dacre","Hilary Weller","Humphrey Lean","Indrakshi Mukherjee","Jake Keller","Jamie Todd","Jennifer Scott","Jesse Gilbert","Joanne Waller","John Methven","Jon Shonk","Julia Kukulies","Karan Ruparell","Kate Huxtable","Katherine Egan","Kaustubh Mittal","Ken Rui Fong","Kieran Hunt","Leo Chow","Leong Chung","Lewis Blunn","Lewis Grant","Linda Hirons","Liz Stephens","Lorenzo Tomassini","Maarten Ambaum","Magdalena Balmaseda","Marco Burderi","Mark Muetzelfeldt","Martín Jacques-Coper","Massimo Bonavita","Mehzooz Nizar","Nancy Nichols","Niels Borman","Oscar Martinez-Alvarado","Oscar Martínez-Alvarado","Patricia Rosnay","Peter Duben","Pier Vidale","Piyali Goswami","Rajsekhar Kandala","Ravi Nemani","Regina Rodrigues","Reinhard Schiemann","Richard Forbes","Richard Keane","Rishabh Bhatt","Robin Hogan","Rosalind Cornforth","Ross Bannister","Sambit Panda","Sarah Dance","Ségolène Berthou","Sharar Ahmadi","Shovonlal Roy","Steven Hardiman","Stuart Newman","Sue Grimmond","Ted Shepherd","Theodore Shepherd","Thomas White","Thorwald Stein","Tobias Becker","Todd Jones","Tom Frame","Tom Hill","Xiangbo Feng","Xiaocen Shen","Yiqing Liu"];
  const profileAnchors = new Set(["sharar-ahmadi","abdou-ali","maarten-ambaum","eviatar-bach","magdalena-balmaseda","gianpaolo-balsamo","ross-bannister","tobias-becker","segolene-berthou","rishabh-bhatt","emily-black","lewis-blunn","alan-blyth","massimo-bonavita","niels-borman","claire-bulgin","marco-burderi","leo-chow","leong-chung","hannah-cloke","rosalind-cornforth","helen-dacre","deepti-dahiya","sarah-dance","peter-duben","charlie-egan","katherine-egan","xiangbo-feng","ken-rui-fong","richard-forbes","alison-fowler","tom-frame","giacomo-giuliani","deepak-gopalakrishnan","piyali-goswami","lewis-grant","sue-grimmond","steven-hardiman","tom-hill","linda-hirons","robin-hogan","chris-holloway","elias-holm","kieran-hunt","kate-huxtable","martin-jacques-coper","jesse-gilbert","todd-jones","rajsekhar-kandala","jake-keller","andrew-kenny","julia-kukulies","amos-lawless","bryan-lawrence","humphrey-lean","oscar-martinez-alvarado","chris-merchant","john-methven","kaustubh-mittal","cyril-morcrette","hamidreza-mosaffa","indrakshi-mukherjee","mark-muetzelfeldt","ravi-nemani","stuart-newman","nancy-nichols","mehzooz-nizar","chris-oreilly","sambit-panda","florian-pappenberger","celia-petty","fernanda-pino","bob-plant","andreas-prein","christel-prudhomme","regina-rodrigues","patricia-rosnay","shovonlal-roy","karan-ruparell","reinhard-schiemann","jennifer-scott","xiaocen-shen","ted-shepherd","jon-shonk","cameron-southgate-as","thorwald-stein","liz-stephens","alison-stirling","birgit-sutzl","jamie-todd","lorenzo-tomassini","andrew-turner","anne-verhoef","pier-vidale","frederic-vitart","joanne-waller","hilary-weller","thomas-white","amber-winkle","hei-tung-wu","yiqing-liu"]);
  const peoplePageUrl = "/people/";
  const projectsPath = "/projects/";
  const eventsPath = "/conferences/";

  // Other spellings used on the site, mapped to the profile anchor of the same person.
  const aliases = {
    "Tom Bayliss White": "thomas-white",
    "Thomas Bayliss White": "thomas-white",
    "Fernanda Pino Delgado": "fernanda-pino",
    "Chris O'Reilly": "chris-oreilly",
    "Chris O’Reilly": "chris-oreilly",
    "Andy Turner": "andrew-turner",
    "Robert Plant": "bob-plant",
    "Theodore Shepherd": "ted-shepherd",
    "Theodore G Shepherd": "ted-shepherd",
    "Patricia de Rosnay": "patricia-rosnay",
    "Cameron Southgate-Ash": "cameron-southgate-as",
    "Leong Wang Chung": "leong-chung",
  };
  // Members whose list spellings give a different anchor from their profile (for example "Amber te Winkel").
  const anchorAliases = {
    "amber-te-winkel": "amber-winkle",
    "amber-te-winkle": "amber-winkle",
    "amber-winkel": "amber-winkle",
  };

  const run = () => {
    const path = window.location.pathname;
    // Individual project pages (for example /projects/phd_jamie_todd/) and the events page.
    const isProjectPage = path.startsWith(projectsPath) && path !== projectsPath;
    const isEventsPage = path === eventsPath || path === eventsPath.replace(/\/$/, "");
    // The main page: only the author lists of the selected publications.
    const isHomePage = path === "/" || path === "/index.html";
    if (!isProjectPage && !isEventsPage && !isHomePage) {
      return;
    }
    const roots = isHomePage
      ? Array.from(document.querySelectorAll(".publications .author"))
      : [document.querySelector(".post article") || document.querySelector(".post")].filter(Boolean);
    if (roots.length === 0) {
      return;
    }

    const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const slugify = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

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
          anchor: anchorAliases[slugify(parts.join(" "))] || slugify(parts.join(" ")),
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

    const textNodes = [];
    roots.forEach((root) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode: (node) =>
          node.parentElement && node.parentElement.closest("a, script, style, h1, h2, h3, .afesp-member") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
      });
      while (walker.nextNode()) {
        memberRegex.lastIndex = 0;
        if (memberRegex.test(walker.currentNode.nodeValue)) {
          textNodes.push(walker.currentNode);
        }
      }
    });
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
    const pageContacts = {"/people/":["afesp-rse@reading.ac.uk"]} || {};
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
      link.href = "mailto:afesp-rse@reading.ac.uk";
      const social = document.createElement("div");
      social.className = "social";
      social.appendChild(icons);
      post.appendChild(social);
    }
  };

  // On short pages, push the contact block (email icon and addresses) down so it sits at the
  // very bottom of the window, just above the footer bar. Longer pages are left alone.
  const pinContactToBottom = () => {
    const blocks = document.querySelectorAll(".post .social, .post ~ .social");
    const social = blocks[blocks.length - 1];
    if (!social) {
      return;
    }
    social.style.marginTop = "";
    // Height of the whole page content; when it is shorter than the window there is room to spare.
    const spare = window.innerHeight - document.documentElement.getBoundingClientRect().height;
    if (spare > 0) {
      const current = parseFloat(window.getComputedStyle(social).marginTop) || 0;
      social.style.marginTop = `${current + spare}px`;
    }
  };

  // AFESP LinkedIn group: icon next to the email icon at the bottom of the main page.
  const AFESP_LINKEDIN = "https://www.linkedin.com/groups/13187660/";
  const addLinkedInIcon = () => {
    const path = window.location.pathname.replace(/index\.html$/, "");
    if (path !== "/" || document.querySelector(".contact-icons .afesp-linkedin")) {
      return;
    }
    const icons = document.querySelector(".post .contact-icons");
    if (!icons) {
      return;
    }
    const link = document.createElement("a");
    link.className = "afesp-linkedin";
    link.href = AFESP_LINKEDIN;
    link.title = "AFESP on LinkedIn";
    link.target = "_blank";
    link.rel = "external nofollow noopener";
    link.innerHTML = '<i class="fa-brands fa-linkedin"></i>';
    icons.appendChild(link);
    const note = document.querySelector(".post .social .contact-note");
    if (note) {
      const line = document.createElement("div");
      const text = document.createElement("a");
      text.href = AFESP_LINKEDIN;
      text.target = "_blank";
      text.rel = "external nofollow noopener";
      text.textContent = "AFESP on LinkedIn";
      line.appendChild(text);
      note.appendChild(line);
    }
  };

  // Keep the contact block (email icon and addresses) at the very bottom of the page,
  // after footnotes, reference lists and anything else the layout adds after the content.
  const moveContactToEnd = () => {
    const post = document.querySelector(".post");
    const note = post && post.querySelector(".social .contact-note");
    const block = note && note.closest(".social");
    if (block && block.parentElement && post.lastElementChild !== block) {
      post.appendChild(block);
    }
  };

  // People page: give each person their own panel, alternating light blue and light cream.
  const stripePeople = () => {
    const path = window.location.pathname;
    if (path !== "/people/" && path !== "/people") {
      return;
    }
    const firstProfile = document.querySelector(".profile");
    const article = firstProfile && firstProfile.parentElement;
    if (!article || article.querySelector(".person-panel")) {
      return;
    }
    let panel = null;
    let index = 0;
    Array.from(article.children).forEach((child) => {
      if (child.tagName === "HR") {
        panel = document.createElement("div");
        panel.className = `person-panel ${index % 2 === 0 ? "person-panel-blue" : "person-panel-cream"}`;
        index += 1;
        child.replaceWith(panel);
        return;
      }
      if (panel) {
        panel.appendChild(child);
      }
    });
    // Section headings (such as "Former members") are profile entries whose bio is a .people-section.
    // Show them as plain headings, not person cards, so they are left out of the counts, filters and A–Z bar.
    article.querySelectorAll(".person-panel").forEach((p) => {
      const section = p.querySelector(".people-section");
      if (!section) return;
      p.className = "people-section-panel";
      p.replaceChildren(section);
    });
    if (!document.getElementById("people-section-style")) {
      const style = document.createElement("style");
      style.id = "people-section-style";
      style.textContent = `
        .people-section-panel { margin: 2.75rem 0 1.1rem; padding-top: 1.25rem; border-top: 2px solid rgba(21, 101, 192, 0.15); }
        .people-section-panel h2 { margin: 0; font-weight: 800; color: #1565c0; }
        html[data-theme="dark"] .people-section-panel { border-top-color: rgba(255, 255, 255, 0.12); }
        html[data-theme="dark"] .people-section-panel h2 { color: #90c2ff; }
      `;
      document.head.appendChild(style);
    }
  };

  // People page: summary tiles, a search box, filter chips and an A–Z bar above the profiles,
  // plus the card styling. Everything is worked out from the profiles, so it updates by itself.
  const peopleDirectory = () => {
    const firstPanel = document.querySelector(".person-panel");
    if (!firstPanel || document.querySelector(".people-tools")) {
      return;
    }
    const style = document.createElement("style");
    style.textContent = `
      .post .post-header .post-title { font-weight: 800; letter-spacing: -0.02em; text-transform: capitalize; }
      .people-tools { margin: 1.75rem 0 1.25rem; }
      .people-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem; margin-bottom: 1.1rem; }
      .people-stat { position: relative; overflow: hidden; border-radius: 14px; padding: 0.9rem 1rem; color: #fff;
        background: linear-gradient(135deg, var(--a), var(--b)); box-shadow: 0 6px 18px rgba(20, 60, 110, 0.18); }
      .people-stat::after { content: ""; position: absolute; right: -24px; top: -24px; width: 90px; height: 90px; border-radius: 50%;
        background: rgba(255, 255, 255, 0.14); }
      .people-stat b { display: block; font-size: 2rem; line-height: 1.1; font-weight: 800; }
      .people-stat span { font-size: 0.85rem; opacity: 0.92; }
      .people-search { display: flex; align-items: center; gap: 0.6rem; border: 2px solid #c9dcf2; border-radius: 999px;
        padding: 0.45rem 1rem; background: var(--global-bg-color, #fff); transition: border-color 0.2s, box-shadow 0.2s; }
      .people-search:focus-within { border-color: #1565c0; box-shadow: 0 0 0 4px rgba(21, 101, 192, 0.12); }
      .people-search input { flex: 1; border: 0; outline: 0; background: transparent; color: inherit; font-size: 1rem; }
      .people-search svg { flex: none; opacity: 0.55; }
      .people-row { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem; margin-top: 0.85rem; }
      .people-chip { border: 1px solid #c9dcf2; background: transparent; color: inherit; border-radius: 999px; padding: 0.25rem 0.85rem;
        font-size: 0.88rem; cursor: pointer; transition: all 0.2s; }
      .people-chip:hover { border-color: #1565c0; }
      .people-chip.active { background: #1565c0; border-color: #1565c0; color: #fff; }
      .people-count { margin-left: auto; font-size: 0.88rem; opacity: 0.7; }
      .people-az { display: flex; flex-wrap: wrap; gap: 0.25rem; margin-top: 0.75rem; }
      .people-az a, .people-az span { width: 1.9rem; height: 1.9rem; display: inline-flex; align-items: center; justify-content: center;
        border-radius: 8px; font-size: 0.85rem; font-weight: 600; text-decoration: none; }
      .people-az a { background: #e8f1fb; color: #1565c0; transition: all 0.15s; }
      .people-az a:hover { background: #1565c0; color: #fff; transform: translateY(-2px); }
      .people-az span { opacity: 0.25; }
      .people-empty { display: none; text-align: center; padding: 2rem 1rem; opacity: 0.7; }
      .person-panel { position: relative; border-radius: 16px !important; padding: 1.4rem 1.5rem !important; margin-bottom: 1.1rem !important;
        border: 1px solid rgba(21, 101, 192, 0.1); box-shadow: 0 2px 10px rgba(20, 50, 90, 0.06);
        transition: transform 0.25s ease, box-shadow 0.25s ease; }
      .person-panel::before { content: ""; position: absolute; left: 0; top: 18px; bottom: 18px; width: 5px; border-radius: 0 5px 5px 0;
        background: #1565c0; }
      .person-panel-cream::before { background: #e0a020; }
      .person-panel-cream { border-color: rgba(224, 160, 32, 0.18); }
      .person-panel:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(20, 50, 90, 0.13); }
      .person-panel .profile figure img { border-radius: 14px !important; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15) !important;
        transition: transform 0.35s ease; }
      .person-panel:hover .profile figure img { transform: scale(1.02); }
      .person-panel .more-info p[id] { font-size: 1.15rem !important; font-weight: 700; color: #0d47a1; margin-bottom: 0.3rem !important; }
      .person-panel-cream .more-info p[id] { color: #8a5a00; }
      .person-panel .more-info > div { opacity: 0.8; }
      .person-tag { display: inline-block; margin-top: 0.5rem; padding: 0.1rem 0.6rem; border-radius: 999px; font-size: 0.72rem;
        font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; background: rgba(21, 101, 192, 0.12); color: #1565c0; }
      .person-tag.phd { background: rgba(31, 157, 85, 0.14); color: #1b7f46; }
      .person-panel.reveal { opacity: 0; transform: translateY(18px); }
      .person-panel.reveal.shown { opacity: 1; transform: none; transition: opacity 0.5s ease, transform 0.5s ease; }
      html[data-theme="dark"] .person-panel { border-color: rgba(255, 255, 255, 0.08); }
      html[data-theme="dark"] .person-panel .more-info p[id] { color: #90c2ff; }
      html[data-theme="dark"] .person-panel-cream .more-info p[id] { color: #f0c46a; }
      html[data-theme="dark"] .people-az a { background: #1d2a38; color: #90c2ff; }
      html[data-theme="dark"] .people-search, html[data-theme="dark"] .people-chip { border-color: #2c4560; }
      @media (prefers-reduced-motion: reduce) {
        .person-panel, .person-panel.reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
      }
    `;
    document.head.appendChild(style);

    const panels = Array.from(document.querySelectorAll(".person-panel"));
    const titles = /^(dr|prof|professor|mr|mrs|ms|miss)\.?\s+/i;
    const people = panels.map((panel) => {
      const nameEl = panel.querySelector(".more-info p[id]");
      const name = nameEl ? nameEl.textContent.trim() : "";
      const role = Array.from(panel.querySelectorAll(".more-info > div p"))
        .map((p) => p.textContent.trim())
        .join(" ");
      const words = name.replace(titles, "").replace(/\(.*?\)/g, "").trim().split(/\s+/);
      const letter = (words[words.length - 1] || "").charAt(0).toUpperCase();
      const phd = /phd|(?<!post)doctoral/i.test(role) && !/^dr\b/i.test(name);
      panel.dataset.letter = letter;
      panel.dataset.kind = phd ? "phd" : "staff";
      if (role && nameEl) {
        const tag = document.createElement("span");
        tag.className = `person-tag${phd ? " phd" : ""}`;
        tag.textContent = phd ? "PhD researcher" : "Researcher & partner";
        nameEl.parentElement.appendChild(tag);
      }
      return { panel, text: `${name} ${role} ${panel.textContent}`.toLowerCase(), phd };
    });
    const total = people.length;
    const phdCount = people.filter((p) => p.phd).length;
    const tools = document.createElement("div");
    tools.className = "people-tools";
    const tiles = [
      [total, "people", "#1565c0", "#42a5f5"],
      [phdCount, "PhD researchers", "#1b7f46", "#43b97a"],
      [total - phdCount, "researchers & partners", "#c77700", "#f2b544"],
    ];
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const firstByLetter = {};
    panels.forEach((panel) => {
      if (!firstByLetter[panel.dataset.letter]) firstByLetter[panel.dataset.letter] = panel;
    });
    tools.innerHTML = `
      <div class="people-stats">${tiles
        .map(([n, label, a, b]) => `<div class="people-stat" style="--a:${a};--b:${b}"><b data-target="${n}">0</b><span>${label}</span></div>`)
        .join("")}</div>
      <label class="people-search"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"
        stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <input type="search" placeholder="Search by name, role, department or research topic" aria-label="Search people"></label>
      <div class="people-row">
        <button type="button" class="people-chip active" data-kind="all">Everyone</button>
        <button type="button" class="people-chip" data-kind="phd">PhD researchers</button>
        <button type="button" class="people-chip" data-kind="staff">Researchers &amp; partners</button>
        <span class="people-count" aria-live="polite"></span>
      </div>
      <nav class="people-az" aria-label="Jump to surname">${letters
        .map((l) => (firstByLetter[l] ? `<a href="#" data-letter="${l}">${l}</a>` : `<span>${l}</span>`))
        .join("")}</nav>`;
    firstPanel.parentElement.insertBefore(tools, firstPanel);
    const empty = document.createElement("p");
    empty.className = "people-empty";
    empty.textContent = "No one matches your search.";
    panels[panels.length - 1].after(empty);

    const input = tools.querySelector("input");
    const countEl = tools.querySelector(".people-count");
    let kind = "all";
    const apply = () => {
      const terms = input.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
      let shown = 0;
      people.forEach((p) => {
        const ok = (kind === "all" || p.panel.dataset.kind === kind) && terms.every((t) => p.text.includes(t));
        p.panel.style.display = ok ? "" : "none";
        if (ok) {
          p.panel.classList.toggle("person-panel-blue", shown % 2 === 0);
          p.panel.classList.toggle("person-panel-cream", shown % 2 === 1);
          shown += 1;
        }
      });
      countEl.textContent = `Showing ${shown} of ${total}`;
      empty.style.display = shown ? "none" : "block";
    };
    input.addEventListener("input", apply);
    tools.querySelectorAll(".people-chip").forEach((chip) =>
      chip.addEventListener("click", () => {
        tools.querySelectorAll(".people-chip").forEach((c) => c.classList.toggle("active", c === chip));
        kind = chip.dataset.kind;
        apply();
      }),
    );
    tools.querySelectorAll(".people-az a").forEach((a) =>
      a.addEventListener("click", (e) => {
        e.preventDefault();
        input.value = "";
        kind = "all";
        tools.querySelectorAll(".people-chip").forEach((c) => c.classList.toggle("active", c.dataset.kind === "all"));
        apply();
        const target = firstByLetter[a.dataset.letter];
        target.classList.add("shown");
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 130, behavior: "smooth" });
      }),
    );
    apply();

    // Count the numbers up, and fade each profile in as it scrolls into view.
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    tools.querySelectorAll(".people-stat b").forEach((el) => {
      const target = Number(el.dataset.target);
      if (reduce) {
        el.textContent = target;
        return;
      }
      const t0 = performance.now();
      const step = (now) => {
        const k = Math.min(1, (now - t0) / 1100);
        el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    if (!reduce && "IntersectionObserver" in window && !window.location.hash) {
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("shown");
              io.unobserve(en.target);
            }
          }),
        { rootMargin: "0px 0px -40px 0px" },
      );
      panels.forEach((panel) => {
        panel.classList.add("reveal");
        io.observe(panel);
      });
    }
  };

  const start = () => {
    stripePeople();
    peopleDirectory();
    run();
    addEmailIcon();
    moveContactToEnd();
    addLinkedInIcon();
    pinContactToBottom();
    window.addEventListener("load", pinContactToBottom);
    // The top menu and icon font settle shortly after loading and shift the page a little.
    [300, 1000, 2500].forEach((delay) => window.setTimeout(pinContactToBottom, delay));
    window.addEventListener("resize", pinContactToBottom);
    // Opening or closing a drop-down section changes the page height.
    document.addEventListener("toggle", pinContactToBottom, true);
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
