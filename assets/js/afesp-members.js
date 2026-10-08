
(() => {
  const memberNames = ["Abdou Ali","Alan Blyth","Alex Gao","Alison Fowler","Alison Stirling","Amber Winkle","Amos Lawless","Andreas Prein","Andrew Kenny","Andrew Turner","Anne Verhoef","Benoît Vannière","Birgit Sutzl","Bob Plant","Bryan Lawrence","Cameron Southgate-As","Celia Petty","Charlie Egan","Chris Holloway","Chris Merchant","Chris OReilly","Christel Prudhomme","Claire Bulgin","Cyril Morcrette","Deepak Gopalakrishnan","Deepti Dahiya","Elias Holm","Emily Black","Eviatar Bach","Fernanda Pino","Florian Pappenberger","Frederic Vitart","Gabrielle Ching-Johnson","Giacomo Giuliani","Gianpaolo Balsamo","Hamidreza Mosaffa","Hannah Cloke","Hei Tung Wu","Helen Dacre","Hilary Weller","Humphrey Lean","Indrakshi Mukherjee","Jake Keller","Jamie Todd","Jennifer Scott","Jesse Gilbert","Joanne Waller","John Methven","Jon Shonk","Julia Kukulies","Karan Ruparell","Kate Huxtable","Katherine Egan","Kaustubh Mittal","Ken Rui Fong","Kieran Hunt","Leo Chow","Leong Chung","Lewis Blunn","Lewis Grant","Linda Hirons","Liz Stephens","Lorenzo Tomassini","Maarten Ambaum","Magdelena Balmaseda","Marco Burderi","Mark Muetzelfeldt","Martín Jacques-Coper","Massimo Bonavita","Mehzooz Nizar","Nancy Nichols","Niels Borman","Oscar Martinez-Alvarado","Patricia Rosnay","Peter Duben","Pier Vidale","Piyali Goswami","Rajsekhar Kandala","Ravi Nemani","Reinhard Schiemann","Richard Forbes","Richard Keane","Rishabh Bhatt","Robin Hogan","Rosalind Cornforth","Ross Bannister","Sambit Panda","Sarah Dance","Sharar Ahmadi","Shovonlal Roy","Steven Hardiman","Stuart Newman","Sue Grimmond","Ted Shepherd","Theodore Shepherd","Thomas White","Thorwald Stein","Tobias Becker","Todd Jones","Tom Frame","Tom Hill","Xiangbo Feng","Xiaocen Shen"];
  const profileAnchors = new Set(["sharar-ahmadi","abdou-ali","maarten-ambaum","eviatar-bach","magdelena-balmaseda","gianpaolo-balsamo","ross-bannister","tobias-becker","rishabh-bhatt","emily-black","lewis-blunn","alan-blyth","massimo-bonavita","niels-borman","claire-bulgin","leo-chow","leong-chung","hannah-cloke","rosalind-cornforth","helen-dacre","deepti-dahiya","sarah-dance","peter-duben","charlie-egan","katherine-egan","xiangbo-feng","ken-rui-fong","richard-forbes","alison-fowler","tom-frame","giacomo-giuliani","deepak-gopalakrishnan","piyali-goswami","lewis-grant","sue-grimmond","steven-hardiman","tom-hill","linda-hirons","robin-hogan","chris-holloway","elias-holm","kieran-hunt","kate-huxtable","martin-jacques-coper","jesse-gilbert","todd-jones","rajsekhar-kandala","richard-keane","jake-keller","andrew-kenny","julia-kukulies","amos-lawless","bryan-lawrence","humphrey-lean","oscar-martinez-alvarado","chris-merchant","john-methven","kaustubh-mittal","cyril-morcrette","hamidreza-mosaffa","indrakshi-mukherjee","mark-muetzelfeldt","ravi-nemani","stuart-newman","nancy-nichols","mehzooz-nizar","chris-oreilly","sambit-panda","florian-pappenberger","celia-petty","fernanda-pino","bob-plant","andreas-prein","christel-prudhomme","patricia-rosnay","shovonlal-roy","karan-ruparell","reinhard-schiemann","jennifer-scott","xiaocen-shen","ted-shepherd","jon-shonk","cameron-southgate-as","thorwald-stein","liz-stephens","alison-stirling","birgit-sutzl","jamie-todd","lorenzo-tomassini","andrew-turner","benoit-vanniere","anne-verhoef","pier-vidale","frederic-vitart","joanne-waller","hilary-weller","thomas-white","amber-winkle","hei-tung-wu"]);
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

  const start = () => {
    run();
    addEmailIcon();
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
