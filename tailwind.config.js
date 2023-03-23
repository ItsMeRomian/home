/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      primary: "#191919",
      secondary: "#232323",
      trimary: "#303030",
      text: "#F8F8F8",
    },
    extend: {
      colors: {
        primary: "#191919",
        secondary: "#232323",
        trimary: "#303030",
        text: "#F8F8F8",
        egg: "#F6F0DF",
        green: "#049F76",
        blueaccent: "#5270e1",
      },
    },
  },
  plugins: [],
};
