const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layout/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'bonheur-royale': ['Bonheur Royale', 'cursive'],
        sans: ['Ubuntu', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        iphone5: { min: '320px', max: '374px' },
        ...defaultTheme.screens
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ]
}
