module.exports = {
    db: {
      development: "mongodb://localhost:27017/troov",
      test: "mongodb://localhost:27017/troov",
    },
    modules: [
      '@nuxtjs/axios',
      '@nuxtjs/auth',
      '@nuxt/content',
      'bootstrap-vue/nuxt'
    ],
    auth: {
      strategies: {
        local: {
          endpoints: {
            login: { url: '/api/user/login', method: 'post', propertyName: 'token' },
            logout: false
          }
        }
      },
      redirect: {
        login: '/login',
        logout: '/',
        home: '/'
      },
    },
    serverMiddleware: [
      '~/api/index.js'
    ]
  };