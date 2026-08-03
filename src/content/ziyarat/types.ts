/**
 * Content model for the Ziyarat guide.
 *
 * Content is authored per locale as data (not hard-coded JSX) so a new
 * language is added by dropping in one file: `src/content/ziyarat/<locale>.ts`.
 *
 * IMPORTANT - religious accuracy:
 * Qur'anic verses and ahadith must be verified against authentic sources
 * before publication. Every `verse` / `hadith` block carries its source; keep
 * the Arabic text verbatim and preserve citations when editing or translating.
 */

export type GuideBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; id: string; text: string }
  /** Smaller sub-heading within a section. */
  | { type: 'h4'; text: string }
  | { type: 'note'; text: string; variant?: 'info' | 'warning' }
  | { type: 'callout'; title?: string; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | {
      type: 'verse';
      /** Arabic Qur'an text stays Arabic in every language version. */
      arabic?: string;
      translation?: string;
      reference?: string;
      /** true = awaiting verified text; renders a placeholder. */
      pending?: boolean;
    }
  | {
      type: 'hadith';
      /** Optional Arabic text of the hadith / du'a. */
      arabic?: string;
      text?: string;
      source?: string;
      /** Badge label, e.g. "Hadith", "Du'a". Falls back to the Hadith label. */
      badge?: string;
      pending?: boolean;
    }
  | { type: 'steps'; items: { title: string; text: string }[] }
  | { type: 'table'; caption?: string; columns: string[]; rows: string[][] }
  /** A bordered card grouping a titled sub-block (e.g. a Hajj day). */
  | { type: 'infocard'; title: string; blocks: GuideBlock[] };

export type GuideChapter = {
  /** Stable anchor id used by the table of contents. */
  id: string;
  title: string;
  intro?: string;
  blocks: GuideBlock[];
};

export type Guide = {
  title: string;
  intro: string;
  chapters: GuideChapter[];
};
