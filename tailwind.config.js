/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // HLPFL Gold/Bronze Brand Colors
        'hlpfl-gold': {
          DEFAULT: '#c87941',
          light: '#d4945c',
          dark: '#a86535',
          50: '#fef7f0',
          100: '#fdecd8',
          200: '#fad5b0',
          300: '#f6b87e',
          400: '#f1914a',
          500: '#c87941',
          600: '#d4621a',
          700: '#b04c14',
          800: '#8f3e18',
          900: '#743516',
          950: '#2d1b0f',
        },
        // Professional Blue for informational content
        'professional-blue': {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fb',
          400: '#36abf7',
          500: '#0c8fe8',
          600: '#0072c6',
          700: '#015aa1',
          800: '#064c85',
          900: '#0b406e',
          950: '#072849',
        },
        // Success Green for benefits/advantages
        'success-green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        // HLPFL Dark theme backgrounds
        'hlpfl-dark': {
          DEFAULT: '#0a0a0a',
          secondary: '#1a1a1a',
          tertiary: '#2a2a2a',
          quaternary: '#3a3a3a',
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mono': ['Space Mono', 'monospace'],
        'ibm': ['IBM Plex Sans', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
        'dm': ['DM Sans', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
