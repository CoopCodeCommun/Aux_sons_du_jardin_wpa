<template>
  <div v-if="needRefresh"
       class="flex flex-wrap md:flex-nowrap bg-pink-900 text-white text-sm px-6 py-2 justify-between align-middle"
       role="alert">
    <div class="text-dark message mt-1">
      <span>Il y a des changement dans l'application, cliquer pour la mise à jour.</span>
    </div>
    <div class="buttons flex align-middle mt-2 md:mt-0">
      <button @click="updateCache()"
              class="w-full px-4 py-2 text-sm text-white leading-none transition-colors duration-150 bg-pink-900 border border-white rounded sm:w-auto active:bg-pink-600 hover:bg-pink-700 focus:outline-none focus:shadow-outline-purple mr-4">
        Mise à jour
      </button>
      <button @click="close"
              class="w-full px-4 py-2 text-sm text-white leading-none transition-colors duration-150 bg-pink-900 border border-white rounded sm:w-auto active:bg-pink-600 hover:bg-pink-700 focus:outline-none focus:shadow-outline-purple">
        Fermer
      </button>
    </div>
  </div>
</template>

<script setup>
import {useRegisterSW} from "virtual:pwa-register/vue"

const {offlineReady, needRefresh, updateServiceWorker} = useRegisterSW()
const close = async () => {
  offlineReady.value = false
  needRefresh.value = false
}
const updateCache = async () => {
  await updateServiceWorker()
}
</script>
