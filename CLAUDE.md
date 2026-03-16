# noMouthLabs

Portfolio and showcase site for NoMouth Labs projects. Next.js 15 static-ish
site listing tools: Demo Gauntlet, Excel Risk Check, Expert Council, Job Heist,
NapGPT, Lawn Estimator.

## Stack

- Next.js 15 (App Router), React, TypeScript 5 (strict)
- Tailwind CSS, ESLint
- No test suite, no typecheck script

## Local Access

Not registered in dev infrastructure. Runs at **http://localhost:3000** via
`npm run dev`.

> ⚠️ Port 3000 conflicts with napGPT in `dev/ports.json`. Do not run both
> simultaneously. If noMouthLabs needs a permanent local domain, assign it a
> port in `dev/ports.json` and add a Caddyfile entry.

```bash
npm run dev    # starts at localhost:3000
npm run build  # production build
npm run lint   # ESLint
```

## Architecture

```
app/
  page.tsx                # Homepage — project grid
  layout.tsx              # Site shell
  [project]/page.tsx      # Per-project pages (demo-gauntlet, excel-risk-check, etc.)
components/
  ProjectCard.tsx         # Project tile component
  ProjectPage.tsx         # Project detail layout
  AnimateIn.tsx           # Scroll animation wrapper
  NMLMark.tsx             # Brand mark
  Footer.tsx
lib/
  projects.ts             # Project registry — source of truth for all cards
```

## Adding a project

1. Add entry to `lib/projects.ts`
2. Create `app/<slug>/page.tsx`
3. Drop any static assets in `public/`
