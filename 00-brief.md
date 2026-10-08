# Brief — Portfolio site

**Date:** 2026-10-08
**Owner:** Obai Jahjah / BOBA
**Reason:** Two shipping projects (`agentcost`, `shopaudit`) now have a place to live.

## Decisions

- **Stack**: Vite + React 18 + TypeScript (no SSR — static site, fast, no backend).
- **Style**: Dark, developer-aesthetic, monospace headers, terminal-card for project summaries.
- **Content**: 2 projects, 1 about section, 1 contact section.
- **Deployment**: Vercel (per Bob's standard; skill `vercel-deployments` covers it).
- **Bun**: build + dev (matches Bob's preference).
- **Single-page**: `/#projects`, `/#about`, `/#contact` anchor links.
- **No CMS**: content lives in `src/data/projects.ts` for now. Easy to migrate later.

## Sections

1. **Hero**: name, role, one-line positioning, "view projects" CTA.
2. **Projects**: 2 cards, each with: name, what it does, why it matters, GitHub link, key metric.
3. **About**: 3-4 lines on the "evidence-first, ship it" approach.
4. **Contact**: GitHub + Telegram (Bob's standard channels).

## Anti-patterns to refuse

- No animations that don't add meaning. A subtle fade-in on scroll is the max.
- No emoji in the body (Bob's brand voice is direct).
- No fabricated metrics. Every number is from a real test run.
- No "Download CV" button — Bob has a real CV elsewhere.

## Verification

- `bun run build` succeeds.
- `bun run preview` serves the site; homepage returns HTTP 200.
- Lighthouse (manual): no console errors, responsive, dark by default.
- All GitHub links resolve to real repos.
- Each project card references a real metric from the actual test run.

## Out of scope

- No blog.
- No testimonials (no real ones to quote).
- No "currently open to work" banner (Bob's situation is dynamic).
- No analytics, no tracking, no cookies.
