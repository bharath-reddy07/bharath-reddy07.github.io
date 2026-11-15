// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Served at the root of the user site (repo: bharath-reddy07.github.io), so
  // no `base` is needed and absolute internal links like /work/ keep working.
  // If you later move to a custom domain, change this one line.
  site: 'https://bharath-reddy07.github.io',
  markdown: {
    shikiConfig: { theme: 'github-light', wrap: true },
  },
});
