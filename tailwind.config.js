module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
    "./src/shared-components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "3frAnd1fr": "3fr, 1fr",
      },
      screens: {
        sm: "320px",

        smd: "600px",

        md: "768px",

        lg: "1024px",

        xl: "1440px",

        "2xl": "2560px",
      },
    },
  },
  plugins: [],
};
