module.exports = {
  purge: ["./public/**/*.html","./public/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'md': {'max': '991.98px'}
    },
    extend: {
      screens: {
        'xs': {'max': '575.98px'}
      },
      fontSize: {
        '5xl': ['48px', {
          lineHeight: '58px'
        }]
      },
      colors: {
        warning: {
          "500": "#FFB61D",
          "600": "#E9A10C"
        }
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ['responsive', 'hover'],
      fontSize: ['hover']
    },
  },
  plugins: [],
}
