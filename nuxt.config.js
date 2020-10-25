module.exports = {
    db: {
      development: "mongodb://localhost:27017/troov",
      test: "mongodb://localhost:27017/troov",
    },
    modules: [
      '@nuxtjs/axios',
      'bootstrap-vue/nuxt'
    ],
    serverMiddleware: [
      '~/api/index.js'
    ]
  };