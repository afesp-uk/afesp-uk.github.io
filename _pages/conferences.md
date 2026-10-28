---
layout: page
permalink: /conferences/
title: events
description: Conference contributions, presentations, and other forms of outreach.
nav: true
nav_order: 6
---

<style>
  /* Page title the same size as the section headings, with space before the first section. */
  .post > .post-header .post-title {
    font-size: 2rem;
    line-height: 1.2;
    text-transform: capitalize; /* "Events" in the heading; the top menu keeps "events" */
  }
  .post > .post-header {
    margin-bottom: 2rem;
  }
  .ev {
    --ev-blue: #1565c0;
    --ev-talk: #1565c0;
    --ev-poster: #b26a00;
    --ev-lightning: #7b3fb0;
    --ev-school: #00796b;
    --ev-other: #5f6b7a;
    --ev-line: var(--global-divider-color);
    --ev-card: var(--global-card-bg-color);
    --ev-muted: var(--global-text-color-light);
  }
  html[data-theme="dark"] .ev {
    --ev-blue: #64b5f6;
    --ev-talk: #64b5f6;
    --ev-poster: #f0b35a;
    --ev-lightning: #c39bea;
    --ev-school: #5fd0bf;
    --ev-other: #a9b4c2;
  }
  /* Section headings in blue, matching the projects page. */
  .post article h2 {
    color: #1565c0;
  }
  html[data-theme="dark"] .post article h2 {
    color: #64b5f6;
  }
  .ev h2 {
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
    margin-top: 2.25rem;
  }
  .ev h2 .ev-count {
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.1rem 0.55rem;
    border-radius: 999px;
    border: 1px solid currentColor;
  }
  /* Upcoming events: cards with a large date. */
  .ev ul.ev-upcoming {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 0.9rem;
  }
  .ev-upcoming > li > .ev-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1rem 1.1rem;
    border-radius: 10px;
    border: 1px solid var(--ev-line);
    border-top: 4px solid var(--ev-blue);
    background: var(--ev-card);
    color: var(--global-text-color);
    text-decoration: none;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }
  .ev-upcoming > li > a.ev-card:hover,
  .ev-upcoming > li > a.ev-card:focus-visible {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(21, 101, 192, 0.15);
  }
  /* AFESP's own events stand out from the rest (same green as the AI page). */
  .ev-upcoming > li > .ev-card.ev-afesp {
    border: 2px solid #1f9d55;
    border-top: 6px solid #1f9d55;
    background: linear-gradient(180deg, rgba(31, 157, 85, 0.1), transparent 70%), var(--ev-card);
    box-shadow: 0 6px 18px rgba(31, 157, 85, 0.18);
  }
  .ev-card .ev-tag {
    align-self: flex-start;
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    padding: 0.05rem 0.45rem;
    margin-bottom: 0.35rem;
    border-radius: 999px;
    background: #1f9d55;
    color: #fff;
  }
  .ev-card .ev-when {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--ev-blue);
  }
  .ev-card .ev-name {
    font-weight: 600;
    margin: 0.35rem 0 0.4rem 0;
    line-height: 1.35;
  }
  .ev-card .ev-where {
    margin-top: auto;
    font-size: 0.88rem;
    color: var(--ev-muted);
  }
  .ev-card .ev-desc {
    font-size: 0.88rem;
    line-height: 1.45;
    margin-top: 0.5rem;
  }
  .ev-card .ev-more {
    font-size: 0.85rem;
    margin-top: 0.5rem;
    color: var(--ev-blue);
  }
  /* Contributions grouped by year: each year folds open and closed; the newest year starts open. */
  .ev-year-group {
    margin: 0.35rem 0 0.9rem;
  }
  .ev-year-group > summary {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    padding: 0.35rem 0.25rem;
    font-size: 1.12rem;
    font-weight: 700;
    color: var(--ev-blue);
    cursor: pointer;
    list-style: none;
    border-bottom: 1px solid var(--ev-line);
  }
  .ev-year-group > summary::-webkit-details-marker {
    display: none;
  }
  .ev-year-group > summary::before {
    content: "▸";
    display: inline-block;
    transition: transform 0.2s ease;
  }
  .ev-year-group[open] > summary::before {
    transform: rotate(90deg);
  }
  .ev-year-group > summary .ev-year-count {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.05rem 0.5rem;
    border-radius: 999px;
    border: 1px solid currentColor;
  }
  .ev-year-group > ul.ev-timeline {
    margin-top: 0.75rem;
  }
  /* Filters for contributions. */
  .ev-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin: 0.5rem 0 0 0;
  }
  .ev-filter {
    font: inherit;
    font-size: 0.88rem;
    padding: 0.28rem 0.8rem;
    border-radius: 999px;
    border: 1px solid var(--ev-line);
    background: transparent;
    color: var(--global-text-color);
    cursor: pointer;
  }
  .ev-filter[data-kind]::before {
    content: "";
    display: inline-block;
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 50%;
    margin-right: 0.4rem;
    background: var(--dot);
  }
  .ev-filter[aria-pressed="true"] {
    background: var(--global-text-color);
    color: var(--global-bg-color);
    border-color: var(--global-text-color);
  }
  .ev-filter:focus-visible,
  .ev-card:focus-visible {
    outline: 2px solid var(--ev-blue);
    outline-offset: 2px;
  }
  /* Contributions: a timeline with the date on the left. */
  .ev ul.ev-timeline {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0 0;
    position: relative;
  }
  .ev ul.ev-timeline::before {
    content: "";
    position: absolute;
    left: 5.6rem;
    top: 0.4rem;
    bottom: 0.4rem;
    width: 2px;
    background: var(--ev-line);
  }
  .ev-timeline > li.ev-item {
    position: relative;
    display: grid;
    grid-template-columns: 5rem 1fr;
    gap: 1.4rem;
    padding: 0 0 1.25rem 0;
  }
  .ev-timeline > li.ev-item[hidden] {
    display: none;
  }
  .ev-item::after {
    content: "";
    position: absolute;
    left: calc(5.6rem - 5px);
    top: 0.45rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--kind);
    box-shadow: 0 0 0 3px var(--global-bg-color);
  }
  .ev-item {
    --kind: var(--ev-other);
  }
  .ev-item[data-kind="talk"] { --kind: var(--ev-talk); }
  .ev-item[data-kind="poster"] { --kind: var(--ev-poster); }
  .ev-item[data-kind="lightning"] { --kind: var(--ev-lightning); }
  .ev-item[data-kind="school"] { --kind: var(--ev-school); }
  .ev-date {
    text-align: right;
    line-height: 1.1;
    padding-top: 0.1rem;
  }
  .ev-date .ev-month {
    display: block;
    font-size: 1rem;
    font-weight: 700;
    color: var(--kind);
  }
  .ev-date .ev-year {
    display: block;
    font-size: 0.8rem;
    color: var(--ev-muted);
  }
  .ev-body {
    padding: 0.75rem 1rem;
    border-radius: 10px;
    border: 1px solid var(--ev-line);
    border-left: 4px solid var(--kind);
    background: var(--ev-card);
    min-width: 0;
  }
  .ev-type {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--kind);
    margin-bottom: 0.2rem;
  }
  .ev-title {
    font-weight: 600;
    line-height: 1.35;
  }
  .ev-event {
    font-size: 0.9rem;
    color: var(--ev-muted);
  }
  .ev-authors {
    margin-top: 0.25rem;
  }
  .ev-meta {
    margin-top: 0.3rem;
    font-size: 0.88rem;
    color: var(--ev-muted);
  }
  .ev-extra {
    margin-top: 0.25rem;
    font-size: 0.88rem;
  }
  .ev-empty {
    color: var(--ev-muted);
    font-style: italic;
  }
  @media (max-width: 575.98px) {
    .ev ul.ev-timeline::before {
      left: 0.3rem;
    }
    .ev-timeline > li.ev-item {
      grid-template-columns: 1fr;
      gap: 0.3rem;
      padding-left: 1.4rem;
    }
    .ev-item::after {
      left: calc(0.3rem - 5px);
    }
    .ev-date {
      text-align: left;
    }
    .ev-date .ev-month,
    .ev-date .ev-year {
      display: inline;
      margin-right: 0.3rem;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .ev-upcoming > li > a.ev-card {
      transition: none;
    }
  }
</style>

## Upcoming conferences

<!-- Items whose name starts with "AFESP" are highlighted as AFESP's own events. An item without a link is shown as a plain card. -->

- **AFESP 2026 Conference (2-3 Nov, 2026; Henley Business School, University of Reading):**
- [**Convection-Permitting Climate Modelling Workshop 2027 (1-5 Feb, 2027):**](https://conference.unsw.edu.au/en/CPCM2027)

## Upcoming workshops

- [**Statistics Community of Practice workshop: AI as a research method, and the role of quantitative methods (4 Nov, 2026, 09:30-13:00; Palmer 106, University of Reading, and online):**](https://forms.cloud.microsoft/e/WGvKZecDdF)<br>
  With LLMs, sophisticated statistical analyses no longer need extensive statistics training. Is this a blessing or a curse? Also the role of quantitative methods in the changing landscape of research methods. Coffee from 9:30, discussions 10:00–12:00, lunch provided. Register by 26 October to attend in person, or by 3 November to join online.
- [**NCAS Introduction to Scientific Computing workshop (9-20 Nov, 2026; online and Leeds):**](https://ncas.ac.uk/study-with-us/introduction-to-scientific-computing/)

## Upcoming training courses

- [**NCAS Climate Modelling Summer School (5-17 Sep 2027, Cambridge, UK)**](https://ncas.ac.uk/study-with-us/climate-modelling-summer-school/)
- [**Transferring data from ARCHER2 (7 Oct, 2026, 15:00-16:00; online):**](https://www.archer2.ac.uk/training/courses/261007-archer2-data-transfer-vt/)
- [**STEP-UP ByteSized dRTP, Episode 5: AI-assisted Coding (12 Oct, 2026, 15:00-16:30; online):**](https://step-up.ac.uk/events/bytesized-drtp/)

<div style="height: 2.5rem;"></div>

## Contributions to conferences

- **EMS2026**<br>
  **Spatio-temporal variability of sensible heat fluxes: Large-Aperture Scintillometry observations during urbisphere-Berlin**<br>
  Cameron Southgate-Ash, et al.<br>
  Utrecht, Netherlands | Oral presentation | 6-11 September 2026
- **S2S2D Conference**<br>
  Piyali Goswami<br>
  Reading, UK | Oral presentation | September 2026
- **km-scale Global Modelling Summit 2026**<br>
  Chris Holloway<br>
  Hamburg, Germany | Poster presentation | 20–24 July 2026
- **km-scale Global Modelling Summit 2026**<br>
  **Precipitation Efficiency Across Storm Regimes: A Satellite-Based Evaluation of Cloud-to-Rain Conversion in km-Scale Models**<br>
  Julia Kukulies <br>
  Hamburg, Germany | Oral presentation | 20–24 July 2026
- **km-scale Global Modelling Summit 2026**<br>
  **ALOFT: Aligning organized features in coarse- and high-resolution simulations**<br>
  Mark Muetzelfeldt<br>
  Hamburg, Germany | Poster presentation | 20–24 July 2026
- **Neural Network based Emulation of Subgrid-Scale Turbulence in MONC: Bridging Offline Multi-Task Learning and Online Coupling with Ftorch**<br>
  S. K. Panda, et al.<br>
  ICCS Summer School 2026, Cambridge, UK | Poster presentation | July 2026
- **ParaChute Conference 2026**<br>
  **Precipitation efficiency in the convective gray zone: grid-spacing dependence, observational constraints and storm-type variability**<br>
  Julia Kukulies <br>
  Reading, UK | Oral presentation | 13–16 July 2026
- **ParaChute Conference 2026**<br>
  **Measuring updraft strength from successive radar scans during the WesCon and KASBEX field campaigns**<br>
  Mark Muetzelfeldt, et al.<br>
  Reading, UK | Poster presentation | 13–16 July 2026
- **RMetS Early Career Student Conference**<br>
  Piyali Goswami<br>
  Exeter, UK | Poster presentation (Poster Prize) | 6–8 July 2026
- **Neural Network based emulation of SGS turbulence in MONC: comparing physics-guided multi-task learning against data-driven closure in online-coupled LES**<br>
  S. K. Panda, et al.<br>
  km-scale Global Modelling Summit 2026, Hamburg, Germany | Poster presentation | 2026
- **How skilful are AI-based forecasts of 2023 Indian summer monsoon precipitation?**<br>
  Mehzooz Nizar, Reinhard Schiemann, Andrew G. Turner, Kieran Hunt, Steffen Tietsche<br>
  EGU General Assembly 2026, Vienna, Austria | Oral presentation | 3–8 May 2026<br>
  DOI: [10.5194/egusphere-egu26-7223](https://doi.org/10.5194/egusphere-egu26-7223)
- **AGU Ocean Sciences Meeting**<br>
  Piyali Goswami<br>
  Glasgow, UK | Oral presentation | 22–27 February 2026
- **AFESP Conference**<br>
  Piyali Goswami<br>
  Reading, UK | Poster presentation | 4 November 2025
- **CFMIP-CloudSense Meeting 2025**<br>
  **Using changes in reflectivity over short time periods to estimate updraft strength**<br>
  Mark Muetzelfeldt, et al.<br>
  Exeter, UK | Poster presentation | 7–10 July 2025
- **RMetS Early Career Student Conference**<br>
  Piyali Goswami<br>
  Manchester, UK | Oral presentation | 30 June–2 July 2025
- **Assessing the Skill of Global AI-Model Weather Predictions for the Indian Summer Monsoon 2023**<br>
  Mehzooz Nizar<br>
  RMetS Early Career and Student Conference 2025, Manchester, UK | Poster presentation | 30 June–2 July 2025
  {% comment %}
- [**Strengthening of the East Asian Summer Monsoon in response to local and remote reductions in anthropogenic aerosol**](https://meetingorganizer.copernicus.org/EGU26/EGU26-12557.html)<br>
  Laura Wilcox, Ankit Bhandekar, Feifei Luo, Massimo Bollasina, Tianhui Zhou, Bjørn Samset, Robert Allen, and The RAMIP modelling team (Sharar Ahmadi and others)<br>
  EGU General Assembly 2026, Vienna, Austria & Online | 3–8 May 2026<br>
  DOI: [10.5194/egusphere-egu26-12557](https://doi.org/10.5194/egusphere-egu26-12557)
  {% endcomment %}
- **Physics-guided machine learning for subgrid-scale turbulence**<br>
  S. K. Panda, et al.<br>
  EGU General Assembly 2025, Vienna, Austria | Oral Presentation | 2025<br>
  DOI: [10.5194/egusphere-egu25-13920](https://doi.org/10.5194/egusphere-egu25-13920)
- **Neural surrogates for turbulence closure in atmospheric models**<br>
  S. K. Panda, et al.<br>
  EXCLAIM Symposium 2025, ETH Zurich, Switzerland | Poster presentation | 2025
- **Machine learning approaches to turbulence representation**<br>
  S. K. Panda<br>
  Royal Meteorological Society Early Career Scientists Conference 2024, United Kingdom | Oral presentation | 2024

## Contributions to workshops

- **Ver-AI Workshop 2026**<br>
  Mehzooz Nizar<br>
  Oral presentation | 2026
- **National Marine Heatwave Meeting**<br>
  Piyali Goswami<br>
  NOC Southampton, UK | Lightning talk | 19 May 2026
- **Global-to-regional km-scale hackathon 2026 (hk26)**<br>
  **UK Hackathon 2026** (opening talk; organiser and data lead)<br>
  Mark Muetzelfeldt<br>
  Met Office, Exeter, UK | Oral presentation | 18 May 2026
- **Early Career Cloud Physics Meeting, AOPP**<br>
  **How should we parametrize MCSs?**<br>
  Mark Muetzelfeldt<br>
  University of Oxford, UK | Poster presentation and flash talk | 19 March 2026
- **5th Workshop on Convective Organization (WCO5), ICTP**<br>
  **Measuring updraft strength from successive radar scans during the WesCon and KASBEX field campaigns**<br>
  Mark Muetzelfeldt, et al.<br>
  INPE, São José dos Campos, Brazil | Oral presentation | 9–12 March 2026
- **5th Workshop on Convective Organization (WCO5), ICTP**<br>
  **Targeted probabilistic trigger for the representation of organized deep convection in a global forecasting ensemble**<br>
  Mark Muetzelfeldt, et al.<br>
  INPE, São José dos Campos, Brazil | Poster presentation | 9–12 March 2026
- **INCUS Science Team Meeting**<br>
  **KASBEX (Ka- and S-band Experiment): Implications for INCUS**<br>
  Mark Muetzelfeldt, Thorwald Stein, Chris Holloway, Brian Lo, Rob Thompson, Chris Walden, Graham Marshall<br>
  Oral presentation | 6 November 2025
- **National Marine Heatwave Meeting**<br>
  Piyali Goswami<br>
  Reading, UK | Lightning talk | 22 May 2025
- **WCRP Global km-scale Hackathon 2025, UK node**<br>
  **UK node data access** (opening talk; UK data processing lead)<br>
  Mark Muetzelfeldt<br>
  St Hugh's College, Oxford, UK | Oral presentation | 12–16 May 2025

## Other presentations and outreach activities

- **Advancing the Frontiers of Earth System Prediction**<br>
  Mark Muetzelfeldt<br>
  Institute of Climate Change (IPI) Seminar Series, Universiti Kebangsaan Malaysia | Invited seminar | November 2026
- **Data and AI in Urban Climate Science**<br>
  Sharar Ahmadi<br>
  NCAS Staff Meeting 2026, Science Panel: AI and Data, Staverton, UK | Invited speaker | 30 June–2 July 2026
- **Applying delta-Z analysis to the WesCon field campaign**<br>
  Mark Muetzelfeldt, Brian Lo<br>
  INCUS Calibration/Validation meeting, Online | Invited talk | 9 February 2026
- **Top AI Agent Programming Tools**<br>
  Sharar Ahmadi<br>
  CMS Away Day, Penta Hotel, Reading, UK | Presentation | Jun 2025
- **The effects of Anvil clouds on climate, and their representation in global km-scale models**<br>
  Chris Holloway<br>
  Met Office, Exeter, UK | Invited seminar | 2 December 2025
- **NCAS Climate Modelling Summer School**<br>
  Piyali Goswami<br>
  Cambridge, UK | Summer school | 7–22 September 2025
- **UPFLO: Improving understanding and modelling of convective UPdraFts and anvil cLOuds**<br>
  Mark Muetzelfeldt<br>
  Colorado State University, Fort Collins, USA | Invited talk | 2 December 2024

<script>
  (() => {
    const article = document.querySelector(".post article");
    if (!article) return;
    article.classList.add("ev");
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const short = (m) => m.slice(0, 3);
    const kindOf = (type) => {
      const t = type.toLowerCase();
      if (t.includes("poster")) return "poster";
      if (t.includes("lightning")) return "lightning";
      if (t.includes("school") || t.includes("training") || t.includes("course")) return "school";
      if (t.includes("oral") || t.includes("talk") || t.includes("seminar") || t.includes("speaker") || t.includes("presentation")) return "talk";
      return "other";
    };
    // Split a list item into groups of nodes separated by <br>.
    const groupsOf = (li) => {
      const groups = [[]];
      const walk = (nodes) =>
        nodes.forEach((n) => {
          if (n.nodeName === "BR") groups.push([]);
          else if (n.nodeName === "P") {
            walk(Array.from(n.childNodes));
            groups.push([]);
          } else groups[groups.length - 1].push(n);
        });
      walk(Array.from(li.childNodes));
      return groups.filter((g) => g.some((n) => n.textContent.trim()));
    };
    const textOf = (g) => g.map((n) => n.textContent).join("").trim();
    const isBold = (g) => {
      const real = g.filter((n) => n.nodeType !== 3 || n.textContent.trim());
      return real.length === 1 && real[0].nodeName === "STRONG";
    };
    const wrap = (cls, nodes, tag = "div") => {
      const el = document.createElement(tag);
      el.className = cls;
      nodes.forEach((n) => el.appendChild(n));
      return el;
    };
    const dateParts = (text) => {
      const year = (text.match(/(20\d\d)/g) || []).pop() || "";
      const month = months.find((m) => new RegExp(m.slice(0, 3), "i").test(text));
      return { month: month ? short(month) : "", year };
    };

    // Upcoming sections: turn each linked item into a card.
    const timelines = [];
    article.querySelectorAll("h2").forEach((h2) => {
      const list = h2.nextElementSibling;
      if (!list || list.tagName !== "UL") return;
      const upcoming = /^upcoming/i.test(h2.textContent.trim());
      const items = Array.from(list.children);
      const count = document.createElement("span");
      count.className = "ev-count";
      count.textContent = items.length;
      h2.appendChild(count);
      if (upcoming) {
        list.classList.add("ev-upcoming");
        items.forEach((li) => {
          // Linked items become link cards; items with only bold text become plain cards.
          let a = li.querySelector("a");
          const src = a || li.querySelector("strong");
          if (!src) return;
          const raw = src.textContent.trim().replace(/:$/, "");
          // Any text written under the item (after a <br>) becomes the card's description.
          const rest = li.cloneNode(true);
          rest.querySelector(a ? "a" : "strong").remove();
          const desc = rest.textContent.trim();
          if (!a) a = document.createElement("div");
          li.innerHTML = "";
          li.appendChild(a);
          const m = raw.match(/^(.*)\(([^()]*)\)\s*$/);
          const name = m ? m[1].trim() : raw;
          const inside = m ? m[2].split(/[;]/).map((x) => x.trim()) : [];
          let when = inside[0] || "";
          let where = inside.slice(1).join(", ");
          // Training-style "(5-17 Sep 2027, Cambridge, UK)": date first, place after the year.
          const y = when.match(/^(.*?\b20\d\d)\s*,\s*(.+)$/);
          if (y && !/^\d{1,2}:\d\d/.test(y[2])) {
            when = y[1];
            where = [y[2], where].filter(Boolean).join(", ");
          }
          a.classList.add("ev-card");
          a.innerHTML = "";
          if (/^AFESP\b/.test(name)) {
            a.classList.add("ev-afesp");
            const tag = document.createElement("span");
            tag.className = "ev-tag";
            tag.textContent = "AFESP";
            a.append(tag);
          }
          const w = document.createElement("span");
          w.className = "ev-when";
          w.textContent = when.replace(/,\s*(\d{1,2}:\d\d)/, " · $1");
          const n = document.createElement("span");
          n.className = "ev-name";
          n.textContent = name;
          a.append(w, n);
          if (where) {
            const p = document.createElement("span");
            p.className = "ev-where";
            p.textContent = where.charAt(0).toUpperCase() + where.slice(1);
            a.append(p);
          }
          if (desc) {
            const d = document.createElement("span");
            d.className = "ev-desc";
            d.textContent = desc;
            a.append(d);
          }
          if (a.tagName === "A") {
            const more = document.createElement("span");
            more.className = "ev-more";
            more.textContent = "Details and registration";
            a.append(more);
          }
        });
        return;
      }
      // Contributions: timeline entries.
      list.classList.add("ev-timeline");
      items.forEach((li) => {
        li.dataset.year = ((li.textContent.match(/(20\d\d)/g) || []).pop() || "");
        const groups = groupsOf(li);
        let metaIdx = -1;
        groups.forEach((g, i) => {
          if (textOf(g).includes("|")) metaIdx = i;
        });
        if (metaIdx === -1) return;
        const parts = textOf(groups[metaIdx]).split("|").map((x) => x.trim());
        const [venue, type, date] = parts.length >= 3 ? [parts[0], parts[1], parts.slice(2).join(" ")] : ["", parts[0], parts[1] || ""];
        const kind = kindOf(type);
        const bolds = groups.slice(0, metaIdx).filter(isBold);
        const plain = groups.slice(0, metaIdx).filter((g) => !isBold(g));
        const extra = groups.slice(metaIdx + 1);
        li.classList.add("ev-item");
        li.dataset.kind = kind;
        const d = dateParts(date);
        if (d.year) li.dataset.year = d.year;
        const dateEl = document.createElement("div");
        dateEl.className = "ev-date";
        dateEl.innerHTML = `<span class="ev-month"></span><span class="ev-year"></span>`;
        dateEl.querySelector(".ev-month").textContent = d.month || d.year;
        dateEl.querySelector(".ev-year").textContent = d.month ? d.year : "";
        const body = document.createElement("div");
        body.className = "ev-body";
        const typeEl = document.createElement("span");
        typeEl.className = "ev-type";
        typeEl.textContent = type;
        body.appendChild(typeEl);
        if (bolds.length >= 2) {
          body.appendChild(wrap("ev-title", bolds[1]));
          body.appendChild(wrap("ev-event", bolds[0]));
        } else if (bolds.length === 1) {
          body.appendChild(wrap("ev-title", bolds[0]));
        }
        plain.forEach((g) => body.appendChild(wrap("ev-authors", g)));
        const meta = document.createElement("div");
        meta.className = "ev-meta";
        meta.textContent = [venue, date].filter(Boolean).join(" — ");
        body.appendChild(meta);
        extra.forEach((g) => body.appendChild(wrap("ev-extra", g)));
        li.innerHTML = "";
        li.append(dateEl, body);
      });

      // Group the entries by year, newest year first; only the newest year starts open.
      const byYear = new Map();
      items.forEach((li) => {
        const y = li.dataset.year || "Other";
        if (!byYear.has(y)) byYear.set(y, []);
        byYear.get(y).push(li);
      });
      const years = Array.from(byYear.keys()).sort((a, b) => (a === "Other") - (b === "Other") || Number(b) - Number(a));
      const box = document.createElement("div");
      box.className = "ev-years";
      years.forEach((y, i) => {
        const det = document.createElement("details");
        det.className = "ev-year-group";
        det.open = i === 0;
        const sum = document.createElement("summary");
        sum.innerHTML = `<span class="ev-year-label"></span><span class="ev-year-count"></span>`;
        sum.querySelector(".ev-year-label").textContent = y;
        sum.querySelector(".ev-year-count").textContent = byYear.get(y).length;
        const ul = document.createElement("ul");
        ul.className = "ev-timeline";
        byYear.get(y).forEach((li) => ul.appendChild(li));
        det.append(sum, ul);
        box.appendChild(det);
      });
      list.replaceWith(box);
      timelines.push({ h2, box });
    });

    // Filter chips above the first contributions section.
    if (timelines.length) {
      const anchor = timelines[0].h2;
      const kinds = [
        ["", "All"],
        ["talk", "Talks", "--ev-talk"],
        ["poster", "Posters", "--ev-poster"],
        ["lightning", "Lightning talks", "--ev-lightning"],
        ["school", "Schools and training", "--ev-school"],
      ].filter(([k]) => !k || article.querySelector(`.ev-item[data-kind="${k}"]`));
      const bar = document.createElement("div");
      bar.className = "ev-filters";
      bar.setAttribute("role", "group");
      bar.setAttribute("aria-label", "Show only");
      kinds.forEach(([k, label, color]) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "ev-filter";
        b.textContent = label;
        b.setAttribute("aria-pressed", k ? "false" : "true");
        if (k) {
          b.dataset.kind = k;
          b.style.setProperty("--dot", `var(${color})`);
        }
        b.addEventListener("click", () => {
          bar.querySelectorAll(".ev-filter").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
          timelines.forEach(({ h2, box }) => {
            let shown = 0;
            box.querySelectorAll(".ev-year-group").forEach((det) => {
              let n = 0;
              det.querySelectorAll("ul.ev-timeline > li").forEach((li) => {
                const match = !k || li.dataset.kind === k;
                li.hidden = !match;
                if (match) n += 1;
              });
              det.hidden = n === 0;
              det.querySelector(".ev-year-count").textContent = n;
              shown += n;
            });
            const c = h2.querySelector(".ev-count");
            if (c) c.textContent = shown;
          });
        });
        bar.appendChild(b);
      });
      anchor.after(bar);
    }
  })();
</script>

<div class="social">
  <div class="contact-note">
    <a href="mailto:afesp-rse@reading.ac.uk">afesp-rse@reading.ac.uk</a>,
    <a href="mailto:s.ahmadi@reading.ac.uk">s.ahmadi@reading.ac.uk</a>,
    <a href="mailto:j.kukulies@reading.ac.uk">j.kukulies@reading.ac.uk</a>,
    <a href="mailto:mark.muetzelfeldt@reading.ac.uk">mark.muetzelfeldt@reading.ac.uk</a>,
    <a href="mailto:c.egan@reading.ac.uk">c.egan@reading.ac.uk</a>
  </div>
</div>
