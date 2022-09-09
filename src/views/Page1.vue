<template>
  <audio autoplay>
    <source src="@/assets/musiques/Maloya_Zoizo.mp3">
  </audio>
  <section id="pg1" class="overflow-hidden" :style="{ backgroundImage: `url(${backgroundImagePg1})` }">

    <div class="d-flex flex-row justify-content-center mt-5 mb-5">
      <div class="d-flex flex-column justify-content-center align-items-center container-icons-vue" role="button"
           @click="router.push('/')">
        <BIconHouseFill class="icons-vue1  t2-5rem"/>
      </div>
    </div>

    <div class="zone-content d-flex flex-column align-items-center">
      <div class="zone-content-title d-flex flex-row  align-items-center">
        <h2>Maloya Zoizo</h2>
      </div>
      <div class="zone-content-p">
        <p>
          Ils sont là, ils chantent, ce sont des oiseaux réunionnais,
          chantent ils en créole ? Faisons un maloya avec
          eux.
        </p>
        <p>Il y a les couplets et refrains comme un maloya des humains</p>
        <p>mais celui la c’est un Maloya Zoizo!!!</p>
      </div>
    </div>

  </section>

</template>

<script setup>
import {useRouter} from 'vue-router'
// bootstrap-icons-vue - prefixed with BIcon. For example, the icon pause-fill is exported as BIconPauseFill
// icons list : https://icons.getbootstrap.com/
import {BIconHouseFill} from 'bootstrap-icons-vue'
import backgroundImagePg1 from "@/assets/images/Zozio.jpg"

const router = useRouter()
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
