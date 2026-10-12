# First We Meet

Website for First We Meet: blind date nights at Gulle Gier, Rotterdam.
Built with [Astro](https://astro.build) as a fully static site.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Where to change things

| What | File |
| --- | --- |
| Domain, Instagram/TikTok handles, price, venue, motto | `src/data/site.ts` |
| Dates of the nights (add a line per night) | `src/data/events.ts` |
| Page sections | `src/components/*.astro` |
| Colours and fonts | `src/styles/global.css` |
| Share preview image (1200×630) | `public/og.png` |

### Before going live
- [ ] Fill in the real domain in `src/data/site.ts` (`url`)
- [ ] Fill in the real Instagram and TikTok handles + links
- [ ] Add the start time of the opening night in `src/data/events.ts`

## Hosting (free)

**Netlify:** "Add new site" → import this repo. Build command `npm run build`, publish directory `dist`.
**Vercel:** "Add new project" → import this repo. Astro is detected automatically.
