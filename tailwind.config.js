/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#0a0a0a',
          100: '#141414',
          200: '#1f1f1f',
          300: '#2a2a2a',
          400: '#353535',
          500: '#404040',
          600: '#4a4a4a',
          700: '#555555',
          800: '#606060',
          900: '#6b6b6b',
        },
        accent: {
          DEFAULT: '#00ff41',
          50: '#ccffcc',
          100: '#99ff99',
          200: '#66ff66',
          300: '#33ff33',
          400: '#00ff00',
          500: '#00cc00',
          600: '#009900',
          700: '#006600',
          800: '#003300',
          900: '#001a00',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};