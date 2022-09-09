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

    navigator.serviceWorker.register('/serviceWorker.js')
        .then((reg) => {
          // registration worked
          console.log('Enregistrement réussi');
        }).catch((error) => {
      // registration failed
      console.log('Erreur : ' + error);
    })

    const bc = new BroadcastChannel('appChannel')
    bc.onmessage = (event) => {
      // console.log('réception message ', event)
      if (event.data.status) {
        if (event.data.nbFilesInCache >= event.data.nbFilesList) {
          console.log('-> Cache ', event.data.version, 'Ok !')
          cacheOk.value = true
        }
      }

      if (event.data.offLine) {
        offLine.value = true
      }
    }

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
