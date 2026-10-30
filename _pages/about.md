---
layout: about
title: home
permalink: /
subtitle: "Advancing the Frontiers of Earth System Prediction."

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # news list hidden on the main page; set to true to show it again
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false # latest posts hidden on the main page; set to true to show them again
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<style>
  /* The main page shows the full-width logo below, so skip the small header logo here. */
  .post .post-header {
    background: none !important;
    min-height: 0 !important;
    padding-right: 0 !important;
  }
  .home {
    --h-blue: #1565c0;
    --h-sky: #4fa3e0;
    --h-teal: #00897b;
    --h-amber: #e09a1a;
    --h-line: var(--global-divider-color);
    --h-card: var(--global-card-bg-color);
    --h-muted: var(--global-text-color-light);
  }
  html[data-theme="dark"] .home {
    --h-blue: #64b5f6;
    --h-sky: #81c7f5;
    --h-teal: #4fd1bf;
    --h-amber: #f3be5e;
  }
  .home-logo {
    display: block;
    width: 100%;
    margin: 0 auto 1.75rem auto;
    border-radius: 10px;
  }
  .home-lead {
    font-size: 1.12rem;
    line-height: 1.65;
    margin: 0 0 2.25rem 0;
  }
  .home h2.home-h {
    font-size: 1.5rem;
    color: var(--h-blue);
    margin: 0 0 0.9rem 0;
  }
  /* The predictability horizon: the programme's goal drawn as a forecast-range scale. */
  .horizon {
    padding: 1.25rem 1.35rem 1.1rem 1.35rem;
    border-radius: 14px;
    border: 1px solid var(--h-line);
    background: var(--h-card);
    margin-bottom: 2.25rem;
  }
  .horizon-title {
    font-weight: 700;
    font-size: 1.1rem;
    margin: 0 0 0.2rem 0;
  }
  .horizon-sub {
    color: var(--h-muted);
    font-size: 0.92rem;
    margin: 0 0 1.4rem 0;
  }
  .horizon-track {
    position: relative;
    height: 18px;
    border-radius: 999px;
    background: repeating-linear-gradient(90deg, transparent 0 calc(100% / 30 - 1px), var(--h-line) calc(100% / 30 - 1px) calc(100% / 30));
    border: 1px solid var(--h-line);
    overflow: hidden;
  }
  .horizon-fill {
    position: absolute;
    inset: 0 auto 0 0;
    width: 0;
    border-radius: 999px;
  }
  .horizon-fill.now {
    background: linear-gradient(90deg, var(--h-blue), var(--h-sky));
    transition: width 1.2s cubic-bezier(0.2, 0.7, 0.2, 1);
  }
  .horizon-fill.goal {
    background: repeating-linear-gradient(135deg, rgba(0, 137, 123, 0.35) 0 8px, rgba(0, 137, 123, 0.15) 8px 16px);
    transition: width 1.6s cubic-bezier(0.2, 0.7, 0.2, 1) 0.5s;
  }
  .horizon.go .horizon-fill.now {
    width: calc(14 / 30 * 100%);
  }
  .horizon.go .horizon-fill.goal {
    width: calc(28 / 30 * 100%);
  }
  .horizon-marks {
    position: relative;
    height: 3.2rem;
    margin-top: 0.4rem;
    font-size: 0.85rem;
  }
  .horizon-mark {
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    text-align: center;
    white-space: nowrap;
  }
  .horizon-mark b {
    display: block;
    font-size: 1rem;
  }
  .horizon-mark.now b {
    color: var(--h-blue);
  }
  .horizon-mark.goal b {
    color: var(--h-teal);
  }
  .horizon-mark span {
    color: var(--h-muted);
  }
  .horizon-axis {
    position: relative;
    height: 1.1rem;
    font-size: 0.75rem;
    color: var(--h-muted);
    margin-top: 0.25rem;
  }
  .horizon-axis span {
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    white-space: nowrap;
  }
  .horizon-axis span:first-child {
    transform: none;
  }
  /* Programme in numbers. */
  .stats {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.8rem;
    margin-bottom: 2.25rem;
  }
  .stat {
    padding: 0.95rem 1rem;
    border-radius: 12px;
    border: 1px solid var(--h-line);
    background: var(--h-card);
  }
  .stat .n {
    display: block;
    font-size: 2.1rem;
    font-weight: 800;
    line-height: 1.05;
    color: var(--c, var(--h-blue));
    font-variant-numeric: tabular-nums;
  }
  .stat .l {
    display: block;
    margin-top: 0.3rem;
    font-size: 0.9rem;
    color: var(--h-muted);
  }
  /* Explore the site. */
  /* Highlights: compact cards, all shown here; "Read more" opens the full text in place. */
  .hl-home {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 0.9rem;
    align-items: start;
  }
  .hl-card {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    border: 1px solid var(--h-line);
    border-top: 4px solid var(--h-amber);
    background: var(--h-card);
    overflow: hidden;
    box-shadow: 0 3px 12px rgba(20, 50, 90, 0.06);
    scroll-margin-top: 5rem;
  }
  .hl-card-fig {
    display: block;
    background: #fff;
    border-bottom: 1px solid var(--h-line);
  }
  .hl-card-fig img {
    display: block;
    width: 100%;
    height: 130px;
    object-fit: contain;
    padding: 0.4rem;
  }
  .hl-card-body {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.7rem 0.85rem 0.8rem;
  }
  .hl-card-date {
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--h-amber);
  }
  .home h3.hl-card-title {
    margin: 0;
    font-size: 0.98rem;
    font-weight: 700;
    line-height: 1.3;
  }
  .hl-card-people {
    font-size: 0.76rem;
    color: var(--h-muted);
  }
  .hl-card-text,
  .hl-more p {
    margin: 0.2rem 0 0;
    font-size: 0.82rem;
    line-height: 1.45;
  }
  .hl-more p {
    margin-top: 0.45rem;
  }
  .hl-more .hl-close,
  .hl-more[open] .hl-open {
    display: none;
  }
  .hl-more[open] .hl-close {
    display: inline;
  }
  .hl-card:has(.hl-more[open]) .hl-card-text {
    display: none;
  }
  .hl-more > summary {
    margin-top: 0.35rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--h-blue);
    cursor: pointer;
  }
  .hl-more[open] > summary {
    margin-bottom: 0.1rem;
  }
  .hl-more .hl-card-caption {
    font-style: italic;
    color: var(--h-muted);
  }
  .hl-card-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-top: 0.55rem;
  }
  .hl-card-links a {
    padding: 0.15rem 0.6rem;
    border-radius: 999px;
    border: 1px solid var(--h-line);
    font-size: 0.75rem;
    text-decoration: none;
  }
  .explore {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.8rem;
    margin-bottom: 2.25rem;
  }
  .explore a {
    display: block;
    padding: 1rem 1.05rem;
    border-radius: 12px;
    border: 1px solid var(--h-line);
    background: var(--h-card);
    color: var(--global-text-color);
    text-decoration: none;
    transition: border-color 0.15s ease, transform 0.15s ease;
  }
  .explore a:hover,
  .explore a:focus-visible {
    border-color: var(--h-blue);
    transform: translateY(-2px);
  }
  .explore a:focus-visible {
    outline: 2px solid var(--h-blue);
    outline-offset: 2px;
  }
  .explore .t {
    display: block;
    font-weight: 700;
    color: var(--h-blue);
    margin-bottom: 0.2rem;
  }
  .explore .d {
    display: block;
    font-size: 0.88rem;
    color: var(--h-muted);
    line-height: 1.4;
  }
  .partners {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
  .partners a {
    padding: 0.4rem 0.85rem;
    border-radius: 999px;
    border: 1px solid var(--h-line);
    font-size: 0.9rem;
    text-decoration: none;
  }
  .partners a.lead {
    border-color: var(--h-blue);
    font-weight: 600;
  }
  @media (max-width: 767.98px) {
    .stats {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .explore {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 479.98px) {
    .explore {
      grid-template-columns: 1fr;
    }
    .horizon-marks {
      font-size: 0.75rem;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .horizon-fill.now,
    .horizon-fill.goal,
    .explore a {
      transition: none;
    }
  }
</style>

{% assign people_page = site.pages | where: "permalink", "/people/" | first %}
{% assign phd_projects = site.projects | where: "category", "PhD projects" %}
{%- comment -%} Count current members: profiles with an anchor, before the "Former members" heading. {%- endcomment -%}
{%- assign current_people = 0 -%}
{%- for prof in people_page.profiles -%}
{%- if prof.content == "bios/section_former_members.md" -%}{%- break -%}{%- endif -%}
{%- if prof.anchor -%}{%- assign current_people = current_people | plus: 1 -%}{%- endif -%}
{%- endfor -%}
{% assign home_highlights = site.data.highlights | sort: "date" | reverse %}

<div class="home">

<img class="home-logo" src="{{ '/assets/img/AFESP_logo.jpg' | relative_url }}" alt="AFESP logo">

<p class="home-lead">The <strong>Research Programme on Advancing the Frontiers of Earth System Prediction (AFESP)</strong> is a <strong>£30 million, 15-year research programme</strong> led by the University of Reading in partnership with the European Centre for Medium-Range Weather Forecasts (ECMWF), the UK Met Office, and the National Centre for Atmospheric Science (NCAS). AFESP addresses ambitious, long-term research challenges in Earth system prediction, with the goal of extending the practical predictability of weather and climate from around two weeks towards four weeks through advances in data assimilation, Earth system modelling, and scientific analysis.</p>

<div class="horizon" role="img" aria-label="Forecast range: practical predictability today is around two weeks; AFESP aims to extend it towards four weeks.">
<p class="horizon-title">Pushing the predictability horizon</p>
<p class="horizon-sub">How far ahead weather and climate can usefully be predicted, in days.</p>
<div class="horizon-track"><div class="horizon-fill goal"></div><div class="horizon-fill now"></div></div>
<div class="horizon-axis"><span style="left: 0">0</span><span style="left: calc(7 / 30 * 100%)">7</span><span style="left: calc(14 / 30 * 100%)">14</span><span style="left: calc(21 / 30 * 100%)">21</span><span style="left: calc(28 / 30 * 100%)">28 days</span></div>
<div class="horizon-marks">
<div class="horizon-mark now" style="left: calc(14 / 30 * 100%)"><b>~2 weeks</b><span>today</span></div>
<div class="horizon-mark goal" style="left: calc(28 / 30 * 100%)"><b>~4 weeks</b><span>AFESP goal</span></div>
</div>
</div>

<h2 class="home-h">The programme in numbers</h2>
<div class="stats">
<div class="stat" style="--c: var(--h-blue)"><span class="n">£30m</span><span class="l">research investment</span></div>
<div class="stat" style="--c: var(--h-teal)"><span class="n">15</span><span class="l">years of research</span></div>
<div class="stat" style="--c: var(--h-amber)"><span class="n" data-count="{{ site.projects | size }}">{{ site.projects | size }}</span><span class="l">projects, including {{ phd_projects | size }} PhD projects</span></div>
<div class="stat" style="--c: var(--h-sky)"><span class="n" data-count="{{ current_people }}">{{ current_people }}</span><span class="l">people in the AFESP community</span></div>
</div>

{% if home_highlights.size > 0 %}
<h2 class="home-h" id="highlights">Highlights</h2>
<div class="hl-home">
{% for h in home_highlights %}
<article class="hl-card" id="{{ h.title | slugify }}">
{% if h.image %}<a class="hl-card-fig" href="{{ '/assets/img/' | append: h.image | relative_url }}" target="_blank" rel="noopener" title="Open the full-size figure"><img src="{{ '/assets/img/' | append: h.image | relative_url }}" alt="{{ h.image_alt | escape }}" loading="lazy"></a>{% endif %}
<div class="hl-card-body">
<span class="hl-card-date">{{ h.date | date: '%-d %B %Y' }}</span>
<h3 class="hl-card-title">{{ h.title }}</h3>
<span class="hl-card-people">{% for p in h.people %}{% if p.anchor %}<a href="{{ '/people/' | relative_url }}#{{ p.anchor }}">{{ p.name }}</a>{% else %}{{ p.name }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}</span>
<p class="hl-card-text">{{ h.text | first | truncatewords: 32 }}</p>
<details class="hl-more">
<summary><span class="hl-open">Read more</span><span class="hl-close">Show less</span></summary>
{% if h.caption %}<p class="hl-card-caption">{{ h.caption }}</p>{% endif %}
{% for para in h.text %}<p>{{ para }}</p>{% endfor %}
<div class="hl-card-links">
{% if h.project %}<a href="{{ h.project | relative_url }}">Project</a>{% endif %}
{% for l in h.links %}<a href="{{ l.url | relative_url }}"{% unless l.url contains "/assets/" %} target="_blank" rel="noopener"{% endunless %}>{{ l.title }}</a>{% endfor %}
</div>
</details>
</div>
</article>
{% endfor %}
</div>
{% endif %}

<h2 class="home-h">Explore AFESP</h2>
<div class="explore">
<a href="#highlights"><span class="t">Highlights</span><span class="d">Research highlights and scientific achievements.</span></a>
<a href="{{ '/projects/' | relative_url }}"><span class="t">Projects</span><span class="d">Five-year projects, fellowships and PhD projects.</span></a>
<a href="{{ '/publications/' | relative_url }}"><span class="t">Publications</span><span class="d">Papers, preprints, abstracts, datasets and software.</span></a>
<a href="{{ '/people/' | relative_url }}"><span class="t">People</span><span class="d">Members, investigators, supervisors and partners.</span></a>
<a href="{{ '/conferences/' | relative_url }}"><span class="t">Events</span><span class="d">Upcoming events, talks, posters and outreach.</span></a>
<a href="{{ '/collaborators/' | relative_url }}"><span class="t">Collaborators</span><span class="d">Partner institutions around the world.</span></a>
<a href="{{ '/doc/' | relative_url }}"><span class="t">Computational support</span><span class="d">Guides for computers, data services, models and tools.</span></a>
</div>

<h2 class="home-h">Partners</h2>
<div class="partners">
<a class="lead" href="https://www.reading.ac.uk/">University of Reading (lead)</a>
<a href="https://www.ecmwf.int/">ECMWF</a>
<a href="https://www.metoffice.gov.uk/">UK Met Office</a>
<a href="https://ncas.ac.uk/">NCAS</a>
</div>

</div>

<script>
  (() => {
    const horizon = document.querySelector(".horizon");
    if (!horizon) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = () => horizon.classList.add("go");
    if (reduce || !("IntersectionObserver" in window)) {
      start();
    } else {
      const io = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          start();
          io.disconnect();
        }
      }, { threshold: 0.4 });
      io.observe(horizon);
    }
    if (reduce) return;
    // Count up the numbers that come from the site (projects and people).
    const nums = document.querySelectorAll(".stat .n[data-count]");
    const t0 = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - t0) / 1000);
      const e = 1 - Math.pow(1 - t, 3);
      nums.forEach((el) => (el.textContent = Math.round(e * Number(el.dataset.count))));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  })();
</script>

{% comment %} The sections below are hidden on the main page; they are shown on the about page (_pages/about_afesp.md). {% endcomment %}
{% comment %}

## Official AFESP website

The official AFESP website provides a general overview of the programme, its vision, strategic science plan, news, opportunities, and information for
external audiences.

[https://research.reading.ac.uk/earth-system-prediction/](https://research.reading.ac.uk/earth-system-prediction/)

---

## Research site updates

This GitHub site complements the official website by serving as the programme's **living scientific workspace**. Rather than providing a static overview of AFESP, it
documents the programme's **ongoing scientific progress**, showcasing the research, collaborations, software, publications, and scientific achievements emerging
across the programme.

The site is updated regularly by researchers and project teams to provide a dynamic view of AFESP's evolving science, facilitate collaboration across the
patnership, and provide a transparent record of the programme's progress and impact.

Here you will find:

- **Research highlights and scientific achievements**
- **Work package activities and project milestones**
- **Publications, preprints, software, datasets, and other research outputs**
- **Researcher profiles and collaborations**
- **Seminars, workshops, and community events**
- **Emerging methods, tools, and scientific developments**
- **Progress towards the programme's long-term scientific objectives**

## Who is this site for?

This site is intended for:

- **AFESP researchers and partners**, as a central resource for sharing progress, results, and fostering collaboration.
- **Collaborators and the wider scientific community**, interested in the latest research outputs and developments.
- **Funding agencies and stakeholders**, providing an up-to-date record of the programme's scientific achievements, impact, and evolving research portfolio.

As a living resource, this site will continue to grow alongside the programme, providing an evolving record of how AFESP is advancing the frontiers of
Earth system prediction.

{% endcomment %}
