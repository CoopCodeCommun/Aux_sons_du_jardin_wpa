<template>
  <InstallPWA />
  <router-view />
</template>

<script setup>
import {useRouter} from 'vue-router'
import InstallPWA from '@/components/InstallPWA.vue'

const router = useRouter()
</script>

<style scoped>
</style>
