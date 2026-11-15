import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    // One line, shown on the home page card and at the top of the case study.
    summary: z.string(),
    // Controls ordering everywhere. Lower = higher up.
    order: z.number(),
    role: z.string(),
    period: z.string(),
    // Where the work happened. Shown on the card so two entries from the
    // same employer read as one job rather than two unrelated projects.
    org: z.string(),
    // Shown as small pills on the card.
    tags: z.array(z.string()),
    // Optional outbound links (paper, repo, patent record).
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
    // Set false to keep a draft out of the build.
    published: z.boolean().default(true),
  }),
});

export const collections = { work };
