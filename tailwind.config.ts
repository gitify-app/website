import type { Config } from 'tailwindcss';
import TailwindCSSMotion from 'tailwindcss-motion';

const config: Config = {
  content: ['./src/**/*.{astro,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gitify: {
          ink: '#0A0E13',
          surface: '#10151C',
          raised: '#171E27',
          line: 'rgba(148, 163, 184, 0.14)',
          accent: '#3FB950',
          'accent-bright': '#56D364',
          'accent-soft': 'rgba(63, 185, 80, 0.12)',
          text: '#E6EDF3',
          muted: '#8B98A9',
        },
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: [
          '"Space Grotesk"',
          '"Instrument Sans"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
      },
    },
  },
  plugins: [TailwindCSSMotion],
};

export default config;
