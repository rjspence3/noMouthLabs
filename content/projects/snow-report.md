---
title: Snow Report
page: full
status: live
shipped: 2026-02-24
summary: "Crowdsourced plow status for every street in Rhode Island, so neighbors can see which roads are clear."
live_url: https://snowreport.dev
stack: HTML and JavaScript, Firebase Hosting, Firestore
featured: true
image:
  src: /projects/snow-report.jpg
  alt: The Snow Report map of Providence with its road status legend
metric:
  value: "143"
  label: automated UI tests passing by the end of launch week
  as_of: 2026-02
---

Built in one night for a Rhode Island storm: first commit at 6:51 p.m., live on
its own domain by about 3 a.m., then three more evenings of fixes for how it
behaves on a real phone in the snow.

## Ship log

- 2026-02-27: Sidewalk layer, whole-street reports, a How It Works page and mobile fixes; renamed SnowClear to Snow Report.
- 2026-02-25: Expanded from Providence and Pawtucket to all of Rhode Island; added street search.
- 2026-02-24: Built overnight and launched on snowreport.dev, with 23 tests running against the live site.
