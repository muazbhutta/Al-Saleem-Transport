import type { Guide, GuideBlock } from '@/content/ziyarat/types';

/**
 * Builds a clean, self-contained, print-ready HTML document of the whole guide
 * (its own styles inlined, Arabic kept RTL). Used for the "Download PDF" action:
 * we open this in a new tab and trigger the browser's native Save-as-PDF, which
 * paginates reliably (no canvas-height limits, no messy live-page chrome).
 */

export type GuideDocLabels = { verse: string; hadith: string; source: string; translation: string };
export type GuideDocOpts = {
  locale: string;
  dir: 'ltr' | 'rtl';
  title: string;
  intro: string;
  siteName: string;
  licenseLine: string;
  tagline: string;
  verifyNote: string;
  labels: GuideDocLabels;
};

const esc = (s = '') =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function blockHtml(b: GuideBlock, L: GuideDocLabels): string {
  switch (b.type) {
    case 'p':
      return `<p>${esc(b.text)}</p>`;
    case 'h3':
      return `<h3>${esc(b.text)}</h3>`;
    case 'h4':
      return `<h4>${esc(b.text)}</h4>`;
    case 'note':
      return `<div class="note ${b.variant === 'warning' ? 'warn' : ''}">${esc(b.text)}</div>`;
    case 'callout':
      return `<div class="callout">${b.title ? `<strong>${esc(b.title)}</strong><br/>` : ''}${esc(
        b.text,
      )}</div>`;
    case 'list':
      return b.ordered
        ? `<ol>${b.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ol>`
        : `<ul>${b.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;
    case 'verse':
      return `<figure class="verse"><div class="tag">${esc(L.verse)}</div>${
        b.arabic ? `<p class="ar" dir="rtl" lang="ar">${esc(b.arabic)}</p>` : ''
      }${
        b.translation ? `<p class="tr"><em>${esc(L.translation)}:</em> ${esc(b.translation)}</p>` : ''
      }${b.reference ? `<p class="ref">— ${esc(b.reference)}</p>` : ''}</figure>`;
    case 'hadith':
      return `<figure class="hadith"><div class="tag">${esc(b.badge || L.hadith)}</div>${
        b.arabic ? `<p class="ar" dir="rtl" lang="ar">${esc(b.arabic)}</p>` : ''
      }${b.text ? `<blockquote>${esc(b.text)}</blockquote>` : ''}${
        b.source ? `<p class="src">${esc(L.source)}: ${esc(b.source)}</p>` : ''
      }</figure>`;
    case 'steps':
      return `<ol class="steps">${b.items
        .map(
          (i) => `<li><strong>${esc(i.title)}</strong>${i.text ? `<div>${esc(i.text)}</div>` : ''}</li>`,
        )
        .join('')}</ol>`;
    case 'table':
      return `<figure class="tbl">${b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ''}<table><thead><tr>${b.columns
        .map((c) => `<th>${esc(c)}</th>`)
        .join('')}</tr></thead><tbody>${b.rows
        .map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`)
        .join('')}</tbody></table></figure>`;
    case 'infocard':
      return `<div class="infocard"><div class="ic-title">${esc(b.title)}</div>${b.blocks
        .map((x) => blockHtml(x, L))
        .join('')}</div>`;
    default:
      return '';
  }
}

const CSS = `
  * { box-sizing: border-box; }
  :root { --green:#0B2E27; --green2:#0E5C4A; --gold:#C9A24B; --ink:#1A1A1A; --cream:#FAF7F0; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { margin:0; font-family: 'Segoe UI', system-ui, Arial, sans-serif; color: var(--ink); background:#fff; line-height:1.75; }
  .ar { font-family: 'Traditional Arabic','Amiri','Segoe UI', serif; }
  .wrap { max-width: 820px; margin: 0 auto; padding: 0 28px 60px; }
  .cover { background: linear-gradient(160deg,#071E19,var(--green) 60%,var(--green2)); color: var(--cream); padding: 60px 40px; text-align:center; }
  .cover .brand { color: var(--gold); font-weight:700; letter-spacing:3px; text-transform:uppercase; font-size:13px; }
  .cover h1 { font-size: 40px; margin: 14px 0 8px; }
  .cover .tag { color: var(--gold); text-transform:uppercase; letter-spacing:2px; font-size:12px; }
  .cover .hint { max-width:620px; margin: 18px auto 0; color: rgba(250,247,240,.85); font-size:14px; }
  .cover .verify { margin-top:12px; font-size:12px; color: rgba(250,247,240,.6); }
  h2 { color: var(--green); font-size: 26px; border-bottom:3px solid var(--gold); padding-bottom:8px; margin: 40px 0 12px; }
  h3 { color: var(--green); font-size: 19px; border-inline-start:4px solid var(--gold); padding-inline-start:10px; margin: 26px 0 8px; }
  h4 { color: var(--green2); font-size: 16px; margin: 18px 0 6px; }
  p { margin: 8px 0; }
  .intro { font-size: 17px; color:#3d3d3d; }
  ul, ol { margin: 8px 0 14px; padding-inline-start: 22px; }
  li { margin: 4px 0; }
  .verse { background: var(--green); color: var(--cream); border-radius:10px; padding: 18px 22px; margin: 16px 0; }
  .verse .ar { font-size: 22px; line-height: 2; margin: 0 0 8px; }
  .verse .tr { color: rgba(250,247,240,.9); font-size: 14px; }
  .verse .ref, .verse .tag { color: var(--gold); }
  .verse .tag, .hadith .tag { font-size: 11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; margin-bottom:8px; }
  .hadith { background: #f7f3e8; border:1px solid rgba(201,162,75,.4); border-top:4px solid var(--gold); border-radius:10px; padding: 16px 20px; margin: 16px 0; }
  .hadith .tag { color: var(--green2); }
  .hadith .ar { font-size: 19px; color: var(--green); margin: 0 0 8px; }
  .hadith blockquote { margin:0; color:#333; }
  .hadith .src { color: var(--green2); font-size: 13px; margin-top:8px; }
  .note { background:#eef4f1; border:1px solid #d6e6df; border-radius:8px; padding:12px 16px; margin:12px 0; font-size:14px; }
  .note.warn { background:#fbeceb; border-color:#e6c3bf; color:#8a2f24; }
  .callout { border-inline-start:4px solid var(--gold); background:rgba(201,162,75,.08); border-radius:8px; padding:14px 18px; margin:14px 0; font-size:14px; }
  .steps { list-style:none; padding:0; counter-reset: s; }
  .steps li { counter-increment:s; position:relative; padding-inline-start:44px; margin:10px 0; }
  .steps li::before { content: counter(s); position:absolute; inset-inline-start:0; top:0; width:30px; height:30px; border-radius:50%; background:var(--green2); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; }
  .tbl { overflow-x:auto; margin:16px 0; }
  .tbl figcaption { color: var(--green2); font-size:13px; margin-bottom:6px; }
  table { width:100%; border-collapse:collapse; font-size:13.5px; }
  th { background: var(--green); color: var(--cream); text-align:start; padding:8px 12px; }
  td { border-top:1px solid #e5e5e5; padding:8px 12px; }
  tr:nth-child(even) td { background:#f6f4ee; }
  .infocard { border:1px solid #e5e5e5; border-radius:12px; padding:16px 18px; margin:16px 0; background:#fff; }
  .ic-title { font-weight:700; color: var(--green); margin-bottom:8px; }
  footer { text-align:center; color:#777; font-size:12px; padding:24px; border-top:1px solid #eee; }
  @media print {
    .cover { padding: 48px 32px; }
    h2 { page-break-after: avoid; }
    .verse, .hadith, .infocard, table, figure, h3 { page-break-inside: avoid; }
  }
`;

export function buildGuideHtml(guide: Guide, o: GuideDocOpts): string {
  const chapters = guide.chapters
    .map(
      (ch) =>
        `<section class="chapter"><h2>${esc(ch.title)}</h2>${
          ch.intro ? `<p class="intro">${esc(ch.intro)}</p>` : ''
        }${ch.blocks.map((b) => blockHtml(b, o.labels)).join('')}</section>`,
    )
    .join('');

  return `<!doctype html><html lang="${esc(o.locale)}" dir="${o.dir}"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>${esc(
    o.title,
  )} — ${esc(o.siteName)}</title><style>${CSS}</style></head><body>
  <div class="cover">
    <div class="brand">${esc(o.siteName)}</div>
    <h1>${esc(o.title)}</h1>
    <div class="tag">${esc(o.tagline)}</div>
    <div class="hint">${esc(o.intro)}</div>
    <div class="verify">${esc(o.verifyNote)}</div>
  </div>
  <div class="wrap"><main>${chapters}</main></div>
  <footer>© ${new Date().getFullYear()} ${esc(o.siteName)} · ${esc(o.licenseLine)}</footer>
</body></html>`;
}
