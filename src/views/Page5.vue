<template>
  <audio autoplay>
    <source src="@/assets/musiques/Le_vent_et_son_instrument.mp3">
  </audio>
  <section id="pg5" class="overflow-hidden" :style="{ backgroundImage: `url(${backgroundImagePg5})` }">
    <div class="d-flex flex-row justify-content-center mt-5 mb-5">
      <div class="d-flex flex-column justify-content-center align-items-center container-icons-vue" role="button"
           @click="router.push('/')">
        <BIconHouseFill class="icons-vue1  t2-5rem"/>
      </div>
    </div>

    <div class="zone-content d-flex flex-column align-items-center">
      <div class="zone-content-title d-flex flex-row  align-items-center">
        <h2>Le vent et son instrument</h2>
      </div>
      <div class="zone-content-p">
        <p>
          Le son du vent n’existe que s’ il est en contact avec une autre matière.
          Les arbres, les bambous…
        </p>
        <p>
          La violoncelliste, Julia Colmet Daâge, se laisse conduire par le vent.
        </p>
        <p>
          Son archet est influencé par l’intensité du vent, les deux forment un duo musical unique.
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
import backgroundImagePg5 from "@/assets/images/LeVent-800x537.jpg"

const router = useRouter()
</script>

<style scoped>

#pg5 {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
