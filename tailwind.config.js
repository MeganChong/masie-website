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
          letterSpacing: '8px',
          lineHeight: '28px',
        }],
        'about': ['18px', {
          letterSpacing: '2px',
          lineHeight: '35px',
        }]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
