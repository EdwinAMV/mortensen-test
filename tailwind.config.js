const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["src/**/*.html", "src/scripts/**/*.js"],
  theme: {
    extend: {
      colors: {
        black: "#2E2E2E",
        white: "#FFFFFF",

        gray: {
          100: "#F6F6F6",
          200: "#888888",
          300: "#3C3C3C",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "1.5rem",
        },
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        gilroy: ["Gilroy", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: ["16px", "24px"],
        lg: ["20px", "30px"],
        xl: ["32px", "38px"],
        "2xl": ["52px", { letterSpacing: "-0.4px", lineHeight: "58px" }],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
