<script>
import VueWebMobile from '@/components/NavWebMobile.vue'
import { RouterView } from 'vue-router'
export default {
  components: {
    VueWebMobile
  }
}
</script>

<template>
  <main>
    <VueWebMobile />
    <!-- <Outlet/> -->
    <RouterView />
  </main>
</template>
