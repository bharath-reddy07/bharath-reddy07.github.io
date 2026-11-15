---
title: Sub-second analytics over a moving data model
summary: Redesigning Elasticsearch query and aggregation strategy during a data-model migration — several seconds to under one second, without breaking existing workflows.
order: 2
role: Software Development Engineer, RingCentral
period: '2025'
org: 'RingCentral'
tags: ['Elasticsearch', 'Query DSL', 'Aggregations', 'Performance', 'Information retrieval']
---

## The problem

Analytical dashboards over large volumes of interaction data were taking several seconds
to return. At that latency a dashboard stops being a tool for exploration and becomes a
report you request and wait for — people stop asking follow-up questions, which is the
entire point of the product.

The complication was that this had to happen *during* a migration between data models.
Queries could not simply be rewritten against the new shape and shipped; existing
workflows had to keep working throughout, which meant the old and new paths coexisted
while the semantics underneath them shifted.

## Approach

The slow queries were slow for structural reasons, not tuning reasons, so the work was
mostly about changing what was being asked rather than how it was being executed.

**Moving work into the aggregation tree.** A recurring pattern was retrieving a broad
result set and reducing it in application code — correct, and far more expensive than
expressing the same reduction as nested aggregations the engine can evaluate close to
the data.

**Filter before you aggregate, and make the filter cacheable.** Aggregation cost scales
with the document set it runs over, so the ordering of filter and aggregation context
dominates everything else. Restructuring so the selective, repeated predicates sit in
filter context — where they are cacheable and contribute no scoring work — mattered more
than any individual query rewrite.

**Pagination that does not degrade with depth.** Deep offset-based pagination gets worse
the further a user scrolls, precisely when they are most engaged. Moving to a cursor-based
strategy made the last page cost the same as the first.

**Shapes chosen for the queries, not for the writer.** Part of the migration was an
opportunity: with the document structure in flux, fields could be denormalised and typed
for the way they were actually queried, removing joins-in-disguise from the read path.

## Result

Complex dashboard queries went from several seconds to **under one second**, with
backward compatibility preserved across the migration.

## What I took from it

This is the half of "intelligent systems" that gets least attention. A model is only ever
as good as what it can retrieve, and retrieval at this scale is not a solved implementation
detail — it is a design problem about representation, about what you precompute versus
what you derive, and about which questions you have made cheap to ask.

Working on this alongside the [MCP server](/work/ace-mcp-server/) is what turned a job
into an interest. The two problems are the same problem viewed from opposite ends.
