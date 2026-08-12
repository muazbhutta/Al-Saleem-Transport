<div align="center">

# 🕋 Al-Saleem Transport — Website

**Production-ready · Multilingual · SEO-first** website for **Al-Saleem Integrated Transport Company**
<br>(شركة السليم المتكامل للنقل البري)

_Ziyarat, airport & hotel **pick & drop** transport across Makkah · Madinah · Jeddah · Taif_

<br>

![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![next-intl](https://img.shields.io/badge/next--intl-i18n-EC5990?style=for-the-badge)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

![License: MIT](https://img.shields.io/badge/License-MIT-3DA639?style=for-the-badge&logo=opensourceinitiative&logoColor=white)
![Languages](https://img.shields.io/badge/Languages-11-0E5C4A?style=for-the-badge&logo=googletranslate&logoColor=white)
![SSG Pages](https://img.shields.io/badge/Static_Pages-95-C9A24B?style=for-the-badge&logo=vercel&logoColor=white)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge&logo=github&logoColor=white)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<sub>_"Serving the Ummah with Excellence."_</sub>

</div>

---

## 📖 About the project

**Al-Saleem Transport** is a fully multilingual, SEO-optimized marketing + booking website for a licensed Saudi transport company. It lets pilgrims and travellers explore services, read a complete **Ziyarat guide** in their own language, and book a **pick & drop** ride in one tap — the booking form opens a pre-filled WhatsApp chat, so there is **no login and no account** needed.

Every page is **statically generated per locale** with correct `lang` / `dir`, hreflang, canonical, Open Graph and JSON-LD — engineered to rank at the top for Ziyarat and airport-transfer searches.

> 🛠️ **Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · next-intl · Framer Motion

---

## ✨ Features

| | Feature |
|---|---|
| 🌍 | **11 languages** — English, العربية (RTL), اردو (RTL), Roman Urdu, हिन्दी, Bahasa Indonesia, Bahasa Melayu, Türkçe, বাংলা, فارسی (RTL), Français |
| 💬 | **WhatsApp-first booking** — every CTA opens a pre-filled `wa.me` chat to `+966 50 068 9196`; click-to-call + floating WhatsApp button on every page |
| 📗 | **Ziyarat Guide** — sticky table of contents, chapter sections, numbered ritual steps, Qur'an-verse & hadith blocks, data tables, per-locale content, **Download / Print-to-PDF** |
| 🔍 | **Technical SEO** — per-page/per-locale titles & descriptions, hreflang + x-default, canonicals, `sitemap.xml`, `robots.txt`, JSON-LD (Organization / LocalBusiness / TravelAgency, Service, FAQPage, BreadcrumbList, Article), OG + Twitter cards |
| 🎨 | **Design system** — Poppins + Noto Naskh Arabic, rounded-2xl cards, subtle scroll motion, full **RTL** support |
| ♿ | **Accessibility** — WCAG-AA focus states, keyboard navigation, ARIA labels |
| ⚡ | **Performance** — SSG + CDN, `next/image` (AVIF/WebP), blur placeholders, near-zero CLS |
| 🧩 | **Easy to extend** — add a language or edit content with **zero code changes** |

---

## 🗂️ Directory structure

```
al-saleem-transport/
├─ src/
│  ├─ app/
│  │  ├─ [locale]/              # all localized routes
│  │  │  ├─ layout.tsx          # <html lang/dir>, fonts, header/footer, Org JSON-LD
│  │  │  ├─ page.tsx            # Home
│  │  │  ├─ pick-drop/          # booking form → WhatsApp
│  │  │  ├─ ziyarat-guide/      # flagship multilingual guide
│  │  │  ├─ about-us/
│  │  │  ├─ contact-us/
│  │  │  ├─ faq/
│  │  │  ├─ privacy-policy/
│  │  │  ├─ terms/
│  │  │  ├─ not-found.tsx       # localized 404
│  │  │  └─ [...rest]/          # catch-all → localized 404
│  │  ├─ sitemap.ts             # auto sitemap (all pages × locales)
│  │  ├─ robots.ts              # robots.txt
│  │  ├─ manifest.ts            # PWA manifest
│  │  ├─ icon.svg               # favicon
│  │  └─ globals.css
│  ├─ components/               # layout · home · booking · contact · guide · legal · ui · seo
│  ├─ content/ziyarat/          # guide content model + per-locale content files
│  ├─ i18n/                     # next-intl routing + request config
│  ├─ lib/                      # site config, nav, seo, schema helpers
│  ├─ messages/                 # <locale>.json UI + content translations (11 files)
│  └─ middleware.ts             # locale detection + cookie persistence
├─ public/
│  ├─ guides/                   # generated PDF guides + README
│  └─ images/                   # hero / fleet / OG images + README
├─ scripts/
│  └─ generate-pdfs.mjs         # Puppeteer batch PDF generator
├─ .env.example
├─ LICENSE
└─ README.md
```

> 💡 All business facts (phone, license, email, coverage, geo) live in **one place** — [`src/lib/site.ts`](src/lib/site.ts). Update them there.

---

## ⚙️ How it works

1. **Locale routing** — `middleware.ts` detects the visitor's best-match language, redirects to `/<locale>`, and remembers the choice in a cookie. Every route lives under `app/[locale]/` and is pre-rendered for all 11 languages (SSG).
2. **Translations** — UI strings and page copy come from `src/messages/<locale>.json` via **next-intl**; the guide body comes from typed `src/content/ziyarat/<locale>.ts` objects. RTL languages automatically flip layout and mirror the design.
3. **Booking → WhatsApp** — the Pick & Drop form collects trip details, builds a formatted message, and opens a pre-filled `wa.me` link. No backend, no database, no login.
4. **SEO generation** — each page exports localized `metadata` (title, description, canonical, hreflang, OG). `sitemap.ts` / `robots.ts` generate `sitemap.xml` and `robots.txt` for every page × locale, and JSON-LD structured data is injected per page.
5. **Guide PDFs** — a print stylesheet (or the Puppeteer script) turns each language's guide into a clean, branded, downloadable PDF.

---

## 🔌 Scripts & API

### NPM scripts

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server → http://localhost:3000 |
| `npm run build` | Production build (SSG) — generates **95 static pages** |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run generate:pdfs` | Batch-generate `ziyarat-<locale>.pdf` for all languages (Puppeteer) |

### 💬 WhatsApp Booking integration (the app's core "API")

The booking form has no server backend — it turns trip details into a pre-filled WhatsApp deep link. This is the single integration point the whole site converts through:

```ts
// src/lib/whatsapp.ts
import { site } from "@/lib/site";

export type Booking = {
  name: string;
  phone: string;
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  passengers: number;
  vehicle: string;
  notes?: string;
};

/** Build a pre-filled WhatsApp chat URL from a booking. */
export function buildWhatsAppLink(b: Booking): string {
  const lines = [
    "🕋 *New Booking — Al-Saleem Transport*",
    `👤 Name: ${b.name}`,
    `📞 Phone: ${b.phone}`,
    `📍 Pickup: ${b.pickup}`,
    `🎯 Drop-off: ${b.dropoff}`,
    `📅 Date: ${b.date}  ⏰ Time: ${b.time}`,
    `👥 Passengers: ${b.passengers}`,
    `🚗 Vehicle: ${b.vehicle}`,
    b.notes ? `📝 Notes: ${b.notes}` : "",
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  // site.phoneIntl = "966500689196"
  return `https://wa.me/${site.phoneIntl}?text=${text}`;
}
```

```tsx
// usage in the booking component
<a href={buildWhatsAppLink(form)} target="_blank" rel="noopener noreferrer">
  Book on WhatsApp
</a>
```

### 📄 PDF generation script

```bash
npm run generate:pdfs        # renders /guides for every locale to public/guides/ziyarat-<locale>.pdf
```

> See [`public/guides/README.md`](public/guides/README.md) for the print-to-PDF alternative.

---

## 🚀 Getting started (for anyone using this project)

### 1. Clone & install

```bash
git clone https://github.com/<your-username>/al-saleem-transport.git
cd al-saleem-transport
npm install
```

### 2. Configure environment

```bash
cp .env.example .env.local
```

```env
# .env.local — optional override for canonical URLs, sitemap, hreflang, OG, JSON-LD
NEXT_PUBLIC_SITE_URL=
```

`NEXT_PUBLIC_SITE_URL` is an **override, not a requirement**. When it is unset,
[`src/lib/site.ts`](src/lib/site.ts) resolves the base URL in this order:

| # | Condition | Base URL |
|---|---|---|
| 1 | `NEXT_PUBLIC_SITE_URL` is set | that value (trailing slash stripped) |
| 2 | `VERCEL_ENV === 'production'` | `https://www.alsaleemtransport.com` |
| 3 | `VERCEL_URL` is set (preview builds) | `https://$VERCEL_URL` |
| 4 | otherwise (local dev) | `http://localhost:3000` |

So production can never emit `localhost`, and preview deployments get their own
absolute host. `VERCEL_URL` is the per-deployment `*.vercel.app` host and never
the custom domain, which is why production is a hard-coded default rather than
derived from it.

### 3. Run

```bash
npm run dev      # → http://localhost:3000 (redirects to your best-match locale)
```

### 4. Build for production

```bash
npm run build && npm start
```

### 📈 Conversion tracking

Google Ads conversions are wired to every contact entry point — WhatsApp links,
`tel:` links, the email link, both WhatsApp forms and the chat widget's booking
handoff. All of them route through one helper, [`src/lib/gtag.ts`](src/lib/gtag.ts).

Two constants drive it, **hardcoded — no env vars required**:

| Constant | Where it comes from |
|---|---|
| `GADS_ID` | Google Ads → Admin → Data sources → **Google tag** (`AW-…`) |
| `CONTACT_LABEL` | Google Ads → Goals → Conversions → **Contact** → Tag setup → event snippet (`AW-…/…`) |

Both are public values that ship in the page source of any site running gtag,
so there is nothing to protect by hiding them. They were briefly read from
`NEXT_PUBLIC_*` env vars, which turned out to be a footgun: those are inlined at
**build time**, so an unset var — or one added in Vercel without redeploying —
rendered no tag at all, with no error to notice.

The base `gtag.js` tag is rendered unconditionally in the root layout
([`src/app/[locale]/layout.tsx`](src/app/[locale]/layout.tsx), the only layout in
the app — it renders `<html>`/`<body>` and wraps all 11 locales), using
`next/script` with `strategy="afterInteractive"` so it stays off the critical
rendering path.

> ⚠️ Because the tag always renders, **local dev and preview deployments report
> real conversions** into the live Google Ads account. Recorded conversions
> cannot be removed and they feed Smart Bidding. To exclude your own traffic, add
> an IP exclusion in Google Ads rather than reintroducing a build-time gate.

Clicks are tracked by [`ContactLink`](src/components/analytics/ContactLink.tsx), a
thin client wrapper around `<a>`. It only adds a side effect: `href`, `target`
and `rel` pass through untouched, so `wa.me` links still open in a new tab.
Google's stock `gtag_report_conversion()` helper is deliberately **not** used —
it sets `window.location`, which breaks `target="_blank"` and fights the router.

To change the tag ID or conversion action, edit the two constants in
[`src/lib/gtag.ts`](src/lib/gtag.ts) and redeploy.

### ➕ Add a new language (no code changes)

1. Register it in [`src/lib/site.ts`](src/lib/site.ts) → `languages[]`:
   ```ts
   { code: "ps", hreflang: "ps", label: "پښتو", english: "Pashto", dir: "rtl" },
   ```
2. Add `src/messages/ps.json` (copy `en.json`, translate the **values**, keep the **keys** identical).

Routing, the language switcher, hreflang, the sitemap and metadata all pick it up automatically.

### ✏️ Edit content

- **UI strings, page copy, meta, FAQ, testimonials, legal:** `src/messages/<locale>.json`
- **Ziyarat guide body:** `src/content/ziyarat/<locale>.ts`

> ⚠️ **Religious accuracy:** Qur'anic verses and ahadith ship as `pending: true` placeholders on purpose. Replace them with **verified** Arabic text, translation and source, and have the complete guide **reviewed by a qualified scholar** before publishing. Arabic Qur'an text stays Arabic in every language — only the surrounding translation changes.

---

## ☁️ Deploy to Vercel

1. Push to a Git repo and import it in **Vercel** (framework auto-detected).
2. Set `NEXT_PUBLIC_SITE_URL` to your production domain.
3. Add the domain `alsaleemtransport.com` and enable HTTPS.
4. Submit `https://alsaleemtransport.com/sitemap.xml` in **Google Search Console** and set up a **Google Business Profile**.

---

## ✅ Pre-launch checklist

- [ ] `www.alsaleemtransport.com` added in Vercel, with the apex domain redirecting to it (the production default is the **www** host — a mismatch splits canonical signals)
- [ ] Verified Ziyarat guide content added + **scholar-reviewed**; verse/hadith placeholders replaced
- [x] Raster OG images (1200×630) exported — `public/og/og-default.jpg`, `og-ziyarat.jpg`
- [ ] PWA PNG icons added (`manifest.ts` still points at `/icon.svg`, `/icon-192.png`, `/icon-512.png`, none of which exist in `public/`)
- [ ] Guide PDFs generated for each language
- [ ] WhatsApp CTA + `tel:` link tested on a real phone
- [ ] Google Rich Results Test passed on the JSON-LD
- [ ] Lighthouse ≥ 95 (Performance / SEO / Accessibility / Best Practices)
- [ ] RTL (Arabic / Urdu / Persian) mirrors correctly
- [ ] Social profile URLs filled in `src/lib/site.ts` (`social`) for `sameAs`

---

## 📊 Tech stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![next-intl](https://img.shields.io/badge/next--intl-EC5990?style=flat-square)
![Framer Motion](https://img.shields.io/badge/Framer-0055FF?style=flat-square&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 Muaz — Al-Saleem Integrated Transport Company

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

**Al-Saleem Integrated Transport Company** · شركة السليم المتكامل للنقل البري
<br>
📞 [+966 50 068 9196](https://wa.me/966500689196) · 🌐 alsaleemtransport.com · License No. `35/00008116`

<sub>Made with ❤️ for the Ummah · _"Serving the Ummah with Excellence."_</sub>

</div>
