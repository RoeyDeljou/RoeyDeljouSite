# Roey Deljou — Personal Website

Portfolio, resume and project case studies. Built with **Astro 5 + Tailwind CSS 4**, fully static, deployed on **Vercel**.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks content + builds to dist/
npm run preview   # serve the production build
```

---

## How to update the site

All content lives in **data files** — you never need to touch the design to update it.

| What | Where |
|---|---|
| Name, tagline, email, socials, "open to work", About text, stat tiles | `src/data/profile.ts` |
| Jobs (timeline + resume page) | `src/data/experience.ts` |
| Skills | `src/data/skills.ts` |
| Education & certificates | `src/data/education.ts` |
| Projects (cards + case-study pages) | `src/content/projects/*.md` — one file per project |
| Resume PDF (download buttons) | `public/Roey_Deljou_Resume.pdf` |

### Add a project

Create `src/content/projects/my-project.md`. The file name becomes the URL (`/projects/my-project/`).

```markdown
---
title: My Project
summary: One or two sentences that sell the project — shown on the card.
category: personal        # personal | client | collab | work
featured: false           # true = big card at the top of Projects
order: 20                 # lower = earlier
period: Jan 2027 – Mar 2027
role: Creator — design & engineering
tech: [TypeScript, Next.js, PostgreSQL]
highlights:               # 3–4 bullets for the card & sidebar
  - Did something impressive
  - Solved a hard problem
metrics:                  # optional big numbers on the project page
  - { value: '10K', label: 'users' }
repo: https://github.com/RoeyDeljou/my-project   # omit if none
repoPrivate: false        # true → "Private repo" badge instead of a link
demo: https://my-project.vercel.app             # optional "Live" badge + button
platform: Base44          # optional badge (Base44, Unity…)
company: Some Company     # for category: work
collaborators:            # optional
  - { name: 'Tal Meller', url: 'https://github.com/talmeller86' }
hue: 200                  # 0–360, colour of the generated cover art
mark: MP                  # 2–3 letters shown on the cover art
image: /projects/my-project.png   # optional real screenshot (put it in public/projects/)
---

## The problem
…

## What I built
…

## Architecture
…

## Outcome
…
```

The schema in `src/content.config.ts` validates every field, so `npm run build` tells you exactly what's wrong if you mistype something.

**Projects without code access** (past employers, Base44 apps): use `category: work` (shows a *Confidential* badge) or `repoPrivate: true`, and describe the work from memory.

### Add a job

Copy an object in `src/data/experience.ts` and edit it. Newest first. Set `projectSlug` to link it to a case study.

### Add screenshots

Drop images in `public/projects/` and set `image: /projects/name.png` in the project file. Without an image, a generated gradient cover is used.

---

## Deploying

Pushing to the connected GitHub branch deploys automatically on Vercel. When you get a custom domain, update `site` in `astro.config.mjs` and the sitemap URL in `public/robots.txt`.
