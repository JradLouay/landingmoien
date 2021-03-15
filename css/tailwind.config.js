

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
      'first-header-mobile': ['26px', {
        lineHeight: '36px',
      }],
      // Or with a default line-height as well
      'second-header': ['32px', {
        lineHeight: '43.2px',
      }],
      'second-header-mobile': ['20px', {
        lineHeight: '28px',
      }],
      'paragraph': ['17px', {
        lineHeight: '32px',
      }],
      'paragraph-mobile': ['15px', {
        lineHeight: '24px',
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
      'small-device': '545px',
    },
    spacing: {
      'margin-cards': '15.45%', // margin footer cards + mobile 
      'margin-hero-left': '11.25%',
      'margin-hero-top': '4.75%',
      'margin-hero-x-mobile': '8.4%',
      'padding-page-x': '4.5%',
      'padding-x-card': '2.2%',
      'padding-x-card-mobile': '4.27%',
      'margin-header-parag': '1%',
      'margin-header-parag-mobile': '0.57%',
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