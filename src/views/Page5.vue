<template>
  <audio autoplay>
    <source src="@/assets/musiques/Le_vent_et_son_instrument.mp3">
  </audio>
  <section id="pg5" class="overflow-hidden" :style="{ backgroundImage: `url(${backgroundImagePg5})` }">
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
      <p style="color: white; text-shadow: 3px 3px 4px red;">
        <b> Le vent et son instrument : </b><br/>
        Le son du vent n’existe que s’ il est en contact avec une autre matière.
        Les arbres, les bambous…
        <br/>
        La violoncelliste, Julia Colmet Daâge, se laisse conduire par le vent,<br/>
        son archet est influencé par l’intensité du vent, les deux forment un duo musical unique.
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
import backgroundImagePg5 from "@/assets/images/LeVent.jpg"
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

#pg5 {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
