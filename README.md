# Personal website — D K Bharath Reddy

Static site for MS applications. Astro, no client-side JavaScript shipped.

## Run it

Requires **Node >= 22.23.4** (Astro 7). `.nvmrc` pins it:

```bash
nvm use                                        # -> 22.23.5
export NODE_EXTRA_CA_CERTS=$PWD/.ca-bundle.pem # see note below
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

Astro 7 detects it's being run by a coding agent and backgrounds itself. When
you run it yourself in a terminal it stays in the foreground as normal. To
manage a backgrounded one: `npx astro dev status|logs|stop`.

### Why `NODE_EXTRA_CA_CERTS`

On the RingCentral network a TLS-intercepting proxy presents a certificate Node
doesn't ship with, and `npm install` fails with
`UNABLE_TO_GET_ISSUER_CERT_LOCALLY`. `.ca-bundle.pem` in this directory is the
macOS trust store exported to PEM, which includes the corporate root CA. It was
generated with:

```bash
security find-certificate -a -p /System/Library/Keychains/SystemRootCertificates.keychain > .ca-bundle.pem
security find-certificate -a -p /Library/Keychains/System.keychain >> .ca-bundle.pem
```

It's gitignored — regenerate it with those two commands on any new machine. You
only need it on the corporate network; off VPN, plain `npm install` works.

Do **not** use `npm config set strict-ssl false`. It disables certificate
verification globally for every future install on the machine.

## Editing

| What | Where |
|---|---|
| Name, tagline, links, experience, education, awards, publications | `src/data/site.ts` |
| Case studies | `src/content/work/*.md` — one file each, `order` controls position |
| Colours, type, spacing | `src/styles/global.css` (CSS custom properties at the top) |
| CV PDF | `public/cv.pdf` |
| Images | `public/images/` |

Adding a case study = adding a markdown file in `src/content/work/`. The card,
the route, and the page are generated. Set `published: false` to hold one back.

## Before publishing — outstanding TODOs

Search the repo for `TODO`. The important ones:

- [ ] Real DOIs for the Springer CCIS and IEEE Xplore papers (`src/data/site.ts`,
      `src/content/work/particle-analysis.md`). Unlinked publication claims are weak.
- [ ] Utility patent application number (`src/content/work/digipick.md`).
- [ ] Google Scholar profile URL, or delete the `scholar` key.
- [ ] Photographs — DigiPick hardware especially, plus particle-analysis output.
- [ ] Set the real domain in `astro.config.mjs` (`site:`).
- [ ] Re-export `public/cv.pdf` with the home address and phone number removed,
      and fix "Marcb 2024" → "March 2024" and the `[Add Number]` placeholder.

## Deploy

**Vercel** (recommended — custom domains and previews are free):
push to GitHub, import at vercel.com, accept the detected Astro settings.

**GitHub Pages**: repo must be `bharath-reddy07.github.io`, or set `base` in
`astro.config.mjs`. Build with `npm run build` and publish `dist/`.
