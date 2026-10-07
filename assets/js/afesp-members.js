
(() => {
  const memberNames = ["Alan Blyth","Alex Gao","Alison Fowler","Alison Stirling","Amber Winkle","Amos Lawless","Andrew Kenny","Andrew Turner","Anne Verhoef","Birgit Sutzl","Bob Plant","Bryan Lawrence","Cameron Southgate-As","Charlie Egan","Chris Holloway","Chris Merchant","Chris OReilly","Christel Prudhomme","Claire Bulgin","Deepak Gopalakrishnan","Deepti Dahiya","Elias Holm","Emily Black","Eviatar Bach","Fernanda Pino","Frederic Vitart","Gabrielle Ching-Johnson","Giacomo Giuliani","Gianpaolo Balsamo","Hamidreza Mosaffa","Hannah Cloke","Hei Tung Wu","Helen Dacre","Hilary Weller","Humphrey Lean","Indrakshi Mukherjee","Jake Keller","Jamie Todd","Jennifer Scott","Jesse Gilbert","Joanne Waller","John Methven","Jon Shonk","Julia Kukulies","Karan Ruparell","Kate Huxtable","Kaustubh Mittal","Ken Rui Fong","Kieran Hunt","Leo Chow","Leong Chung","Lewis Blunn","Lewis Grant","Linda Hirons","Liz Stephens","Lorenzo Tomassini","Maarten Ambaum","Magdelena Balmaseda","Marco Burderi","Mark Muetzelfeldt","Massimo Bonavita","Mehzooz Nizar","Nancy Nichols","Niels Borman","Oscar Martinez-Alvarado","Patricia Rosnay","Peter Duben","Pier Vidale","Piyali Goswami","Rajsekhar Kandala","Ravi Nemani","Reinhard Schiemann","Richard Forbes","Rishabh Bhatt","Robin Hogan","Rosalind Cornforth","Ross Bannister","Sambit Panda","Sarah Dance","Sharar Ahmadi","Shovonlal Roy","Steven Hardiman","Stuart Newman","Sue Grimmond","Ted Shepherd","Thomas White","Thorwald Stein","Todd Jones","Tom Frame","Tom Hill","Xiangbo Feng","Xiaocen Shen"];
  const profileAnchors = new Set(["sharar-ahmadi","maarten-ambaum","eviatar-bach","magdelena-balmaseda","gianpaolo-balsamo","ross-bannister","rishabh-bhatt","emily-black","lewis-blunn","alan-blyth","massimo-bonavita","niels-borman","claire-bulgin","leo-chow","leong-chung","hannah-cloke","rosalind-cornforth","helen-dacre","deepti-dahiya","sarah-dance","peter-duben","charlie-egan","xiangbo-feng","ken-rui-fong","alison-fowler","tom-frame","giacomo-giuliani","deepak-gopalakrishnan","piyali-goswami","lewis-grant","sue-grimmond","steven-hardiman","tom-hill","linda-hirons","robin-hogan","chris-holloway","elias-holm","kieran-hunt","kate-huxtable","jesse-gilbert","todd-jones","rajsekhar-kandala","jake-keller","andrew-kenny","julia-kukulies","amos-lawless","bryan-lawrence","humphrey-lean","oscar-martinez-alvarado","chris-merchant","john-methven","kaustubh-mittal","hamidreza-mosaffa","indrakshi-mukherjee","mark-muetzelfeldt","ravi-nemani","stuart-newman","nancy-nichols","mehzooz-nizar","chris-oreilly","sambit-panda","fernanda-pino","bob-plant","christel-prudhomme","patricia-rosnay","shovonlal-roy","karan-ruparell","reinhard-schiemann","jennifer-scott","xiaocen-shen","ted-shepherd","jon-shonk","cameron-southgate-as","thorwald-stein","liz-stephens","birgit-sutzl","jamie-todd","lorenzo-tomassini","andrew-turner","anne-verhoef","pier-vidale","frederic-vitart","joanne-waller","hilary-weller","thomas-white","amber-winkle","hei-tung-wu"]);
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

    const note = post.querySelector(".social .contact-note");
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
