import colors from "vuetify/es5/util/colors";

module.exports = {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  mode: 'universal',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - todo",
    title: "todo",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  //loading関連
  //loading: '~/components/Loading.vue',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/firebase.ts",
    "~/plugins/axios-accessor",
    {
      src: "~plugins/localStorage",
      ssr: false
    },
    { src: "~plugins/v-calendar.js", ssr: false },
    { src: "~/plugins/vue2-google-maps.js" },
    { src: "~/plugins/vuejs-datepicker.js", mode: "client", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "nuxt-typed-vuex"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    '@nuxtjs/apollo',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
      presets({ isServer }, [preset, options]) {
        options.loose = true
      },
    },
    extend(config, ctx) { },
    vendor: ["vue2-google-maps"],
    transpile: [/typed-vuex/]
  },
  auth: {
    redirect: {
      login: "/login",
      logout: "/login",
      callback: "/login",
      home: "/"
    },
    strategies: {
      // 省略
    },
    vuex: false // これを追加
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:4000',
      }
    }
  },
};
