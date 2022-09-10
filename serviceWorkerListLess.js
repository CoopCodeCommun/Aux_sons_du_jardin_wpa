let testNbFiles, finDeTest = false

// communication with app
const bc = new BroadcastChannel('appChannel')

// mise en cache des assets lors de l'installation
self.addEventListener('install', event => {
  console.log('-> Installation du service worker', CACHE_NAME)
  // Wait until promise is finished
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        cache.addAll(urlsToCache)
          // When everything is set
          .then(() => {
            self.skipWaiting()
            console.log('Cache chargé !')
            bc.postMessage({endLoading: true, version: CACHE_NAME, nbFiles: urlsToCache.length})
          })
      })
  )
})

const test = async () => {
  testNbFiles = 0
  let nbFilesInCache = (await caches.open(CACHE_NAME).then(cache => cache.keys())).length
  if (nbFilesInCache < urlsToCache.length) {
    await caches.open(CACHE_NAME).then(cache => {
      cache.addAll(urlsToCache).then(() => {
        test()
      })
    })
  } else {
    finDeTest = true
    bc.postMessage({status: true, version: CACHE_NAME, nbFilesList: urlsToCache.length, nbFilesInCache})
  }

}

self.addEventListener('activate', function (event) {
  // permet de gérer les pages dès l'activation du service worker
  clients.claim()
  console.log('-> Activation du service worker', CACHE_NAME)

  // test
  if (finDeTest === false) {
    test()
  }

  // suppression des fichiers de cache non utilisés
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
      // console.log('-> fetch,', CACHE_NAME, ', resClone =', resClone)
      // Open cache
      return caches.open(CACHE_NAME).then(function (cache) {
        return cache.put(event.request, resClone).then(function () {
          if (finDeTest === false) {
            test()
          }
          return res
        })
      })
      /*
      caches.open(CACHE_NAME)
        .then(cache => {
          // Add response to cache
          cache.put(event.request, resClone)
          test()
        })
      return res
       */
    }).catch(err => caches.match(event.request)
      .then((res) => {
        // hors ligne
        // console.log('-> fetch erreur, version =', event.request.url)
        bc.postMessage({offLine: true})
        return res
      })
    )
  )
})