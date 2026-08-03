# Image slots

The site is designed to look complete **without** photos (it uses gradients +
iconography), so nothing is ever a broken image. Drop real photos in here to
upgrade the visuals.

## Brand logo (do this first)

Save the Al-Saleem calligraphy logo as:

- **`public/images/logo.png`** — used in the header & footer. A **transparent
  PNG** looks best (the header/footer sit on light and dark backgrounds).
  It appears automatically the moment the file exists — no code change needed;
  until then an on-brand droplet mark is shown.
- **`src/app/icon.png`** — the favicon (browser-tab icon). Next.js picks it up
  automatically. A square ~512×512 PNG is ideal. (An `icon.svg` placeholder in
  the same colours already ships.)

Recommended photo files and where they appear:

| File | Used by | Suggested size | Prompt (see master brief) |
|------|---------|----------------|---------------------------|
| `hero.jpg` | Home hero background | 1920×1080 | Hero image prompt #1 |
| `fleet-sedan.jpg` | Fleet section | 800×600 | Fleet prompt #5 |
| `fleet-suv.jpg` | Fleet section | 800×600 | Fleet prompt #5 |
| `fleet-van.jpg` | Fleet section | 800×600 | Fleet prompt #5 |
| `fleet-bus.jpg` | Fleet section | 800×600 | Fleet prompt #5 |

## How to wire a photo in

Each component that has a photo slot has a comment marking it (search for
`photo slot`). Example — in `src/components/home/Hero.tsx`, replace the layered
gradient with:

```tsx
import Image from 'next/image';
// ...
<Image src="/images/hero.jpg" alt="White SUV near Masjid al-Haram at dusk"
  fill priority sizes="100vw" className="object-cover opacity-40" />
```

Always keep descriptive `alt` text (accessibility + SEO) and use `next/image`
so images are served as AVIF/WebP and lazy-loaded.

## Open Graph images

`public/og/og-default.svg` and `og-ziyarat.svg` are branded placeholders.
For best social-sharing support (Facebook does not render SVG), export each to
a **1200×630 JPG/PNG** and update the references in `src/lib/seo.ts`,
`src/lib/schema.ts` and `src/app/[locale]/ziyarat-guide/page.tsx`.

## Favicon / PWA icons

`src/app/icon.svg` is the favicon (auto-wired by Next.js). For full coverage,
also add `public/icon-192.png` and `public/icon-512.png` (referenced by the web
manifest) and `public/apple-touch-icon.png` (180×180).
