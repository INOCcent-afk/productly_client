import {
  black,
  darkYellow,
  gray600,
  gray100,
  gray300,
  transparent,
  white,
} from "./colors";

const breakpoints = ["320px", "768px", "1024px", "1200px", "1440px"];

export const theme = {
  letterSpacings: {
    normal: "normal",
  },

  fontSizes: {
    subLink: "10px",
    link: "14px",

    mainTitle: "36px",
    sectionTitle: "20px",
    paragraph: "14px",

    input: "16px",
    label: "24px",
    button: "16px",
  },

  colors: {
    black: black,
    white: white,
    transparent: transparent,
    primary: darkYellow,

    fontGray: gray600,
    fontGrayLight: gray300,
  },

  backgroundColors: {
    black: black,
    white: white,
    transparent: transparent,
    primary: darkYellow,
    linkHover: gray100,

    grayLightBg: gray100,
  },

  borderColors: {
    primary: darkYellow,
    grayBorder: gray300,
    grayLightBorder: gray100,
  },

  boxShadows: {
    bottomBoxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    fullBoxShadow: "0px 4px 8px 2px rgba(0, 0, 0, 0.15);",
  },

  mediaQueries: {
    mobileS: `only screen and (min-width: ${breakpoints[0]})`,
    tablet: `only screen and (min-width: ${breakpoints[1]})`,
    laptop: `only screen and (min-width: ${breakpoints[2]})`,
    laptopL: `only screen and (min-width: ${breakpoints[3]})`,
    desktop: `only screen and (min-width: ${breakpoints[4]})`,
  },
};

export type Theme = typeof theme;

export default theme;
