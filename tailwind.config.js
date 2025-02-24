module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'about': "url('./assests/old/AboutBkgd.jpg')",
      },
      fontFamily: {
        brand: ['Lexend', 'sans-serif']
      },
      fontSize: {
        'base': ['15px', {
            letterSpacing: '1px',
            lineHeight: '28px',
        }],
        'subhead': ['14px', {
            letterSpacing: '.2em',
            lineHeight: '30px',
        }],
        'header': ['38px', {
          letterSpacing: '1px',
          lineHeight: '41px',
        }],
        'dropdownBody': ['13.5px', {
          letterSpacing: '0.75px',
          lineHeight: '23.5px',
        }],
        'navBar' : ['15px', {
          letterSpacing: '7px',
          lineHeight: '28px',
        }],
        'about': ['18px', {
          letterSpacing: '2px',
          lineHeight: '35px',
        }]
      },
      colors: {
        'light': '#ffffff',
        'dark': '#092835',
        'scrollbarPurple': '#cab7f4',
        'brandPurple': '#BEACD7',
        'brandYellow': '#F6C005',
        'brandBlue': '#E1EBF6',
        'brandRed': '#FD606E',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
