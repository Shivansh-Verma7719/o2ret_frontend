const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      'o2ret-blue': '#003f98',
      'black': '#000000',
      'white': '#ffffff',
    },
    extend: {
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}