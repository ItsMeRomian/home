export default {
  target: "static",

  head: {
    title: "Romian Tairovski",
    htmlAttrs: {
      lang: "en"
    },
    meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: "Student Software Developer from the Netherlands." }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logos/small.png" }]
  },

  css: ["~/assets/style.css"],

  plugins: [],

  components: true,

  buildModules: [],

  modules: [
    "bootstrap-vue/nuxt",
    "@nuxt/http",
    [
      "@nuxtjs/recaptcha",
      {
        hideBadge: false,
        siteKey: "6LdkWNMaAAAAAE325p57AhA2AWrA50frsY3eCt8P",
        version: 3,
        size: "normal"
      }
    ],
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyB0VDzGfkCTajbWL_ZsVaKz69nVvwkH1bU",
          authDomain: "itsmeromian.firebaseapp.com",
          projectId: "itsmeromian",
          storageBucket: "itsmeromian.appspot.com",
          messagingSenderId: "480243215917",
          appId: "1:480243215917:web:1cc916263379255d4ad2a4",
          measurementId: "G-CL6WM8MNFG"
        },
        services: {
          analytics: true
        }
      }
    ]
  ],
  build: {}
};
