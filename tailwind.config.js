/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*/*.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#f1f5f9',
        'secondary': '#ffc100',
        'tertiary': '#17c7be',
        'primaryDark': '##1c1b1b',
        'secondaryDark':'#e85d04',
        'tertiaryDark':'#000814',
      },
      fontFamily: {
        'OpenSans': ['Open Sans'],
        'Roboto':['Roboto'],
      },
      darkMode: 'media',
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
