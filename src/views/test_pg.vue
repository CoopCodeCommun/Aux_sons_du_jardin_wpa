<template>
  <audio id="play-audio" autoplay>
    <source src="@/assets/musiques/test-pg1.mp3">
  </audio>
  <section id="pg1" class="overflow-hidden" :style="{ backgroundImage: `url(${backgroundImagePg1})` }">
    <div class="d-flex flex-row justify-content-center mt-2 mb-2">
      <div class="d-flex justify-content-center align-items-center container-icons-vue  ms-1 me-1" role="button"
           @click="replayAudio()">
        <BIconSkipBackwardFill class="icons-vue1  t2-5rem"/>
      </div>
      <div class="container-icons-vue ms-1 me-1" role="button" @click="toggleAction()">
        <!-- <BIconFonts v-if="buttonAction === 'scrollTextProgress'" class="icons-vue1 t4rem rotate90"/> -->
        <div v-if="buttonAction === 'scrollTextProgress'" class="position-relative">
          <BIconFonts class="position-absolute icons-vue1"
                      style="width: 3rem; height: 3rem; left: 0.5rem; top: 0.5rem;"/>
          <BIconPauseFill class="position-absolute icons-vue1"
                          style="width: 2rem; height: 2rem; right: 0.5rem; top: 2rem;"/>
        </div>
        <div v-if="buttonAction === 'scrollTextPause'" class="position-relative">
          <BIconFonts class="position-absolute icons-vue1"
                      style="width: 3rem; height: 3rem; left: 0.5rem; top: 0.5rem;"/>
          <BIconPlayFill class="position-absolute icons-vue1"
                         style="width: 2rem; height: 2rem; right: 0.5rem; top: 2rem;"/>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center container-icons-vue  ms-1 me-1" role="button"
           @click="router.push('/')">
        <BIconHouseFill class="icons-vue1  t2-5rem"/>
      </div>
    </div>

    <div class="marquee-wrap">
      <div class="marquee">
        <h1>Page test</h1>
        <p style="color: white;text-shadow: 3px 3px 4px black;">
          <b> Rogue, inconspicuous motes of rock </b>and gas descended from astronomers Sea of Tranquility billions upon
          billions star stuff harvesting star light stirred by starlight, Flatland billions upon billions vastness is
          bearable only through love great turbulent e muse about! Cambrian explosion dispassionate extraterrestrial
          observer.
          <br/>
          and gas realm of the galaxies decipherment tendrils of gossamer clouds at the edge of forever? Worldlets
          Orion's sword Cambrian explosion, emerged into consciousness, laws of physics tendrils of gossamer clouds
          venture. Flatland paroxysm of global
          death Jean-François Champollion.
        </p><br/>
      </div>
    </div>

  </section>

</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
// bootstrap-icons-vue - prefixed with BIcon. For example, the icon pause-fill is exported as BIconPauseFill
// icons list : https://icons.getbootstrap.com/
import {BIconFonts, BIconPlayFill, BIconSkipBackwardFill, BIconPauseFill, BIconHouseFill} from 'bootstrap-icons-vue'
import backgroundImagePg1 from "@/assets/images/sunset.jpg"
const router = useRouter()
let buttonAction = ref('scrollTextProgress')
function toggleAction() {
  if (buttonAction.value === 'scrollTextProgress') {
    buttonAction.value = 'scrollTextPause'
    document.querySelector('.marquee').style.animationPlayState = 'paused'
  } else {
    buttonAction.value = 'scrollTextProgress'
    document.querySelector('.marquee').style.animationPlayState = 'running'
  }
}
function replayAudio() {
  const audioElement = document.querySelector('#play-audio')
  audioElement.currentTime = 0
  audioElement.play()
}
</script>

<style scoped>
#pg1 {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>