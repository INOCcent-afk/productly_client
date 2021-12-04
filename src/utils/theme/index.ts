const fontSizes = [12, 14, 16, 18, 20, 24, 36, 48, 80, 96];
const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const lineHeights = [1, 1.25, 1.5];
const radii = ["0px", "2px", "4px", "8px", "16px", "48px"];
const space = [0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512];
const breakpoints = ["320px", "768px", "1024px", "1440px", "2560px"];

export const theme = {
  letterSpacings: {
    normal: "normal",
  },

  space,
  fontSizes,
  fontWeights,
  lineHeights,

  colors: {
    black: "#000",
    white: "#fff",
    transparent: "transparent",
    background: "",
    blue: "blue",
    lightblue: "",
    lighterblue: "",
    lightestblue: "",
    gray: "",
    darkgray: "",
    red: "red",
  },

  backgroundColors: {
    black: "#000",
  },
  radii,

  mediaQueries: {
    mobileS: `@media screen and (min-width: ${breakpoints[0]})`,
    tablet: `@media screen and (min-width: ${breakpoints[1]})`,
    laptop: `@media screen and (min-width: ${breakpoints[2]})`,
    laptopL: `@media screen and (min-width: ${breakpoints[3]})`,
    desktop: `@media screen and (min-width: ${breakpoints[4]})`,
  },
};

// /** Radius */
export const radiusButton = theme.radii[2];
export const radiusRounded = theme.radii[5];

/** Space */
export const spaceZero = theme.space[0];
export const spaceSmall = theme.space[1];
export const spaceMedium = theme.space[2];
export const spaceLarge = theme.space[3];
export const spaceXlarge = theme.space[4];
export const spaceXXLarge = theme.space[5];

export type Theme = typeof theme;

export default theme;
