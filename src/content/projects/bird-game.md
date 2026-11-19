---
title: Bird Game
summary: A 3D Unity adventure built during my Unity certification — collectibles, a dynamic day-and-night cycle that reveals hidden items, ScriptableObject-driven abilities and level progression.
category: personal
featured: false
order: 12
period: Jul 2023
role: Game developer
platform: Unity
tech: [Unity 3D, C#, ScriptableObjects, TextMesh Pro, UI Toolkit]
highlights:
  - Day/night cycle that changes which collectibles exist
  - Data-driven player and special-ability system with ScriptableObjects
  - Level manager, scoring and end-of-level unlocks
repoPrivate: true
hue: 95
mark: BG
---

## What it is

A 3D collect-and-explore game set in a low-poly natural world with Egyptian-themed enemies.

## Systems I built

- **Day & night cycle** — time of day drives lighting and gameplay: some collectibles only appear at night, so a level can only be finished by playing through both.
- **Collectible container** — tracks active and night-only collectibles and spawns the end-of-level star when everything is collected.
- **Abilities** — players and special abilities defined as **ScriptableObjects**, so new abilities are data, not code, with an ability-slot UI.
- **Level flow** — a level manager, scoring system and UI manager tying it together.

A foundation project that taught me the component-based architecture I later used on professional simulators.
