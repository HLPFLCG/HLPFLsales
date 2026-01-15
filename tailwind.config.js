/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hlpfl: {
          // HLPFL Brand Gold/Bronze
          gold: '#c87941',
          'gold-light': '#d4945c',
          'gold-dark': '#a86535',
          // Full gold spectrum
          50: '#fef7f0',
          100: '#fce9d9',
          200: '#f9d0b2',
          300: '#f4b184',
          400: '#ef8854',
          500: '#c87941', // Primary
          600: '#a86535',
          700: '#8a512a',
          800: '#703f22',
          900: '#5c331d',
          950: '#2d1b0f',
          // Dark theme
          dark: '#0a0a0a',
          'dark-secondary': '#1a1a1a',
          'dark-tertiary': '#2a2a2a',
          'dark-quaternary': '#3a3a3a',
          // Light theme
          light: '#ffffff',
          'light-secondary': '#f8f9fa',
          'light-tertiary': '#e9ecef',
          'light-quaternary': '#dee2e6',
          // Custom grays
          gray: {
            850: '#1a1a1a',
            825: '#1f1f1f',
            775: '#2a2a2a',
            725: '#353535'
          }
        },
        // Professional Blue (for informational sections)
        'professional-blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Success Green (for positive indicators)
        'success-green': {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        }
      },
      boxShadow: {
        'hlpfl-glow': '0 0 20px rgba(200, 121, 65, 0.3)',
        'hlpfl-glow-lg': '0 0 30px rgba(200, 121, 65, 0.4)'
      }
    }
  },
  plugins: []
}
