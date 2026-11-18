---
title: Expert Council
page: full
status: live
shipped: 2026-01-23
summary: "A panel of distinct AI personas debates your hard question in real time, keeping the disagreement instead of flattening it into one answer."
live_url: https://expert-council-1078459944567.us-central1.run.app/app
stack: Python (FastAPI, WebSocket), React, Claude, Tavily search, Cloud Run
featured: true
image:
  src: /projects/expert-council.jpg
  alt: Expert Council's start screen with the three thinking modes
metric:
  value: "36"
  label: behavioral test cases that keep each persona's advice distinct
  as_of: 2026-03
---

A research agent searches the web, then picks two to four experts from a roster
of nine personas, who discuss the question live in cooperative, debate or
devil's-advocate mode. A behavioral rubric checks that a Stoic Philosopher and
a Decision Helper actually give different advice, not the same answer reworded.

## Ship log

- 2026-08-06: Backend cleanup: undefined names, a missing await and stale tests fixed.
- 2026-03-23: Removed the beta access code; anyone can open the app.
- 2026-02-11: Rebuilt as a new codebase with structured debate protocols.
- 2026-01-23: Public beta on Cloud Run.
- 2025-12-01: First working version: multi-agent council with per-expert web search.
