<template>
  <audio autoplay>
    <source src="@/assets/musiques/La_pluie_en_mantra.mp3">
  </audio>
  <section id="pg2" class="overflow-hidden" :style="{ backgroundImage: `url(${backgroundImagePg2})` }">
    <div class="d-flex flex-row justify-content-center mt-5 mb-5">
      <div class="d-flex flex-column justify-content-center align-items-center container-icons-vue" role="button"
           @click="router.push('/')">
        <BIconHouseFill class="icons-vue1  t2-5rem"/>
      </div>
    </div>

    <div class="zone-content d-flex flex-column align-items-center">
      <div class="zone-content-title d-flex flex-row  align-items-center">
        <h2>La pluie en mantra</h2>
      </div>
      <div class="zone-content-p">
        <p>
          Les mains d’un percussionniste sont silencieuses jusqu'au moment de leurs rencontres avec la peau des
          instruments,
        </p>
        <p>
          ici les gouttes sont les mains et le feuillage les instruments.
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
