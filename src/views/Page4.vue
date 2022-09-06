<template>
  <audio autoplay>
    <source src="@/assets/musiques/Zezer.mp3">
  </audio>
  <section id="pg4" class="overflow-hidden" :style="{ backgroundImage: `url(${backgroundImagePg4})` }">
    <div class="d-flex flex-row justify-content-center mt-2 mb-2">
      <div class="d-flex justify-content-center align-items-center container-icons-vue ms-1 me-1" role="button" @click="toggleAction()">
        <BIconPlayFill v-if="buttonAction === 'play'" class="icons-vue1 t4rem rotate90"/>
        <BIconPauseFill v-if="buttonAction === 'pause'" class="icons-vue1 t4rem"/>
      </div>
      <div class="d-flex justify-content-center align-items-center container-icons-vue  ms-1 me-1" role="button" @click="router.push('/')">
        <BIconHouseFill class="icons-vue1  t2-5rem"/>
      </div>
    </div>

    <div class="marquee-wrap-test">
      <p style="color: white;text-shadow: 3px 3px 4px black;">
        <b> Zezer (fonnker ek zoizo): </b><br/>
        Artiste engagé de par mes textes et mes choix musicaux, <br/>
        j’ai voulu dans cette oeuvre alerter en créole du danger que nous sommes, nous les êtres humains,<br/>
        pour les oiseaux et en général pour l’écosystème de la Terre.<br/>
        Les sons du jardin accompagnent ma voix et mes idées musicales s’harmonisent aux idées rythmiques des oiseaux (Merle maurice, martin).
        <br/>
        
      </p><br/>
    </div>

  </section>

</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
// bootstrap-icons-vue - prefixed with BIcon. For example, the icon pause-fill is exported as BIconPauseFill
// icons list : https://icons.getbootstrap.com/
import {BIconPlayFill, BIconPauseFill, BIconHouseFill} from 'bootstrap-icons-vue'
import backgroundImagePg4 from "@/assets/images/zezer.jpeg"
const router = useRouter()
let buttonAction = ref('play')
function toggleAction() {
  if (buttonAction.value === 'play') {
    buttonAction.value = 'pause'
  } else {
    buttonAction.value = 'play'
  }
}
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
