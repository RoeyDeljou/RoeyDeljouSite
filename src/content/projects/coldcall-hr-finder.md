---
title: ColdCall2000 & HR Finder
summary: A B2B lead-intelligence platform that maps every relevant decision-maker across 150+ pro sports organisations, discovers verified contact details, and sends personalised AI-written outreach — later adapted into HR Finder for reaching recruiters and hiring managers.
category: collab
featured: true
order: 5
period: May 2026 – Jun 2026
role: Lead developer (co-built with Tal Meller)
tech: [Next.js 16, TypeScript, Prisma, SQLite, Playwright, Apollo.io API, Hunter.io API, Nodemailer, Recharts, Zod, Tailwind CSS]
highlights:
  - Mapped decision-makers across all 152 NBA, NFL, MLB, NHL and MLS teams
  - Multi-source contact discovery — Apollo, Hunter, LinkedIn and web scraping
  - Template-based personalised outreach with SMTP sending and tracking
  - Pipeline dashboard with lead status, enrichment and analytics
metrics:
  - { value: '152', label: 'pro sports organisations covered' }
  - { value: '5', label: 'major leagues' }
repoPrivate: true
collaborators:
  - { name: 'Tal Meller', url: 'https://github.com/talmeller86' }
hue: 340
mark: CC
---

## The problem

Selling technology to professional sports teams means finding the *right* people — the heads of data, analytics, technology and innovation — at each organisation, then reaching them with something personal. Doing that by hand across five leagues is weeks of work.

## What we built

**ColdCall2000** is a full-stack outreach system that automates the whole funnel:

1. **Scrape & seed** — a league scraper builds the target list for every team in the NBA, NFL, MLB, NHL and MLS (152 organisations), including each team's email domain.
2. **Find the people** — multi-pass discovery across the **Apollo.io** and **Hunter.io** APIs, LinkedIn company people pages, and web search — designed to conserve API credits while maximising coverage (handling title abbreviations, league-vs-team domains and pagination).
3. **Enrich** — email discovery and pattern-based email guessing, false-positive filtering and de-duplication.
4. **Reach out** — reusable templates rendered per contact, sent over SMTP, with every message tracked in the pipeline.
5. **Measure** — a dashboard with pipeline charts, stats and recent activity.

## Hard parts

The LinkedIn layer went through several iterations — from DOM scraping with Playwright, to session warm-up and cookie handling, to intercepting LinkedIn's internal Voyager REST API — to get reliable results without redirect loops. A rate limiter, cookie-expiry detection and a *Test Cookie* button keep it robust.

## HR Finder

The same discovery-and-outreach engine was then re-targeted as **HR Finder**: instead of sports-tech buyers, it finds recruiters, HR leads and hiring managers at target companies, so a job seeker can reach the people who actually make hiring decisions.
