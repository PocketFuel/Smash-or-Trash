/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'], 
      backgroundOpacity: ['responsive', 'hover', 'focus', 'active'],
      transitionProperty: ['responsive', 'hover', 'focus'],
      transitionDuration: ['responsive', 'hover', 'focus'],
      transitionTimingFunction: ['responsive', 'hover', 'focus'],
      // Add other plugins as needed
    }
  },
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'Kanit': 'Kanit',
        'redacted': 'redacted'  
      },
      colors: {
        black: '#000000',
        darkestnight: '#090909',
        eclipse: '#131313',
        dusk: '#434141',
        day: '#D1CDBF',
        mist: '#C59F1A',
        dawn: '#7F7E87',
        night: '#232222',
        sunnyday: '#C59F1A',
        rust: '#AD4242',
        grundy: '#621D1D',
        brightrust: '#FF7676',
        grime: '#4C621D',
        white: '#FFFFFF',
        snow: '#BCEAFF',
        sleet: '#90DDFF',
        rain: '#37C1FF',
        hail: '#0074A9',
        sunset: '#90DDFF',
        purple: '#491661',
        sand: '#EEBA7D',
        sun: '#F19931',
        mud: '#804A0A',
        soil: '#372005',
        primary: '#ABAD42', //chartruse
        secondary: '#621D1D', //rust 
        tertiary: '#C59F1A', //sunnyday
      }
    }
  },
  plugins: [
    require('flowbite-typography')({
      className: 'custom-class'
    }),
    require('@tailwindcss/aspect-ratio'),
    require('flowbite/plugin')
  ]
};
