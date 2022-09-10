// composeServiceWorker.js ajoute à ce ficgier:
// - const CACHE_NAME, le nom du cache.
// - const urlsToCache = [...], la liste des assets du bluid

let cachingOk = false

let testNbFiles

// communication with app
const bc = new BroadcastChannel('appChannel')

const caching = async (cache, url, p) => {
  try {
    const response = await fetch(url)
    console.log('-> mise en cache :', url)
    await cache.put(url, response)
    bc.postMessage({action: 'caching', value: p})
    return
  } catch (error) {
    console.log('-> LoadCache,', error)
  }
}

const cacheAll = async () => {
  // créer un nouveau cache
  try {
    // console.log('-> cacheAll, etape 1.')
    const cache = await caches.open(CACHE_NAME)
    // console.log('nouveau cache =', cache)
    const conv = 100 / urlsToCache.length
    for (let i = 0; i < urlsToCache.length; i++) {
      await caching(cache, urlsToCache[i], (i * conv))
    }
    cachingOk = true
    // console.log('-> cacheAll, etape 2.')
    console.log('Fin cacheAll.')
  } catch (error) {
    console.log('-> cacheAll :', error)
  }
}

// mise en cache des assets lors de l'installation
self.addEventListener('install', event => {
  console.log('-> Installation du service worker', CACHE_NAME)
  // Wait until promise is finished
  if (cachingOk === false) {
    event.waitUntil(
      cacheAll()
    )
  }  /*
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
  */
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
  }
  bc.postMessage({status: true, version: CACHE_NAME, nbFilesList: urlsToCache.length, nbFilesInCache})
}

self.addEventListener('activate', function (event) {
  // permet de gérer les pages dès l'activation du service worker
  clients.claim()
  console.log('-> Activation du service worker', CACHE_NAME)

  /*
  // test
  if (finDeTest === false) {
    test()
  }
*/
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