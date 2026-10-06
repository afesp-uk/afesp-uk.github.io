---
layout: page
title: computational support
permalink: /doc/
nav: true
nav_order: 8
dropdown: false # the menu button now opens this page; set to true to restore the drop-down menu in the top bar
children:
  - title: Jasmin
    permalink: /link-and-doc/jasmin/
  - title: Archer2
    permalink: /link-and-doc/archer2/
  - title: LFRic
    permalink: /link-and-doc/lfric/
  - title: RACC2
    permalink: /link-and-doc/racc2/
---

<style>
  .support-section {
    margin-bottom: 0.75rem;
  }
  .support-section > summary {
    font-size: 1.15rem;
    cursor: pointer;
  }
  .support-section > .support-content {
    margin: 0.5rem 0 0 1.25rem;
  }
</style>

{% assign support_pages = "Jasmin|/link-and-doc/jasmin/,Archer2|/link-and-doc/archer2/,LFRic|/link-and-doc/lfric/,RACC2|/link-and-doc/racc2/" | split: "," %}
{% for entry in support_pages %}
{% assign parts = entry | split: "|" %}
{% assign support_page = site.pages | where: "permalink", parts[1] | first %}
<details class="support-section">
<summary><strong>{{ parts[0] }}</strong></summary>
<div class="support-content">
{{ support_page.content | markdownify }}
</div>
</details>
{% endfor %}
