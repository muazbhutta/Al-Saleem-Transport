/**
 * Generate QR codes for every Ziyarat place's Google Maps URL.
 *
 *   npm run gen:qr
 *
 * BUILD TIME ONLY. `qrcode` is a devDependency and is never imported by the
 * app — this script writes a plain data module that the PDF generator reads,
 * so the shipped site makes no runtime QR call to anything.
 *
 * Output: src/content/ziyarat/qr-codes.ts
 */
import QRCode from 'qrcode';
import { writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const OUT = resolve(root, 'src/content/ziyarat/qr-codes.ts');
const TMP = resolve(root, '.qr-tmp');

// places.ts is plain data with no imports, so it compiles standalone.
execFileSync(
  'npx',
  ['tsc', 'src/content/ziyarat/places.ts', '--outDir', TMP,
   '--module', 'commonjs', '--target', 'es2020', '--skipLibCheck'],
  { cwd: root, stdio: 'inherit', shell: process.platform === 'win32' },
);
const { ziyaratPlaces } = await import(`file://${resolve(TMP, 'places.js')}`);

/** Compact SVG, no XML prologue — it gets inlined into the PDF HTML. */
async function svgFor(url) {
  const svg = await QRCode.toString(url, {
    type: 'svg',
    errorCorrectionLevel: 'M',
    margin: 0,
    width: 96,
  });
  return svg
    .replace(/<\?xml[^>]*\?>/, '')
    .replace(/<!DOCTYPE[^>]*>/, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

const entries = [];
for (const place of ziyaratPlaces) {
  entries.push([place.id, await svgFor(place.googleMapsUrl)]);
}

const body = entries
  .map(([id, svg]) => `  ${JSON.stringify(id)}: ${JSON.stringify(svg)},`)
  .join('\n');

writeFileSync(
  OUT,
  `/**
 * GENERATED FILE — do not edit by hand.
 * Run \`npm run gen:qr\` after changing coordinates in places.ts.
 *
 * Inline SVG QR codes encoding each place's Google Maps URL, produced at build
 * time so the PDF needs no network call and the site ships no QR library.
 */
export const QR_CODES: Record<string, string> = {
${body}
};

export function qrFor(placeId: string): string | undefined {
  return QR_CODES[placeId];
}
`,
  'utf8',
);

console.log(`✓ ${OUT}`);
console.log(`  ${entries.length} QR codes · ${(Buffer.byteLength(body) / 1024).toFixed(1)} KB`);
