<template>
  <ReloadPWA/>
  <section id="intro" class="" :style="{ backgroundImage: `url(${backgroundImage})` }"><br/>

    <div id="qrcode">
      <ScanQrcode :expected="expected" :qrbox="250" :fps="10" style="width: 400px;height: 400px;"
                  @resultat="onScan"/>
    </div>

    <div id="btsuite">
      <div class="col-12">

        <div style="margin: 2em auto">
          <a href="#one">
            <button type="button" class="btn bg-transparent" style='font-size: 25px; border-color:white; color:white;'>
              <BIconArrowDown/>
            </button>
          </a>
        </div>
      </div>

      <div class="col-12">
        <img :src="oiseau" class="mx-2" role="button" @click="router.push('/Page1')" alt="Page1"/>
        <img :src="oiseau" class="mx-2" role="button" @click="router.push('/Page2')" alt="Page2"/>
        <img :src="oiseau" class="mx-2" role="button" @click="router.push('/Page3')" alt="Page3"/>
        <img :src="oiseau" class="mx-2" role="button" @click="router.push('/Page4')" alt="Page4"/>
        <img :src="oiseau" class="mx-2" role="button" @click="router.push('/Page5')" alt="Page5"/>
      </div>

    </div>
  </section>

  <section id="one" class="main style2 right">
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
      <p>Kora.</p>
      <h5>Julia Colmet</h5>
      <p>Violoncelle.</p>
      <h5>Coopérative TiBillet</h5>
      <p>Développement et conception.</p>

      <h4 style="margin: 1.5em 0">Remerciements : </h4>
      <h5>Département Réunion.</h5>
      <h5>Jardin Botanique Des Mascarins</h5>.
      <p>
        Résidence <q>Patrimoine et création</q> réalisée entre février et
        septembre 2022
      </p>

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
// import backgroundImageOne from "@/assets/images/one-800x421.jpg"
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


#qrcode {
  padding: 5px;
  background-color: #2c0057;
  opacity: 0.4;
  position: fixed;
  top: 20px;
  left: 10%;
}

#btsuite {
  margin: auto;
}

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