---
title: Dynamic analysis of microscopic particles
summary: Measuring size, shape, and anomalies in particles moving along a conveyor at 60 frames per second — the research that produced two publications and taught me that the model is rarely the bottleneck.
order: 3
role: Researcher, RV College of Engineering
period: 2023 — 2024
org: 'RV College of Engineering'
tags: ['Computer vision', 'Image analysis', 'Research', 'Publications']
links:
  - label: 'Springer CCIS (MIND Conference)'
    href: '#' # TODO: replace with the SpringerLink DOI
  - label: 'IEEE Xplore'
    href: '#' # TODO: replace with the IEEE Xplore DOI
---

## The problem

Particle characterisation is conventionally done with laser diffraction and similar
instrumentation. We asked whether optical imaging could recover size, shape, and anomaly
information from particles *in motion*, captured at 60 frames per second as they travelled
along a conveyor.

The appeal of imaging is that it measures shape directly rather than inferring it from a
scattering model. The difficulty is everything else.

## Why it was hard

Classroom computer vision gives you clean, static, well-lit inputs. This gave us none of
those:

- **Lighting was never uniform** across the field of view, and it drifted over a session.
- **Motion blur** scaled with particle velocity, so the same particle imaged twice was
  not the same measurement twice.
- **Orientation was uncontrolled.** A flat particle seen edge-on and face-on produces
  wildly different projections, and nothing in a single frame tells you which you got.
- **Particles touched and overlapped**, and segmenting a cluster into constituents is a
  guess dressed up as a measurement.
- **Ground truth was scarce**, which is the real problem — without it, you cannot tell a
  genuine anomaly from a processing artefact.

## Approach

Most of the work went into the parts that are not the model: controlling acquisition so
the inputs were comparable, normalising for illumination before anything downstream ran,
and treating a particle's trajectory across frames as the measurement unit rather than
any single frame. Tracking a particle through several frames gives several views of it,
which does more for orientation ambiguity than any amount of per-frame cleverness.

Evaluation had to be built as deliberately as the pipeline. Where ground truth was thin,
we leaned on consistency checks — does the same particle measured across its trajectory
agree with itself — as a proxy for correctness.

## Outcome

Two peer-reviewed publications:

1. **Micro-Particle Anomaly Detection & Shape Classification** — IEEE Conference, Vellore.
   The foundational work on identifying anomalies and classifying shape.
2. **Dynamic Image Analysis of Microscopic Particles** — Springer CCIS, MIND Conference.
   The follow-up extending the approach to particles in motion.

## What I took from it

This project is the reason I think about deployment conditions before architecture. The
effectiveness of a machine learning system cannot be assessed through the performance of
its model alone — data acquisition, hardware limits, throughput, and the conditions it
will actually run under decide whether it works in practice. We could improve a
classifier for a week and get less than we got from fixing the illumination.

It was also my first experience of a problem with no predetermined solution, where the
work was deciding what the question was.

<!--
TODO — add media:
  Drop images in /public/images/particle/ and uncomment. Good candidates:
  the rig, a raw frame, the same frame after segmentation, a shape-classification
  montage. One honest failure case is worth more than three successes.

<figure>
  <img src="/images/particle/segmentation.jpg" alt="Raw conveyor frame beside its segmentation output" />
  <figcaption>Raw capture (left) and segmentation output (right).</figcaption>
</figure>
-->
