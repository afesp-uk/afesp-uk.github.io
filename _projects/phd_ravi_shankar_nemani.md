---
layout: page
title: "Machine Learning-Driven Background Error Covariances for Sub-km Data Assimilation"
description:
img:
importance: 9
category: PhD projects
---

**Supervisor**: Ross Bannister

**PhD Student**: Ravi Shankar Nemani

**Supervisory Team**:

- Dr Ross N Bannister (Lead), University of Reading & NCEO
- Prof Amos S Lawless, University of Reading & NCEO
- Dr Christopher Thomas, Met Office@Reading
- Dr Hong Wei, University of Reading (Computer Science)

**Description**: Numerical weather prediction models are advancing towards sub-kilometre grid scales (100–300 m), where atmospheric convection and sharp boundary-layer inversions are explicitly resolved. At these scales, forecast errors become strongly flow-dependent, highly localised, and anisotropic. Traditional operational variational data assimilation (VarDA) models the background error covariance matrix **B** via control-variable transforms (**B** = **UU**ᵀ), where a static, climatological vertical transform **U**ᵥ blurs sharp gradients and risks unphysically spreading observational increments across capping inversions. While an Ensemble of Data Assimilations (EDA) can provide flow-dependent vertical error covariances, generating high-resolution ensembles is computationally prohibitive within operational forecasting time windows.

This research project explores whether machine learning can estimate ensemble-quality, flow-dependent vertical background error covariances for sub-kilometre data assimilation directly from a single deterministic forecast—circumventing the need to run costly ensembles in real time. Using high-resolution model data from the Met Office Wessex model (WMV, 300 m, 70 levels), the project investigates neural network architectures trained offline to predict positive-definite vertical error covariance matrices (**B** = **LL**ᵀ). These machine learning-predicted covariances are evaluated against ensemble benchmarks and tested within variational data assimilation frameworks to enable ensemble-like covariance quality at deterministic computational cost.

**Acknowledgement**: This research is supported by the AFESP-DTP at the University of Reading, with additional funding and collaboration through the Met Office CASE Award and the National Centre for Earth Observation (NCEO), UK.

<div class="social">
  <div class="contact-note">
    <a href="mailto:r.n.bannister@reading.ac.uk">r.n.bannister@reading.ac.uk</a>,
    <a href="mailto:r.nemani@pgr.reading.ac.uk">r.nemani@pgr.reading.ac.uk</a>
  </div>
</div>
