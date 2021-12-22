const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx,css}',
    './layout/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'bonheur-royale': ['Bonheur Royale', 'cursive'],
        sans: ['Ubuntu', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        iphone5: { min: '320px', max: '374px' },
        ...defaultTheme.screens
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
}
