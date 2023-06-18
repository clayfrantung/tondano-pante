/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui",'@tailwindcss/aspect-ratio')],
  daisyui: {
    themes: ["light"],
  },

}

