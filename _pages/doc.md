---
layout: page
title: computational support
permalink: /doc/
nav: true
nav_order: 8
dropdown: false # the menu button now opens this page; set to true to restore the drop-down menu in the top bar
children:
  - title: ANTS
    permalink: /link-and-doc/ancil/
  - title: Archer2
    permalink: /link-and-doc/archer2/
  - title: CDO
    permalink: /link-and-doc/cdo/
  - title: CEDA
    permalink: /link-and-doc/ceda/
  # - title: CF Compliance Checker # hidden for now; uncomment here and in support_pages below to show it again
  #   permalink: /link-and-doc/cf-checker/
  - title: CF Conventions
    permalink: /link-and-doc/cf-conventions/
  - title: cfdm
    permalink: /link-and-doc/cfdm/
  - title: cf-plot
    permalink: /link-and-doc/cf-plot/
  - title: cf-python
    permalink: /link-and-doc/cf-python/
  - title: cfunits
    permalink: /link-and-doc/cfunits/
  - title: cf-view
    permalink: /link-and-doc/cf-view/
  - title: Cirrus
    permalink: /link-and-doc/cirrus/
  - title: Copernicus
    permalink: /link-and-doc/copernicus/
  - title: ECMWF
    permalink: /link-and-doc/ecmwf/
  - title: Iris
    permalink: /link-and-doc/iris/
  - title: Jasmin
    permalink: /link-and-doc/jasmin/
  - title: LFRic
    permalink: /link-and-doc/lfric/
  - title: MOSRS
    permalink: /link-and-doc/mosrs/
  - title: NCO Tools
    permalink: /link-and-doc/nco/
  - title: RACC2
    permalink: /link-and-doc/racc2/
  - title: SAFE
    permalink: /link-and-doc/safe/
  - title: xancil
    permalink: /link-and-doc/xancil/
  - title: xconv
    permalink: /link-and-doc/xconv/
  - title: xconv2
    permalink: /link-and-doc/xconv2/
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,400..700&display=swap" rel="stylesheet">

<style>
  .sp {
    --sp-compute: #2f5d9e;
    --sp-data: #1d7a6e;
    --sp-models: #a3620a;
    --sp-tools: #7b4a91;
    --sp-muted: var(--global-text-color-light);
    --sp-line: var(--global-divider-color);
    --sp-surface: var(--global-card-bg-color);
    margin-top: 0.5rem;
  }
  html[data-theme="dark"] .sp {
    --sp-compute: #8fb3ec;
    --sp-data: #6fcfbe;
    --sp-models: #f0b860;
    --sp-tools: #c9a2dd;
  }
  .sp-intro {
    font-size: 1.05rem;
    max-width: 62ch;
    margin: 0 0 1.5rem 0;
  }
  .sp-controls {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 1rem;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  .sp-search {
    flex: 1 1 260px;
    max-width: 420px;
    font: inherit;
    padding: 0.55rem 0.85rem;
    border: 1px solid var(--sp-line);
    border-radius: 6px;
    background: var(--global-bg-color);
    color: var(--global-text-color);
  }
  .sp-search:focus-visible,
  .sp-chip:focus-visible,
  .sp a:focus-visible,
  .sp summary:focus-visible {
    outline: 2px solid var(--global-theme-color);
    outline-offset: 2px;
  }
  .sp-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }
  .sp-chip {
    font: inherit;
    font-size: 0.9rem;
    padding: 0.3rem 0.8rem;
    border-radius: 999px;
    border: 1px solid var(--sp-line);
    background: transparent;
    color: var(--global-text-color);
    cursor: pointer;
  }
  .sp-chip[data-kind]::before {
    content: "";
    display: inline-block;
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 50%;
    margin-right: 0.4rem;
    background: var(--chip-color);
    vertical-align: 0.05rem;
  }
  .sp-chip[aria-pressed="true"] {
    border-color: var(--global-text-color);
    background: var(--global-text-color);
    color: var(--global-bg-color);
  }
  .sp-count {
    font-size: 0.9rem;
    color: var(--sp-muted);
    margin: 0 0 1.25rem 0;
  }
  .sp-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    grid-auto-flow: dense;
    gap: 1rem;
  }
  .sp-entry {
    --kind: var(--sp-tools);
    position: relative;
    padding: 1rem 1.25rem 1.1rem 1.35rem;
    border: 1px solid var(--sp-line);
    border-left: 4px solid var(--kind);
    border-radius: 0 8px 8px 0;
    background: var(--sp-surface);
    min-width: 0;
  }
  .sp-entry[data-kind="compute"] { --kind: var(--sp-compute); }
  .sp-entry[data-kind="data"] { --kind: var(--sp-data); }
  .sp-entry[data-kind="models"] { --kind: var(--sp-models); }
  .sp-entry.sp-wide { grid-column: 1 / -1; }
  .sp-entry[hidden] { display: none; }
  .sp-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 0.75rem;
  }
  .sp .sp-name {
    font-family: "Archivo", var(--bs-body-font-family, sans-serif);
    font-stretch: 115%;
    font-weight: 650;
    font-size: 1.45rem;
    letter-spacing: -0.01em;
    line-height: 1.15;
    margin: 0;
    color: var(--global-text-color);
  }
  .sp-kind {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--kind);
    white-space: nowrap;
  }
  .sp-desc {
    margin: 0.35rem 0 0.75rem 0;
    color: var(--sp-muted);
    font-size: 0.95rem;
    line-height: 1.45;
  }
  .sp-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .sp-links > ul > li {
    padding: 0.35rem 0;
    border-top: 1px solid var(--sp-line);
    line-height: 1.35;
  }
  .sp-links > ul > li:first-child { border-top: 0; padding-top: 0; }
  .sp-links a { font-weight: 500; }
  .sp-host {
    display: block;
    font-size: 0.78rem;
    color: var(--sp-muted);
  }
  .sp-links p { margin: 0; }
  .sp-entry.sp-empty .sp-links,
  .sp-entry.sp-empty .sp-links p { color: var(--sp-muted); font-style: italic; font-size: 0.92rem; }
  /* Jasmin topic groups */
  .sp-links .jasmin-section {
    border-top: 1px solid var(--sp-line);
    padding: 0.45rem 0;
  }
  .sp-groups {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    column-gap: 2rem;
    align-items: start;
  }
  .sp-links .jasmin-section > summary {
    cursor: pointer;
    font-weight: 600;
  }
  .sp-links .jasmin-section > summary a { font-weight: 600; }
  .sp-links .jasmin-section > ul {
    margin: 0.4rem 0 0.2rem 1.1rem;
    font-size: 0.92rem;
  }
  .sp-links .jasmin-section > ul > li { padding: 0.15rem 0; }
  .sp-none {
    padding: 2rem 0;
    color: var(--sp-muted);
  }
  @media (max-width: 575.98px) {
    .sp-grid { grid-template-columns: 1fr; }
    .sp-groups { grid-template-columns: 1fr; }
  }
</style>

{% comment %}
Each entry: name | sub-page permalink | kind (compute, data, models or tools) | one-line description | wide (optional).
The links shown in each entry come from that sub-page (_pages/<name>.md). Keep entries in alphabetical order.
To hide an entry, delete its line here and comment it out in the children list above.
{% endcomment %}
{% capture support_list %}
ANTS|/link-and-doc/ancil/|tools|Met Office documentation for generating ancillary files for its models.
Archer2|/link-and-doc/archer2/|compute|The UK national supercomputing service, run by EPCC.
CDO|/link-and-doc/cdo/|tools|Climate Data Operators: command-line tools for processing climate and forecast model data.
CEDA|/link-and-doc/ceda/|data|The UK Centre for Environmental Data Analysis, which archives atmospheric and Earth observation data.
CF Conventions|/link-and-doc/cf-conventions/|tools|The Climate and Forecast metadata conventions for describing data in netCDF files.
cfdm|/link-and-doc/cfdm/|tools|A Python reference implementation of the CF data model.
cf-plot|/link-and-doc/cf-plot/|tools|Python plotting for CF-compliant data.
cf-python|/link-and-doc/cf-python/|tools|A Python library for reading, analysing and writing CF data.
cfunits|/link-and-doc/cfunits/|tools|Python units handling for CF data, built on UDUNITS-2.
cf-view|/link-and-doc/cf-view/|tools|A graphical viewer for CF data, built on cf-plot.
Cirrus|/link-and-doc/cirrus/|compute|A UK national high-performance computing service, run by EPCC.
Copernicus|/link-and-doc/copernicus/|data|The EU Earth observation programme, including the Climate Data Store.
ECMWF|/link-and-doc/ecmwf/|data|The European Centre for Medium-Range Weather Forecasts: forecasts, reanalyses and data services.
Iris|/link-and-doc/iris/|tools|A Python library from the Met Office for analysing and visualising Earth science data.
Jasmin|/link-and-doc/jasmin/|compute|The UK data analysis platform for environmental science. Open a topic to see its guides.|wide
LFRic|/link-and-doc/lfric/|models|The Met Office's next-generation modelling infrastructure.
MOSRS|/link-and-doc/mosrs/|models|The Met Office Science Repository Service, which hosts the code and documentation for the Unified Model, LFRic and related software.
NCO Tools|/link-and-doc/nco/|tools|netCDF Operators: command-line tools for manipulating netCDF files.
RACC2|/link-and-doc/racc2/|compute|The University of Reading Academic Computing Cluster.
SAFE|/link-and-doc/safe/|compute|EPCC's portal for ARCHER2 accounts, projects and usage.
xancil|/link-and-doc/xancil/|tools|Creates ancillary files for the Unified Model.
xconv|/link-and-doc/xconv/|tools|Views and converts UM and netCDF files.
xconv2|/link-and-doc/xconv2/|tools|The next version of xconv.
{% endcapture %}
{% assign support_rows = support_list | strip | newline_to_br | split: "<br />" %}

<div class="sp">
<p class="sp-intro">Guides and documentation for the computers, data services, models and tools that AFESP researchers use.</p>
<div class="sp-controls">
<input class="sp-search" type="search" placeholder="Search, for example Slurm or netCDF" aria-label="Search computational support">
<div class="sp-chips" role="group" aria-label="Show only">
<button type="button" class="sp-chip" aria-pressed="true">All</button>
<button type="button" class="sp-chip" data-kind="compute" aria-pressed="false" style="--chip-color: var(--sp-compute)">Computing</button>
<button type="button" class="sp-chip" data-kind="data" aria-pressed="false" style="--chip-color: var(--sp-data)">Data services</button>
<button type="button" class="sp-chip" data-kind="models" aria-pressed="false" style="--chip-color: var(--sp-models)">Models</button>
<button type="button" class="sp-chip" data-kind="tools" aria-pressed="false" style="--chip-color: var(--sp-tools)">Tools</button>
</div>
</div>
<p class="sp-count" aria-live="polite"></p>
<div class="sp-grid">
{% for row in support_rows %}{% assign parts = row | strip | split: "|" %}{% if parts.size >= 4 %}{% assign support_page = site.pages | where: "permalink", parts[1] | first %}{% case parts[2] %}{% when "compute" %}{% assign kind_label = "Computing" %}{% when "data" %}{% assign kind_label = "Data service" %}{% when "models" %}{% assign kind_label = "Model" %}{% else %}{% assign kind_label = "Tool" %}{% endcase %}
<article class="sp-entry{% if parts[4] == 'wide' %} sp-wide{% endif %}" data-kind="{{ parts[2] }}" data-name="{{ parts[0] }}" id="{{ parts[0] | slugify }}">
<div class="sp-head"><h2 class="sp-name">{{ parts[0] }}</h2><span class="sp-kind">{{ kind_label }}</span></div>
<p class="sp-desc">{{ parts[3] }}</p>
<div class="sp-links">
{{ support_page.content | markdownify }}
</div>
</article>
{% endif %}{% endfor %}
</div>
<p class="sp-none" hidden>Nothing matches that search. Try a shorter word, or choose All.</p>
</div>

<script>
  (() => {
    const root = document.querySelector(".sp");
    if (!root) return;
    const entries = Array.from(root.querySelectorAll(".sp-entry"));
    const search = root.querySelector(".sp-search");
    const chips = Array.from(root.querySelectorAll(".sp-chip"));
    const count = root.querySelector(".sp-count");
    const none = root.querySelector(".sp-none");
    let kind = "";

    entries.forEach((entry) => {
      const links = entry.querySelector(".sp-links");
      if (!links.querySelector("a")) entry.classList.add("sp-empty");
      // Tidy repeated site names from link text.
      links.querySelectorAll("a").forEach((a) => {
        a.textContent = a.textContent.replace(/\s+[-–]\s+(JASMIN Help Site|Academic Computing Team)$/, "");
        if (/^https?:/.test(a.getAttribute("href") || "")) {
          a.target = "_blank";
          a.rel = "noopener";
        }
      });
      // Drop a label that only repeats its link, for example "Slurm queues: Slurm queues".
      links.querySelectorAll("li, summary").forEach((item) => {
        const a = item.querySelector(":scope > a");
        const label = a && a.previousSibling;
        if (label && label.nodeType === 3) {
          const text = label.nodeValue.replace(/:\s*$/, "").trim().toLowerCase();
          if (text && text === a.textContent.trim().toLowerCase()) label.nodeValue = "";
        }
      });
      // Top-level links: show "Documentation" instead of a bare address, and the site it opens.
      links.querySelectorAll(":scope > ul > li").forEach((li) => {
        const a = li.querySelector(":scope > a");
        if (!a) return;
        if (/^https?:\/\//.test(a.textContent.trim())) {
          a.textContent = "Documentation";
          li.childNodes.forEach((node) => {
            if (node.nodeType === 3 && /:\s*$/.test(node.nodeValue)) node.nodeValue = "";
          });
        }
        try {
          const host = document.createElement("span");
          host.className = "sp-host";
          host.textContent = new URL(a.href).hostname.replace(/^www\./, "");
          li.appendChild(host);
        } catch (e) {}
      });
      // Jasmin topic groups side by side.
      const groups = links.querySelectorAll(":scope > details");
      if (groups.length) {
        const wrap = document.createElement("div");
        wrap.className = "sp-groups";
        groups[0].before(wrap);
        groups.forEach((g) => wrap.appendChild(g));
      }
      entry.dataset.text = entry.textContent.toLowerCase();
    });

    const update = () => {
      const q = search.value.trim().toLowerCase();
      let shown = 0;
      entries.forEach((entry) => {
        const match = (!kind || entry.dataset.kind === kind) && (!q || entry.dataset.text.includes(q));
        entry.hidden = !match;
        if (match) shown += 1;
        entry.querySelectorAll(".sp-groups > details").forEach((d) => {
          if (q) d.open = d.textContent.toLowerCase().includes(q) && !entry.dataset.name.toLowerCase().includes(q);
          else if (d.dataset.touched !== "user") d.open = false;
        });
      });
      count.textContent = shown === entries.length ? `${entries.length} resources` : `${shown} of ${entries.length} resources`;
      none.hidden = shown !== 0;
    };
    search.addEventListener("input", update);
    chips.forEach((chip) =>
      chip.addEventListener("click", () => {
        kind = chip.dataset.kind || "";
        chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
        update();
      }),
    );
    update();
  })();
</script>

<div class="social">
  <div class="contact-note">
    <a href="mailto:s.ahmadi@reading.ac.uk">s.ahmadi@reading.ac.uk</a>
  </div>
</div>
