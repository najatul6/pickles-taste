/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "brand-color":"#FEC010",
        "darkness":"#18181A",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

