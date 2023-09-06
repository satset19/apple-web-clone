<script setup lang="ts">
import VueWebMobile from '@/components/NavWebMobile.vue'
import BannerFlex from '@/components/BannerFlex.vue'
import GridBox from '@/components/GridBox.vue'
import GridBoxMobile from '@/components/GridBoxMobile.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <header>
    <!-- Navbar -->
    <VueWebMobile />
  </header>

  <main>
    <!-- Banner -->
    <BannerFlex />
    <!-- Grid Box Web -->
    <GridBox />
    <!-- Grid Box Mobile -->
    <GridBoxMobile />
    <!-- Footer -->
    <Footer />
  </main>
</template>

<style scoped></style>
