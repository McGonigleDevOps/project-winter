/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      '**/**/*.htm',
    ],
    theme: {
      extend: {},
    },
    plugins: [
         require('@tailwindcss/typography'),
          require("daisyui"),
    ],
  }