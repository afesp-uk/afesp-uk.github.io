---
layout: page
permalink: /useful-links/
title: useful links
description: Videos, recordings and other resources for the AFESP community
nav: true
nav_order: 12
---

<style>
  /* Capitalised page heading only; the top menu keeps "useful links" in lower case like the other menu items. */
  .post > .post-header .post-title {
    text-transform: capitalize;
  }
  .ul-list {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem 0;
    display: grid;
    gap: 0.75rem;
  }
  .ul-list a {
    display: flex;
    gap: 0.9rem;
    align-items: flex-start;
    padding: 0.9rem 1.1rem;
    border: 1px solid var(--global-divider-color);
    border-left: 4px solid var(--global-theme-color);
    border-radius: 12px;
    background: var(--global-card-bg-color);
    color: var(--global-text-color);
    text-decoration: none;
    transition: border-color 0.15s ease, transform 0.15s ease;
  }
  .ul-list a:hover,
  .ul-list a:focus-visible {
    border-color: var(--global-theme-color);
    transform: translateY(-2px);
    text-decoration: none;
  }
  .ul-list i {
    flex: none;
    font-size: 1.5rem;
    color: var(--global-theme-color);
    margin-top: 0.15rem;
  }
  .ul-list strong {
    display: block;
    font-size: 1.05rem;
  }
  .ul-list span {
    color: var(--global-text-color-light);
    font-size: 0.92rem;
  }
  @media (prefers-reduced-motion: reduce) {
    .ul-list a {
      transition: none;
    }
  }
</style>

<!-- To add a link, copy one <li> block below and change the URL, title and description. -->

## Videos and recordings

<ul class="ul-list">
  <li>
    <a href="https://www.youtube.com/playlist?list=PLWrpSTl9Fi_c">
      <i class="fa-brands fa-youtube" aria-hidden="true"></i>
      <div>
        <strong>CF Workshop 2026 – ECMWF, Bonn, Germany</strong>
        <span>YouTube playlist of talks from the CF (Climate and Forecast) metadata conventions workshop, from the CF Conventions channel.</span>
      </div>
    </a>
  </li>
</ul>
