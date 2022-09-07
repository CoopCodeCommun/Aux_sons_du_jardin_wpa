<template>
  <audio autoplay>
    <!-- <source src="@/assets/musiques/Zezer.mp3"> -->
    <source :src="audioP4">

  </audio>
  <section id="pg4" class="overflow-hidden section_bg" :style="{ backgroundImage: `url(${backgroundImagePg4})` }">
    <div class="d-flex flex-row justify-content-center mt-5 mb-5">
      <div class="d-flex flex-column justify-content-center align-items-center container-icons-vue" role="button"
           @click="router.push('/')">
        <BIconHouseFill class="icons-vue1  t2-5rem"/>
      </div>
    </div>

    <div class="bg-texte_page_secondaire">
      <div class="texte_page_secondaire">
        <h2> Zezer (fonnker ek zoizo): </h2>

        <p>Engagé par mes textes et mes choix musicaux,
          j’ai voulu dans cette oeuvre alerter en créole du danger que nous sommes,
          nous les êtres humains,
          pour les oiseaux et en général pour l’écosystème de la Terre.
        </p>
        <p>
          Les sons du jardin accompagnent ma voix et mes idées musicales s’harmonisent aux idées rythmiques des oiseaux
          (Merle maurice, martin).
        </p>

      </div>
    </div>

  </section>

</template>

<script setup>
import {useRouter} from 'vue-router'
// bootstrap-icons-vue - prefixed with BIcon. For example, the icon pause-fill is exported as BIconPauseFill
// icons list : https://icons.getbootstrap.com/

import {BIconHouseFill} from 'bootstrap-icons-vue'
import backgroundImagePg4 from "@/assets/images/Zezer-800x533.jpeg"
import audioP4 from "@/assets/musiques/Zezer.mp3"

const router = useRouter()
</script>

<style scoped>

#pg4 {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
