---
title: HoopBracket
summary: An NBA playoff bracket prediction app with private groups, live scores, real-time chat and smart push notifications — powered by Base44 serverless functions and a Python live-data service.
category: personal
featured: false
order: 8
period: Apr 2026 – Sep 2026
role: Creator — product & engineering
platform: Base44
tech: [React, Vite, Tailwind CSS, Base44, Deno serverless functions, Python, FastAPI, nba_api, OneSignal]
highlights:
  - Bracket predictions with automatic bracket advancement and scoring
  - Live NBA scores and box scores via a custom FastAPI service
  - Group chat with mentions, typing indicators and unread counts
  - Event-driven push notifications for deadlines and big moments
repoPrivate: true
demo: https://graceful-hoop-bracket-pro.base44.app
image: /projects/hoopbracket.webp
hue: 18
mark: HB
---

## What it is

A playoff-season companion for basketball fans: create a group, invite friends with a link, predict every series of the NBA playoffs, and compete on a live leaderboard.

## Highlights

- **Prediction engine** — rounds, matchups and predictions with locks at deadlines, automatic bracket advancement as series finish, and score recomputation.
- **Live data** — a dedicated **Python FastAPI** service wraps `nba_api` to serve live scoreboards, box scores and series games to the app.
- **Social layer** — group chat with @mentions, typing indicators and unread tracking, plus an invite-link system.
- **Notifications** — 14 serverless functions drive an event pipeline: deadline reminders, series updates and "big moment" alerts, delivered through OneSignal with audit and delivery-validation logs.
