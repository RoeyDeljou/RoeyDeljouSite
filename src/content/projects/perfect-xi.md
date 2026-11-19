---
title: Perfect XI
summary: A football squad-building game — spin for a club and an era, draft legends from 208 historical squads, then simulate a season and chase the perfect record nobody has achieved.
category: collab
featured: false
order: 6
period: Sep 2026
role: Co-developer (with Tal Meller)
tech: [TypeScript, React, Zustand, Vite, Vitest, Playwright, Python, Wikipedia & Wikidata pipeline, PWA]
highlights:
  - Deterministic season simulator — the same squad always plays the same season
  - 208 squads and ~9,600 players built from Wikipedia & Wikidata
  - Whole app ships at 69 kB gzipped, with squad files lazy-loaded
  - Daily challenge identical for every player worldwide
metrics:
  - { value: '9.6K', label: 'players' }
  - { value: '208', label: 'historical squads' }
  - { value: '69 kB', label: 'gzipped app' }
repoPrivate: true
collaborators:
  - { name: 'Tal Meller', url: 'https://github.com/talmeller86' }
hue: 48
mark: XI
---

## The game

Pick a competition, spin the reels for a **team and an era**, take up to two players from that squad, and spin again — until you have a full eleven and a five-man bench drawn from across football history. Then simulate the season or tournament and try to win every match. Nobody ever has.

There's also a **daily challenge** that is identical for everyone — the competition and every squad the reels land on are derived from the date, so only your picks are yours — and an endless *Career Path* quiz that forgives a misspelling.

## Engineering

- **A DOM-free engine.** `simulate(squad, setup, seed)` plays a full season in pure TypeScript. Seeded determinism makes shared results verifiable.
- **Tiny by design.** 208 squad pools and ~9,600 players sit behind a 33 KB index; pools are fetched only when the reels land on them, so the whole app is ~69 kB gzipped and makes no third-party API calls.
- **An offline data pipeline.** Squads are built from English Wikipedia club-season and World Cup articles; honours come from Wikidata (CC0). Ratings are computed from coverage, honours, appearances and output — awards only ever add to a rating, because missing data must never penalise a genuine great.
- **Tuned with simulation.** Monte Carlo scripts measure what a draft under the real rules actually achieves, sweep difficulty parameters per competition, and check that the daily challenge is stable.
- **Tested in real browsers.** Scripted playthroughs in Chromium and WebKit, small-screen reachability checks at 360×640, and "never repeats a squad" verification.
