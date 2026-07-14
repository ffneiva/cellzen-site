/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        washi: {
          50: '#F8F4E9',
          100: '#F1EADA',
          200: '#EAE1CC',
          300: '#DCCFB0',
        },
        tinta: {
          600: '#166069',
          700: '#1A7A82',
          900: '#0F3A40',
        },
        ouro: {
          300: '#E6CE79',
          500: '#C9A227',
          700: '#7A6014',
        },
        shu: {
          600: '#B23A2A',
        },
        zap: {
          700: '#128C7E',
        },
      },
      fontFamily: {
        display: ['"Zen Old Mincho"', 'Georgia', 'serif'],
        sans: ['"Zen Kaku Gothic New"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      transitionTimingFunction: {
        ink: 'cubic-bezier(0.65, 0, 0.35, 1)',
        paper: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        stamp: 'cubic-bezier(0.34, 1.4, 0.64, 1)',
      },
      boxShadow: {
        paper: '0 1px 2px rgba(63, 52, 24, 0.12), 0 8px 24px rgba(63, 52, 24, 0.12)',
        'paper-sm': '0 1px 2px rgba(63, 52, 24, 0.10), 0 3px 10px rgba(63, 52, 24, 0.08)',
      },
    },
  },
  plugins: [],
};
