const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,jsx,ts,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      green: colors.green,
      purple: colors.purple,
      cyan: colors.cyan,
      blue: colors.blue,
      red: colors.red,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: "#fe7b55",
    },
  },
  plugins: [],
};
