---
layout: page
permalink: /ai/
title: AI
description: Workshops, conferences and news on artificial intelligence and machine learning in weather and climate science.
nav: true
nav_order: 4.5
# AFESP projects shown in the "AI in AFESP" section (file names in _projects/, without .md).
ai_projects:
  - file: 1_project
  - file: phd_fernanda_pino_delgado
    student: Fernanda Pino Delgado
  - file: phd_jesse_gilbert
    student: Jesse Gilbert
  - file: phd_karan_ruparell
    student: Karan Ruparell
  - file: phd_leong_wang_chung
    student: Leong Wang Chung
  - file: phd_marco_burderi
    student: Marco Burderi
  - file: phd_mehzooz_nizar
    student: Mehzooz Nizar
  - file: phd_ravi_shankar_nemani
    student: Ravi Shankar Nemani
  - file: phd_sambit_kumar_panda
    student: Sambit Kumar Panda
---

<!-- Events and news are kept in _data/ai.yml. Add an entry there and it appears here, sorted by date;
     finished events move from "Upcoming" to "Recent" by themselves. -->

<style>
  .ai {
    --ai-a: #1565c0;
    --ai-b: #6a3fb5;
    --ai-c: #00897b;
    --ai-line: var(--global-divider-color);
    --ai-card: var(--global-card-bg-color);
    --ai-muted: var(--global-text-color-light);
  }
  html[data-theme="dark"] .ai {
    --ai-a: #64b5f6;
    --ai-b: #b39ddb;
    --ai-c: #4db6ac;
  }
  .post > .post-header {
    margin-bottom: 1.5rem;
  }
  /* Hero */
  .ai-hero {
    position: relative;
    overflow: hidden;
    border-radius: 18px;
    padding: 1.8rem 1.8rem 1.6rem;
    color: #fff;
    background: linear-gradient(120deg, #0d47a1 0%, #4527a0 55%, #00796b 100%);
    box-shadow: 0 10px 30px rgba(30, 40, 120, 0.25);
  }
  .ai-hero canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0.55;
    pointer-events: none;
  }
  .ai-hero > *:not(canvas) {
    position: relative;
  }
  .ai-hero p,
  .ai-hero .ai-stat,
  .ai-hero .ai-stat b,
  .ai-hero .ai-stat span,
  .ai-hero .ai-next {
    color: #fff !important;
  }
  .ai-hero h2 {
    color: #fff !important;
    font-size: 1.7rem;
    font-weight: 800;
    margin: 0 0 0.5rem;
    border: 0 !important;
  }
  .ai-hero p {
    margin: 0;
    max-width: 46rem;
    font-size: 1.02rem;
    opacity: 0.95;
  }
  .ai-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-top: 1.2rem;
  }
  .ai-stat {
    background: rgba(255, 255, 255, 0.14);
    border: 1px solid rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(4px);
    border-radius: 12px;
    padding: 0.5rem 0.9rem;
    min-width: 7.5rem;
  }
  .ai-stat b {
    display: block;
    font-size: 1.6rem;
    line-height: 1.1;
  }
  .ai-stat span {
    font-size: 0.82rem;
    opacity: 0.9;
  }
  .ai-next {
    margin-top: 1rem;
    font-size: 0.92rem;
  }
  .ai-next a {
    color: #fff;
    font-weight: 700;
    text-decoration: underline;
  }
  /* Section headings */
  .ai h2.ai-h {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-top: 2.4rem;
    color: var(--ai-a);
  }
  .ai h2.ai-h .ai-count {
    font-size: 0.8rem;
    font-weight: 700;
    padding: 0.1rem 0.6rem;
    border-radius: 999px;
    background: var(--ai-a);
    color: #fff;
  }
  /* Filter chips */
  .ai-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin: 0.6rem 0 1rem;
  }
  .ai-chip {
    border: 1px solid var(--ai-line);
    background: transparent;
    color: inherit;
    border-radius: 999px;
    padding: 0.2rem 0.85rem;
    font-size: 0.88rem;
    cursor: pointer;
  }
  .ai-chip.active {
    background: var(--ai-a);
    border-color: var(--ai-a);
    color: #fff;
  }
  /* Event cards */
  .ai-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .ai-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1rem 1.1rem 1.05rem;
    border-radius: 14px;
    border: 1px solid var(--ai-line);
    background: var(--ai-card);
    color: var(--global-text-color) !important;
    text-decoration: none !important;
    position: relative;
    overflow: hidden;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }
  .ai-card::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--ai-a), var(--ai-b), var(--ai-c));
  }
  .ai-card:hover,
  .ai-card:focus-visible {
    transform: translateY(-3px);
    box-shadow: 0 12px 26px rgba(40, 50, 140, 0.16);
  }
  .ai-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.45rem;
  }
  .ai-date {
    font-weight: 800;
    color: var(--ai-a);
  }
  .ai-kind {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 0.1rem 0.5rem;
    border-radius: 999px;
    background: rgba(106, 63, 181, 0.12);
    color: var(--ai-b);
  }
  .ai-title {
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 0.3rem;
  }
  .ai-meta {
    font-size: 0.85rem;
    color: var(--ai-muted);
    margin-bottom: 0.45rem;
  }
  .ai-sum {
    font-size: 0.9rem;
    flex: 1;
  }
  .ai-soon {
    align-self: flex-start;
    margin-top: 0.7rem;
    font-size: 0.78rem;
    font-weight: 700;
    padding: 0.15rem 0.6rem;
    border-radius: 999px;
    background: rgba(0, 137, 123, 0.13);
    color: var(--ai-c);
  }
  .ai-soon.now {
    background: #e53935;
    color: #fff;
    animation: ai-pulse 1.6s ease-in-out infinite;
  }
  @keyframes ai-pulse {
    50% {
      opacity: 0.65;
    }
  }
  .ai-recent .ai-card {
    opacity: 0.88;
  }
  .ai-recent .ai-card::before {
    background: var(--ai-line);
  }
  .ai-recent .ai-date {
    color: var(--ai-muted);
  }
  /* News timeline */
  .ai-news {
    list-style: none;
    padding: 0 0 0 1.4rem;
    margin: 0;
    border-left: 3px solid transparent;
    border-image: linear-gradient(var(--ai-a), var(--ai-b), var(--ai-c)) 1;
  }
  .ai-news li {
    position: relative;
    margin-bottom: 1.15rem;
  }
  .ai-news li::before {
    content: "";
    position: absolute;
    left: calc(-1.4rem - 8px);
    top: 0.35rem;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: var(--global-bg-color, #fff);
    border: 3px solid var(--ai-b);
  }
  .ai-news .ai-ndate {
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--ai-b);
  }
  .ai-news a.ai-ntitle {
    display: block;
    font-weight: 700;
    font-size: 1.02rem;
    color: var(--global-text-color);
  }
  .ai-news a.ai-ntitle:hover {
    color: var(--ai-a);
  }
  .ai-news .ai-nsrc {
    font-size: 0.82rem;
    color: var(--ai-muted);
  }
  .ai-news p {
    margin: 0.2rem 0 0;
    font-size: 0.92rem;
  }
  .ai-tag {
    display: inline-block;
    margin-left: 0.4rem;
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    padding: 0.05rem 0.45rem;
    border-radius: 999px;
    background: #1f9d55;
    color: #fff;
    vertical-align: middle;
  }
  /* AFESP projects */
  .ai-proj {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 0.8rem;
  }
  .ai-proj a {
    display: block;
    padding: 0.8rem 0.95rem;
    border-radius: 12px;
    border: 1px solid var(--ai-line);
    border-left: 4px solid var(--ai-c);
    background: var(--ai-card);
    color: var(--global-text-color) !important;
    text-decoration: none !important;
    font-size: 0.92rem;
    line-height: 1.35;
    transition: transform 0.2s ease;
  }
  .ai-proj a:hover {
    transform: translateY(-2px);
  }
  .ai-proj small {
    display: block;
    margin-top: 0.35rem;
    color: var(--ai-muted);
  }
  .ai-empty {
    color: var(--ai-muted);
    font-style: italic;
  }
  .ai-reveal {
    opacity: 0;
    transform: translateY(14px);
    transition:
      opacity 0.5s ease,
      transform 0.5s ease;
  }
  .ai-reveal.shown {
    opacity: 1;
    transform: none;
  }
  @media (prefers-reduced-motion: reduce) {
    .ai-reveal {
      opacity: 1;
      transform: none;
      transition: none;
    }
    .ai-soon.now {
      animation: none;
    }
  }
</style>

{% assign ai_events = site.data.ai.events | sort: "start" %}
{% assign ai_news = site.data.ai.news | sort: "date" | reverse %}

<div class="ai">
  <div class="ai-hero">
    <canvas aria-hidden="true"></canvas>
    <h2>AI in weather and climate science</h2>
    <p>
      Machine learning is changing how we observe, model and predict the Earth system. This page collects upcoming and recent workshops,
      conferences and news on AI for weather and climate, and the AFESP projects working in this area.
    </p>
    <div class="ai-stats">
      <div class="ai-stat"><b data-stat="upcoming">–</b><span>upcoming events</span></div>
      <div class="ai-stat"><b>{{ ai_news | size }}</b><span>news stories</span></div>
      <div class="ai-stat"><b>{{ page.ai_projects | size }}</b><span>AFESP AI projects</span></div>
    </div>
    <div class="ai-next" hidden></div>
  </div>

  <h2 class="ai-h" id="upcoming">Upcoming workshops &amp; conferences <span class="ai-count" data-count="upcoming"></span></h2>
  <div class="ai-chips" role="group" aria-label="Filter events by type">
    <button type="button" class="ai-chip active" data-kind="all">All</button>
    <button type="button" class="ai-chip" data-kind="Workshop">Workshops</button>
    <button type="button" class="ai-chip" data-kind="Conference">Conferences</button>
    <button type="button" class="ai-chip" data-kind="Webinar">Webinars &amp; seminars</button>
  </div>
  <ul class="ai-grid ai-upcoming">
    {% for e in ai_events %}
      {% assign e_end = e.end | default: e.start %}
      <li
        class="ai-reveal"
        data-start="{{ e.start | date: '%Y-%m-%d' }}"
        data-end="{{ e_end | date: '%Y-%m-%d' }}"
        data-kind="{{ e.kind }}"
      >
        <a class="ai-card" href="{{ e.url }}" target="_blank" rel="noopener">
          <div class="ai-top">
            <span class="ai-date">
              {%- if e.end and e.end != e.start -%}
                {{ e.start | date: '%-d %b' }} – {{ e.end | date: '%-d %b %Y' }}
              {%- else -%}
                {{ e.start | date: '%-d %b %Y' }}
              {%- endif -%}
            </span>
            <span class="ai-kind">{{ e.kind }}</span>
          </div>
          <div class="ai-title">{{ e.title }}</div>
          <div class="ai-meta">{{ e.organiser }} · {{ e.location }}</div>
          <div class="ai-sum">{{ e.summary }}</div>
        </a>
      </li>
    {% endfor %}
  </ul>
  <p class="ai-empty" data-empty="upcoming" hidden>No upcoming events listed yet.</p>

  <h2 class="ai-h" id="recent">Recent events <span class="ai-count" data-count="recent"></span></h2>
  <ul class="ai-grid ai-recent"></ul>

  <h2 class="ai-h" id="news">News</h2>
  <ul class="ai-news">
    {% for n in ai_news %}
      <li class="ai-reveal">
        <span class="ai-ndate">{{ n.date | date: '%-d %B %Y' }}</span>
        {%- if n.afesp %}<span class="ai-tag">AFESP</span>{% endif %}
        <a class="ai-ntitle" href="{{ n.url }}" target="_blank" rel="noopener">{{ n.title }}</a>
        <span class="ai-nsrc">{{ n.source }}</span>
        <p>{{ n.summary }}</p>
      </li>
    {% endfor %}
  </ul>

  <h2 class="ai-h" id="afesp-ai">AI in AFESP</h2>
  <p>AFESP-funded projects that use or develop AI and machine learning:</p>
  <div class="ai-proj">
    {% for item in page.ai_projects %}
      {% assign proj_path = "_projects/" | append: item.file | append: ".md" %}
      {% assign proj = site.projects | where: "relative_path", proj_path | first %}
      {% if proj %}
        <a href="{{ proj.url | relative_url }}" class="ai-reveal">
          {{ proj.title }}
          {% if item.student %}
            <small>PhD project · {{ item.student }}</small>
          {% else %}
            <small>{{ proj.category | capitalize }}</small>
          {% endif %}
        </a>
      {% endif %}
    {% endfor %}
  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector(".ai");
    if (!root) return;
    const upcoming = root.querySelector(".ai-upcoming");
    const recent = root.querySelector(".ai-recent");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const day = 86400000;
    const parse = (s) => {
      const [y, m, d] = s.split("-").map(Number);
      return new Date(y, m - 1, d);
    };

    // Move finished events to "Recent" (newest first) and label the upcoming ones with a countdown.
    const items = Array.from(upcoming.children);
    items
      .filter((li) => parse(li.dataset.end) < today)
      .sort((a, b) => parse(b.dataset.end) - parse(a.dataset.end))
      .forEach((li) => recent.appendChild(li));
    let next = null;
    Array.from(upcoming.children).forEach((li) => {
      const start = parse(li.dataset.start);
      const days = Math.round((start - today) / day);
      const badge = document.createElement("span");
      badge.className = "ai-soon";
      if (days <= 0) {
        badge.textContent = "Happening now";
        badge.classList.add("now");
      } else if (days === 1) {
        badge.textContent = "Tomorrow";
      } else if (days < 60) {
        badge.textContent = `In ${days} days`;
      } else {
        badge.textContent = `In ${Math.round(days / 30)} months`;
      }
      li.querySelector(".ai-card").appendChild(badge);
      if (!next) next = { li, days };
    });

    const counts = () => {
      const visible = (list) => Array.from(list.children).filter((li) => !li.hidden).length;
      root.querySelector('[data-count="upcoming"]').textContent = visible(upcoming);
      root.querySelector('[data-count="recent"]').textContent = visible(recent);
      root.querySelector('[data-empty="upcoming"]').hidden = visible(upcoming) > 0;
    };
    counts();

    // Count-up for the number of upcoming events, and a "next up" line in the banner.
    const stat = root.querySelector('[data-stat="upcoming"]');
    const total = upcoming.children.length;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      stat.textContent = total;
    } else {
      const t0 = performance.now();
      const step = (now) => {
        const k = Math.min(1, (now - t0) / 900);
        stat.textContent = Math.round(total * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
    if (next) {
      const box = root.querySelector(".ai-next");
      const title = next.li.querySelector(".ai-title").textContent;
      const href = next.li.querySelector("a").href;
      const when = next.days <= 0 ? "happening now" : next.days === 1 ? "tomorrow" : `in ${next.days} days`;
      box.innerHTML = `Next up, ${when}: <a target="_blank" rel="noopener"></a>`;
      box.querySelector("a").textContent = title;
      box.querySelector("a").href = href;
      box.hidden = false;
    }

    // Filter chips (apply to both upcoming and recent events).
    root.querySelectorAll(".ai-chip").forEach((chip) =>
      chip.addEventListener("click", () => {
        root.querySelectorAll(".ai-chip").forEach((c) => c.classList.toggle("active", c === chip));
        const kind = chip.dataset.kind;
        root.querySelectorAll(".ai-grid > li").forEach((li) => {
          const k = li.dataset.kind;
          li.hidden = !(kind === "all" || k === kind || (kind === "Webinar" && k === "Seminar"));
        });
        counts();
      }),
    );

    // Fade cards in as they scroll into view.
    const reveal = root.querySelectorAll(".ai-reveal");
    if (reduce || !("IntersectionObserver" in window)) {
      reveal.forEach((el) => el.classList.add("shown"));
    } else {
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("shown");
              io.unobserve(en.target);
            }
          }),
        { rootMargin: "0px 0px -30px 0px" },
      );
      reveal.forEach((el) => io.observe(el));
    }

    // A slowly drifting network of nodes in the banner.
    const canvas = root.querySelector(".ai-hero canvas");
    const ctx = canvas.getContext && canvas.getContext("2d");
    if (!ctx) return;
    let w, h, nodes;
    const setup = () => {
      const r = canvas.getBoundingClientRect();
      w = canvas.width = r.width * devicePixelRatio;
      h = canvas.height = r.height * devicePixelRatio;
      const n = Math.max(18, Math.round((r.width * r.height) / 9000));
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.35 * devicePixelRatio,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const link = 120 * devicePixelRatio;
      nodes.forEach((a, i) => {
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < link) {
            ctx.strokeStyle = `rgba(255,255,255,${0.35 * (1 - d / link)})`;
            ctx.lineWidth = devicePixelRatio;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      });
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      nodes.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.2 * devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    const tick = () => {
      nodes.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      });
      draw();
      requestAnimationFrame(tick);
    };
    setup();
    window.addEventListener("resize", setup);
    if (reduce) draw();
    else tick();
  });
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
