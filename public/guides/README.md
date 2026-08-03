# Ziyarat guide PDFs

The "Download PDF" button on `/[locale]/ziyarat-guide` looks for a pre-generated
file here named `ziyarat-<locale>.pdf` (e.g. `ziyarat-en.pdf`, `ziyarat-ar.pdf`).
Until a locale-specific PDF exists it links to `ziyarat-en.pdf`, and the "Print /
Save as PDF" button always works (it uses the browser's print-to-PDF with the
print stylesheet in `globals.css`).

## Two ways to produce the branded PDFs

### 1. Print-to-PDF (no setup)
Open the guide page in Chrome → Print → "Save as PDF". The print stylesheet
hides the header/footer/nav and keeps the content clean. Save the result here as
`ziyarat-<locale>.pdf`.

### 2. Automated with Puppeteer (recommended for all 11 languages)
Run the site (`npm run build && npm start`), then:

```bash
npm i -D puppeteer
node scripts/generate-guide-pdfs.mjs   # create this small script
```

A minimal script:

```js
import puppeteer from 'puppeteer';
const locales = ['en','ar','ur','ur-Latn','hi','id','ms','tr','bn','fa','fr'];
const base = process.env.SITE_URL ?? 'http://localhost:3000';
const browser = await puppeteer.launch();
for (const l of locales) {
  const page = await browser.newPage();
  await page.goto(`${base}/${l}/ziyarat-guide`, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: `public/guides/ziyarat-${l}.pdf`,
    format: 'A4', printBackground: true,
    margin: { top: '18mm', bottom: '18mm', left: '14mm', right: '14mm' },
  });
  await page.close();
}
await browser.close();
```

Regenerate whenever the guide content changes.
