---
layout: page
title: "Developing Artificial Intelligence Approaches to Enhance Representations of Turbulence in Atmospheric Models"
description:
img:
importance: 3
category: PhD projects
---

**Supervisor**: Todd Jones

**PhD Student**: Sambit Kumar Panda

**Description**: Large Eddy Simulation (LES) is an indispensable tool for advancing the understanding of turbulent geophysical flows, from atmospheric boundary layers to cloud dynamics. The fidelity of LES critically depends on the parameterization of subgrid-scale (SGS) turbulence, which accounts for the effects of unresolved eddies on the resolved flow. While dynamic SGS models, such as the one implemented in the UK Met Office NERC Cloud Model (MONC), provide a robust method for calculating SGS effects, their computational expense constitutes a significant bottleneck, limiting the scale and feasibility of high-resolution simulations. This is particularly restrictive for applications requiring large ensembles or near-real-time forecasting.

This research project addresses this critical challenge of SGS turbulence parameterization within high resolution atmospheric models, like MONC. We will investigate advanced artificial intelligence methodologies, systematically comparing conventional physics-based schemes against both purely data-driven and physics-informed machine learning frameworks. A central focus is on resolving fundamental limitations in current simulations, such as the offline-online performance gap, by examining how machine learning emulators maintain numerical stability and physical consistency when coupled with the MONC model's dynamical core. The project also investigates different techniques to enhance model interpretability and establish the trust metrics essential for operational deployment. The primary objective is to determine whether these AI approaches can improve computational performance, either through direct inference acceleration or by enabling equivalent accuracy on coarser grids, while maintaining long-term fidelity and stability in coupled simulations. We also extensively test different operational deployment frameworks for these hybrid Physics-ML models on modern HPC systems with hybrid CPU-GPU topology. Ultimately, the outcomes will inform the development of robust, hybrid ML-physics systems and scalable integration frameworks for next-generation weather and climate prediction.

## Outputs

**Papers**

- **IJCNN 2026:** Physics-guided multi-task learning for subgrid scale turbulence parameterization: a comparative study of physics integration strategies. DOI: [10.1109/IJCNN69854.2026.11728747](https://doi.org/10.1109/IJCNN69854.2026.11728747) · [Presentation slides (PDF)]({{ '/assets/pdf/panda_ijcnn2026_slides.pdf' | relative_url }})
- **PASC 2026:** Physics-aware multi-task learning for atmospheric turbulence parameterization: auxiliary tasks versus architectural conditioning. DOI: [10.1145/3815572.3815750](https://doi.org/10.1145/3815572.3815750)

**Datasets**

- **IJCNN 2026 data set** (Zenodo). DOI: [10.5281/zenodo.19487076](https://doi.org/10.5281/zenodo.19487076)
- **PASC 2026 data set** (Zenodo). DOI: [10.5281/zenodo.20140433](https://doi.org/10.5281/zenodo.20140433)

**Posters**

- **km-scale Global Modelling Summit 2026, Hamburg:** Neural Network based emulation of SGS turbulence in MONC: comparing physics-guided multi-task learning against data-driven closure in online-coupled LES. [Poster (PDF)]({{ '/assets/pdf/panda_kmscale_summit2026_poster.pdf' | relative_url }})
- **ICCS Summer School 2026, University of Cambridge:** Neural Network based Emulation of Subgrid-Scale Turbulence in MONC: Bridging Offline Multi-Task Learning and Online Coupling with FTorch. [Poster (PDF)]({{ '/assets/pdf/panda_iccs2026_poster.pdf' | relative_url }})
- **EXCLAIM Symposium 2025, ETH Zurich:** Investigating Physics-guided Deep Learning frameworks for subgrid-scale parameterization of Turbulence in Atmospheric Models. [Poster (PDF)]({{ '/assets/pdf/panda_exclaim2025_poster.pdf' | relative_url }})
- **AFESP Conference 2024:** Developing Artificial Intelligence approaches to enhance representations of Turbulence in Atmospheric Models. [Poster (PDF)]({{ '/assets/pdf/panda_afesp2024_conference_poster.pdf' | relative_url }})

<div class="social">
  <div class="contact-note">
    <a href="mailto:t.r.jones@reading.ac.uk">t.r.jones@reading.ac.uk</a>,
    <a href="mailto:s.panda@pgr.reading.ac.uk">s.panda@pgr.reading.ac.uk</a>
  </div>
</div>
