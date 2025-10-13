# Love Documentation

![status: WIP](https://img.shields.io/badge/status-WIP-yellow)

A short, honest, and approachable guide about romantic love — published as an open-source Starlight (Astro) site. This repository collects thoughts, advice, and short essays that help people understand, navigate and recover from romantic relationships.

## Goals

* Create an accessible, readable guide about romantic relationships.
* Keep content open-source so people can contribute corrections, perspectives, or translations.
* Provide a clear structure so readers can find advice for every stage: crush, dating, conflict, heartbreak, and moving on.

## Tech stack

* **Framework:** Astro + Starlight
* **Content format:** Markdown (MD / MDX)
* **Styling:** Starlight theme + CSS

## Prerequisites

* Node.js (LTS) installed — recommended v18 or newer.
* npm or pnpm/yarn (examples below use pnpm).

## Local development

```bash
# install
pnpm install

# dev server (local)
pnpm dev

# build (production)
npm build
```

> If your project uses a different package manager, replace `npm` with `pnpm` (Recommended) or `yarn`.

## Frontmatter example (Markdown page)

```md
---
title: What Is Love?
description: A gentle attempt to define something that refuses to be defined.
---

# What Is Love?

...page content...
```

Include `title` and `description` in frontmatter so Starlight builds navigation and meta tags correctly.

## How to contribute

1. Fork the repository.
2. Create a branch: `feature/short-title` or `fix/typo`.
3. Add or edit Markdown files under `src/content/docs/`.
4. Run the dev server locally and check your changes.
5. Open a pull request with a short description and link to relevant pages.

## Writing guidelines (short)

* Tone: honest, approachable, readable. Avoid heavy jargon.
* Keep sections short (300–900 words recommended).
* Use headings, short paragraphs, and occasional lists for readability.
* Cite sources or personal experience where appropriate.

## Deployment tip

If you deploy to GitHub Pages, configure the `build` output in `astro.config.mjs` and enable Pages on the repo. Alternatively, any static host (Netlify, Vercel) will work.

## Credits & contact

Created by **RaitonRed**. You can open issues or PRs on this repository. If you want to reach out directly, add a contact section (email or social link) to the README.

Thanks for making Love Documentation — a small, honest corner of the web for tricky feelings.