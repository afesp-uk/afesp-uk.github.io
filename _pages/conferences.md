---
layout: page
permalink: /conferences/
title: events
description: Conference contributions, presentations, and other forms of outreach.
nav: true
nav_order: 4
---

## Upcoming conferences

- [**Convection-Permitting Climate Modelling Workshop 2027 (1-5 Feb, 2027):**](https://conference.unsw.edu.au/en/CPCM2027)

## Upcoming workshops

- [**NCAS Introduction to Scientific Computing workshop (9-20 Nov, 2026; online and Leeds):**](https://ncas.ac.uk/study-with-us/introduction-to-scientific-computing/)

## Upcoming training courses

- [**NCAS Climate Modelling Summer School (5-17 Sep 2027, Cambridge, UK)**](https://ncas.ac.uk/study-with-us/climate-modelling-summer-school/)
- [**Transferring data from ARCHER2 (7 Oct, 2026, 15:00-16:00; online):**](https://www.archer2.ac.uk/training/courses/261007-archer2-data-transfer-vt/)
- [**STEP-UP ByteSized dRTP, Episode 5: AI-assisted Coding (12 Oct, 2026, 15:00-16:30; online):**](https://step-up.ac.uk/events/bytesized-drtp/)

## Contributions to conferences

- [**Strengthening of the East Asian Summer Monsoon in response to local and remote reductions in anthropogenic aerosol**](https://meetingorganizer.copernicus.org/EGU26/EGU26-12557.html)<br>
  Laura Wilcox, Ankit Bhandekar, Feifei Luo, Massimo Bollasina, Tianhui Zhou, Bjørn Samset, Robert Allen, and The RAMIP modelling team (Sharar Ahmadi and others)<br>
  EGU General Assembly 2026, Vienna, Austria & Online | 3–8 May 2026<br>
  DOI: [10.5194/egusphere-egu26-12557](https://doi.org/10.5194/egusphere-egu26-12557)
- **Neural Network based Emulation of Subgrid-Scale Turbulence in MONC: Bridging Offline Multi-Task Learning and Online Coupling with Ftorch**<br>
  S. K. Panda, et al.<br>
  ICCS Summer School 2026, Cambridge, UK | Poster presentation | 2026
- **Neural Network based emulation of SGS turbulence in MONC: comparing physics-guided multi-task learning against data-driven closure in online-coupled LES**<br>
  S. K. Panda, et al.<br>
  km-scale Global Modelling Summit 2026, Hamburg, Germany | Poster presentation | 2026
- **Physics-guided machine learning for subgrid-scale turbulence**<br>
  S. K. Panda, et al.<br>
  EGU General Assembly 2025, Vienna, Austria | Oral presentation | 2025<br>
  DOI: [10.5194/egusphere-egu25-13920](https://doi.org/10.5194/egusphere-egu25-13920)

## Contributions to workshops

## Contributions to seminars and talks

## Other presentations and outreach activities

<style>
  .afesp-member {
    color: #1f9d55;
    font-weight: 600;
  }
</style>

<script>
  // Show the names of AFESP members (listed in _data/afesp_members.yml) in green on this page.
  document.addEventListener("DOMContentLoaded", () => {
    const names = {{ site.data.afesp_members | jsonify }};
    const root = document.querySelector(".post article") || document.querySelector(".post");
    if (!root || !Array.isArray(names) || names.length === 0) {
      return;
    }
    const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const patterns = names
      .map((fullName) => fullName.trim().split(/\s+/))
      .filter((parts) => parts.length >= 2)
      .map((parts) => {
        const first = escapeRegex(parts[0]);
        const surname = parts.slice(1).map(escapeRegex).join("\\s+");
        const initial = escapeRegex(parts[0].charAt(0));
        // Either: first name, an optional middle name or initial, then the surname;
        // or: dotted initials then the surname (for example "S. K. Panda").
        return `${first}(?:\\s+[A-Z][A-Za-z'’.\\-]*)?\\s+${surname}|${initial}\\.\\s*(?:[A-Z]\\.\\s*)?${surname}`;
      });
    const memberRegex = new RegExp(`(?<![A-Za-z])(?:${patterns.join("|")})(?![A-Za-z])`, "g");
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => (node.parentElement && node.parentElement.closest("script, style, .afesp-member") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
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
        const span = document.createElement("span");
        span.className = "afesp-member";
        span.textContent = match[0];
        fragment.appendChild(span);
        last = match.index + match[0].length;
        match = memberRegex.exec(text);
      }
      fragment.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(fragment, node);
    });
  });
</script>
