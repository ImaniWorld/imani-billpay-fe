module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Imani BillPay',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicon-16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicon-57.png', sizes: '57x57' },
      { rel: 'icon', type: 'image/png', href: '/favicon-64.png', sizes: '64x64' },
      { rel: 'icon', type: 'image/png', href: '/favicon-144.png', sizes: '144x144' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cambay' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {},
  modules: [
    "@nuxtjs/axios"
  ],
  plugins: [
    '~/plugins/axios',
    '~/plugins/vuelidate',
    '~/plugins/i18n',
    { src: '~/plugins/vue-tel-input', ssr: false }
  ],
  axios: {
    baseURL: process.env.API_URL || 'https://www.imanibillpay.com:8080/',
    timeout: 10000
  },
};
