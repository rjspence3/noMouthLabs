# noMouthLabs

Rob's front door and projects index. Every page is generated from markdown in
`content/`: each project page proves shipping (status, ship dates, links, dated
ship log, one real number); everything without that proof is one line on /lab.
Writing is published here, not on Substack. Nothing Wisq-related goes on the site.

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
content/
  README.md               # How to publish (read this first)
  projects/<slug>.md      # One file per project; page: full | lab
  writing/<slug>.md       # One file per post; projects: [slugs]
  */_template.md          # Templates; "_" files are never published
lib/
  content.ts              # Loads and validates content/; build fails on bad files
  site.ts                 # Site constants: seller (Cyber Shark), contact placeholder
app/
  page.tsx                # Two-line intro + three newest ships
  projects/               # Index + [slug] template
  lab/page.tsx            # One line per lab project
  writing/                # Index, [slug], rss.xml
  sitemap.ts, llms.txt/   # Generated from content/
next.config.ts            # Redirects from the old root-level project URLs
```

## Rules the code enforces

- `page: full` needs `live_url` or at least one `## Ship log` line.
- "Updated" is the newest ship log date, never a hand-set field.
- The footer says paid products are sold by Cyber Shark Solutions LLC. Never
  describe NML as part of the LLC.
- `site.contact.live` stays false until hello@nomouthlabs.com forwarding is tested.

## Deploying

The Vercel project `imaglides-projects/no-mouth-labs` is not git-linked; production
was deployed with `vercel --prod`. Previews: `vercel deploy` (no `--prod`).
