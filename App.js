const { Nuxt, Builder } = require('nuxt')

const app = require('express')()
const isProd = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000
const db = require('./api/db')

const config = require('./nuxt.config.js')
config.dev = !isProd

const nuxt = new Nuxt(config)
app.use(nuxt.render)

if (config.dev) {
  new Builder(nuxt).build().then(listen)
} else {
  listen()
}

function listen() {
  app.listen(port, '0.0.0.0')
  console.log('Le serveur écoute sur `localhost:' + port + '`.')
}
