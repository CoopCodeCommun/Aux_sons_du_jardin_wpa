<template>
  <ReloadPWA/>
  <section id="intro" :style="{ backgroundImage: `url(${backgroundImage})` }"><br/>

    <div style="margin-top: 130px;">
      <ScanQrcode :expected="expected" :qrbox="250" :fps="10" style="width: 400px;height: 400px;" @resultat="onScan"/>
        <div class="d-flex flex-row justify-content-center align-items-center mt-2">
          <img :src="oiseau" class="ms-1 me-1" role="button" @click="router.push('/Page1')">
          <img :src="oiseau" class="ms-1 me-1" role="button" @click="router.push('/Page2')">
          <img :src="oiseau" class="ms-1 me-1" role="button" @click="router.push('/Page3')">
          <img :src="oiseau" class="ms-1 me-1" role="button" @click="router.push('/Page4')">
          <img :src="oiseau" class="ms-1 me-1" role="button" @click="router.push('/Page5')">
        </div>
      <footer class="mt-5">
        <a href="#one">
          <button type="button" class="btn bg-transparent" style='font-size: 25px; border-color:white; color:white;'>
            <BIconArrowDown/>
          </button>
        </a>
      </footer>
    </div>
  </section>

  <section id="one" class="main style2 right dark fullscreen"
           :style="{ backgroundImage: `url(${backgroundImageOne})` }">
    <div class="content-style2">
      <div class="slide-right">
        <header>
          <h2>Les compositions</h2>
        </header>
      </div>

      <div class="line fade-in"></div>

      <div class="slide-left">
        <p>
          Aux sons du jardin :<br/>
          Parce qu’il est peuplé d’espèces végétales et animales singulières,
          chaque jardin a son chant qui lui est propre,
          ses mélodies qui varient en fonction de la météo,
          de la saison, des essences qui y ont élu domicile.
          Chaque jardin a sa propre signature acoustique.
          Et si, avec humilité, avec nos instruments, nous nous invitions sur cette scène
          pour faire découvrir cette singularité, et en tirer une création originale.<br/><br/>
          Fiche technique:<br/><br/>
          Compositeur, prises de sons au Jardin, musicien, arrangeur: Chris Hagá <br/>
          Ingénieur son, prises de sons instruments et voix en studio: Letoyo <br/>
          Mixé et masteurisé par Letoyo au Studio Play Hit Up <br/>
          Artistes invités : Sami Pageaux Waro, Julia Colmet <br/>
          Développement de l’application <q>Aux sons du jardin</q>: Ti Billet. <br/><br/>

          Résidence <q>Patrimoine et création</q> réalisée entre février et septembre 2022<br/>
          au Jardin Botanique Des Mascarins, subventionnée par le Département Réunion.
          <br/>
        </p>
      </div>
    </div>

  </section>
</template>

<script setup>
import ScanQrcode from '@/components/ScanQrcode.vue'
import ReloadPWA from '@/components/ReloadPWA.vue'
import {ref} from 'vue'
// routes
import {useRouter} from 'vue-router'
// medias: images en background
import backgroundImage from "@/assets/images/Chris-Haga-premiere-page.jpg"
import backgroundImageOne from "@/assets/images/one-800x421.jpg"
import oiseau from "@/assets/images/oiseau_40x40.png"
// icon
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
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/*    2iem page accueil! */
#one {
  background-size: cover;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed, fixed;
  background-position: top left, center center;
}

.content-style2 {
  margin: auto;
  width: 60%;
  background: #fff;
  padding: 10%;
  overflow: hidden;
  box-shadow: 0 0 25px #000;
  border: 1px solid #444;
  text-align: center;
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