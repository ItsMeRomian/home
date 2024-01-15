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
  runtimeConfig: {
    prod: process.env.prod === "true",
    discord_key: process.env.discord_key,
    google_captcha_private: process.env.google_captcha_private,
    CHECKLY_CHANNEL: process.env.CHECKLY_CHANNEL,
    MESSAGES_CHANNEL: process.env.MESSAGES_CHANNEL,
  },
});
