export const theme = {
  space: [0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 18, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    normal: 1,
    title: 1.25,
    paragraph: 1.5,
  },
  letterSpacings: {
    normal: "normal",
  },
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
  radii: ["0px", "2px", "4px", "8px", "16px", "48px"],
  // ... and many things
};

export type Theme = typeof theme;

export default theme;
