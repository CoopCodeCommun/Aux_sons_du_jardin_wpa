<template>
  <!-- <ReloadPWA/> -->
  <section id="intro">
    <div class="section-header d-flex justify-content-around">
      <img class="section-header-logo  d-flex justify-content-center align-items-center" :src="logo">
      <div class="section-header-titre  d-flex justify-content-center align-items-center">Aux sons du jardin</div>
    </div>
    <div class="section-content position-relative mb-1" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="position-absolute bottom-0 start-0 w-100 pb-3">
        <div class="w-100 d-flex justify-content-center">
          <ScanQrcode :expected="expected" :qrbox="250" :fps="10" style="width: 400px;height: 400px;"
                      @resultat="onScan"/>
        </div>
        <div class="d-flex flex-row justify-content-around align-items-center mt-2">
          <div class="btn bg-transparent rounded-circle border-white icons-zone-taille overflow:hidden" :style="{ backgroundImage: `url(${iconPage1})` }" @click="router.push('/Page1')"></div>
          <div class="btn bg-transparent rounded-circle border-white icons-zone-taille overflow:hidden" :style="{ backgroundImage: `url(${iconPage2})` }" @click="router.push('/Page2')"></div>
          <div class="btn bg-transparent rounded-circle border-white icons-zone-taille overflow:hidden" :style="{ backgroundImage: `url(${iconPage3})` }" @click="router.push('/Page3')"></div>
          <div class="btn bg-transparent rounded-circle border-white icons-zone-taille overflow:hidden" :style="{ backgroundImage: `url(${iconPage4})` }" @click="router.push('/Page4')"></div>
          <div class="btn bg-transparent rounded-circle border-white icons-zone-taille overflow:hidden" :style="{ backgroundImage: `url(${iconPage5})` }" @click="router.push('/Page5')"></div>
        </div>
      </div>
    </div>
    <footer class="section-footer d-flex justify-content-between align-items-center">
      <img :src="logoRegionReunion">
      <a href="#one" class="btn bg-transparent rounded-circle text-white border-white fs-2">
        <BIconArrowDown/>
      </a>
      <img :src="logoJardinBotaniqueReunion">
    </footer>
  </section>

  <section id="one">
    <div class="content-style2">

      <h2 style="text-align: center">Les compositions</h2>
      <h4 style="margin-top: 1em">Aux sons du jardin.</h4>

      <p>
        Parce qu’il est peuplé d’espèces végétales et animales singulières,
        chaque jardin a son chant qui lui est propre,
        ses mélodies qui varient en fonction de la météo,
        de la saison, des essences qui y ont élu domicile.
        Chaque jardin a sa propre signature acoustique.
        Et si, avec humilité, avec nos instruments, nous nous invitions sur cette scène
        pour faire découvrir cette singularité, et en tirer une création originale.<br/><br/>
      </p>

      <h3 style="margin: 1.5em 0;">Crédits.</h3>
      <h5>Chris Hagá</h5>
      <p>Compositions, arrangements et prises de sons.</p>
      <h5>Letoyo</h5>
      <p>Ingénieur son studio. Prises de sons instruments et voix. Mixage et Mastering au Studio PLay Hit Up.</p>
      <h5>Sami Pageaux Waro</h5>
      <p>Kora électrique.</p>
      <h5>Julia Colmet Daâge</h5>
      <p>Violoncelle.</p>
      <h5>Hackerspace CodeCommun</h5>
      <p>Développement et conception.</p>

      <h4 style="margin: 1.5em 0">Remerciements : </h4>
      <h5>Département Réunion.</h5>
      <h5>Jardin Botanique Des Mascarins.</h5>
      <p>
        Résidence <q>Patrimoine et création</q> réalisée entre février et
        septembre 2022.
      </p>

    </div>
  </section>
</template>

<script setup>
import ScanQrcode from '@/components/ScanQrcode.vue'
// import ReloadPWA from '@/components/ReloadPWA.vue'
import {ref} from 'vue'
// routes
import {useRouter} from 'vue-router'
// medias: images en background
import backgroundImage from "@/assets/images/chris_haga-800x967.jpg"
// import logo from "@/assets/images/chris_haga_logo-68x82.png"
import logo from "@/assets/images/LogoChris.svg"
import logoRegionReunion from "@/assets/images/logo_region-reunion-150x41.png"
import logoJardinBotaniqueReunion from "@/assets/images/logo-mascarin-jardin-botanique-148x50.jpg"
// icon
import iconPage1 from "@/assets/images/PailleEnQueue-p1.png"
import iconPage2 from "@/assets/images/goutte-eau-p2.png"
import iconPage3 from "@/assets/images/Nuit-p3.png"
import iconPage4 from "@/assets/images/LogoChris-p4.png"
import iconPage5 from "@/assets/images/LeVent-p5.png"
import {BIconArrowDown} from 'bootstrap-icons-vue'

const router = useRouter()
const routesQrCode = [
  {code: "chp5", route: "/Page5"},
  {code: "chp4", route: "/Page4"},
  {code: "chp3", route: "/Page3"},
  {code: "chp2", route: "/Page2"},
  {code: "chp1", route: "/Page1"}
]
// https://raffinerie.tibillet.re/qr/07510c96-6eda-48a9-b31e-149042068112
// résultats qrcodes attendu
let expected = []
for (let i = 0; i < routesQrCode.length; i++) {
  expected.push(routesQrCode[i].code)
}

function onScan(qrCodeMessage) {
  console.log('-> fonc onScan !')
  console.log('qrCodeMessage =', qrCodeMessage)
  const test = routesQrCode.find(obj => obj.code === qrCodeMessage)
  if (test !== undefined) {
    // Stoper le  lecteur de qrcode
    // Aller à la page
    console.log('-> route =', test.route)
    router.push(test.route)
  } else {
    console.log('Qrcode non géré, inconnu !')
  }
  console.log('test =', test)
}
</script>

<style>
#intro {
  width: 100%;
  height: 100vh;
  /*background-position: center;*/
  /*background-repeat: no-repeat;*/
  background-size: cover;
  background-image: linear-gradient(#282658, #6f4b95);
}

/*    2iem page accueil! */
#one {
  background-size: cover;
  width: 100%;
  height: 100vh;
}

.section-header {
  width: 100%;
  height: 20%;
}

.section-header-logo {
  /*width: 30%;*/
  height: 100%;
}

.section-header-titre {
  /*width: 70%;*/
  height: 100%;
  color: #f57199;
  font-size: 1.5rem;
  font-weight: bold;
}

.section-content {
  width: 100%;
  height: 70%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.section-footer {
  width: 100%;
  height: 10%;
  padding: 0 4px;
}

.icons-zone-taille {
  width: 46px;
  height: 46px;
}

.content-style2 {
  margin: auto;
  width: 90%;
  background: #fff;
  padding: 10%;
  overflow: hidden;
  box-shadow: 0 0 25px #000;
  border: 1px solid #444;
  text-align: justify;
}

p {
  font-size: 20px;
  color: #444;
}

.slide-right, .slide-left {
  width: 100%;
}

.slide-right {
  animation: 3s slide-right;
}

@keyframes slide-right {
  from {
    margin-left: -100%;
  }
  to {
    margin-left: 0%;
  }
}

/***** Slide Left *****/
.slide-left {
  animation: 3s slide-left;
}

@keyframes slide-left {
  from {
    margin-left: 100%;
  }
  to {
    margin-left: 0%;
  }
}

.line {
  border-bottom: 3px solid red;
  width: 200px;
  margin: auto;
}

.fade-in {
  animation: fadeIn ease 3s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>