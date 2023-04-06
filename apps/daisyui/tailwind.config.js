// tailwind config is required for editor support

module.exports = require("tailwind-config/tailwind.config.js");

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.violet,
        secondary: colors.orange,
        blue: colors.blue,
        pink: colors.pink[500],
        green: colors.green[500],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "base-100": "#FFFFFF",

          primary: "#1c7ed6",
          secondary: "#7048e8",
          error: "#f03e3e",
          warning: "#f59f00",
          success: "#248064",
          info: "#A6A7AB",

          accent: "#37CDBE",
          neutral: "#3D4451",
        },
      },
      "light",
      "dark",
      "cupcake",
    ],
  },
};
