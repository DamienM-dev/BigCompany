/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*/*.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#f1f5f9',
        'secondary': '#ffc100',
        'tertiary': '#17c7be'
      },
      fontFamily: {
        'OpenSans': ['Open Sans'],
        'Roboto':['Roboto'],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
