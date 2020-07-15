require('dotenv').config()
export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server: {
    port: process.env.PORT,
    host: process.env.HOST
  },
  css: [
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    'bootstrap-vue/nuxt',
  ],
  build: {
  }
}
