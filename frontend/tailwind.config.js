/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '100px',
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        unblur: {
          from: { filter: 'blur(20px)'},
          to: { filter: 'blur(0px)' },
        },
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 100 },
        }
      },
      animation: {
        unblur: 'unblur 1s linear',
        'unblur-fast': 'unblur 0.5s linear',
        'unblur-faster': 'unblur 0.3s linear',
        'fade-in': 'fade-in 0.8s linear'
      },
      colors: {
        'neon-green': '#35ff11',
        'dos-grey': '#b1b1b1',
        'compressed-blue': "#d2f7fe",
        'compressed-blue-brighter': '#92ebfc'
      },
      boxShadow: {
        'custom': '0 0 0 5px, 11px 13px 0 4px'
      },
      outlineWidth: {
        5: '5px'
      },
      fontFamily: {
        openSans: ['var(--font-space-mono)', ...fontFamily.sans],
        eurostile: ['var(--font-eurostile)', ...fontFamily.sans]
      },
    },
  },
  plugins: [],
}