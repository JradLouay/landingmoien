module.exports = {
  purge: ["./index.html", "./js/main"],
  darkMode: false, // or 'media' or 'class'
  theme: {
   
    fontFamily: {
      "Over-Reg": ["Overpass-Regular"],
      "Over-SemiBold": ["Overpass-SemiBold"],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
      "first-header": [
        "42px",
        {
          lineHeight: "55.8px",
        },
      ],
      "first-header-mobile": [
        "26px",
        {
          lineHeight: "36px",
        },
      ],
      "second-header": [
        "32px",
        {
          lineHeight: "43.2px",
        },
      ],
      "second-header-mobile": [
        "20px",
        {
          lineHeight: "28px",
        },
      ],
      paragraph: [
        "17px",
        {
          lineHeight: "32px",
        },
      ],
      "paragraph-mobile": [
        "15px",
        {
          lineHeight: "24px",
        },
      ],
      "bottom-header": [
        "32px",
        {
          lineHeight: "49px",
        },
      ],
      placeholder: [
        "17px",
        {
          lineHeight: "27px",
        },
      ],
      "select-text": [
        "21.6px",
        {
          lineHeight: "22px",
        },
      ],
    },
    extend: {
      inset: {
        '-1/5': '-21%',
       },
      spacing: {
        '4.5': '4.5rem',
      },

      width: {
        "exp-width": "12.53%",
        "parcours-width": "775.8px",
        "bgrass-width": "6.32%",
        "logo-w": "15.4%",
        "logo-w-mobile": "46.67%",
        "Ix-w": "18.06%",
        "Ix-w-mobile": "62.96%",
      },
      maxWidth: {
        "max-w-impact-web": "360px",
        "max-w-impact-mobile": "300px",
      },
      height: {
        "exp-height": "20.83%",
        "parcours-height": "495px",
        "bgrass-height": "12.83%",
        "logo-h": "2.71%",
        "logo-h-mobile": "2.15%",
        "Ix-h": "16.28%",
        "Ix-h-mobile": "62.96%",
      },
      minHeight: {
        'jobScreen': 'calc(100vh-',
       },
      screens: {
        "ipadPro": "1025px",
        "phone": "423px",
        "small-device": "545px",
        'customx': {'raw': '(max-height: 812px),(max-width:375px)'},
        'custom7': {'raw': '(max-height: 667px),(max-width:375px)'},
        'custom7+': {'raw': '(max-height: 736px),(max-width:375px)'}

      },
      spacing: {
        "margin-right-cloud": "18.53%",
        "margin-cards": "15.45%", // margin footer cards + mobile
        "margin-hero-left": "11.25%",
        "margin-hero-top": "4.75%",
        "margin-hero-x-mobile": "8.4%",
        //card
        "margin-left-hero-img":"11.7%",
        "padding-page-x": "4.5%",
        "padding-x-card": "2.35%",
        "padding-x-card-mobile": "4.27%",
        "padding-y-card": "1.5%",
        "padding-y-card-mobile": "0.67%",
        "margin-x-card-mobile": "8.11%",
        "margin-t-card-mobile": "1.07%",
        //inside card margin
        "margin-header-parag": "1%",
        "margin-header-parag-mobile": "0.57%",
        //card1 pos
        "margin-top-card1": "1%",
        "margin-bot-card1": "7.57%",
        //card2 pos
        "margin-top-card2": "3.78%",
        //card3 pos
        "margin-bot-card3": "2.20%",
        //padding 2nd section:
        "pt-scd-section": "2.08%",
        "pb-scd-section": "6.44%",
        //padding 3rd section:
        "pt-thd-section": "1.08%",
        "pb-thd-section": "2.19%",
        //img-exp margin
        "mt-exp-img": "9.31%",
        "ml-exp-img": "20.83%",
        "mr-exp-img": "3.08%",
        //img-parcours margin
        "mt-parc-img": "9.25%",
        "mr-parc-img": "6.48%",
        //paddding red-plant
        "pr-red-plant": "70px",
        "pt-red-plant": "2.78%",
      },
      width: {
        input: "545px",
      },
      height: {
        "phoneHeightMobile": "613px",
        "phoneHeightDesktop" : "669px"
      },
      colors: {
        "moien-pink": "#FEEDEC",
        "moien-blue": "#010D3C",
        "moien-lightblue": "#F6F9FF",
        "moien-gray": "#808093",
        "moien-green": "#40DCB6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
