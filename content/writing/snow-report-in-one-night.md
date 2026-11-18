---
title: Snow Report, built in one night
date: 2026-11-18
summary: "A storm was coming, so I built a crowdsourced plow map for Rhode Island between dinner and 3 a.m., then spent three more evenings learning what a real phone does to a map."
projects: [snow-report]
draft: true
---

A storm was coming and the question everyone in my neighborhood was asking
was the same: has the plow been down my street yet? Nobody publishes that. So
on the evening of February 24 I started building a map where anyone can drop a
pin on a street and say what it's actually like: plowed, passable, or not.

## The night

The first commit landed at 6:51 p.m. By about 3 a.m. the site was live on
snowreport.dev, with:

- anonymous sign-in, so nobody needs an account to report a street;
- a Firestore database whose rules are the real security boundary, since the
  whole app is one static page anyone can read;
- 23 automated tests running against the live site;
- privacy and terms pages.

The first test run found 12 bugs, one of them fatal: the deployed page still had
placeholder text where the Firebase keys should be, so nothing could be
submitted. That is the case for testing the deployed site rather than your
laptop. By 3 a.m. the map had one report on it: a street in Pawtucket, marked plowed.

## The next three evenings

Day two widened the map from Providence and Pawtucket to all of Rhode Island
and added street search. By day four it had a sidewalk layer, reports that
cover a whole stretch of road instead of a single point, a How It Works page,
and a new name to match the domain.

Most of the work after launch was phones. iOS zooms the whole page when you
tap a text box with type smaller than 16 pixels, and the zoom never lets go. A
pinch to zoom fires a stray tap that drops a pin you didn't mean. Long-press
brings up a magnifying loupe over the map. None of that shows up on a desktop
browser, and all of it is the first thing a person standing in the snow hits.
The suite was at 143 passing tests by the end of the week.

## What I'd tell myself

- **Ship the smallest true thing tonight.** One pin, one status, one map. Every
  feature after that was better for being built against real reports.
- **Test the deployed site, not the dev server.** The fatal bug only existed
  in production.
- **Plan for low use.** A storm map is busy for a day and silent for months. I
  had planned to auto-delete old reports and shelved it, because with so few
  reports the old ones are still the most useful data on the map.
