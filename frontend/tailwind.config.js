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
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Plus Jakarta Sans"', '-apple-system', 'sans-serif'],
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
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.35)',
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.35)',
        'card-dark': '0 20px 50px -15px rgba(0, 0, 0, 0.85), inset 0 1px 0 0 rgba(255, 255, 255, 0.06)',
      },
      animation: {
        'spin-slow': 'spin 35s linear infinite',
        'spin-disc': 'spin 12s linear infinite',
        'pulse-subtle': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        'marquee-slow': 'marquee 45s linear infinite',
        shimmer: 'shimmer 2.5s infinite',
        'soundwave-fast': 'soundwave 0.7s ease-in-out infinite alternate',
        'soundwave-mid': 'soundwave 1.1s ease-in-out infinite alternate 0.2s',
        'soundwave-slow': 'soundwave 1.4s ease-in-out infinite alternate 0.4s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        soundwave: {
          '0%': { height: '4px' },
          '100%': { height: '18px' },
        },
      },
    },
  },
  plugins: [],
};
