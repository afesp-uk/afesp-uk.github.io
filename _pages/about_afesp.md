---
layout: about
title: about
permalink: /about/
nav: true
nav_order: 0
subtitle: "Advancing the Frontiers of Earth System Prediction."

selected_papers: false # hidden on the about page; set to true to show again. Was: includes a list of papers marked as "selected={true}"
social: false # this page lists its own contact addresses at the bottom (see the end of this file)

announcements:
  enabled: false # news list hidden on the about page; set to true to show it again
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false # latest posts hidden on the about page; set to true to show them again
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<style>
  /* Hide the site title and subtitle on the about page. */
  .post > .post-header {
    display: none;
  }
  .ab {
    --a-blue: #1565c0;
    --a-sky: #4fa3e0;
    --a-teal: #00897b;
    --a-amber: #e09a1a;
    --a-line: var(--global-divider-color);
    --a-card: var(--global-card-bg-color);
    --a-muted: var(--global-text-color-light);
  }
  html[data-theme="dark"] .ab {
    --a-blue: #64b5f6;
    --a-sky: #81c7f5;
    --a-teal: #4fd1bf;
    --a-amber: #f3be5e;
  }
  .ab-hero {
    display: grid;
    grid-template-columns: 1fr 170px;
    gap: 1.5rem;
    align-items: start;
    margin: 0.5rem 0 1.25rem 0;
  }
  .ab-hero h1 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.1;
    margin: 0 0 0.75rem 0;
  }
  .ab-hero h1 span {
    color: var(--a-blue);
  }
  .ab-hero img {
    width: 100%;
    border-radius: 10px;
  }
  .ab-lead {
    font-size: 1.1rem;
    line-height: 1.65;
    margin: 0;
  }
  .ab-facts {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0 0 2.5rem 0;
    padding: 0;
    list-style: none;
  }
  .ab-facts li {
    padding: 0.35rem 0.85rem;
    border-radius: 999px;
    border: 1px solid var(--a-line);
    background: var(--a-card);
    font-size: 0.9rem;
  }
  .ab-facts li b {
    color: var(--a-blue);
  }
  .ab h2 {
    font-size: 1.5rem;
    color: var(--a-blue);
    margin: 0 0 0.9rem 0;
  }
  .ab-two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 2.5rem;
  }
  .ab-card {
    padding: 1.15rem 1.2rem;
    border-radius: 14px;
    border: 1px solid var(--a-line);
    border-top: 4px solid var(--c, var(--a-blue));
    background: var(--a-card);
  }
  .ab-card h3 {
    font-size: 1.15rem;
    font-weight: 700;
    margin: 0 0 0.45rem 0;
  }
  .ab-card p {
    margin: 0 0 0.75rem 0;
    line-height: 1.55;
  }
  .ab-card p:last-child {
    margin-bottom: 0;
  }
  .ab-btn {
    display: inline-block;
    padding: 0.45rem 0.95rem;
    border-radius: 999px;
    background: var(--a-blue);
    color: #fff !important;
    font-weight: 600;
    font-size: 0.92rem;
    text-decoration: none;
  }
  .ab-btn:hover,
  .ab-btn:focus-visible {
    filter: brightness(1.1);
    text-decoration: none;
  }
  html[data-theme="dark"] .ab-btn {
    color: #0b1a2b !important;
  }
  .ab-find {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 0.75rem;
    margin-bottom: 2.5rem;
  }
  .ab-find a {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
    padding: 0.85rem 0.95rem;
    border-radius: 12px;
    border: 1px solid var(--a-line);
    background: var(--a-card);
    color: var(--global-text-color);
    text-decoration: none;
    transition: border-color 0.15s ease, transform 0.15s ease;
  }
  .ab-find a:hover,
  .ab-find a:focus-visible {
    border-color: var(--a-blue);
    transform: translateY(-2px);
  }
  .ab-find i {
    flex: none;
    width: 2.1rem;
    height: 2.1rem;
    border-radius: 9px;
    display: grid;
    place-items: center;
    color: #fff;
    background: var(--c, var(--a-blue));
    font-size: 0.95rem;
  }
  html[data-theme="dark"] .ab-find i {
    color: #0b1a2b;
  }
  .ab-find span {
    font-weight: 600;
    line-height: 1.35;
  }
  .ab-who {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    margin-bottom: 1.75rem;
  }
  .ab-close {
    font-size: 1.05rem;
    line-height: 1.6;
    padding: 1rem 1.2rem;
    border-left: 4px solid var(--a-teal);
    background: var(--a-card);
    border-radius: 0 12px 12px 0;
    margin-bottom: 2rem;
  }
  @media (max-width: 767.98px) {
    .ab-two,
    .ab-who {
      grid-template-columns: 1fr;
    }
    .ab-hero {
      grid-template-columns: 1fr;
    }
    .ab-hero img {
      max-width: 160px;
      order: -1;
    }
    .ab-hero h1 {
      font-size: 2rem;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .ab-find a {
      transition: none;
    }
  }
</style>

<div class="ab">

<div class="ab-hero">
<div>
<h1>About <span>AFESP</span></h1>
<p class="ab-lead">The <strong>Research Programme on Advancing the Frontiers of Earth System Prediction (AFESP)</strong> is a <strong>£30 million, 15-year research programme</strong> led by the University of Reading in partnership with the European Centre for Medium-Range Weather Forecasts (ECMWF), the UK Met Office, and the National Centre for Atmospheric Science (NCAS). AFESP addresses ambitious, long-term research challenges in Earth system prediction, with the goal of extending the practical predictability of weather and climate from around two weeks towards four weeks through advances in data assimilation, Earth system modelling, and scientific analysis.</p>
</div>
<img src="{{ '/assets/img/AFESP_logo.jpg' | relative_url }}" alt="AFESP logo">
</div>

<ul class="ab-facts">
<li><b>£30m</b> programme</li>
<li><b>15</b> years</li>
<li>Led by the <b>University of Reading</b></li>
<li>With <b>ECMWF</b>, the <b>Met Office</b> and <b>NCAS</b></li>
<li>Goal: predictability from <b>2</b> to <b>4 weeks</b></li>
</ul>

<h2>Two websites, two roles</h2>
<div class="ab-two">
<div class="ab-card" style="--c: var(--a-blue)">
<h3>Official AFESP website</h3>
<p>The official AFESP website provides a general overview of the programme, its vision, strategic science plan, news, opportunities, and information for external audiences.</p>
<p><a class="ab-btn" href="https://research.reading.ac.uk/earth-system-prediction/">Visit the official website</a></p>
</div>
<div class="ab-card" style="--c: var(--a-teal)">
<h3>This research site</h3>
<p>This GitHub site complements the official website by serving as the programme's <strong>living scientific workspace</strong>. Rather than providing a static overview of AFESP, it documents the programme's <strong>ongoing scientific progress</strong>, showcasing the research, collaborations, software, publications, and scientific achievements emerging across the programme.</p>
<p>The site is updated regularly by researchers and project teams to provide a dynamic view of AFESP's evolving science, facilitate collaboration across the partnership, and provide a transparent record of the programme's progress and impact.</p>
</div>
</div>

<h2>Here you will find</h2>
<div class="ab-find">
{% comment %} Blog link hidden while the blog page is hidden; move it out of this comment to show it again.
<a href="{{ '/blog/' | relative_url }}"><i class="fa-solid fa-star" style="--c: var(--a-amber)" aria-hidden="true"></i><span>Research highlights and scientific achievements</span></a>
{% endcomment %}
<a href="{{ '/projects/' | relative_url }}"><i class="fa-solid fa-diagram-project" style="--c: var(--a-blue)" aria-hidden="true"></i><span>Work package activities and project milestones</span></a>
<a href="{{ '/publications/' | relative_url }}"><i class="fa-solid fa-book-open" style="--c: var(--a-teal)" aria-hidden="true"></i><span>Publications, preprints, software, datasets, and other research outputs</span></a>
<a href="{{ '/people/' | relative_url }}"><i class="fa-solid fa-users" style="--c: var(--a-sky)" aria-hidden="true"></i><span>Researcher profiles and collaborations</span></a>
<a href="{{ '/conferences/' | relative_url }}"><i class="fa-solid fa-calendar-days" style="--c: var(--a-amber)" aria-hidden="true"></i><span>Seminars, workshops, and community events</span></a>
<a href="{{ '/teaching/' | relative_url }}"><i class="fa-solid fa-flask" style="--c: var(--a-blue)" aria-hidden="true"></i><span>Emerging methods, tools, and scientific developments</span></a>
<a href="{{ '/projects/' | relative_url }}"><i class="fa-solid fa-chart-line" style="--c: var(--a-teal)" aria-hidden="true"></i><span>Progress towards the programme's long-term scientific objectives</span></a>
</div>

<h2>Who is this site for?</h2>
<div class="ab-who">
<div class="ab-card" style="--c: var(--a-blue)">
<h3>AFESP researchers and partners</h3>
<p>A central resource for sharing progress, results, and fostering collaboration.</p>
</div>
<div class="ab-card" style="--c: var(--a-teal)">
<h3>Collaborators and the scientific community</h3>
<p>For those interested in the latest research outputs and developments.</p>
</div>
<div class="ab-card" style="--c: var(--a-amber)">
<h3>Funding agencies and stakeholders</h3>
<p>An up-to-date record of the programme's scientific achievements, impact, and evolving research portfolio.</p>
</div>
</div>

<p class="ab-close">As a living resource, this site will continue to grow alongside the programme, providing an evolving record of how AFESP is advancing the frontiers of Earth system prediction.</p>

</div>

<div class="social">
  <div class="contact-note">
    <a href="mailto:afesp-rse@reading.ac.uk">afesp-rse@reading.ac.uk</a>,
    <a href="mailto:s.ahmadi@reading.ac.uk">s.ahmadi@reading.ac.uk</a>,
    <a href="mailto:j.kukulies@reading.ac.uk">j.kukulies@reading.ac.uk</a>,
    <a href="mailto:mark.muetzelfeldt@reading.ac.uk">mark.muetzelfeldt@reading.ac.uk</a>,
    <a href="mailto:c.egan@reading.ac.uk">c.egan@reading.ac.uk</a>
  </div>
</div>
