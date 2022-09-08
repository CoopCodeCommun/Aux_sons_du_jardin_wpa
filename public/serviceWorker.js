const CACHE_NAME = 'auxSonsDuJardin-v1'
const urlsToCache = [
  "/",
  "/logo-128x128.png",
  "/logo-192x192.png",
  "/logo-512x512.png",
  "/logo-96x96.png",
  "/manifest.json",
  "/serviceWorker.js",
  "/assets/LaNuit-800x1067.c18cf5de.jpg",
  "/assets/LaPluie-800x878.c8fa1222.jpg",
  "/assets/La_nuit_et_la_Kora.4a44777d.mp3",
  "/assets/La_pluie_en_mantra.a2ca06d3.mp3",
  "/assets/LeVent-800x537.a8284b21.jpg",
  "/assets/LeVent-p5.c7c54cb9.png",
  "/assets/Le_vent_et_son_instrument.5e9178e4.mp3",
  "/assets/LogoChris-p4.34593e40.png",
  "/assets/Maloya_Zoizo.10ead659.mp3",
  "/assets/Nuit-p3.3ff2d598.png",
  "/assets/Page1.c268c10f.js",
  "/assets/Page1.d2fe2c5f.css",
  "/assets/Page2.21986c4f.js",
  "/assets/Page2.ceaf8397.css",
  "/assets/Page3.baaeb38a.css",
  "/assets/Page3.f855c5dd.js",
  "/assets/Page4.aacda8a8.css",
  "/assets/Page4.bd1a1b91.js",
  "/assets/Page5.0d1c5f53.js",
  "/assets/Page5.21d8a2d4.css",
  "/assets/PailleEnQueue-p1.3ab0b7ac.png",
  "/assets/Zezer-800x533.e7391d4e.jpeg",
  "/assets/Zezer.b32a864f.mp3",
  "/assets/Zozio.0b413f7d.jpg",
  "/assets/_plugin-vue_export-helper.cdc0426e.js",
  "/assets/chris_haga-800x967.4d85ffdf.jpg",
  "/assets/chris_haga_logo-68x82.6e617e03.png",
  "/assets/goutte-eau-p2.45318e0a.png",
  "/assets/index.04baf16a.css",
  "/assets/index.da0473e7.js",
  "/assets/logo-mascarin-jardin-botanique-148x50.20d29af5.jpg",
  "/assets/logo_region-reunion-150x41.972a7421.png"
]

// mise en cache des assets lors de l'installation
self.addEventListener('install', event => {
  console.log('-> Installation du service worker', CACHE_NAME)
  // Wait until promise is finished
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log(`Service Worker: Caching Files: ${cache}`)
        cache.addAll(urlsToCache)
          // When everything is set
          .then(() => self.skipWaiting())
      })
  )
})

// suppression des fichiers de cache non utilisés
self.addEventListener('activate', function (event) {
  // permet de gérer les pages dès l'activation du service worker
  clients.claim()

  console.log('-> Activation du service worker', CACHE_NAME)
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    // Check de toutes les clés de cache.
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).then(res => {
      // The response is a stream and in order the browser
      // to consume the response and in the same time the
      // cache consuming the response it needs to be
      // cloned in order to have two streams.
      const resClone = res.clone()
      console.log('-> fetch, version =', CACHE_NAME)
      console.log('-> fetch, resClone =', resClone)
      // Open cache
      caches.open(CACHE_NAME)
        .then(cache => {
          // Add response to cache
          cache.put(event.request, resClone);
        })
      return res
    }).catch(err => caches.match(event.request)
      .then((res) => {
        console.log('-> fetch erreur, version =', event.request.url)
        return res
      })
    )
  )
})