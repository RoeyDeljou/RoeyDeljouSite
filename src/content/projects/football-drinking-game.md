---
title: Football Drinking Game
summary: A real-time multiplayer party game for watching football with friends — join Kahoot-style with a PIN or QR code and play 20+ betting, trivia and live-match games driven by real fixture data.
category: personal
featured: true
order: 3
period: Sep 2026 – Oct 2026
role: Creator — game design, engine, backend, frontend
tech: [TypeScript, Next.js, Fastify, Socket.IO, Prisma, Zod, Tailwind CSS, Vitest, API-Football, Docker]
highlights:
  - Pure-TypeScript game engine — deterministic, injected time & randomness
  - Real-time rooms over Socket.IO with PIN, link or QR join
  - Live match events feed games like Bingo, Minute Sniper and Stat Duel
  - 67K lines of TypeScript and 114 test suites
metrics:
  - { value: '21', label: 'games designed' }
  - { value: '7', label: 'competitions supported' }
  - { value: '114', label: 'test suites' }
  - { value: '67K', label: 'lines of TypeScript' }
repo: https://github.com/RoeyDeljou/football-drinking-game
hue: 28
mark: FDG
---

## The idea

Watching a match with friends is better with a game on top. Players join a room on their phones in seconds — a 6-character PIN, a link or a QR code — and play football betting, trivia and party games, either tied to a **live fixture** or as **general games** built from season data across the Premier League, La Liga, Serie A, Bundesliga, Ligue 1, the Champions League and national teams.

## The games

**Matchday games** react to the live match: *Match Markets* (a betting-slip between friends), *Match Bingo* auto-ticked from the live feed, *Minute Sniper* (call the minute of the next goal), *Event Roulette*, *Stat Duel* brackets on live stats, *Your Man* drafts, *Lineup Recall* and *Flash Rounds* designed around the 15–60 s lag between TV and data feeds.

**General games** run any time: *Guess the Player*, *Trivia Rush*, *Higher or Lower*, *Career Path*, *Name the Top 10*, *Odd One Out*, *Two Truths & a Lie* and more.

## Architecture

Built from day one to be **mounted inside a larger football-hub app without rewrites**:

| Layer | What it does |
|---|---|
| `packages/game-core` | Pure TypeScript engine: room state machine, game modules, scoring and penalty rules. No React, Node, network or database — **time and randomness are injected**, so every game is deterministic and testable. Lint rules enforce the purity. |
| `packages/football-data` | Provider interface with an API-Football adapter and an **offline recorded-fixture provider that replays a real match timeline at any speed** — no API key needed to develop or demo. |
| `apps/api` | Fastify REST + Socket.IO realtime + Prisma persistence + pluggable identity provider. |
| `apps/web` | Mobile-first Next.js client that scales from small phones to a TV screen. |

## Responsible by design

The engine emits neutral penalty events that are rendered through a single copy module, so wording can be softened per market in one file. Signup includes an 18+ confirmation and a responsible-drinking notice, and penalties are capped per round and per session.
