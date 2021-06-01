// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        green: colors.green,
        lightorange:'#FFF4EA',
        lightgreen:'#08BD37',
      },
      minHeight: {
        '0': '0',
        '0.5':'5rem',
        '1': '10rem',
        '2': '20rem',
        '3': '30rem',
        'full': '100%',
       }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }