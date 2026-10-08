# Portfolio — Obai Jahjah

A small, dark, evidence-driven developer portfolio. Built with Vite +
React + TypeScript. No SSR, no CMS, no analytics.

## Develop

```sh
bun install
bun run dev
```

Opens http://127.0.0.1:5173.

## Build

```sh
bun run build
bun run preview   # serves dist/ at http://127.0.0.1:4173
```

## Adding a project

Edit `src/data/projects.ts`. The schema is in the same file. Re-build
and re-deploy.

## Content principles

- Every metric on a project card is from a real test run. No fabricated
  numbers.
- Every repo link is to a real public repository. No "coming soon" links.
- "Shipped" status only when the project has been built, tested, and
  pushed to GitHub. "In-progress" otherwise.
- No "download CV" button. No testimonials. No "currently open to work"
  banner.

## Stack

- Vite 5
- React 18
- TypeScript 5
- No CSS framework. The whole stylesheet is in `src/styles.css` and
  is ~300 lines. Easier to read than to override a framework.
- No external font. Uses system mono + system sans.
- No icons. Pure text labels with `→` arrows.
- No tracking, no cookies, no analytics.
