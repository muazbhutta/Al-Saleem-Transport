import type { Config } from 'tailwindcss';

/**
 * Al-Saleem Transport design system — "spiritual-luxury".
 * Emerald green + warm gold on soft ivory. Semantic names are kept stable
 * across the codebase; only their values changed:
 *   navy   → deep greens (charcoal-green surfaces + headings/text)
 *   maroon → emerald (primary buttons / accents)
 *   gold   → warm gold (highlights, dividers, premium CTA)
 *   teal   → muted emerald (eyebrows / secondary)
 *   cream  → soft ivory (background / surfaces)
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '2rem' },
      screens: { '2xl': '1200px' },
    },
    extend: {
      colors: {
        /* ---------------------------------------------------------------
           Every colour resolves to a CSS variable in globals.css.
           `<alpha-value>` keeps Tailwind's opacity modifiers working
           (bg-navy/10, text-cream-100/80 …).

           The legacy semantic names (navy / maroon / gold / teal / cream)
           are retained so existing components keep rendering while the
           redesign migrates section by section. New work should prefer the
           surface / emerald / brass / ink names below.
           --------------------------------------------------------------- */
        emerald: {
          50: 'rgb(var(--emerald-50) / <alpha-value>)',
          100: 'rgb(var(--emerald-100) / <alpha-value>)',
          200: 'rgb(var(--emerald-200) / <alpha-value>)',
          300: 'rgb(var(--emerald-300) / <alpha-value>)',
          400: 'rgb(var(--emerald-400) / <alpha-value>)',
          500: 'rgb(var(--emerald-500) / <alpha-value>)',
          600: 'rgb(var(--emerald-600) / <alpha-value>)',
          700: 'rgb(var(--emerald-700) / <alpha-value>)',
          800: 'rgb(var(--emerald-800) / <alpha-value>)',
          900: 'rgb(var(--emerald-900) / <alpha-value>)',
          950: 'rgb(var(--emerald-950) / <alpha-value>)',
          DEFAULT: 'rgb(var(--emerald-800) / <alpha-value>)',
        },
        brass: {
          300: 'rgb(var(--brass-300) / <alpha-value>)',
          400: 'rgb(var(--brass-400) / <alpha-value>)',
          500: 'rgb(var(--brass-500) / <alpha-value>)',
          600: 'rgb(var(--brass-600) / <alpha-value>)',
          700: 'rgb(var(--brass-700) / <alpha-value>)',
          /* Text-safe step — see the note in globals.css. */
          800: 'rgb(var(--brass-800) / <alpha-value>)',
          DEFAULT: 'rgb(var(--brass-500) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          soft: 'rgb(var(--ink-soft) / <alpha-value>)',
          faint: 'rgb(var(--ink-faint) / <alpha-value>)',
        },
        /* Warm neutrals. These vars already backed the surface tokens; they are
           exposed directly so the `cream-*` aliases have a real token to
           migrate onto instead of resolving through a legacy name. */
        sand: {
          50: 'rgb(var(--sand-50) / <alpha-value>)',
          100: 'rgb(var(--sand-100) / <alpha-value>)',
          200: 'rgb(var(--sand-200) / <alpha-value>)',
          300: 'rgb(var(--sand-300) / <alpha-value>)',
        },
        surface: {
          base: 'rgb(var(--surface-base) / <alpha-value>)',
          raised: 'rgb(var(--surface-raised) / <alpha-value>)',
          muted: 'rgb(var(--surface-muted) / <alpha-value>)',
          inverse: 'rgb(var(--surface-inverse) / <alpha-value>)',
        },
        'on-surface': {
          base: 'rgb(var(--on-surface-base) / <alpha-value>)',
          raised: 'rgb(var(--on-surface-raised) / <alpha-value>)',
          muted: 'rgb(var(--on-surface-muted) / <alpha-value>)',
          inverse: 'rgb(var(--on-surface-inverse) / <alpha-value>)',
        },
        whatsapp: {
          DEFAULT: 'rgb(var(--brand-whatsapp) / <alpha-value>)',
          dark: 'rgb(var(--brand-whatsapp-dark) / <alpha-value>)',
        },

        /* --- legacy aliases, mapped onto the token scale --- */
        navy: {
          DEFAULT: 'rgb(var(--emerald-800) / <alpha-value>)',
          50: 'rgb(var(--emerald-50) / <alpha-value>)',
          100: 'rgb(var(--emerald-100) / <alpha-value>)',
          200: 'rgb(var(--emerald-200) / <alpha-value>)',
          300: 'rgb(var(--emerald-300) / <alpha-value>)',
          400: 'rgb(var(--emerald-400) / <alpha-value>)',
          500: 'rgb(var(--emerald-500) / <alpha-value>)',
          600: 'rgb(var(--emerald-600) / <alpha-value>)',
          700: 'rgb(var(--emerald-700) / <alpha-value>)',
          800: 'rgb(var(--emerald-800) / <alpha-value>)',
          900: 'rgb(var(--emerald-900) / <alpha-value>)',
        },
        maroon: {
          DEFAULT: 'rgb(var(--emerald-600) / <alpha-value>)',
          50: 'rgb(var(--emerald-50) / <alpha-value>)',
          100: 'rgb(var(--emerald-100) / <alpha-value>)',
          200: 'rgb(var(--emerald-200) / <alpha-value>)',
          300: 'rgb(var(--emerald-300) / <alpha-value>)',
          400: 'rgb(var(--emerald-400) / <alpha-value>)',
          500: 'rgb(var(--emerald-600) / <alpha-value>)',
          600: 'rgb(var(--emerald-700) / <alpha-value>)',
          700: 'rgb(var(--emerald-800) / <alpha-value>)',
          800: 'rgb(var(--emerald-900) / <alpha-value>)',
        },
        gold: {
          DEFAULT: 'rgb(var(--brass-500) / <alpha-value>)',
          light: 'rgb(var(--brass-300) / <alpha-value>)',
          dark: 'rgb(var(--brass-600) / <alpha-value>)',
        },
        teal: {
          DEFAULT: 'rgb(var(--emerald-500) / <alpha-value>)',
          light: 'rgb(var(--emerald-400) / <alpha-value>)',
          dark: 'rgb(var(--emerald-700) / <alpha-value>)',
        },
        cream: {
          DEFAULT: 'rgb(var(--sand-50) / <alpha-value>)',
          100: 'rgb(var(--surface-raised) / <alpha-value>)',
          200: 'rgb(var(--sand-50) / <alpha-value>)',
          300: 'rgb(var(--sand-100) / <alpha-value>)',
          400: 'rgb(var(--sand-300) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-arabic)', 'var(--font-sans)', 'serif'],
        display: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 20px -8px rgb(var(--emerald-950) / 0.12)',
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        glow: '0 0 0 1px rgb(var(--brass-500) / 0.4)',
      },
      backgroundImage: {
        'hero-fade':
          'linear-gradient(180deg, rgb(var(--emerald-950) / 0.15) 0%, rgb(var(--emerald-950) / 0.72) 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
        'ken-burns': 'ken-burns 20s ease-out both',
        marquee: 'marquee 46s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
