import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: {
          100: '#111111',
          200: '#161616'
        },
        accent: '#3B82F6',
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1AA'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(59,130,246,0.25), 0 20px 60px rgba(59,130,246,0.12)'
      },
      backgroundImage: {
        'energy-grid':
          'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};

export default config;
