# Hodgson AI — React site

React + Vite rebuild of hodgson.ai, ready for Vercel.

## Run locally
```bash
npm install
npm run dev
```

## Deploy to Vercel
Push to a Git repo and import it in Vercel, or run `npx vercel` in this folder.
Vite is auto-detected; no settings needed.

## Before going live — 3 TODOs
1. **Affiliate redirects** — `vercel.json` recreates your WordPress shortlinks
   (`/ghl`, `/annual`, `/protrial`, `/5day`, `/bootcamp`, `/specialoffer`) as
   Vercel redirects. Replace each `REPLACE_WITH_YOUR_AFFILIATE_REF` destination
   with your real HighLevel affiliate URLs (grab them from your current WordPress
   redirect plugin before switching DNS, or the links will break).
2. **Radio player** — paste your streaming embed into `src/pages/Radio.jsx`
   (replace the `.embed-slot` block).
3. **Booking calendar** — paste your calendar embed into
   `src/pages/Consulting.jsx` (replace the `.embed-slot` block).

## Notes
- Screenshots currently hotlink to hodgson.ai/wp-content. Once WordPress goes
  offline, download those 6 .webp files into `public/` and update the URLs in
  `src/data.js`.
- All social links, contact info, pricing, and the affiliate disclosure carry
  over from the original site.
