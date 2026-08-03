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
        // Deep greens — dark surfaces (header/footer/hero), headings, body text
        navy: {
          DEFAULT: '#0B2E27',
          50: '#EEF4F1',
          100: '#D6E6DF',
          200: '#AECEC1',
          300: '#7DAE9C',
          400: '#4A8874',
          500: '#1C6E58',
          600: '#0E5C4A',
          700: '#0B473A',
          800: '#0B2E27',
          900: '#071E19',
        },
        // Emerald — primary buttons & accents
        maroon: {
          DEFAULT: '#0E5C4A',
          50: '#E9F3EE',
          100: '#CDE7DB',
          200: '#9FD0BD',
          300: '#6BB49B',
          400: '#2F8E72',
          500: '#0E5C4A',
          600: '#0B4A3C',
          700: '#093A2F',
          800: '#07261F',
        },
        // Warm gold — highlights, dividers, premium touch
        gold: {
          DEFAULT: '#C9A24B',
          light: '#E0C078',
          dark: '#A9863A',
        },
        // Muted emerald — eyebrows / secondary accents
        teal: {
          DEFAULT: '#166E58',
          light: '#4A8874',
          dark: '#0B473A',
        },
        // Soft ivory — background & card surfaces
        cream: {
          DEFAULT: '#FAF7F0',
          100: '#FFFFFF',
          200: '#FAF7F0',
          300: '#F1EBDD',
          400: '#E6DCC7',
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
        soft: '0 4px 20px -8px rgba(7, 30, 25, 0.12)',
        card: '0 14px 44px -18px rgba(7, 30, 25, 0.20)',
        glow: '0 0 0 1px rgba(201, 162, 75, 0.4)',
      },
      backgroundImage: {
        'hero-fade': 'linear-gradient(180deg, rgba(7,30,25,0.15) 0%, rgba(7,30,25,0.72) 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
