---
layout: page
title: "HiSCORE: High resolution data assimilation with Spatially and temporally Correlated ObseRvation Errors"
description: a project with a background image and giscus comments
img:
importance: 2
category: five-year projects
giscus_comments: true
---

**Principal Investigator**: Sarah Dance 

**Postdoctoral Research Scientist**: Rishabh Bhatt 

In the future, global numerical weather prediction (NWP) systems will run at kilometre-scale resolutions, allowing better representation of orography and treatment of convection. To fully realise these improvements, forecasts need to be initialised with observation information on appropriate scales. High-resolution satellite data are available. However, only 5-10% of these data are currently assimilated, largely due to a lack of knowledge about spatial and temporal observation uncertainties and the difficulties of taking them into account in NWP systems. Typically, observations are thinned to separation lengths where observation errors may be assumed uncorrelated, with the advantage of reducing the computational cost. Idealised studies have shown that representing correlated observation error covariances in the assimilation algorithm leads to significant improvements in analysis accuracy and forecast skill. However, there are open questions about the computational feasibility of these approaches for operational systems. Thus, the grand challenge addressed by this project is to improve NWP skill by enabling the assimilation of dense observation datasets using new, numerically efficient approaches to take into account the spatial and temporal structures of observation uncertainty. We will begin with research to provide a proof-of-concept using AMSU-A observations, and, once proven, extend this to other observation types. The first step is to estimate observation uncertainty structures, using assimilation residuals and metrological approaches. The next step is to develop novel numerical methods to implement these. 
