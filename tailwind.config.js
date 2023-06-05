/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1440px",
    },
    zIndex: {
      0: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
    },
    spacing: {
      0: "0",
      1: "2px",
      2: "4px",
      3: "6px",
      4: "8px",
      5: "10px",
      6: "12px",
      7: "14px",
      8: "16px",
      9: "18px",
      10: "20px",
      11: "22px",
      12: "24px",
      13: "26px",
      14: "28px",
      15: "30px",
      16: "32px",
      17: "34px",
      18: "36px",
      19: "38px",
      20: "40px",
      21: "42px",
      22: "44px",
      23: "46px",
      24: "48px",
      25: "50px",
      26: "52px",
      27: "54px",
      28: "56px",
      29: "58px",
      30: "60px",
      31: "62px",
      32: "64px",
      33: "66px",
      34: "68px",
      35: "70px",
      36: "72px",
      37: "74px",
      38: "76px",
      39: "78px",
      40: "80px",
      41: "84px",
      42: "88px",
      43: "92px",
      44: "96px",
      45: "100px",
      46: "110px",
      47: "120px",
      48: "130px",
      49: "140px",
      50: "150px",
      51: "160px",
      52: "170px",
      53: "180px",
      54: "190px",
      55: "200px",
    },
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#F5F5F5",
        tertiary: "#888888",
        accent: "#ED2224",
        "primary-text": "#231F20",
        "secondary-text": "#FFFFFF",
        "tertiary-text": "#212121",
        offBlack: "#231F20",
      },
      fontFamily: {
        futura: "var(--font-futura)",
        montserrat: "var(--font-montserrat)",
        "open-sans": "var(--font-open-sans)",
      },
      letterSpacing: {
        wide: "1.4px",
        widest: "1.6px",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/HandsdownHero.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
