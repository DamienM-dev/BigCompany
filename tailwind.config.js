/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*/*.html'],
  theme: {
    extend: {
      
      colors: {
        'primary': '#f1f5f9',
        'secondary': '#ffc100',
        'tertiary': '#17c7be',
        'primaryDark': '#212529',
        'secondaryDark':'#e85d04',
        'tertiaryDark':'#000814',
      },
      fontFamily: {
        'OpenSans': ['Open Sans'],
        'Roboto':['Roboto'],
      },
      borderRadius: {
        '4xl': '3.5rem',
      }
    },
    darkMode: 'media',

    container: {
      center: true,
    },
    
  },
  plugins: [],
}
