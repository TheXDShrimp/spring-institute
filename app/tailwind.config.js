const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          lightest: '#233C54',
          light: '#112940',
          DEFAULT: '#0A1D2F'
        },
        slate: {
          lightest: '#CCE1F6',
          light: '#A8BDD1',
          DEFAULT: '#889CB0'
        },
        white: {
          DEFAULT: '#FFFCFC',
        },
        blue: {
          DEFAULT: '#66B3FF'
        },
        pink: {
          DEFAULT: '#FF6687'
        },
        green: {
          DEFAULT: '#0c2717'
        },
        lightGreen: {
          DEFAULT: '#F5FFEC'
        }, 
        richGreen: {
          DEFAULT: '#023020'
        },
        buttonGreen: {
          DEFAULT: '#639F00'
        },
      },
      scale: {
        '400': '4.0'
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['group-focus', 'group-focus-within'],
      textColor: ['group-focus-within', 'placeholder-shown'],
    }
  },
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
  plugins: [],
}
