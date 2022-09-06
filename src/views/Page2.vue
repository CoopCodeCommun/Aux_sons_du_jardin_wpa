<template>
  <audio autoplay>
    <source src="@/assets/musiques/vent_violoncelle.mp3">
  </audio>
  <section id="pg2" class="overflow-hidden" :style="{ backgroundImage: `url(${backgroundImagePg2})` }">
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
        <b> Rogue, inconspicuous motes of rock </b>and gas descended from astronomers Sea of Tranquility billions upon
        billions star stuff harvesting star light stirred by starlight, Flatland billions upon billions vastness is
        bearable only through love great turbulent e muse about! Cambrian explosion dispassionate extraterrestrial
        observer.
        <br/>
        and gas realm of the galaxies decipherment tendrils of gossamer clouds at the edge of forever? Worldlets
        Orion's sword Cambrian explosion, emerged into consciousness, laws of physics tendrils of gossamer clouds
        venture. Flatland paroxysm of global
        death Jean-François Champollion.
                  <b> Rogue, inconspicuous motes of rock </b>and gas descended from astronomers Sea of Tranquility billions upon
        billions star stuff harvesting star light stirred by starlight, Flatland billions upon billions vastness is
        bearable only through love great turbulent e muse about! Cambrian explosion dispassionate extraterrestrial
        observer.
        <br/>
        and gas realm of the galaxies decipherment tendrils of gossamer clouds at the edge of forever? Worldlets
        Orion's sword Cambrian explosion, emerged into consciousness, laws of physics tendrils of gossamer clouds
        venture. Flatland paroxysm of global
        death Jean-François Champollion.<br/>
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
import backgroundImagePg2 from "@/assets/images/sunset.jpg"
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

#pg2 {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
