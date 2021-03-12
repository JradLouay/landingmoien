

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'Over-Reg':['Overpass-Regular'],
      'Over-SemiBold':['Overpass-SemiBold'],
     },
     fontSize: {
      'first-header': ['42px', {
        lineHeight: '55.8px',
      }],
      // Or with a default line-height as well
      'second-header': ['32px', {
        lineHeight: '43.2px',
      }],
      'paragraph': ['17px', {
        lineHeight: '32px',
      }],
      'bottom-header': ['32px', {
        lineHeight: '49px',
      }],
      'placeholder': ['17px', {
        lineHeight: '27px',
      }],
      'select-text': ['21.6px', {
        lineHeight: '22px',
      }],
    },
    extend: {
    screens: {
      'phone': '423px',
    },
      width: { 
        'input': '545px',
      },
      colors: {
        "moien-pink": "#FEEDEC",
        "moien-blue": "#010D3C",
        "moien-lightblue": "#DAE8FF",
        "moien-gray": "#808093",
        "moien-green": "#40DCB6"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}