---
layout: page
permalink: /open-positions/
title: open positions
description: Current job openings in AFESP research projects and at partner and collaborating institutions
nav: true
nav_order: 11
---

<style>
  /* Capitalised page heading only; the top menu keeps "open positions" in lower case like the other menu items. */
  .post > .post-header .post-title {
    text-transform: capitalize;
  }
  .job {
    padding: 1.15rem 1.25rem;
    margin: 0 0 2rem 0;
    border: 1px solid var(--global-divider-color);
    border-left: 4px solid var(--global-theme-color);
    border-radius: 12px;
    background: var(--global-card-bg-color);
  }
  .job h2 {
    font-size: 1.3rem;
    margin: 0 0 0.35rem 0;
  }
  .job-org {
    font-weight: 600;
    margin: 0 0 0.25rem 0;
  }
  .job-meta {
    font-size: 0.9rem;
    color: var(--global-text-color-light);
    margin: 0 0 0.9rem 0;
  }
  .job ol {
    margin-bottom: 1rem;
  }
  .job ul.job-papers {
    padding-left: 1.2rem;
  }
  /* AFESP's own positions: highlighted with a tinted background, a thicker border and a label. */
  .job.job-afesp {
    border: 2px solid var(--global-theme-color);
    border-left-width: 6px;
    background: color-mix(in srgb, var(--global-theme-color) 8%, var(--global-card-bg-color));
  }
  .job-badge {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--global-card-bg-color);
    background: var(--global-theme-color);
    border-radius: 999px;
    padding: 0.15rem 0.6rem;
    margin: 0 0 0.5rem 0;
  }
  h2.job-section {
    font-size: 1.5rem;
    margin: 2.5rem 0 1.25rem 0;
  }
</style>

<!--
  Positions are listed in _data/open_positions.yml. AFESP's own positions (afesp: true) are highlighted first;
  everything else is listed under "Open positions elsewhere". Each group is sorted newest advert first by `advertised`.
  To add or remove a position, edit that file; you don't need to change this page.
-->

{% assign sorted_jobs = site.data.open_positions | sort: "advertised" | reverse %}
{% assign afesp_jobs = sorted_jobs | where: "afesp", true %}
{% assign other_jobs = sorted_jobs | where_exp: "job", "job.afesp != true" %}

{% for group in (1..2) %}
{% if group == 1 %}
{% assign jobs = afesp_jobs %}
{% else %}
{% assign jobs = other_jobs %}
{% if jobs.size > 0 %}

<h2 class="job-section">Open positions elsewhere</h2>
<p>Vacancies at AFESP partners, collaborating institutions and other organisations in weather and climate science. Please apply through each employer's own advert.</p>
{% endif %}
{% endif %}
{% for job in jobs %}

<div class="job{% if job.afesp %} job-afesp{% endif %}">
  {% if job.afesp %}<span class="job-badge">AFESP position</span>{% endif %}
  <h2>{{ job.title }}</h2>
  {% if job.organisation %}<p class="job-org">{{ job.organisation }}</p>{% endif %}
  <p class="job-meta">
    {% if job.advertised_label %}{{ job.advertised_label }}{% else %}Advertised {{ job.advertised | date: "%-d %B %Y" }}{% endif %}
    {% if job.closes %} · Closes {{ job.closes }}{% endif %}
    {% if job.details %} · {{ job.details }}{% endif %}
    {% if job.project %} · Related project: <a href="{{ job.project.url | relative_url }}">{{ job.project.name }}</a>{% endif %}
  </p>
  {{ job.body | markdownify }}
  {% if job.url %}<p><a href="{{ job.url }}">Read the full advert and apply</a></p>{% endif %}
</div>
{% endfor %}
{% endfor %}

<div class="social">
  <div class="contact-note">
    <a href="mailto:afesp-rse@reading.ac.uk">afesp-rse@reading.ac.uk</a>
  </div>
</div>
