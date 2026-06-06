import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          bg: '#f7f9fc',
          card: '#ffffff',
          blue: '#0066cc',
          'blue-dim': '#0052a3',
          ink: '#0f2b4a',
          mute: '#5a6d82',
          border: '#dce4ef',
        },
      },
      fontFamily: {
        heading: ['var(--font-figtree)', 'system-ui', 'sans-serif'],
        body: ['var(--font-dm)', 'system-ui', 'sans-serif'],
      },
      borderRadius: { card: '14px' },
      boxShadow: {
        soft: '0 1px 3px rgba(15,43,74,0.05), 0 6px 20px rgba(15,43,74,0.07)',
        lift: '0 4px 8px rgba(15,43,74,0.06), 0 16px 36px rgba(15,43,74,0.11)',
      },
    },
  },
  plugins: [],
};

export default config;
