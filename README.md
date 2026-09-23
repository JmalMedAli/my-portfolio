# Mohamed Ali Jmal — Portfolio

Personal portfolio of **Mohamed Ali Jmal** — Business Intelligence, Data, IT, Digital
Marketing, Sales, Hospitality and Digital Projects.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4, shadcn/ui (Base UI) and
Framer Motion. Supports light/dark theming, is fully responsive, and is optimized for
SEO and performance.

## Tech stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, shadcn/ui components (Base UI primitives)
- **Animation:** Framer Motion
- **Icons:** Lucide
- **Fonts:** Barlow (via `next/font`)
- **Theming:** `next-themes` (persisted light/dark toggle)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # eslint
```

## Project structure

```
src/
  app/                  routes, layout, metadata, sitemap, robots, OG image
  components/
    layout/              navbar, footer, theme toggle
    sections/             one component per homepage section (hero, about, skills, ...)
    ui/                   shadcn/ui primitives + shared UI (Reveal, Section, SectionHeading)
    providers/             theme provider
    icons/                 custom brand icons (GitHub, LinkedIn)
  data/                  editable content — see below
  lib/                   utilities
  types/                 shared TypeScript types
public/
  images/                project mockups + the "Selected Designs" gallery
  videos/                hero background video
  cv/                    downloadable CV (placeholder — replace with the real file)
design-assets/originals/  full-resolution source design files (git-ignored, kept locally)
```

## Editing content

Almost everything on the site is data-driven — you shouldn't need to touch component
code to update copy. Edit the relevant file in `src/data/`:

| File | Controls |
|---|---|
| `site.ts` | Name, headline, bio copy, CV path, hero stats |
| `experience.ts` | Work experience timeline |
| `education.ts` | Degree + career journey stages |
| `skills.ts` | Skill categories and tags |
| `projects.ts` | Project cards (name, description, tech, links, image) |
| `designs.ts` | "Selected Designs" gallery items |
| `what-i-do.ts` | "What I Do" cards + "How I Think" principles |
| `social.ts` | Email / LinkedIn / GitHub / location links |
| `nav.ts` | Navbar links |

To add a new design to the gallery, drop an image in `public/images/designs/` and add
an entry to `designs.ts` with its `width`/`height` (used for the masonry layout).

## Deployment

The project is ready to deploy as-is on [Vercel](https://vercel.com/new) — import the
GitHub repo and it will auto-detect the Next.js settings. No environment variables are
required.

## License

Personal project — all rights reserved.
