<template>
  <audio autoplay>
    <source src="@/assets/musiques/La_nuit_et_la_Kora.mp3">
  </audio>
  <section id="pg3" class="overflow-hidden" :style="{ backgroundImage: `url(${backgroundImagePg3})` }">
    <div class="d-flex flex-row justify-content-center mt-5 mb-5">
      <div class="d-flex flex-column justify-content-center align-items-center container-icons-vue" role="button"
           @click="router.push('/')">
        <BIconHouseFill class="icons-vue1  t2-5rem"/>
      </div>
    </div>

    <div class="zone-content d-flex flex-column align-items-center">
      <div class="zone-content-title d-flex flex-row  align-items-center">
        <h2>La nuit et la kora</h2>
      </div>
      <div class="zone-content-p">
        <p>
          Les êtres éveillés de la nuit ont leur univers sonore depuis des siècles.
        </p>
        <p>
          J’ai voulu accompagner ces sons familiers de la nuit avec un son qui n’existe pas.
        </p>
        <p>
          Pour cela, j'ai fait appel à Sami Pageaux Waro et sa kora électrique pour nous livrer un échange musical des
          plus original.
        </p>
      </div>
    </div>

  </section>

</template>

<script setup>
import {useRouter} from 'vue-router'
// bootstrap-icons-vue - prefixed with BIcon. For example, the icon pause-fill is exported as BIconPauseFill
// icons list : https://icons.getbootstrap.com/
import {BIconPlayFill, BIconPauseFill, BIconHouseFill} from 'bootstrap-icons-vue'
import backgroundImagePg3 from "@/assets/images/LaNuit-800x1067.jpg"

const router = useRouter()
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
