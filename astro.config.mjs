// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // TODO: set this to your real domain before deploying (e.g. https://bharathreddy.dev)
  // It is used for canonical URLs and the sitemap.
  site: 'https://bharath-reddy07.github.io',
  markdown: {
    shikiConfig: { theme: 'github-light', wrap: true },
  },
});
