---
title: A-Team Fantasy
summary: An invite-only fantasy football PWA for Serie A with two pluggable scoring engines — FPL-style points and the Italian fantavoto — built on a hardened FastAPI backend.
category: collab
featured: false
order: 7
period: 2025 – 2026
role: Collaborator (project led by Tal Meller)
tech: [Python, FastAPI, SQLAlchemy, Alembic, PostgreSQL, Neon, Next.js, React, TanStack Query, next-intl, Zod, pytest, Render]
highlights:
  - Two scoring engines chosen per competition by a database row, not code
  - Data providers normalised behind adapters (API-Football, FPL)
  - Dedicated security test suite guarding real past vulnerabilities
  - WCAG-AA-checked palette and installable PWA
repoPrivate: true
collaborators:
  - { name: 'Tal Meller', url: 'https://github.com/talmeller86' }
hue: 120
mark: AT
---

## What it is

A free, invite-only, ad-free fantasy football game for **Serie A**. One budget-capped squad per player per competition, a hard weekly deadline, and private leagues joined by code.

## Design highlights

- **Two scoring engines side by side** — `classic_v1` (FPL-style points from match events) and `italiano_v1` (the Italian *fantavoto*: base rating plus bonus/malus, with the *modificatore di difesa*). Which one a competition uses is **a database row, not a branch in code** — the same mechanism that makes adding a new league a single `INSERT`.
- **Provider adapters** normalise API-Football and FPL data into one vocabulary.
- **Operational care** — NullPool connections so Neon can auto-suspend, a health check that really queries the database, scheduled scoring jobs, and a runbook for deploys, backups and incidents.
- **Security first** — JWT auth, bcrypt with a strict password policy, rate limiting, single-use reset links, and a `test_security.py` suite where every test guards a vulnerability that once existed.

The visual identity — a chalkboard style — was later reused across the Perfect XI and Football Drinking Game projects.
