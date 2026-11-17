/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Syne', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#000000',
          pure: '#000000',
          rich: '#040406',
          surface: '#08080A',
          card: '#0E0E10',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.35)',
        },
        silver: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
        },
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.25em',
      },
      boxShadow: {
        'glow-white': '0 0 35px -5px rgba(255, 255, 255, 0.25)',
        'card-dark': '0 20px 50px -15px rgba(0, 0, 0, 0.85), inset 0 1px 0 0 rgba(255, 255, 255, 0.06)',
      },
      animation: {
        'spin-slow': 'spin 35s linear infinite',
        'pulse-subtle': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
