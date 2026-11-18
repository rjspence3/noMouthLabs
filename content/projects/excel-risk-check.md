---
title: Excel Risk Check
page: full
status: live
shipped: 2025-12-29
summary: "Scores an Excel workbook for formula errors, broken references and hidden risk before it goes to someone who will trust it. Free, for finance teams and analysts."
live_url: https://excelriskcheck.com
stack: Python analysis engine and API (FastAPI), Next.js app, Astro marketing site, Postgres, Stripe, Cloud Run
featured: true
metric:
  value: "58"
  label: clicks from Google search in October 2026
  as_of: 2026-10
links:
  - label: Open the app
    href: https://app.excelriskcheck.com
---

Spreadsheets carry real money and almost nobody checks them before sending.
Excel Risk Check runs a fixed, auditable rule set over a workbook and returns
a 0–100 risk score with the cell location of every finding. No model guesses
at your numbers; every result traces back to a rule.

## Ship log

- 2026-11-18: Moved the app and API to dedicated, least-privilege runtime accounts and added uptime alerts.
- 2026-08-28: Detector audit: 28 findings closed, engine 2.2.0.
- 2026-01-23: API keys with self-serve subscription checkout and a key dashboard.
- 2026-01-09: Replaced the Streamlit prototype with a Next.js app.
- 2025-12-29: Launched: marketing site live with links into the app.
