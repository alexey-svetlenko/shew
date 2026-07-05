# shew

A calm, premium, mobile-first landing page for a personal coaching brand.

The page is designed to feel like the first minutes of a real coaching session — not a sales page. The visitor walks through a quiet reflection journey of seven questions (pen and paper, nothing is submitted anywhere), and only then meets the coach and two soft invitations: a Telegram channel and an introductory meeting.

The source brief lives in [docs/brief/shew.txt](docs/brief/shew.txt).

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router), TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first config via `@theme` in `globals.css`)
- Fully static, **zero client-side JavaScript for interactions**: all navigation is anchor links with CSS smooth scrolling, the FAQ uses native `<details>`
- Fonts: Lora (serif, headlines) + Inter (body) via `next/font`, cyrillic subset
- `prefers-reduced-motion` respected

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
npm run typecheck  # TypeScript, no emit
```

## Deploy

The easiest path is [Vercel](https://vercel.com/): import the repository, keep the default Next.js settings, deploy. Any platform that runs `next build` works; the page is fully static.

## Editing content

**All copy and links live in one file: [`src/content/landing.ts`](src/content/landing.ts).** Layout and components don't need to be touched for text changes.

Placeholders to replace before publishing (all in `src/content/landing.ts`):

| Placeholder | Field |
| --- | --- |
| Telegram channel | `links.telegram` |
| Booking link (intro meeting) | `links.booking` |
| Instagram | `links.instagram` |
| Email | `links.email` |
| Privacy Policy page | `links.privacy` |
| Impressum page | `links.impressum` |
| YouTube video | `youtubeVideoId` — paste the video ID (e.g. `"dQw4w9WgXcQ"`); while empty, a calm placeholder panel is shown instead of the player |

**Portrait:** put a photo at `public/portrait.jpg` and swap the placeholder block in [`src/components/AboutSection.tsx`](src/components/AboutSection.tsx) for the `next/image` snippet shown in the comment there.

## Design system

Design tokens (colors, fonts) are CSS variables defined in the `@theme` block of [`src/app/globals.css`](src/app/globals.css): warm paper surfaces for the light sections, a dark "dimmed room" palette for the reflection journey and the invitation.
