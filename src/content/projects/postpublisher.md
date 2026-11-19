---
title: PostPublisher
summary: An autonomous LinkedIn content engine — AI agents write the copy, generate on-brand images and narrated videos, pass a "humanizer" quality gate, and publish on schedule with zero manual effort.
category: personal
featured: true
order: 2
period: Jul 2026 – Present
role: Creator — design, engineering, operations
tech: [Node.js, Claude API, OpenAI Images, LinkedIn API, node-canvas, ffmpeg, Edge Neural TTS, SQLite, GitHub Actions]
highlights:
  - Multi-agent pipeline — strategist, designer, publisher, state and QA agents
  - Generates branded images and fully narrated vertical videos
  - Humanizer gate and no-fabrication rules keep content authentic
  - Runs itself on GitHub Actions — 150+ automated generation runs
metrics:
  - { value: '200', label: 'commits' }
  - { value: '150+', label: 'automated pipeline runs' }
  - { value: '5', label: 'specialised agents' }
  - { value: '0', label: 'manual steps per post' }
repo: https://github.com/RoeyDeljou/PostPublisher
hue: 210
mark: AI
---

## The problem

Posting consistently on LinkedIn is a grind: ideas, copy, visuals, scheduling, tracking. Most "AI post generators" produce generic, obviously synthetic content. I wanted a system that runs a professional content channel **by itself**, and still sounds human.

## What I built

An orchestrated pipeline of specialised agents that hand off strictly typed JSON payloads:

1. **Content strategist** — picks a fresh angle (checking the last posts to avoid repetition), writes the copy and hashtags with Claude.
2. **Image designer** — writes an image prompt, generates a background, and composites branding, headline and contact footer with node-canvas.
3. **Video producer** — writes a spoken-word script, synthesizes narration with neural TTS, pulls matching stock footage by keyword (Pexels / Pixabay) and assembles a 4:5 vertical video with ffmpeg.
4. **Publisher** — uploads the media asset and creates the post through the LinkedIn API.
5. **State & QA** — persists every post in SQLite, verifies the post went live, and monitors the 60-day OAuth token, alerting before it expires.

## Quality controls

Getting the content right took as much engineering as the pipeline itself:

- A **humanizer gate** that rejects drafts with AI tells — em dashes, "slop" vocabulary, repetitive openings.
- An **absolute no-fabrication rule**: no invented organizations, names or statistics.
- **Voice rotation** and topic rotation so the feed never feels templated.
- A dashboard gallery to review, feature, archive and regenerate posts, with GitHub-API write-back.

## Operations

Everything runs on **GitHub Actions** workflows — daily posting, generation, regeneration, response drafting and status updates — so the system has no server to maintain. The repo's own history is the proof: well over a hundred commits are the bot itself generating and queuing posts.
