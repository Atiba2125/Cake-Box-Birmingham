# Cake Box Birmingham (Acocks Green) — React website

A multipage React (Vite + React Router) website for the Cake Box store at Unit 1A, 1146 Warwick Road, Acocks Green, Birmingham B27 6BL. The theme follows the Cake Box logo (purple `#59275E`) with the pastel pink, blue and peach of the cake photography.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`. This is a single-page app, so the host must serve `index.html` for every route (`vercel.json` and a Netlify `public/_redirects` file are included).

## Pages

Home, Our Cakes (filter + sort, 43 products), Why Egg-Free, Order & Delivery (steps + FAQ), Visit Us (hours, map), 404.

## Notes

Concept website for the Acocks Green store. The logo, photos, product names and "from" prices come from cakebox.com and belong to Cake Box; get their permission before using this as the store's live site. Products link to cakebox.com, where ordering and payment are completed. Friday opening hours (10:00–20:00) are inferred from the store page's "today" hours and the Google listing.
