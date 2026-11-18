---
title: napGPT
page: full
status: live
shipped: 2026-02-25
summary: "The laziest AI ever built, on purpose: a chatbot with an effort slider that decides how hard it can be bothered to try."
live_url: https://napgpt.vercel.app
code_url: https://github.com/rjspence3/napGPT
stack: Next.js, TypeScript, Claude (Anthropic SDK), Vercel KV, Playwright and Jest
featured: false
image:
  src: /projects/napgpt.jpg
  alt: napGPT's chat screen with its energy bar and effort slider
---

Every assistant competes to be the most eager. napGPT goes the other way: turn
the effort slider down and you get one-word answers and yawns; push it up and
it helps, reluctantly. Ignore it long enough and it falls asleep. It started as
a prompt-engineering experiment in how much personality you can get without
fine-tuning.

## Ship log

- 2026-06-03: Rare "lucid moments" where it drops the act and gives a genuine answer.
- 2026-03-21: Audit fixes: rate limiting moved to Vercel KV and a race condition fixed.
- 2026-03-08: Switched the default model to Claude.
- 2026-02-25: Live on Vercel.
