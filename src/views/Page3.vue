<template>
  <audio autoplay>
    <source src="@/assets/musiques/La_nuit_et_la_Kora.mp3">
  </audio>
  <section id="pg3" class="overflow-hidden" :style="{ backgroundImage: `url(${backgroundImagePg3})` }">
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
      <p style="color: white; text-shadow: 3px 3px 4px black;">
        <b> La nuit et la kora 2.0:</b><br/>
        Les êtres éveillés de la nuit ont leur univers sonore depuis des siècles et des siècles,<br/> 
        j’ai voulu accompagner ces sons familiers de la nuit avec un son qui n’existe pas. <br/>
        Pour cela j ai fait appel à Sami Pageaux Waro et sa kora électrique pour nous livrer un échange musical des plus original.<br/>
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
import backgroundImagePg3 from "@/assets/images/LaNuit.jpg"
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

#pg3 {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
