---
layout: page
title: "VaaSS: Vegetation as a Soil Sensor"
description: Towards a high-fidelity Integrated Forecasting System via ground-breaking and ambituous data-assimilation on the dynamic soil-vegetation hydraulic continuum.
img: assets/img/vass_img.png
importance: 2
category: five-year projects
---


**Principal Investigator**: Anne Verhoef 

**Postdoctoral Research Scientist**: Rajsekhar Kandala 

High-fidelity global-scale monitoring and modelling of the spatio-temporal variability of land surface processes and state variables, and their interactions and feedback with the atmosphere, is of crucial importance for reliable Numerical Weather Prediction (NWP) and climate modelling. In this context, key land surface state variables (LSSV) are the land surface temperature ( (LST, a complex mix of vegetation and soil surface temperatures), the near surface and rootzone soil moisture content, soil temperature, as well as snow albedo and snow density. These land surface state variables play a pivotal role in the energy-, water and carbon balance, as well as in the strength of Land-Atmosphere coupling, and how this is affected by soil moisture and soil heat storage ‘memories’. The LSSV, and the land surface characteristics (vegetation- and soil-related properties) and processes that determine them, play a strong role in the predictability of near surface atmospheric state variables (NSASV), such as atmospheric temperature and relative humidity. Despite the implementation of a steady stream of improvements in the ECMWF Integrated Forecasting System (IFS) in recent years (Sandu et al., 2020; Boussetta et al., 2021) there are still considerable and persistent biases in LSSV and NSASV, especially for specific regions, seasons and forecast ranges (beyond 2 weeks).  

 
Motivation and broad scientific approach: (i) The achievement of a significant reduction of NSASV biases, at a range of spatial and temporal scales, is an important motivation for the proposed research, for the benefit of Society through improved predictions and services. This requires maximum exploitation of the growing range of observations at ever-increasing spatio-temporal resolutions, including data obtained from sensors installed on airborne platforms (such as satellites) as well as in-situ data (from quality-controlled observatories). Continued and pro-active Earth Observation-driven model system development (Balsamo et al. 2018) of the coupled IFS Land Data Assimilation (DA) system (LDAS) and the ECLand model (Boussetta et al., 2021), will allow ECMWF and its collaborators to be prepared when new data from planned satellite missions become available. These kinds of developments form a central aspect of the ECMWF coupled land-atmosphere DA strategy (de Rosnay et al. 2022).  

ii) A related motive is the notion that there is a strong lack of realism in the representation of soil and vegetation in Land Models (LMs), including in ECLand, which will impede the predictability of LSSV and NSASV. Vegetation parameters, such as leaf area index (LAI) and vegetation albedo are prescribed, and even if the CO2 assimilation flux informs vegetation growth, the interactions between soil and vegetation are absent or poorly implemented. Moreover, important (interactions between) below-ground processes are missing (e.g. coupled heat- and water flow; Zeng et al., 2011). Additionally, soil parameters are static, defined once at model configuration stage (derived from globally distributed soil maps and empirical pedotransfer functions (PTFs), both of variable quality). PTFs link readily available soil properties (e.g. soil texture) to soil physical parameters (i.e. hydraulic parameters that determine water flow and storage) and thermal parameters (those that determine heat flow and storage), as well as to biogeochemical parameters for carbon/nutrient cycles (Van Looy et al., 2017). The choice and quality of the soil map and PTF leads to large uncertainties and affects model skill. Instead, here we propose the timely and ambitious implementation of a fully dynamic soil-vegetation system in the IFS (via novel developments of LDAS and ECLand), whereby the soil will be considered as a temporally variable medium that can be ‘monitored’ from above. Within the IFS we will enable interaction between soil model parameters, their environmental and anthropogenic drivers, and soil and plant processes, by leveraging the new Multi-Parameter Regionalisation framework (MPR) available from the IFS cycle 49r1. Via a combination of EO and in-situ data, novel DA and mechanistic model equations we will obtain the below-ground calibrated model properties. We will largely focus on the dynamics of the soil structure; here the pore-size distribution (PSD) is crucial. It is largely the PSD, and its spatio-temporal variability, that determines the hydraulic and thermal properties of soil. Soil scientists and agronomists already increasingly view the structure of the soil system and its properties as temporally variable. Efforts are underway to reflect this notion in LMs (Fatichi et al., 2020), which we will build on via expert elicitation and literature surveys. Soil physical properties vary on sub-monthly to seasonal timescales due to land use and management activities, such as tillage and livestock trampling; freeze-thaw effects; vegetation growth (e.g. the beneficial effect of biopores on soil hydraulic properties, and hence on infiltration, percolation, and groundwater recharge) and fire: Finally, impacts of environmental change (e.g. melting of permafrost, and reduction of soil organic matter due to increased soil respiration) will also affect the soil hydro-thermal properties; these effects are important for climate-scale modelling (see Robinson et al., 2019).  Key to these proposed developments (a dynamic soil-vegetation system with improved process descriptions, while making optimal use of EO and in-situ data via DA) is the need for a paradigm shift in the way we currently treat soil hydraulic and thermal theory in LMs. This requires a unifying soil hydro-thermal theory, whereby changes to soil structure (and related PSD) affect both hydraulic and thermal properties, with soil matric potential (ΨsΨs ) as the independent variable (Luo et al, 2022), rather than soil moisture content (θθ). The rationale is that mounting evidence suggests that accurate modelling (and monitoring) of the soil-plant hydraulic continuum, includingΨsΨs-based plant water stress functions, will lead to improved prediction of LSSV and fluxes (Verhoef & Egea, 2014; Sabot et al., 2020; Wang et al., 2021). Regulations of root zone hydraulic properties, plant water status and transpiration can be reliably predicted by theory of the soil-plant hydraulic continuum, considering both above- and below-ground hydraulic traits as well as phenological and physiological parameters. (iii) In this context, we will explore the use of a  ‘vegetation as a root-zone soil sensor’ (VaaSS) approach  for spatio-temporal derivation of subsurface properties, using satellite observables that capture key aspects of the soil-plant continuum, and related water-energy and carbon exchanges, across near (NIR), thermal (TIR) and shortwave (SWIR) infrared, and microwave domains (MW) for determination of vegetation optical depth (VOD), vegetation water content (VWC), and Solar-Induced Fluorescence (SIF) (e.g. Konings et al., 2019, 2021). Fig. 1 provides a summary of the proposed approach. This diagram concerns the STEMMUS-SCOPE model, that combines a state-of-the-art soil physics model (STEMMUS: Zeng et al., 2013; Yu et al., 2018) with the SCOPE ‘Soil Canopy Observation’ model (Van der Tol et al., 2009). The ground-breaking approach described above will be implemented, tested and honed first with the STEMMUS-SCOPE model before we incorporate it into the ECLand-DA system, and subject it to detailed evaluation.


## References

Balsamo, G et al. (2018) Satellite and In Situ Observations for Advancing Global Earth Surface Modelling: A Review, doi: 10.3390/rs10122038; Boussetta S, Balsamo G… de Rosnay, P et al. (2021) ECLand: The ECMWF Land Surface Modelling System, doi: 10.3390/atmos12060723; Boussetta, S, Balsamo, G et al. (2013) Impact of a satellite-derived leaf area index monthly climatology in a global numerical weather prediction model, doi: 10.1080/01431161.2012.716543; de Rosnay, P…Balsamo, G, et al. (2022) Coupled data assimilation at ECMWF: current status, challenges and future developments, doi: 10.1002/qj.4330; de Rosnay, P et al. (2020) SMOS brightness temperature forward modelling and long term monitoring at ECMWF, doi: 10.1016/j.rse.2019. 111424; Fatichi, S et al. (2020) Soil structure is an important omission in Earth System Models, doi:10.1038/s41467-020-14411-z; Konings, A G et al. (2019). Macro to micro: microwave remote sensing of plant water content for physiology and ecology, doi:10.1111/nph.15808; Konings, A G et al., (2021) Detecting forest response to droughts with global observations of vegetation water content, doi:10.1111/GCB.15872;  Luo S. et al. (2022) Soil water potential: A historical perspective and recent breakthroughs, 10.1002/vzj2.20203; Robinson, D A et al. (2019) Global environmental changes impact soil hydraulic functions through biophysical feedbacks, doi:10.1111/GCB.14626; Sabot, M…Verhoef, A et al. (2020) Plant profit maximisation improves predictions of European forest responses to drought, doi: 10.1111/nph.16376; Sandu I, et al. (2020) Addressing near-surface forecast biases: outcomes of the ECMWF project ‘Understanding uncertainties in surface atmosphere exchange’, doi: 10.21957/wxjwsojvf; Van der Tol, C…Verhoef, A, Su, Z (2009). An integrated model of soil-canopy spectral radiances, photosynthesis, fluorescence, temperature and energy balance, doi: 10.5194/bg-6-3109-2009; Van Looy K.., Verhoef A et al. (2017) Pedotransfer functions in Earth system science: Challenges and perspectives, doi.org/10.1002/2017RG000581; Verhoef, A & Egea, G (2014) Modelling plant transpiration under limited soil water: comparison of different plant and soil hydraulic parameterizations and preliminary implications for their use in land surface models, doi:10.1016/ j.agrformet.2014.02.009; Wang, Y, Zeng, Y, et al. (2021). Integrated modelling of canopy photosynthesis, fluorescence, and the transfer of energy, mass, and momentum in the soil–plant–atmosphere continuum (STEMMUS–SCOPEv1.0.0), doi:10.5194/gmd-14-1379-2021; Yu, L, Zeng, Y, et al. (2018) Liquid-Vapor-Air Flow in the Frozen Soil, doi: 10.1029/2018jd028502; Zeng, Y et al. (2011) A simulation analysis of the advective effect on evaporation using a two-phase heat and mass flow model, doi:10.1029/2011WR010701; Zeng, Y & Su, Z (2013) STEMMUS: Simultaneous Transfer of Energy, Mass and Momentum in Unsaturated Soil. (ITC-WRS Report). University of Twente, Faculty of Geo-Information and Earth Observation (ITC), Enschede, The Netherlands, pp. 6161–6164. 





Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
