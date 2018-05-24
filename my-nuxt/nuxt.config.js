module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'My itunes serach',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [
    {rel: 'icon',type: 'image/x-icon', href: '/favicon.ico'},
    {rel: 'stylesheet',href:'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
  ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  plugins: [
    '~plugins/vuetify.js'
  ],
  build: {
    /*
     ** Run ESLint on save
     */
    vendor: ['axios', 'vuetify'],
    extend(config, {isDev, isClient}) {
      // if (isDev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  },
  css: [
    // 项目中的 Sass 文件
    {
      src: '~assets/app.styl'
    } // 指定 scss 而非 sass
  ],

}
