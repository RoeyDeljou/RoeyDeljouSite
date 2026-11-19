---
title: Fantasyonerim
summary: The official app of an Israeli Fantasy Premier League podcast — a production PWA that mirrors every episode and post automatically, runs live FPL scoring for the community, and gives the hosts a full admin console.
category: client
featured: true
order: 1
period: Oct 2026 – Present
role: Sole engineer — architecture, backend, frontend, DevOps
tech: [TypeScript, Next.js, React, Fastify, Prisma, PostgreSQL, Zod, TanStack Query, Tailwind CSS, Web Push, Vitest, Vercel, Render, Neon]
highlights:
  - Zero-touch news feed that ingests Spotify, Apple Podcasts, Instagram, X and YouTube
  - Live FPL points engine with auto-substitutions and provisional bonus
  - Installable Hebrew (RTL) + English PWA with web push, Capacitor-ready
  - ~94K lines of TypeScript, 89 test suites, 160+ commits in four weeks
metrics:
  - { value: '94K', label: 'lines of TypeScript' }
  - { value: '89', label: 'test suites' }
  - { value: '6', label: 'content sources automated' }
  - { value: '4 wks', label: 'from first commit to live' }
repo: https://github.com/RoeyDeljou/Fantasyonerim
demo: https://fantasyonerim.vercel.app
hue: 152
mark: FPL
---

## The problem

**Fantasyonerim (פנטזיונרים)** is an Israeli Fantasy Premier League podcast. Its creators publish across Spotify, Apple Podcasts, Instagram, X and YouTube, and run a mini-league for their listeners — but their community was scattered across platforms. They wanted one home for the fans, with a hard requirement: **if a creator ever has to re-post something by hand, they won't use the app.**

## What I built

A full product, from blank repo to production, as the sole engineer:

- **News** — a feed that automatically mirrors every podcast episode, Instagram post and story, and X post, with zero manual work.
- **Community** — fans post, share their FPL team and comment on each other.
- **FPL companion** — *My Team* with live points, the podcast's mini-league *Table*, *Live Action* (live league + live scores), *Captain Battle* and a community captain vote with deadline locking, tie-break and auto-assignment.
- **Admin console** — league configuration, captain battles, integrations, WhatsApp/X live broadcasts and push notifications.
- **Ask Alfie** — an embedded AI assistant on every screen, integrated with a third-party FPL AI service through a sign-in bridge.

## Architecture

A strictly typed **npm-workspaces monorepo**:

| Package | Responsibility |
|---|---|
| `packages/shared` | Zod API contract + branded IDs — the single source of truth for API and web |
| `packages/fpl` | FPL API client, normalization and a **live-points engine** (auto-subs, vice promotion, provisional bonus) |
| `packages/integrations` | Content sources (podcast RSS, Spotify, Apple, Instagram, X, YouTube) and publishers (X, WhatsApp) |
| `apps/api` | Fastify REST + Prisma/Postgres: auth, ingestion jobs, community, admin, web push, S3-compatible media |
| `apps/web` | Next.js static export + Tailwind PWA, Hebrew (RTL) + English |

## Engineering decisions worth noting

- **Static export, three targets.** One bundle runs on Vercel, as an installed PWA, and later inside Capacitor for the App Store and Google Play — no rewrite needed.
- **Polling with idempotent dedupe keys.** Instagram, Spotify and Apple offer no "new post" webhooks for this use case, so sources are polled every few minutes with dedupe keys — reliable and cheap.
- **Built for free-tier infrastructure.** An external GitHub Actions cron drives `/internal/jobs/tick` so ingestion survives Render's idle sleep, and jobs keep state in memory so the Neon database can **auto-suspend** — it's only woken when there is something to write.
- **Precomputed Gameweek Roundups.** Built once per gameweek in bounded batches and served from Postgres, so a busy Monday never fans out ~500 FPL requests per user.
- **Performance budget.** Lazy-loaded chunks with an enforced JS budget (~229 KB) to keep the app fast on mid-range phones.
- **Security hygiene.** argon2 password hashing, rate limiting, and prompt patching of upstream advisories.

## Outcome

Live in production for the podcast's community, with the creators' content flowing in automatically — exactly the zero-effort workflow they asked for.
