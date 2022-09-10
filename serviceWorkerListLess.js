// composeServiceWorker.js ajoute à ce ficgier:
// - const CACHE_NAME, le nom du cache.
// - const urlsToCache = [...], la liste des assets du bluid

let cachingOk = false

// communication with app
const bc = new BroadcastChannel('appChannel')

const testCachingAll = async () => {

}


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
  }
})

self.addEventListener('activate', function (event) {
  // permet de gérer les pages dès l'activation du service worker
  clients.claim()
  console.log('-> Activation du service worker', CACHE_NAME)

  event.waitUntil(
    // Check de toutes les clés de cache.
    caches.keys().then((cacheNames) => {
      console.log('le cache :', cacheNames)
    })
  )
})

const testCache = async () => {
  const keys = caches.keys()
  console.log('keys =', keys)
}

self.addEventListener('fetch', event => {
  console.log('-> écoute fetch:')
  console.log('cachingOk =', cachingOk)
  if (cachingOk === false) {
    event.respondWith(
        testCache()
    )
  }
})