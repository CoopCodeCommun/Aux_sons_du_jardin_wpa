<template>
  <ReloadPWA />
  <section id="intro" :style="{ backgroundImage: `url(${backgroundImage})` }"><br/>

    <div style="margin-top: 130px;">
      <ScanQrcode :expected="expected" :qrbox="250" :fps="10" style="width: 400px;height: 400px;" @resultat="onScan"/>
      <div class="img-pages">
        <div class="d-flex flex-row justify-content-sm-center align-items-center mt-2">
          <div class="col1">
            <img :src="oiseau" class="ms-1 me-1" role="button" @click="router.push('/Page1')">
          </div>
          <div class="col1">
            <img :src="oiseau" class="ms-1 me-1" role="button" @click="router.push('/Page2')">
          </div>
          <div class="col1">
            <img :src="oiseau" class="ms-1 me-1" role="button" @click="router.push('/Page3')">
          </div>
          <div class="col1">
            <img :src="oiseau" class="ms-1 me-1" role="button" @click="router.push('/Page4')">
          </div>
          <div class="col1">
            <img :src="oiseau" class="ms-1 me-1" role="button" @click="router.push('/Page5')">
          </div>
        </div>
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

  <section id="one" class="main style2 right dark fullscreen" :style="{ backgroundImage: `url(${backgroundImageOne})` }">
    <div class="content-style2">
      <div class="slide-right">
        <header>
          <h2>Les compositions</h2>
        </header>
      </div>

      <div class="line fade-in"></div>

      <div class="slide-left">
        <p>
          Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
          Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu,
          id varius justo euismod in. Curabitur egestas consectetur magna.
          <br/>ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
          Fusce blandit ultrices sapien, Sed sodales venenatis arcu,
          id varius justo euismod in. Curabitur egestas consectetur magna.
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
import backgroundImage from "@/assets/images/chaga.png"
import backgroundImageOne from "@/assets/images/one.jpg"
import oiseau from "@/assets/images/oiseau_40x40.png"
// icon
import {BIconArrowDown} from 'bootstrap-icons-vue'
const router = useRouter()
const routesQrCode = [
  {code: "chpt", route: "/PageTest"},
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