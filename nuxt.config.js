export default {
  mode: 'universal',
  // subdirectory: '/1/brook',

  server: {
    port: 8000, // default: 3000
    host: 'localhost' // default: localhost
  },

  generate: {
    fallback: true
  },

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'Vue.JS Technology',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'assets/scss/style.scss'
  ],

  router: {
    linkExactActiveClass: 'active-link'
    // base: '/1/brook'
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-awesome-swiper.js',
    '~/plugins/vue-masonry-css.js',
    '~/plugins/Mixitup.client.js',
    '~/plugins/silentbox.js',
    {
      src: '~/plugins/vue-masonry',
      ssr: false
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'vue-scrollto/nuxt',
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      'assets/scss/default/_variables.scss'
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true
  }
}
