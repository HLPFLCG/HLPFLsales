/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hlpfl: {
          green: '#10b981',
          'green-light': '#34d399',
          'green-dark': '#059669',
          dark: '#1e293b',
          'dark-light': '#334155',
          gray: '#64748b'
        }
      }
    }
  },
  plugins: []
}
