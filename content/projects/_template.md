---
title: Project name
# full: its own page. Needs live_url or at least one ship log line.
# lab: one line on /lab, nothing else below `links` is read.
page: full
status: live            # live | beta | retired
shipped: 2026-01-01     # first day a stranger could use it
summary: What it does and who it is for, in one sentence.
live_url: https://example.com
code_url: https://github.com/rjspence3/example   # only if public
stack: One line, e.g. Next.js, FastAPI, Postgres, Cloud Run
featured: false         # true puts it in the featured group on /projects
metric:                 # one real number, with when it was true
  value: "58"
  label: Google search clicks in October
  as_of: 2026-10
image:                  # optional; put the file in public/projects/
  src: /projects/example.png
  alt: What the screenshot shows
links:                  # optional extra links
  - label: API listing
    href: https://example.com/api
---

The story: why it exists and what was hard. Plain markdown.

## Ship log

- 2026-01-01: Launched.
