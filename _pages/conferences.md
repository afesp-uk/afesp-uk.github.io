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
  .ev-docs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.55rem;
  }
  .ev-docs .ev-doc {
    display: inline-block;
    font-size: 0.82rem;
    font-weight: 600;
    padding: 0.15rem 0.6rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    color: var(--ev-blue);
    text-decoration: none;
  }
  .ev-docs .ev-doc:hover,
  .ev-docs .ev-doc:focus-visible {
    border-color: var(--ev-blue);
    text-decoration: none;
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
  /* AFESP events: their own column on the right on wide screens, at the top on narrow ones. */
  .ev-side {
    padding: 1rem 1.1rem 0.6rem;
    margin-bottom: 1.5rem;
    border-radius: 12px;
    border: 1px solid rgba(31, 157, 85, 0.35);
    background: linear-gradient(180deg, rgba(31, 157, 85, 0.07), transparent 60%);
  }
  .ev .ev-side > h2:first-child {
    margin-top: 0;
  }
  .ev-side ul.ev-upcoming {
    grid-template-columns: 1fr;
  }
  .ev-side .ev-archive .ev-year-group {
    margin-left: 0.25rem;
  }
  @media (min-width: 992px) {
    .ev-layout {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 290px;
      gap: 1.75rem;
      align-items: start;
    }
    .ev-layout > .ev-main {
      grid-column: 1;
      grid-row: 1;
    }
    .ev-layout > .ev-side {
      grid-column: 2;
      grid-row: 1;
      position: sticky;
      top: 5rem;
      max-height: calc(100vh - 6rem);
      overflow-y: auto;
      margin-bottom: 0;
    }
    .ev .ev-main > h2:first-child {
      margin-top: 0;
    }
  }
  /* Past AFESP events: one collapsible archive, then a collapsible block per year. */
  .ev-archive {
    margin: 1rem 0 0.5rem;
  }
  .ev-archive > summary {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    padding: 0.4rem 0.25rem;
    font-weight: 700;
    color: var(--ev-muted);
    cursor: pointer;
    list-style: none;
  }
  .ev-archive > summary::-webkit-details-marker {
    display: none;
  }
  .ev-archive > summary::before {
    content: "▸";
    display: inline-block;
    transition: transform 0.2s ease;
  }
  .ev-archive[open] > summary::before {
    transform: rotate(90deg);
  }
  .ev-archive > summary .ev-year-count {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.05rem 0.5rem;
    border-radius: 999px;
    border: 1px solid currentColor;
  }
  .ev-archive .ev-year-group {
    margin-left: 1rem;
  }
  .ev-archive ul.ev-past {
    margin-top: 0.75rem;
  }
  .ev-archive ul.ev-past .ev-card {
    opacity: 0.85;
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
  /* AFESP event cards that open the list of AFESP members' contributions to that event. */
  .ev-card.ev-has-contribs {
    cursor: pointer;
  }
  .ev-card.ev-has-contribs:focus-visible {
    outline: 2px solid var(--global-theme-color);
    outline-offset: 2px;
  }
  .ev-dialog {
    width: min(720px, calc(100vw - 32px));
    max-height: min(85vh, 900px);
    padding: 1.25rem 1.4rem 1.4rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 14px;
    background: var(--global-bg-color, #fff);
    color: var(--global-text-color, #222);
  }
  .ev-dialog::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
  .ev-dialog-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }
  .ev-dialog h3 {
    font-size: 1.3rem;
    margin: 0;
  }
  .ev-dialog-close {
    border: 0;
    background: none;
    color: var(--global-text-color);
    font-size: 1.6rem;
    line-height: 1;
    cursor: pointer;
    padding: 0 0.25rem;
  }
  .ev-dialog-sub {
    color: var(--global-text-color-light);
    margin: 0.25rem 0 0.75rem;
    font-size: 0.9rem;
  }
  .ev-dialog h4 {
    font-size: 1rem;
    margin: 1rem 0 0.4rem;
    color: var(--global-theme-color);
  }
  .ev-dialog-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .ev-dialog-list li {
    --kind: var(--ev-other);
    padding: 0.55rem 0 0.55rem 0.8rem;
    border-left: 3px solid var(--kind);
    margin-bottom: 0.4rem;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }
  .ev-dialog-list li[data-kind="talk"] { --kind: var(--ev-talk); }
  .ev-dialog-list li[data-kind="poster"] { --kind: var(--ev-poster); }
  .ev-dialog-list li[data-kind="lightning"] { --kind: var(--ev-lightning); }
  .ev-dialog-list li[data-kind="school"] { --kind: var(--ev-school); }
  .ev-dialog-list .ev-type {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--global-text-color-light);
  }
  .ev-dialog-list .ev-title {
    font-weight: 600;
  }
  .ev-dialog-list .ev-authors {
    font-size: 0.92rem;
  }
</style>

## AFESP events

<!-- AFESP's own events, written like the upcoming items below: "Name (date; place)", with an optional link and an optional description after a <br>.
     Upcoming events show as cards. Once an event's last day has passed it moves by itself into "Past AFESP events", grouped by year.
     To move an event there earlier, add <span class="ev-mark-past"></span> at the end of its line. -->

- **AFESP Conference 2026 (2-3 Nov, 2026; Henley Business School, University of Reading):** <span class="ev-mark-past"></span> <a class="ev-doc" href="{{ '/assets/pdf/afesp_conference_2026_agenda.pdf' | relative_url }}">Agenda (PDF)</a>
- **AFESP Conference 2025 (Tuesday 4 Nov, 2025; Meadow Suite, Whiteknights Campus, University of Reading, RG6 6UR):**

## Upcoming conferences

<!-- Items whose name starts with "AFESP" are highlighted as AFESP's own events. An item without a link is shown as a plain card. -->

- [**Health at COP31, World Health Organization (9-20 Nov, 2026; Antalya, Türkiye, with live streaming):**](https://www.who.int/teams/environment-climate-change-and-health/climate-change-and-health/advocacy-partnerships/talks/health-at-cop31)<br>
  WHO's programme at the UN Climate Change Conference (COP31), putting climate-resilient health systems at the centre of the talks: a Health Day on 9 November, a Health Pavilion with over 60 events across the two weeks (live-streamed), and side events including a UN high-level event on 14 November.
- [**Convection-Permitting Climate Modelling Workshop 2027 (1-5 Feb, 2027):**](https://conference.unsw.edu.au/en/CPCM2027)
- [**WWRP 2027 Conference: Advancing Weather Science for Resilient Societies (23-25 Aug, 2027; Nanjing University, China):**](https://wmo.int/events/public-event/wwrp-conference-2027-advancing-weather-science-resilient-societies)<br>
  The WMO World Weather Research Programme conference, with themes on observations of physical and societal systems, weather prediction and predictability, and societal preparedness including impact-based warnings. Abstracts (up to 300 words) are due by 31 December 2026.

## Upcoming workshops

- [**NCAS Introduction to Scientific Computing workshop (9-20 Nov, 2026; online and Leeds):**](https://ncas.ac.uk/study-with-us/introduction-to-scientific-computing/)
- [**CLIVAR CMIP7 Hackathon (6-8 Jan, 2027; Boulder, Taipei and Tokyo, in person):**](https://ncar.github.io/CMIP7_hackathon_2027/#about)<br>
  A CLIVAR/WCRP hackathon for hands-on analysis of the new CMIP7 climate model data, run at three hubs in parallel.
- [**7th WGNE Workshop on Systematic Errors in Weather and Earth System Models (15-19 Feb, 2027; IITM, Pune, India):**](https://www.wcrp-esmo.org/activities/7th-systematic-error-workshop-2027)<br>
  Understanding and reducing systematic errors in physics-based and machine-learning-based models across timescales: diagnosing and attributing errors, scale interactions and resolution, parameterisation deficiencies, coupled feedbacks, predictability, and uncertainty and ensembles, including AI/ML-assisted attribution and AI versus physics-based model intercomparison. The call for abstracts has closed.

## Upcoming talks and seminars

No upcoming talks or seminars at the moment.

## Upcoming training courses

- [**ARCHER2: Building Hybrid HPC/AI workflows using RHAPSODY, radex, and DragonHPC (11 Nov, 2026, 15:00-16:00; online):**](https://www.archer2.ac.uk/training/courses/261111-hpe-coe-hybrid-vt/)
- [**ARCHER2: Containers for Reproducible Research: Introduction to Podman and Apptainer (12 Nov, 2026, 09:30-16:00; Newcastle University):**](https://www.archer2.ac.uk/training/courses/261112-containers/)
- [**ECMWF training course: Machine Learning-based weather forecasting (16-20 Nov, 2026; ECMWF, Reading):**](https://events.ecmwf.int/event/546/)<br>
  An advanced course on deep learning for Earth system forecasting and the Anemoi framework, with lectures and hands-on coding. Applications have closed.
- [**ARCHER2: Porting HPC applications to GPUs: choosing a programming model (18 Nov, 2026, 14:00-15:00; online):**](https://www.archer2.ac.uk/training/courses/261118-hpe-coe-porting-to-gpus-vt/)
- [**ECMWF training course: Data Assimilation & Machine Learning (11-15 Jan, 2027; ECMWF, Reading):**](https://events.ecmwf.int/event/578/)<br>
  Five-day in-person course. Applications closed on 27 September 2026.
- [**EUMETSAT/ECMWF NWP-SAF training course: Satellite Data Assimilation (18-22 Jan, 2027; ECMWF, Reading):**](https://events.ecmwf.int/event/577/)<br>
  Five-day in-person course sponsored by EUMETSAT. Applications closed on 27 September 2026.
- [**ECMWF training course: Use and Interpretation of ECMWF Products (25-28 Jan, 2027; ECMWF, Reading):**](https://events.ecmwf.int/event/576/)<br>
  Four-day in-person course with required pre-course activities. Applications closed on 27 September 2026.
- [**NCAS Climate Modelling Summer School (5-17 Sep 2027, Cambridge, UK)**](https://ncas.ac.uk/study-with-us/climate-modelling-summer-school/)

<div style="height: 2.5rem;"></div>

## Contributions to conferences

- **AFESP Conference 2026**<br>
  **Overview of AFESP and progress to date**<br>
  Pier Luigi Vidale<br>
  Reading, UK | Oral presentation | 2 November 2026
- **AFESP Conference 2026**<br>
  **Towards a high-fidelity Integrated Forecasting System via improved modelling of the soil-plant system**<br>
  Rajsekhar Kandala & Anne Verhoef<br>
  Reading, UK | Research project presentation | 2 November 2026
- **AFESP Conference 2026**<br>
  **The ECMWF Land Surface Hydrology Foundation model (ECFoundLand)**<br>
  Hamidreza Mosaffa & Hannah Cloke<br>
  Reading, UK | Research project presentation | 2 November 2026
- **AFESP Conference 2026**<br>
  **UrbaNE: Urban Numerical Weather Prediction Expedited**<br>
  Cameron Southgate-Ash & Sue Grimmond<br>
  Reading, UK | Research project presentation | 2 November 2026
- **AFESP Conference 2026**<br>
  **AFESP further opportunities and future focus for research and investment**<br>
  Pier Luigi Vidale (chair), Mark Muetzelfeldt and Julia Kukulies (co-chairs)<br>
  Reading, UK | Session chair | 2 November 2026
- **AFESP Conference 2026**<br>
  **Breakout session on HPC usage and needs**<br>
  Sharar Ahmadi (chair), Charlie Egan and Rishabh Bhatt (co-chairs)<br>
  Reading, UK | Session chair | 2 November 2026
- **AFESP Conference 2026**<br>
  **Welcome, Day 1 recap and introduction to Day 2**<br>
  Pier Luigi Vidale<br>
  Reading, UK | Oral presentation | 3 November 2026
- **AFESP Conference 2026**<br>
  **High-resolution data assimilation with Spatially and Temporally Correlated Observation Errors (HiSCORE)**<br>
  Rishabh Bhatt & Sarah Dance<br>
  Reading, UK | Research project presentation | 3 November 2026
- **AFESP Conference 2026**<br>
  **Isolating and understanding the most predictable components and improving their representation in S2S prediction**<br>
  Charlie Egan & John Methven<br>
  Reading, UK | Research project presentation | 3 November 2026
- **AFESP Conference 2026**<br>
  **UPFLO: Improving understanding and modelling of convective updrafts and anvil clouds**<br>
  Deepak Gopalakrishnan & Chris Holloway<br>
  Reading, UK | Research project presentation | 3 November 2026
- **AFESP Conference 2026**<br>
  **Understanding the potential for month-ahead prediction for monsoon systems**<br>
  Indrakshi Mukherjee<br>
  Reading, UK | DTP project presentation | 3 November 2026
- **AFESP Conference 2026**<br>
  **Discovering the mechanisms behind “forecast busts”**<br>
  Kaustubh Mittal<br>
  Reading, UK | DTP project presentation | 3 November 2026
- **AFESP Conference 2026**<br>
  **Developing artificial intelligence approaches to enhance representations of turbulence in atmospheric models**<br>
  Sambit Kumar Panda<br>
  Reading, UK | DTP project presentation | 3 November 2026
- **AFESP Conference 2026**<br>
  **S2S prediction of marine heatwaves and associated compound events**<br>
  Piyali Goswami<br>
  Reading, UK | DTP project presentation | 3 November 2026
- **AFESP Conference 2026**<br>
  **Improving the efficiency of weather and climate prediction by developing mathematical methods to take long time steps**<br>
  Amber te Winkel<br>
  Reading, UK | DTP project presentation | 3 November 2026
- **AFESP Conference 2026**<br>
  **How skilful are AI-based forecasts of monsoon weather?**<br>
  Mehzooz Nizar<br>
  Reading, UK | DTP project presentation | 3 November 2026
- **AFESP Conference 2026**<br>
  **Where do we need high resolution in the ocean?**<br>
  Gabrielle Ching-Johnson<br>
  Reading, UK | DTP project presentation | 3 November 2026
- **AFESP Conference 2026**<br>
  **Machine-learning-driven balance relationships for next-generation data assimilation systems**<br>
  Ravi Shankar Nemani<br>
  Reading, UK | DTP project presentation | 3 November 2026
- **AFESP Conference 2026**<br>
  **Downstream impacts of embedded convection in warm conveyor belts**<br>
  Jake Keller<br>
  Reading, UK | DTP project presentation | 3 November 2026
- **AFESP Conference 2026**<br>
  **Improving river streamflow forecasts using deep learning techniques**<br>
  Karan Ruparell<br>
  Reading, UK | DTP project presentation | 3 November 2026
- **AFESP Conference 2026**<br>
  **Convective storms in km-scale models: linking microphysics, convective dynamics and extreme precipitation**<br>
  Julia Kukulies<br>
  Reading, UK | AFESP Fellows keynote talk | 3 November 2026
- **AFESP Conference 2026**<br>
  **ALOFT: Aligning Organized Features in Coarse- and High-Resolution Simulations**<br>
  Mark Muetzelfeldt<br>
  Reading, UK | AFESP Fellows keynote talk | 3 November 2026
- **AFESP Conference 2026**<br>
  **Open discussion forum, summary of key outcomes and actions, next steps and conference close**<br>
  Pier Luigi Vidale (chair)<br>
  Reading, UK | Session chair | 3 November 2026
- **AFESP Conference 2026**<br>
  [**AdHImEx: Advection that is Accurate, Efficient, and Stable for Long Time Steps**]({{ '/assets/pdf/tewinkel_afesp2026_poster.pdf' | relative_url }})<br>
  Amber te Winkel, Hilary Weller, Christian Kühnlein, James Kent<br>
  Reading, UK | Poster presentation | 2–3 November 2026
- **AFESP Conference 2026**<br>
  [**Predictability of European Blocking and Storm Daniel Linked to Hurricane Franklin’s Extratropical Transition**]({{ '/assets/pdf/keller_afesp2026_poster.pdf' | relative_url }})<br>
  Jake Keller, Oscar Martínez-Alvarado, Ben Harvey, Claudio Sanchez, Benoît Vannière<br>
  Reading, UK | Poster presentation | 2–3 November 2026
- **AFESP Conference 2026**<br>
  [**Using interface observations in weakly-coupled data assimilation**]({{ '/assets/pdf/hill_afesp2026_poster.pdf' | relative_url }})<br>
  Tom Hill, Yumeng Chen, Amos Lawless, Nancy Nichols, Dan Lea, Tsz Yan Leung, Jo Waller<br>
  Reading, UK | Poster presentation | 2–3 November 2026
- **AFESP Conference 2026**<br>
  [**S2S Predictability of North Sea Marine Heatwaves: A Process-Based Approach**]({{ '/assets/pdf/goswami_afesp2026_poster.pdf' | relative_url }})<br>
  Piyali Goswami, Ted Shepherd, Ségolène Berthou, Magdalena Balmaseda, Regina Rodrigues<br>
  Reading, UK | Poster presentation | 2–3 November 2026
- **AFESP Conference 2026**<br>
  [**Relationships between Tropical Cyclone Survival Rates and Dynamical Equatorial Waves**]({{ '/assets/pdf/chow_afesp2026_poster.pdf' | relative_url }})<br>
  Tsun Ngai Chow, Xiangbo Feng, Kevin Hodges, Gui-Ying Yang, Rebecca Emerton, Prince Xavier<br>
  Reading, UK | Poster presentation | 2–3 November 2026
- **AFESP Conference 2026**<br>
  [**Modulation of Tropical Cyclogenesis by ITCZ characteristics in the Southern Indian Ocean**]({{ '/assets/pdf/giuliani_afesp2026_poster.pdf' | relative_url }})<br>
  Giacomo Giuliani, Pier Luigi Vidale, Christopher E. Holloway, Elizabeth J. Kendon, Malcolm J. Roberts<br>
  Reading, UK | Poster presentation | 2–3 November 2026
- **AFESP Conference 2026**<br>
  [**Understanding Sub-Seasonal Extremes in Semi-Arid Transition Zones: Using Machine Learning to Enhance Predictability Signals for Early Action Decision-Making [STEP-AHEAD]**]({{ '/assets/pdf/pinodelgado_afesp2026_poster.pdf' | relative_url }})<br>
  Fernanda Pino Delgado, Rosalind Cornforth, Ted Shepherd, Katherine Egan, Martín Jacques-Coper, Celia Petty, Abdou Ali<br>
  Reading, UK | Poster presentation | 2–3 November 2026
- **AFESP Conference 2026**<br>
  [**How skilful are AI-based precipitation hindcasts in the 2023 Indian summer monsoon?**]({{ '/assets/pdf/nizar_afesp2026_poster.pdf' | relative_url }})<br>
  Mehzooz Nizar, Reinhard Schiemann, Andrew G. Turner, Kieran Hunt, Steffen Tietsche<br>
  Reading, UK | Poster presentation | 2–3 November 2026
- **AFESP Conference 2026**<br>
  [**Forecast Busts over Europe in Numerical Weather Prediction models: Characteristics and Variability**]({{ '/assets/pdf/mittal_afesp2026_poster.pdf' | relative_url }})<br>
  Kaustubh Mittal, Robert S. Plant, Suzanne L. Gray, David L. Flack, David B. Parsons<br>
  Reading, UK | Poster presentation | 2–3 November 2026
- **AFESP Conference 2026**<br>
  [**Monsoons at the Kilometre Scale**]({{ '/assets/pdf/todd_afesp2026_poster.pdf' | relative_url }})<br>
  Jamie Todd, Andrew Turner, Akshay Deoras, Eliza Karlowska, Richard Jones<br>
  Reading, UK | Poster presentation | 2–3 November 2026
- **AFESP Conference 2026**<br>
  [**Hybrid Physics–ML Ensembles for Data Assimilation in Chaotic Systems**]({{ '/assets/pdf/jesse_afesp2026_poster.pdf' | relative_url }})<br>
  Gilbert Jesse, Eviatar Bach, Sarah Dance, Amos Lawless, Christopher Thomas, Massimo Bonavita<br>
  Reading, UK | Poster presentation | 2–3 November 2026
- **AFESP Conference 2026**<br>
  [**Neural subgrid closures coupled to MONC: stability, fidelity and cost of emulated turbulence at kilometre scale**]({{ '/assets/pdf/panda_afesp2026_poster.pdf' | relative_url }})<br>
  Sambit Kumar Panda, Todd R. Jones, Muhammad Shahzad, Bryan N. Lawrence, Anna-Louise Ellis<br>
  Reading, UK | Poster presentation | 2–3 November 2026
- **EMS2026**<br>
  **Spatio-temporal variability of sensible heat fluxes: Large-Aperture Scintillometry observations during urbisphere-Berlin**<br>
  Cameron Southgate-Ash, et al.<br>
  Utrecht, Netherlands | Oral presentation | 6-11 September 2026
- **S2S2D Conference**<br>
  Piyali Goswami<br>
  Reading, UK | Oral presentation | September 2026
- **8th WMO and 12th International Symposium on Data Assimilation**<br>
  **Modelling and accounting for spatial observation error correlations in operational data assimilation at ECMWF and the UK Met Office**<br>
  Rishabh Bhatt<br>
  Nanjing, China | Oral presentation | 31 August - 4 September 2026
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
  km-scale Global Modelling Summit 2026, Hamburg, Germany | Poster presentation | 20–24 July 2026
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
- **NCAS Staff Meeting 2026**<br>
  **Data and AI in Urban Climate Science**<br>
  Sharar Ahmadi<br>
  Science Panel: AI and Data, Staverton, UK | Invited speaker | 30 June–2 July 2026

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
- **Applying delta-Z analysis to the WesCon field campaign**<br>
  Mark Muetzelfeldt, Brian Lo<br>
  INCUS Calibration/Validation meeting, Online | Invited talk | 9 February 2026
- **Top AI Agent Programming Tools**<br>
  Sharar Ahmadi<br>
  CMS Away Day, Penta Hotel, Reading, UK | Presentation | Jun 2025
- **SUEWS-STEBBS-DAVE**<br>
  Sharar Ahmadi<br>
  NCAS CMS Meeting, Department of Meteorology, University of Reading, UK | Presentation | 5 May 2026
- **Optimising DAVE**<br>
  Sharar Ahmadi<br>
  NCAS CMS Meeting, Department of Meteorology, University of Reading, UK | Presentation | 19 September 2025
- **CMORIZING**<br>
  Sharar Ahmadi<br>
  NCAS CMS Meeting, Department of Meteorology, University of Reading, UK | Presentation | 25 February 2025
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
      // A bold line, or a bold line that is a link (e.g. a title linking to the poster PDF).
      const n = real[0];
      return real.length === 1 && (n.nodeName === "STRONG" || (n.nodeName === "A" && n.children.length === 1 && n.firstElementChild.nodeName === "STRONG"));
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

    // The last day of an event from its date text, for example "2-3 Nov, 2026", "Nov 2-3, 2026",
    // "30 June–2 July 2026" or "Sep 2027". Returns the end of that day, or null without a year.
    const endOf = (text) => {
      const year = (text.match(/20\d\d/g) || []).pop();
      if (!year) return null;
      const re = /\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?/gi;
      let m;
      let last = null;
      while ((m = re.exec(text))) last = m;
      if (!last) return new Date(Number(year), 11, 31, 23, 59, 59);
      const month = months.findIndex((x) => x.slice(0, 3).toLowerCase() === last[1].toLowerCase());
      const after = text.slice(last.index + last[0].length).match(/^\s*(\d{1,2})(?:\s*[-–]\s*(\d{1,2}))?(?!\d)/);
      const before = text.slice(0, last.index).match(/(\d{1,2})\s*$/);
      const day = after ? Number(after[2] || after[1]) : before ? Number(before[1]) : new Date(Number(year), month + 1, 0).getDate();
      return new Date(Number(year), month, day, 23, 59, 59);
    };

    // AFESP events: keep upcoming events as cards and move past ones into a collapsible
    // "Past AFESP events" archive, grouped by year (newest first; only the newest year starts open).
    const archivePast = (h2, list, items) => {
      const now = new Date();
      const past = items.filter((li) => li.dataset.past === "1" || (li.dataset.end && new Date(li.dataset.end) < now));
      // Upcoming ones soonest first (events without a readable date go last).
      items
        .filter((li) => !past.includes(li))
        .sort((a, b) => (a.dataset.end ? new Date(a.dataset.end) : Infinity) - (b.dataset.end ? new Date(b.dataset.end) : Infinity))
        .forEach((li) => list.appendChild(li));
      const count = h2.querySelector(".ev-count");
      if (count) count.textContent = items.length - past.length;
      if (past.length === items.length) {
        const none = document.createElement("p");
        none.className = "ev-empty";
        none.textContent = "No upcoming AFESP events at the moment.";
        list.before(none);
      }
      if (!past.length) return;
      const byYear = new Map();
      past.forEach((li) => {
        const y = li.dataset.year;
        if (!byYear.has(y)) byYear.set(y, []);
        byYear.get(y).push(li);
      });
      const archive = document.createElement("details");
      archive.className = "ev-archive";
      const head = document.createElement("summary");
      head.innerHTML = `<span>Past AFESP events</span><span class="ev-year-count"></span>`;
      head.querySelector(".ev-year-count").textContent = past.length;
      archive.appendChild(head);
      Array.from(byYear.keys())
        .sort((a, b) => Number(b) - Number(a))
        .forEach((y, i) => {
          const det = document.createElement("details");
          det.className = "ev-year-group";
          det.open = i === 0;
          const sum = document.createElement("summary");
          sum.innerHTML = `<span class="ev-year-label"></span><span class="ev-year-count"></span>`;
          sum.querySelector(".ev-year-label").textContent = y;
          sum.querySelector(".ev-year-count").textContent = byYear.get(y).length;
          const ul = document.createElement("ul");
          ul.className = "ev-upcoming ev-past";
          byYear
            .get(y)
            .sort((a, b) => new Date(b.dataset.end) - new Date(a.dataset.end))
            .forEach((li) => ul.appendChild(li));
          det.append(sum, ul);
          archive.appendChild(det);
        });
      (list.children.length ? list : list.previousElementSibling || list).after(archive);
      if (!list.children.length) list.remove();
    };

    // Upcoming sections: turn each linked item into a card.
    const timelines = [];
    article.querySelectorAll("h2").forEach((h2) => {
      const list = h2.nextElementSibling;
      if (!list || list.tagName !== "UL") return;
      const afespEvents = /^afesp events/i.test(h2.textContent.trim());
      const upcoming = afespEvents || /^upcoming/i.test(h2.textContent.trim());
      const items = Array.from(list.children);
      const count = document.createElement("span");
      count.className = "ev-count";
      count.textContent = items.length;
      h2.appendChild(count);
      if (upcoming) {
        list.classList.add("ev-upcoming");
        items.forEach((li) => {
          // Linked items become link cards; items with only bold text become plain cards.
          let a = li.querySelector("a:not(.ev-doc)");
          const src = a || li.querySelector("strong");
          if (!src) return;
          const raw = src.textContent.trim().replace(/:$/, "");
          // Any text written under the item (after a <br>) becomes the card's description.
          const rest = li.cloneNode(true);
          rest.querySelector(a ? "a:not(.ev-doc)" : "strong").remove();
          rest.querySelectorAll("a.ev-doc").forEach((d) => d.remove());
          const desc = rest.textContent.trim();
          if (!a) a = document.createElement("div");
          // An AFESP event marked with an .ev-mark-past span goes into the archive straight away, before its last day ends.
          if (li.querySelector(".ev-mark-past")) li.dataset.past = "1";
          // Document links on the event's line (e.g. <a class="ev-doc">Agenda (PDF)</a>) are kept and shown on the card.
          const docs = Array.from(li.querySelectorAll("a.ev-doc"));
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
          const end = endOf(when);
          if (end) {
            li.dataset.end = end.toISOString();
            li.dataset.year = String(end.getFullYear());
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
          if (docs.length) {
            const box = document.createElement("span");
            box.className = "ev-docs";
            docs.forEach((d) => {
              d.addEventListener("click", (e) => e.stopPropagation());
              d.addEventListener("keydown", (e) => e.stopPropagation());
              box.append(d);
            });
            // A link can't sit inside a card that is itself a link, so it goes just below that kind of card.
            if (a.tagName === "A") li.append(box);
            else a.append(box);
          }
        });
        if (afespEvents) archivePast(h2, list, items);
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
        // Used to sort the entries newest first (by the last day given, or the end of the month when only a month is given).
        // Entries with only a year go to the bottom of their year.
        const last = endOf(date);
        const hasMonth = /\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i.test(date);
        if (last) li.dataset.sortDate = String(hasMonth ? last.getTime() : new Date(last.getFullYear(), 0, 1).getTime());
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
        // Newest first; entries with the same date keep the order they are written in.
        byYear
          .get(y)
          .slice()
          .sort((a, b) => Number(b.dataset.sortDate || 0) - Number(a.dataset.sortDate || 0))
          .forEach((li) => ul.appendChild(li));
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

    // AFESP events get their own column on the right of the page (on wide screens);
    // everything else stays in the main column on the left. On narrow screens AFESP events stay at the top.
    const afespH2 = Array.from(article.querySelectorAll(":scope > h2")).find((h) => /^afesp events/i.test(h.textContent.trim()));
    if (afespH2) {
      const side = document.createElement("aside");
      side.className = "ev-side";
      side.setAttribute("aria-label", "AFESP events");
      const sideNodes = [afespH2];
      let n = afespH2.nextSibling;
      while (n && !(n.nodeType === 1 && n.tagName === "H2")) {
        sideNodes.push(n);
        n = n.nextSibling;
      }
      const main = document.createElement("div");
      main.className = "ev-main";
      const layout = document.createElement("div");
      layout.className = "ev-layout";
      afespH2.before(layout);
      sideNodes.forEach((node) => side.appendChild(node));
      // The main column takes the rest of the page content, up to the contact addresses at the bottom.
      let m = layout.nextSibling;
      while (m && !(m.nodeType === 1 && (m.classList.contains("social") || m.tagName === "SCRIPT"))) {
        const nextNode = m.nextSibling;
        main.appendChild(m);
        m = nextNode;
      }
      layout.append(side, main);
    }

    // AFESP event cards open a window listing the AFESP members' contributions to that event,
    // taken from the "Contributions to ..." sections (entries whose conference name matches the event).
    const norm = (t) => (t || "").replace(/\s+/g, " ").trim().toLowerCase();
    const contribItems = Array.from(article.querySelectorAll("li.ev-item"));
    article.querySelectorAll(".ev-card.ev-afesp").forEach((card) => {
      const nameEl = card.querySelector(".ev-name");
      if (!nameEl) return;
      const name = norm(nameEl.textContent);
      const year = card.closest("li")?.dataset.year || "";
      const bare = name.replace(/\s*20\d\d$/, "");
      const matches = contribItems.filter((li) => {
        const ev = norm(li.querySelector(".ev-event")?.textContent);
        const title = norm(li.querySelector(".ev-title")?.textContent);
        if (ev === name) return true;
        // Entries written as just "AFESP Conference" match by year.
        return (ev === bare || (!ev && title === bare)) && li.dataset.year === year;
      });
      if (!matches.length) return;
      card.classList.add("ev-has-contribs");
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      const more = document.createElement("span");
      more.className = "ev-more";
      more.textContent = `View ${matches.length} contribution${matches.length === 1 ? "" : "s"} by AFESP members`;
      card.append(more);

      const dlg = document.createElement("dialog");
      dlg.className = "ev ev-dialog";
      const head = document.createElement("div");
      head.className = "ev-dialog-head";
      const h = document.createElement("h3");
      h.textContent = nameEl.textContent.trim();
      const close = document.createElement("button");
      close.type = "button";
      close.className = "ev-dialog-close";
      close.setAttribute("aria-label", "Close");
      close.textContent = "×";
      head.append(h, close);
      const sub = document.createElement("p");
      sub.className = "ev-dialog-sub";
      sub.textContent = `${matches.length} contribution${matches.length === 1 ? "" : "s"} by AFESP members`;
      dlg.append(head, sub);
      // Group by the date in each entry (e.g. one block per conference day), first day first,
      // keeping the programme order within each day.
      const groups = new Map();
      matches
        .slice()
        .sort((a, b) => Number(a.dataset.sortDate || 0) - Number(b.dataset.sortDate || 0))
        .forEach((li) => {
        const meta = li.querySelector(".ev-meta")?.textContent || "";
        const date = meta.split(" — ").pop().trim();
        if (!groups.has(date)) groups.set(date, []);
        groups.get(date).push(li);
      });
      groups.forEach((list, date) => {
        if (groups.size > 1 && date) {
          const dh = document.createElement("h4");
          dh.textContent = date;
          dlg.append(dh);
        }
        const ul = document.createElement("ul");
        ul.className = "ev-dialog-list";
        list.forEach((li) => {
          const item = document.createElement("li");
          item.dataset.kind = li.dataset.kind || "other";
          const add = (cls, el) => {
            if (!el) return;
            const span = document.createElement("span");
            span.className = cls;
            span.innerHTML = el.innerHTML;
            item.append(span);
          };
          add("ev-type", li.querySelector(".ev-type"));
          const title = li.querySelector(".ev-title");
          if (title && norm(title.textContent) !== bare) add("ev-title", title);
          li.querySelectorAll(".ev-authors").forEach((a) => add("ev-authors", a));
          ul.append(item);
        });
        dlg.append(ul);
      });
      document.body.append(dlg);
      const open = () => (typeof dlg.showModal === "function" ? dlg.showModal() : dlg.setAttribute("open", ""));
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });
      close.addEventListener("click", () => dlg.close());
      // Clicking the dimmed area outside the window closes it.
      dlg.addEventListener("click", (e) => {
        if (e.target === dlg) dlg.close();
      });
    });
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
