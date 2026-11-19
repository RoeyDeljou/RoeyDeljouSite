---
title: JobHunteRZ
summary: A personal AI job-search engine for the Israeli tech market — aggregates listings from multiple job boards, scores each one 0–100 against your CV, and tracks applications in a pipeline.
category: personal
featured: false
order: 10
period: Apr 2026 – May 2026
role: Creator — product & engineering
platform: Base44
tech: [React, TypeScript, Vite, Tailwind CSS, Zustand, PWA, Base44, Deno serverless functions, RapidAPI]
highlights:
  - Multi-source scanning — JSearch, LinkedIn, Indeed IL and more
  - CV-based match scoring from 0 to 100 per listing
  - WhatsApp job-group ingestion via webhook
  - Installable iPhone PWA with application tracker
repo: https://github.com/RoeyDeljou/jobhunterz-web
demo: https://nimble-job-hunt-go.base44.app
links:
  - { label: 'React PWA version', url: 'https://jobhunterz-web.vercel.app' }
image: /projects/jobhunterz.webp
hue: 230
mark: JH
---

## The problem

Job hunting in Israeli tech means checking LinkedIn, Indeed, Glassdoor, Facebook groups and WhatsApp groups every day — and most listings aren't a fit.

## What I built

- **Scan** — one tap runs a multi-channel discovery engine across job APIs (JSearch, LinkedIn Job Search via RapidAPI, Indeed IL and others), with location-qualified queries, role synonyms and a CV-skills channel. Sources were swapped and tuned iteratively for the best Israeli coverage.
- **Match** — each job is scored 0–100 against the user's CV text, keywords and target titles, with strict filtering by country, work style and contract type.
- **WhatsApp ingestion** — an external bridge posts messages from job groups to a webhook function that parses and stores them.
- **Track** — an application pipeline with job details, notes and statuses.

Built twice: a React + TypeScript PWA (installable on iPhone, works on mock data offline) and a Base44 version with serverless functions and auth.
