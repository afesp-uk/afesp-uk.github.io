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
