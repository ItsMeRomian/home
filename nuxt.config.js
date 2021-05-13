export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Romian Tairovski',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Student Software Developer from the Netherlands.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxt/http',
    ['@nuxtjs/recaptcha',
      {
        hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
        // language: String,   // Recaptcha language (v2)
        siteKey: '6LdkWNMaAAAAAE325p57AhA2AWrA50frsY3eCt8P',
        version: 3,     // Version
        size: 'normal'        // Size: 'compact', 'normal', 'invisible' (v2)
      }
    ],
    ['@nuxtjs/firebase',
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
          analytics: true,
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
