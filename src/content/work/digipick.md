---
title: 'DigiPick: reading fabric by machine'
summary: A computer-vision pick-reader that counts warp and weft threads and classifies fabric material on open-source hardware. Design patents granted in Germany, the UK, and India.
order: 4
role: CSE Department project with Paramount Instruments, RV College of Engineering
period: 2023 — 2025
org: 'RVCE × Paramount Instruments'
tags: ['Computer vision', 'Machine learning', 'Embedded', 'Patent granted']
links:
  - label: 'Design patent — Germany'
    href: '#' # TODO: register link or number
  - label: 'Design patent — United Kingdom'
    href: '#' # TODO
  - label: 'Design patent — India'
    href: '#' # TODO
---

## The problem

Thread density — the count of warp and weft threads per unit length — is a basic quality
measure in textiles, and it is still commonly read by hand. An inspector uses a pick
glass, counts threads in a small window, and multiplies. It is slow, it is tiring, and
two inspectors do not reliably agree.

This was the problem that got me interested in computer science as something you *build*
with rather than something you study. The gap between "a person squinting through a lens"
and "a device that reports a number" is not a research gap — it is an engineering one,
and it was open.

## Approach

DigiPick is a camera, a controlled light source, and open-source hardware in an enclosure
the fabric sits against. I worked on the algorithmic and software side.

**Thread counting is a periodicity problem.** Woven fabric is close to a regular grid, so
the thread count is essentially the dominant spatial frequency along each axis. That
framing is far more robust than trying to detect and count individual threads, because it
degrades gracefully: a few occluded threads perturb the estimate rather than breaking it.

**Material classification is a texture problem.** Two fabrics with identical thread counts
can be entirely different materials, and the distinguishing signal lives in surface
texture and fibre appearance rather than geometry — a separate model on separate features.

**Illumination is the whole ballgame.** As with the particle work, the controlled light
source did more for accuracy than any algorithmic improvement. Weave structure is only
visible as shadow, so the lighting geometry *is* the feature extractor.

## Outcome

- **Design patents granted** in Germany, the United Kingdom, and India.
- **Utility patent pending** in India. <!-- TODO: add application number once confirmed -->
- A working end-to-end pipeline from capture to classification on open-source hardware.

## What I took from it

Two things. First, that the constraint which matters is rarely the one you expect — we
spent far longer on the optical path than on the models, and that was the correct
allocation. Second, that a real deployment has no held-out test set waiting for it. The
fabric handed to the device is whatever the mill is running that day.

<!--
TODO — add media. This page needs a photograph more than any other on the site;
a granted design patent is a *visual* claim and readers will want to see the thing.
Drop images in /public/images/digipick/ and uncomment:

<figure>
  <img src="/images/digipick/device.jpg" alt="The DigiPick enclosure with a fabric sample in place" />
  <figcaption>The device with a sample in position.</figcaption>
</figure>
-->
