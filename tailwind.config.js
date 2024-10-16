/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bengali: "Baloo Da 2, sans-serif",
        nunito:"Nunito Sans, sans-serif",
        Raleway:"Raleway, sans-serif",
      },
      colors:{
        "brand-color":"#FEC010",
        "darkness":"#18181A",
      },
      container:{
        center:true,
        padding:{
          default:'1rem',
          sm:'1rem',
          md:'2rem',
          lg:'3rem',
          xl:'4rem',
          '2xl':'6rem',
        },
      },
      maxWidth:{
        'screen-7xl':'1920px'
      }

    },
  },
  plugins: [
    require('daisyui'),
  ],
}

