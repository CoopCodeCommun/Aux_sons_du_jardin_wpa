<template>
  <div v-if="cacheOk === true && offLine === false" class="bg-dark text-white fixed-top">
    Cache ok !
    <span v-bind:supinfocache="supInfoCache()"></span>
  </div>
  <router-view/>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()
let cacheOk = ref(false)
let offLine = ref(false)

// mise en place du service worker
window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    const bc = new BroadcastChannel('appChannel')

    navigator.serviceWorker.register('/serviceWorker.js')
        .then((reg) => {
          // registration worked
          console.log('Enregistrement réussi')
          // communication entre le service worker et l'app
          bc.onmessage = (event) => {
            console.log('-> message :', event)
          }
        }).catch((error) => {
      // registration failed
      console.log('Erreur : ' + error);
    })
  }
})

  function supInfoCache() {
    setTimeout(() => {
      cacheOk.value = false
    }, "1000")

  }
</script>

<style scoped>
</style>
