---
layout: page
permalink: /highlights/
title: highlights
description: Research highlights and scientific achievements from across the AFESP programme.
nav: false
---

<!-- Highlights are kept in _data/highlights.yml. Add an entry there and it appears here, newest first. -->

<style>
  .post > .post-header .post-title {
    text-transform: capitalize;
  }
  .hl-list {
    display: grid;
    gap: 1.75rem;
    margin-top: 0.5rem;
  }
  .hl {
    border: 1px solid var(--global-divider-color);
    border-top: 5px solid #e0a020;
    border-radius: 14px;
    background: var(--global-card-bg-color);
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(20, 50, 90, 0.06);
  }
  .hl-body {
    padding: 1.2rem 1.4rem 1.3rem;
  }
  .hl-date {
    font-size: 0.85rem;
    font-weight: 700;
    color: #b26a00;
    letter-spacing: 0.02em;
  }
  html[data-theme="dark"] .hl-date {
    color: #f0b35a;
  }
  .hl h2 {
    margin: 0.25rem 0 0.4rem;
    font-size: 1.45rem;
    line-height: 1.3;
  }
  .hl-people {
    font-size: 0.92rem;
    color: var(--global-text-color-light);
    margin-bottom: 0.9rem;
  }
  .hl figure {
    margin: 0 0 1rem;
  }
  .hl figure img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 10px;
    background: #fff;
  }
  .hl figcaption {
    margin-top: 0.4rem;
    font-size: 0.85rem;
    color: var(--global-text-color-light);
  }
  .hl-text p {
    text-align: justify;
  }
  .hl-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.4rem;
  }
  .hl-links a {
    display: inline-block;
    padding: 0.3rem 0.85rem;
    border-radius: 999px;
    border: 1px solid var(--global-divider-color);
    font-size: 0.88rem;
    text-decoration: none;
  }
  .hl-links a:hover {
    border-color: var(--global-theme-color);
  }
</style>

{% assign highlights = site.data.highlights | sort: "date" | reverse %}

<div class="hl-list">
  {% for h in highlights %}
    <article class="hl" id="{{ h.title | slugify }}">
      <div class="hl-body">
        <div class="hl-date">{{ h.date | date: '%-d %B %Y' }}</div>
        <h2>{{ h.title }}</h2>
        {% if h.people %}
          <div class="hl-people">
            {%- for p in h.people -%}
              {%- if p.anchor -%}
                <a href="{{ '/people/' | relative_url }}#{{ p.anchor }}">{{ p.name }}</a>
              {%- else -%}
                {{ p.name }}
              {%- endif -%}
              {%- unless forloop.last %}, {% endunless -%}
            {%- endfor -%}
          </div>
        {% endif %}
        {% if h.image %}
          <figure>
            <img src="{{ '/assets/img/' | append: h.image | relative_url }}" alt="{{ h.image_alt | escape }}" loading="lazy">
            {% if h.caption %}<figcaption>{{ h.caption }}</figcaption>{% endif %}
          </figure>
        {% endif %}
        <div class="hl-text">
          {% for para in h.text %}
            <p>{{ para }}</p>
          {% endfor %}
        </div>
        <div class="hl-links">
          {% if h.project %}
            {% assign hl_proj = site.projects | where: "url", h.project | first %}
            <a href="{{ h.project | relative_url }}">Project{% if hl_proj %}: {{ hl_proj.title | truncatewords: 8 }}{% endif %}</a>
          {% endif %}
          {% for l in h.links %}
            <a href="{{ l.url }}" target="_blank" rel="noopener">{{ l.title }}</a>
          {% endfor %}
        </div>
      </div>
    </article>
  {% endfor %}
</div>
