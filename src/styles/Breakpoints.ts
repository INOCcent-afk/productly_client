const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `only screen (min-width: ${sizes.mobileS})`,
  mobileM: `only screen (min-width: ${sizes.mobileM})`,
  mobileL: `only screen (min-width: ${sizes.mobileL})`,
  tablet: `only screen (min-width: ${sizes.tablet})`,
  laptop: `only screen (min-width: ${sizes.laptop})`,
  laptopL: `only screen (min-width: ${sizes.laptopL})`,
  desktop: `only screen (min-width: ${sizes.desktop})`,
};
