/**
 * Render scripts/og-template.html to public/og/og-generated.jpg.
 *
 *   npm run gen:og
 *
 * The card is real HTML text (not a generated image), so it stays crisp at
 * thumbnail size. Run this after editing the template or swapping the photo.
 *
 * NOTE: this deliberately does NOT write og-default.jpg. That file is a
 * hand-made design supplied separately, and it is what the site actually
 * serves (see `image` in src/lib/seo.ts). To promote a render from here,
 * copy og-generated.jpg over og-default.jpg on purpose.
 */
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { stat } from 'node:fs/promises';

const here = dirname(fileURLToPath(import.meta.url));
const TEMPLATE = resolve(here, 'og-template.html');
const OUTPUT = resolve(here, '..', 'public', 'og', 'og-generated.jpg');

const WIDTH = 1200;
const HEIGHT = 630;
const QUALITY = 85;
const MAX_BYTES = 300 * 1024;

const browser = await puppeteer.launch({
  headless: 'new',
  args: [
    // The template pulls the logo and photo in over file://.
    '--allow-file-access-from-files',
    // Deterministic glyph rasterisation across machines.
    '--font-render-hinting=none',
    '--disable-lcd-text',
  ],
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 1 });

  await page.goto(`file://${TEMPLATE.split('\\').join('/')}`, {
    waitUntil: 'networkidle0',
  });

  // Webfonts and the photo must be painted before the screenshot, or we
  // capture a fallback-font, empty-image frame.
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(
      Array.from(document.images).map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((done) => {
              img.addEventListener('load', done, { once: true });
              img.addEventListener('error', done, { once: true });
            }),
      ),
    );
  });

  // Fail loudly rather than silently shipping a card in the fallback font.
  const poppinsLoaded = await page.evaluate(() =>
    document.fonts.check('700 46px Poppins'),
  );
  if (!poppinsLoaded) {
    throw new Error(
      'Poppins did not load — the card would render in a fallback font. ' +
        'Check network access to fonts.googleapis.com and re-run.',
    );
  }

  await page.screenshot({
    path: OUTPUT,
    type: 'jpeg',
    quality: QUALITY,
    clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT },
  });

  const { size } = await stat(OUTPUT);
  const kb = (size / 1024).toFixed(1);
  console.log(`✓ ${OUTPUT}`);
  console.log(`  ${WIDTH}x${HEIGHT} · quality ${QUALITY} · ${kb} KB`);

  if (size > MAX_BYTES) {
    console.warn(`  ⚠ over the ${MAX_BYTES / 1024} KB budget — lower QUALITY.`);
    process.exitCode = 1;
  }
} finally {
  await browser.close();
}
