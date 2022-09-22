/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#d863c5",

          "secondary": "#f4b2ef",

          "accent": "#00b539",

          "neutral": "#141B1F",

          "base-100": "#FCFBFD",

          "info": "#AEB8E5",

          "success": "#13A48C",

          "warning": "#DB8C14",

          "error": "#E8303D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
