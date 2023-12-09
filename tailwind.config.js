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
      secondary: "#444444",
      trimary: "#4F5960",
      text: "#F2ECFF",
    },
    extend: {
      colors: {
        primary: "#191919",
        secondary: "#444444",
        trimary: "#4F5960",
        text: "#F2ECFF",
        egg: "#F6F0DF",
        green: "#00C896",
        blueaccent: "#00C896",
      },
    },
  },
  plugins: [],
};
