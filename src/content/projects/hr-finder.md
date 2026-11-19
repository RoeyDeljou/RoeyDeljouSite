---
title: HR Finder
summary: Paste or share a LinkedIn job post and, in seconds, get the HR and talent-acquisition people at that company — verified as currently employed there — each with a personalised, AI-written Hebrew outreach message. Built on the ColdCall2000 lead-intelligence engine.
category: collab
featured: true
order: 5
period: May 2026 – Nov 2026
role: Lead developer (ColdCall2000 co-built with Tal Meller)
tech: [Next.js, TypeScript, React, Claude API, Zod, Cheerio, LinkedIn Voyager API, Serper / Brave / Google CSE, Apollo.io, Hunter.io, Prisma, PWA]
highlights:
  - LinkedIn job → company HR contacts → tailored messages, in one tap from the Share menu
  - Six people-search sources merged, de-duplicated and ranked
  - Keeps only people with evidence they work at the company now
  - Claude writes one Hebrew message per person with correct gender forms, in parallel batches
metrics:
  - { value: '6', label: 'people-search sources fused' }
  - { value: '1 tap', label: 'from LinkedIn Share to messages' }
  - { value: '152', label: 'sports orgs mapped by ColdCall2000' }
demo: https://hr-finder-coral.vercel.app
repoPrivate: true
collaborators:
  - { name: 'Tal Meller', url: 'https://github.com/talmeller86' }
image: /projects/hr-finder.webp
hue: 340
mark: HR
---

## The problem

When you apply for a job, the application often disappears into an applicant-tracking system. The candidates who get noticed are the ones who reach a **real recruiter at the company** with a short, relevant message — but finding the right people and writing a personal note for each one takes far longer than the application itself.

## What HR Finder does

A phone-first installable web app. In the LinkedIn app you tap **Share → HR Finder** on a job post (or paste the link), and it:

1. **Reads the job** — title, company and description from LinkedIn's public job page, including short-link resolution and share-text parsing.
2. **Finds the people** — HR, recruiting and talent-acquisition staff at that company, with their LinkedIn profiles.
3. **Writes the messages** — one Hebrew message per selected person, with the same structure but worded differently each time, using the right grammatical gender, the job description and the candidate's background.

Each person card has *Copy message*, *Copy short note* (≤300 characters for a connection request), *Copy & open profile* and a *Sent* checkbox — so the whole outreach loop happens on the phone.

## How people are found

All sources run together, and the results are merged, de-duplicated and sorted with in-house tech recruiters first:

| Source | Notes |
|---|---|
| LinkedIn (user's session) | Voyager employee search — the most complete source |
| Google via Serper | `site:linkedin.com/in` queries tuned for the free plan |
| Brave Search & Google Programmable Search | Additional search-engine coverage |
| Apollo.io | People search by company and domain |
| Bing / DuckDuckGo | Free fallback |

Precision matters as much as recall:

- **Bilingual HR title detection** (English and Hebrew) that handles long titles like *"Senior Global Talent Acquisition Partner, R&D"*, plus a relevance score for ranking.
- **Current-employment evidence** — a person is kept only if the search result shows they work at the company *now*, which removes the ex-employees that plague people search.
- **Company-name normalisation** and profile-URL canonicalisation for clean de-duplication.
- **Hebrew name → gender lookup** so every message uses the correct grammatical forms.

## AI messaging

With Claude enabled, messages are generated from the job description and a structured candidate profile, in **parallel batches with live progress**, and every selected person is guaranteed a message. Prompt rules keep the content accurate — anchoring on the most relevant experience and never overstating it. Without an API key, built-in Hebrew templates still produce personalised messages.

## Where it came from: ColdCall2000

HR Finder is built on **ColdCall2000**, a B2B lead-intelligence platform I co-developed with Tal Meller. It mapped the tech, data and analytics decision-makers across all **152 NBA, NFL, MLB, NHL and MLS organisations**, discovered verified emails through a credit-conserving **Apollo → Hunter → pattern + MX check → website scraper** pipeline, and sent personalised template outreach over SMTP from a Next.js 16 + Prisma dashboard. Its LinkedIn layer evolved from Playwright DOM scraping to session warm-up, cookie handling and finally an intercept of LinkedIn's internal Voyager REST API — the same technique HR Finder relies on today.
