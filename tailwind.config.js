import plugin from "tailwindcss/plugin";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    // backgroundColor: {},
    extend: {
      colors: {
        primary: "#fdf0d5",
        secondary: "#c6ac8f",
        trimary: "#5e503f",
        text: "#1F1F1F",
        button: "#AD875C",
        "button-accent": "#C1A585",
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        html: {
          // color: theme("colors.text"),
          // backgroundColor: theme("colors.primary"),
        },
      });
    }),
  ],
};
