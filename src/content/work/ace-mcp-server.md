---
title: An MCP server for enterprise analytics
summary: Designing the interface through which AI applications query a production analytics platform — without losing accuracy, permissions, or predictability.
order: 1
role: Software Development Engineer, RingCentral
period: 2025 — present
org: 'RingCentral'
tags: ['Model Context Protocol', 'TypeScript', 'Python', 'LLM tooling', 'API design']
---

## The problem

An analytics platform already had a capable API. The question was what happens when
the caller is a language model rather than a dashboard.

A dashboard asks precise questions. It knows which metric it wants, over which window,
filtered by which entity, because a human chose those things from a menu. A model asks
broad ones — *"how did the enterprise team do last quarter compared to the one before"* —
and expects something coherent back. Between those two sits a translation problem, and
it is not solved by exposing the existing endpoints and hoping.

Three things make it hard:

- **Accuracy is unforgiving.** A dashboard that renders a wrong number looks broken. A
  model that receives a wrong number states it as fact, fluently, with no visible seam.
- **Permissions cannot be advisory.** The caller is a model acting for a user, and that
  user's organisational access has to hold at every layer. The model cannot be trusted
  to enforce it, so the interface must.
- **Behaviour has to be predictable.** The same question asked twice should not resolve
  to two different operations.

## Approach

I worked on this from the early stages of the server, across both the AI-facing surface
and the analytics service beneath it.

**Query contracts over raw endpoints.** Rather than mapping tools one-to-one onto
existing APIs, the tools expose a constrained vocabulary of analytical operations —
metric, dimension, filter, window, comparison. The model composes within that vocabulary
instead of inventing request shapes. Anything outside it fails loudly rather than
silently returning something plausible.

**Validation at the boundary.** Every tool input is schema-validated before it reaches
the analytics layer. The useful property is not that invalid calls are rejected — it is
that the rejection carries a message specific enough for the model to correct itself on
the next turn, which turns a dead end into a retry.

**Entity resolution as an explicit step.** Users refer to teams and people the way people
do: partially, informally, ambiguously. Resolving *"the enterprise team"* to a concrete,
permission-checked identifier is its own operation with its own failure modes, rather
than something guessed inside a larger query.

## What I took from it

The interesting constraint was not the model. It was that an interface designed for
machine callers has to make its own guarantees legible — what it will refuse, what it
has assumed, what it could not resolve. A conventional API can leave that to its
documentation and its human integrator. This one cannot, because the integrator is
reading at inference time and will paper over any gap with fluent prose.

That is the thread running from here back to the retrieval work below, and forward into
what I want to study: an intelligent application is only as dependable as the layer that
decides what information it is allowed to see.

<!--
NOTE TO SELF — before publishing:
  · Keep this free of internal architecture diagrams, product UI, customer data,
    and unreleased feature names. Everything above describes technique, not internals.
  · If unsure whether a detail is public, leave it out. The case study is already
    strong without it.
-->
