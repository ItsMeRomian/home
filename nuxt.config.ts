export default defineNuxtConfig({
  app: {
    head: {
      title: "Romian Tairovski - Developer",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/logo.png",
        }
      ],
      script: [
        // <script defer src="https://umami.dyna.host/script.js" data-website-id="25da6b79-b509-4de3-b598-cea68d99e826"></script>
        {
          src: "https://umami.dyna.host/script.js",
          "data-website-id": "25da6b79-b509-4de3-b598-cea68d99e826",
          defer: true,
        }
      ]
    },
  },

  gtag: {
    id: "G-CQQL11BZ3B",
  },

  gtm: {
    id: "GTM-TD6JQTSD",
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

  modules: [
    "nuxt-icon",
    "nuxt-gtag",
    "@zadigetvoltaire/nuxt-gtm",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/fonts",
    "@vee-validate/nuxt"
  ],

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

  compatibilityDate: "2024-07-08",

  tailwindcss: {
    exposeConfig: true,
    editorSupport: true,
  },

  colorMode: {
    classSuffix: "",
  },

  imports: {
    imports: [
      {
        from: "tailwind-variants",
        name: "tv",
      },
      {
        from: "tailwind-variants",
        name: "VariantProps",
        type: true,
      },
    ],
  },
});