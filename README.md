<<<<<<< HEAD
# Al-Saleem Transport — Website

Production-ready, multilingual, SEO-first website for **Al-Saleem Integrated
Transport Company** (شركة السليم المتكامل للنقل البري) — Ziyarat, airport and
hotel pick & drop transport across Makkah, Madinah, Jeddah and Taif.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · next-intl ·
Framer Motion**. Every page is statically generated per locale with correct
`lang`/`dir`, hreflang, canonical, Open Graph and JSON-LD.

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000 — you'll be redirected to your best-match locale
(e.g. `/en`).

```bash
npm run build   # production build (SSG) — generates 95 static pages
npm start       # serve the production build
npm run lint    # eslint
```

### Environment

Copy `.env.example` to `.env.local` and set your live domain (used for
canonical URLs, sitemap, hreflang and Open Graph):

```
NEXT_PUBLIC_SITE_URL=https://alsaleemtransport.com
```

---

## What's included

- **Pages** (each fully translated per locale): Home, Pick & Drop / Book Now,
  Ziyarat Guide, About Us, Contact Us, FAQ, Privacy Policy, Terms.
- **11 languages**: English, Arabic (RTL), Urdu (RTL), Roman Urdu, Hindi,
  Indonesian, Malay, Turkish, Bengali, Persian (RTL), French.
- **WhatsApp-first conversion**: every CTA opens a pre-filled `wa.me` chat to
  `+966 50 068 9196`; the booking form builds a full message; floating WhatsApp
  button and click-to-call on every page.
- **SEO**: per-page/per-locale titles + descriptions, hreflang + x-default,
  canonicals, `sitemap.xml`, `robots.txt`, JSON-LD (Organization /
  LocalBusiness / TravelAgency, Service, FAQPage, BreadcrumbList, Article),
  Open Graph + Twitter cards, web manifest, favicon, theme-color.
- **Ziyarat guide** framework: sticky table of contents, chapter sections,
  numbered step blocks, Qur'an-verse and hadith blocks, data tables, per-locale
  content, and Download / Print-to-PDF.
- **Design system**: navy / maroon / cream / gold / teal palette, Poppins +
  Noto Naskh Arabic fonts, rounded-2xl cards, subtle scroll motion, full RTL,
  WCAG-AA focus/keyboard/aria.

---

## Project structure

```
src/
├─ app/
│  ├─ [locale]/            # all localized routes
│  │  ├─ layout.tsx        # <html lang/dir>, fonts, header/footer, Org JSON-LD
│  │  ├─ page.tsx          # Home
│  │  ├─ pick-drop/        # booking form → WhatsApp
│  │  ├─ ziyarat-guide/    # flagship guide
│  │  ├─ about-us/  contact-us/  faq/  privacy-policy/  terms/
│  │  ├─ not-found.tsx     # localized 404
│  │  └─ [...rest]/        # catch-all → localized 404
│  ├─ sitemap.ts  robots.ts  manifest.ts  icon.svg  globals.css
├─ components/             # layout / home / booking / contact / guide / legal / ui / seo
├─ content/ziyarat/        # guide content model + per-locale content files
├─ i18n/                   # next-intl routing + request config
├─ lib/                    # site config, nav, seo, schema helpers
├─ messages/               # <locale>.json UI + content translations (11 files)
└─ middleware.ts           # locale detection + cookie persistence
```

Business facts (phone, license, email, coverage, geo) live in one place:
[`src/lib/site.ts`](src/lib/site.ts). Update them there.

---

## Add a new language

Two steps — no code changes needed:

1. **Register it** in [`src/lib/site.ts`](src/lib/site.ts) → `languages[]`:

   ```ts
   { code: 'ps', hreflang: 'ps', label: 'پښتو', english: 'Pashto', dir: 'rtl' },
   ```

2. **Add the translation file** `src/messages/ps.json` (copy `en.json` and
   translate the values — keep the keys identical).

That's it: routing, the language switcher, hreflang, the sitemap and metadata
all pick it up automatically. (Optionally add a native guide file — see below.)

---

## Edit content

- **UI strings & page copy, meta titles/descriptions, FAQ, testimonials, legal
  text**: `src/messages/<locale>.json`. The structure is identical across
  locales; edit values only.
- **Ziyarat guide body**: `src/content/ziyarat/<locale>.ts` (a typed `Guide`
  object). English lives in `en.ts`. Locales without their own file fall back to
  English and show a "content pending" notice.

### Guide content & religious accuracy

The guide model ([`src/content/ziyarat/types.ts`](src/content/ziyarat/types.ts))
supports paragraphs, headings, notes, callouts, **verse** blocks (Arabic +
translation + reference), **hadith** blocks (text + source), numbered **steps**
and **tables**.

> ⚠️ Qur'anic verses and ahadith are shipped as `pending: true` placeholders on
> purpose. Replace them with the **verified** Arabic text, translation and
> source, and have the complete guide **reviewed by a qualified scholar** before
> publishing. Arabic Qur'an text stays Arabic in every language version — only
> the surrounding translation/explanation changes.

Example verse block once verified:

```ts
{ type: 'verse',
  arabic: '…',
  translation: '…',
  reference: 'Surah Al-Baqarah 2:125' }
```

To add a native-language guide, create `src/content/ziyarat/ar.ts` and register
it in `src/content/ziyarat/index.ts`.

---

## Regenerate guide PDFs

See [`public/guides/README.md`](public/guides/README.md). In short: either use
the browser's Print → Save as PDF (the print stylesheet makes it clean), or run
the Puppeteer script to batch-generate `ziyarat-<locale>.pdf` for all languages.

---

## Images & Open Graph

The site renders complete without photos. To add real ones (hero, fleet) and to
export raster OG images, see [`public/images/README.md`](public/images/README.md).

---

## Deploy to Vercel

1. Push to a Git repo and import it in Vercel (framework auto-detected).
2. Set `NEXT_PUBLIC_SITE_URL` to your production domain.
3. Add the domain `alsaleemtransport.com`, enable HTTPS.
4. Submit `https://alsaleemtransport.com/sitemap.xml` in Google Search Console
   and set up a Google Business Profile.

---

## Pre-launch checklist

- [ ] `NEXT_PUBLIC_SITE_URL` set to the live domain
- [ ] Verified Ziyarat guide content added + scholar-reviewed; verse/hadith
      placeholders replaced
- [ ] Raster OG images (1200×630) exported; PWA PNG icons added
- [ ] Guide PDFs generated for each language
- [ ] Test WhatsApp CTA + `tel:` link on a real phone
- [ ] Run Google Rich Results Test on the JSON-LD
- [ ] Lighthouse ≥ 95 (Performance / SEO / Accessibility / Best Practices)
- [ ] Confirm RTL (Arabic / Urdu / Persian) mirrors correctly
- [ ] Fill in social profile URLs in `src/lib/site.ts` (`social`) for `sameAs`

---

_"Serving the Ummah with Excellence."_
=======
# Al-Saleem-Transport
>>>>>>> f3a2abb750349c3e38cba932f4d6586047cc74a8
