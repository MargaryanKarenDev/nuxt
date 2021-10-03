const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'layers',
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.emerald 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
