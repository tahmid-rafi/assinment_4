/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta': '"Plus Jakarta Sans", sans-serif',
        'poppins': '"Poppins", sans-serif'
      },

      colors: {
        'main-bg-color': '#F5F5F5',
        'main-text-color': '#181818',
        'sec-text-color': '#2D3142',
        'third-color': '#FAFAFA',
        'fourth-color': '#757095',
        'btn-color': '#F44335',
        'btn-darker': '#D32F2F',
        'card-bg': '#2D3142',
        'dark-bg': '#1F2937',
        'sec-dark-bg': '#2C3E50'
      },

      backgroundImage:{
        'hero-bg': 'url(img/hero-cover.png)'
      }
    },
  },
  plugins: [],
}