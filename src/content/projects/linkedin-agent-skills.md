---
title: LinkedIn Agent Skills
summary: A pack of eleven Claude skills that run a LinkedIn presence — posts, comments, replies, profile scoring and weekly planning — with a humanizer that strips AI tells before anything is shown.
category: client
featured: false
order: 11
period: Oct 2026
role: Developer
tech: [Claude Code Skills, Prompt Engineering, Python, JSON rubrics]
highlights:
  - 11 slash-command skills for Claude Code
  - Posts built from 21 hook formulas
  - Profile scored against a 12-part, 100-point rubric
  - Humanizer with a five-check AI-detection panel
repo: https://github.com/RoeyDeljou/PublisherAviGrondin
hue: 190
mark: LI
---

## What it is

Eleven installable **Claude skills** that run a LinkedIn account — free, no API key, nothing to connect. **Nothing is posted until the user says yes**: the skills write, the human posts.

| Skill | What it does |
|---|---|
| `/li-post` | Turns one idea into a post: three hooks from 21 formulas and one full, humanized draft |
| `/li-comment` | Writes comments on others' posts — nine types, chosen by what the post actually is |
| `/li-reply` | Triages the thread under your post (lead / substance / peer / support / noise) and replies in order |
| `/li-profile` | Scores a profile against a 12-part rubric out of 100 and rewrites in fix-first order |
| `/li-plan` | Plans the week: what to post, when, and the ten people to engage with |
| `/li-human` | The humanizer: removes em dashes, slop vocabulary and invisible watermark characters, then scores against a five-check detection panel |

Every skill reads a personal `voice.md`, so the output sounds like the user, not like everyone else.
