const { Nuxt, Builder } = require('nuxt')

const app = require('express')()
const isProd = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000

// Nous instancions Nuxt.js avec les options
const config = require('./nuxt.config.js')
config.dev = !isProd
const nuxt = new Nuxt(config)

// Faire le rendu chaque route avec Nuxt.js
app.use(nuxt.render)

// Faire le build seulement en mode de développement avec du rechargement à chaud
if (config.dev) {
  new Builder(nuxt).build().then(listen)
} else {
  listen()
}

function listen() {
  // Écouter le serveur
  app.listen(port, '0.0.0.0')
  console.log('Le serveur écoute sur `localhost:' + port + '`.')
}
