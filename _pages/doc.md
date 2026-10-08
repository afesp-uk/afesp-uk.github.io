---
layout: page
title: computational support
permalink: /doc/
nav: true
nav_order: 8
dropdown: false # the menu button now opens this page; set to true to restore the drop-down menu in the top bar
children:
  - title: Archer2
    permalink: /link-and-doc/archer2/
  - title: CDO
    permalink: /link-and-doc/cdo/
  - title: CEDA
    permalink: /link-and-doc/ceda/
  # - title: CF Compliance Checker # hidden for now; uncomment here and in support_pages below to show it again
  #   permalink: /link-and-doc/cf-checker/
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
  - title: Copernicus
    permalink: /link-and-doc/copernicus/
  - title: ECMWF
    permalink: /link-and-doc/ecmwf/
  - title: Jasmin
    permalink: /link-and-doc/jasmin/
  - title: LFRic
    permalink: /link-and-doc/lfric/
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

{% comment %} CF Compliance Checker is hidden; to show it again add "CF Compliance Checker|/link-and-doc/cf-checker/," after CEDA below. {% endcomment %}
{% assign support_pages = "Archer2|/link-and-doc/archer2/,CDO|/link-and-doc/cdo/,CEDA|/link-and-doc/ceda/,cfdm|/link-and-doc/cfdm/,cf-plot|/link-and-doc/cf-plot/,cf-python|/link-and-doc/cf-python/,cfunits|/link-and-doc/cfunits/,cf-view|/link-and-doc/cf-view/,Copernicus|/link-and-doc/copernicus/,ECMWF|/link-and-doc/ecmwf/,Jasmin|/link-and-doc/jasmin/,LFRic|/link-and-doc/lfric/,NCO Tools|/link-and-doc/nco/,RACC2|/link-and-doc/racc2/,SAFE|/link-and-doc/safe/,xancil|/link-and-doc/xancil/,xconv|/link-and-doc/xconv/,xconv2|/link-and-doc/xconv2/" | split: "," %}
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
