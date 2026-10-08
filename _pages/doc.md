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
  - title: CEDA
    permalink: /link-and-doc/ceda/
  - title: ECMWF
    permalink: /link-and-doc/ecmwf/
  - title: Copernicus
    permalink: /link-and-doc/copernicus/
  - title: cf-python
    permalink: /link-and-doc/cf-python/
  - title: cf-plot
    permalink: /link-and-doc/cf-plot/
  - title: cf-view
    permalink: /link-and-doc/cf-view/
  - title: xconv2
    permalink: /link-and-doc/xconv2/
  - title: cfdm
    permalink: /link-and-doc/cfdm/
  - title: cfunits
    permalink: /link-and-doc/cfunits/
  - title: CDO
    permalink: /link-and-doc/cdo/
  - title: CF Compliance Checker
    permalink: /link-and-doc/cf-checker/
  - title: NCO Tools
    permalink: /link-and-doc/nco/
  - title: xconv
    permalink: /link-and-doc/xconv/
  - title: xancil
    permalink: /link-and-doc/xancil/
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

{% assign support_pages = "Jasmin|/link-and-doc/jasmin/,Archer2|/link-and-doc/archer2/,LFRic|/link-and-doc/lfric/,RACC2|/link-and-doc/racc2/,CEDA|/link-and-doc/ceda/,ECMWF|/link-and-doc/ecmwf/,Copernicus|/link-and-doc/copernicus/,cf-python|/link-and-doc/cf-python/,cf-plot|/link-and-doc/cf-plot/,cf-view|/link-and-doc/cf-view/,xconv2|/link-and-doc/xconv2/,cfdm|/link-and-doc/cfdm/,cfunits|/link-and-doc/cfunits/,CDO|/link-and-doc/cdo/,CF Compliance Checker|/link-and-doc/cf-checker/,NCO Tools|/link-and-doc/nco/,xconv|/link-and-doc/xconv/,xancil|/link-and-doc/xancil/" | split: "," %}
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

<div class="social">
  <div class="contact-note">
    <a href="mailto:s.ahmadi@reading.ac.uk">s.ahmadi@reading.ac.uk</a>
  </div>
</div>
