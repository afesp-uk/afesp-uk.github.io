---
layout: page
title: "ALOFT: Aligning organized features in coarse- and high-resolution simulations"
description: Towards an improved representation of organized deep convection in sub-seasonal-to-seasonal models
img: assets/img/aloft_card.jpg
importance: 2
category: fellowships
---

**Fellow**: Mark Muetzelfeldt

**Project Partners**: Alison Stirling, Cyril Morcrette, and Eviatar Bach

A key benefit of using km-scale models is that they can represent deep convection explicitly. This is highly desirable for global models because it allows them to represent the two-way scale interactions between individual cumulonimbus
clouds and the larger scales.
At coarser model resolutions, convection must be parametrized, and this makes it difficult to represent mesoscale convective systems (MCSs) realistically. What if we could use high-resolution models to improve convective organization in
the coarser models?

I will explore this question by using newly developed km-scale models as a source of truth. Spectral nudging, a technique that nudges one model towards another above a given spatial scale, will align a lower-resolution sub-seasonal
target model with the km-scale source model.
In particular, I will rely on the km-scale model's ability to represent MCSs more faithfully. Aligning the low- and high-resolution models will make it possible to compare MCSs between both resolutions in unprecedented detail:

* **Structural comparison of MCSs:** The spectral nudging will mean that MCSs often occur at the same time and location in the source and target models. This will allow for a like-for-like comparison of MCSs under the same environmental conditions at two resolutions.
* **Nudging increments:** The increments used to nudge the target closer to the source provide key information about how the models' representations of MCSs differ.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/aloft_img.jpg" title="Aligning coarse- and high-resolution simulations" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Representation of the same mesoscale convective system on a km-scale grid (left) and a coarser grid (right): aligning the two models lets features be compared like for like. Image: Alex Gerst, ISS
</div>

The novel information on MCS structure at different resolutions will allow me to improve the representation of organized deep convection in the target model. Working closely with the CoMorph developers, I will design and test changes to the convection parametrization that improve the scale interactions in the Met Office Unified Model (UM). The nudging increments will also facilitate this, as well as forming a rich dataset mapping the biases of the target model compared to the source, which will be ripe for machine learning applications. An innovative parameter estimation framework will allow us to automatically tune CoMorph to optimally match the high-resolution source. Improving the representation of MCSs in the sub-seasonal models could translate to a better forecast of extreme precipitation events. The enhanced scale interactions stand to improve the modelling of larger-scale phenomena such as the Indian Summer Monsoon (ISM) or the Madden-Julian Oscillation (MJO), leading to improved longer-term predictability.
