/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      container: {
        center: true
      }
    },
    keyframes: {
      'move-bg': {
        to: {
          backgroundPosition: '400% 0'
        }
      }
    },
    animation: {
      'move-bg': 'move-bg 8s infinite linear'
    }
  },
  plugins: []
};
