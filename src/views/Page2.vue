<template>
  <audio autoplay>
    <source src="@/assets/musiques/La_pluie_en_mantra.mp3">
  </audio>
  <section id="pg2" class="overflow-hidden" :style="{ backgroundImage: `url(${backgroundImagePg2})` }">
    <div class="d-flex flex-row justify-content-center mt-2 mb-2">
      <div class="d-flex flex-column justify-content-center align-items-center container-icons-vue" role="button" @click="router.push('/')">
        <BIconHouseFill class="icons-vue1  t2-5rem"/>
      </div>
    </div>

    <div class="marquee-wrap-test">
      <p style="color: white;text-shadow: 3px 3px 4px black;">
        <b> La pluie en mantra: </b><br/>
        Les mains d’un percussionniste sont silencieuses jusqu'au moment de leurs rencontres avec la peau des instruments, 
        <br/>
        ici les gouttes sont les mains et le feuillage les instruments.<br/>
      </p><br/>
    </div>

  </section>

</template>

<script setup>
import {useRouter} from 'vue-router'
// bootstrap-icons-vue - prefixed with BIcon. For example, the icon pause-fill is exported as BIconPauseFill
// icons list : https://icons.getbootstrap.com/
import {BIconHouseFill} from 'bootstrap-icons-vue'
import backgroundImagePg2 from "@/assets/images/LaPluie-800x878.jpg"
const router = useRouter()
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
