---
title: aEquity
page: full
status: beta
shipped: 2026-03-19
summary: "An autonomous equity analyst that scores S&P 500 companies through eight investing lenses, from their SEC 10-K filings and market data."
code_url: https://github.com/rjspence3/aEquity
stack: Python, Streamlit, Claude Sonnet, SEC EDGAR, yfinance, Railway
featured: true
metric:
  value: "454"
  label: S&P 500 companies analyzed in the demo database
  as_of: 2026-03
---

aEquity combines quantitative metrics with qualitative signals pulled from 10-K
filings and has Claude score each company through eight investor lenses
(Buffett, Lynch, Graham, Damodaran and others) into a 0–100 scorecard with
letter grades and price targets. Not investment advice.

## Ship log

- 2026-03-23: Seeded the demo with 454 S&P 500 analyses; MIT licensed.
- 2026-03-21: Audit fixes: rate limiting, EDGAR timeouts, ticker validation.
- 2026-03-19: Deployed: eight-guru scoring, screener with live prices, nightly batch.
- 2026-03-02: First version: single-stock analysis and dashboard.
