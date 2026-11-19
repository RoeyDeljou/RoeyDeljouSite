---
title: Hackathon Finder
summary: An installable PWA that scans 12+ sources for hackathons open for registration, ranks them by the fields you care about, and pushes alerts twice a day — including events no single platform lists.
category: personal
featured: true
order: 4
period: Oct 2026
role: Creator — product, scraping pipeline, ranking, PWA
tech: [JavaScript, Node.js, Vercel Functions, Upstash Redis, Web Push, Claude API, Gemini, GitHub Actions, PWA]
highlights:
  - Aggregates Devpost, Devfolio, MLH, Luma, lablab.ai, Cerebral Valley and more
  - AI web search finds company-hosted events, with every link verified
  - Priority-weighted ranking and search depth per interest field
  - Scheduled scans, push notifications and watchlist deadline reminders
metrics:
  - { value: '12+', label: 'sources aggregated' }
  - { value: '2×', label: 'automatic scans per day' }
repo: https://github.com/RoeyDeljou/HackatonFinder
hue: 280
mark: HF
---

## The problem

Good hackathons are scattered across a dozen platforms, company sites and LinkedIn posts — and the best ones close before you hear about them.

## What I built

A PWA where you choose your fields (default: **Sports, AI, Innovation**), set each to High / Medium / Low priority, and press *Search*. A live loading screen shows each source as it's checked, then ranked results appear.

From then on it searches **twice a day**, drops events that have closed, and sends a **push notification** for new matches — or an end-of-day "nothing new today" so silence is never ambiguous. A **Watchlist** reminds you about three days before registration closes, and again on the last day.

## Sources

Devpost (all pages via its JSON API), Devfolio, MLH, Luma, lablab.ai, Cerebral Valley, Hack Club, Hackster.io and Google News — plus:

- **Free web search (DuckDuckGo)** run from **GitHub Actions**, because search engines block Vercel's servers, with rotating queries and gentle pacing.
- **AI web search (Gemini + Google Search)** that hunts LinkedIn, big-company sites, X and news for events no platform lists — **every returned link is checked and dead ones are dropped**.
- Optional **Tavily** search for LinkedIn and company pages.

## Ranking

Priority drives both ranking and search depth: high-priority fields get more keyword searches and a larger AI search budget. Results are ordered by highest-priority matching field, then match strength, then size and prize. Each card shows participation format (online / in person / hybrid), and users can sort by closing date, prize or participants.
