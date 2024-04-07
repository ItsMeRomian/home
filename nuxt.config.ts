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
  gtag: {
    id: 'G-4JY9JNBETR'
  },
  gtm: {
    id: "GTM-KZHX6MM3",
    defer: false,
    compatibility: false,
    nonce: "2726c7f26c",
    enabled: true,
    debug: true,
    loadScript: true,
    enableRouterSync: true,
    trackOnNextTick: false,
    devtools: true,
  },
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-icon", "nuxt-gtag", "@zadigetvoltaire/nuxt-gtm"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      prod: process.env.prod,
    },
    discord_key: process.env.discord_key,
    google_captcha_private: process.env.google_captcha_private,
    CHECKLY_CHANNEL: process.env.CHECKLY_CHANNEL,
    MESSAGES_CHANNEL: process.env.MESSAGES_CHANNEL,
  },
});
