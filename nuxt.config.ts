export default defineNuxtConfig({
  app: {
    head: {
      title: "Romian Tairovski - Developer",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/logo.png",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-icon"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
