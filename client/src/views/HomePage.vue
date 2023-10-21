<template lang="">
  <BannerFlex />
  <!-- Banner -->
  <BannerFlex />
  <!-- Grid Box Web -->
  <GridBox />
  <!-- Grid Box Mobile -->
  <GridBoxMobile />
  <!-- Footer -->
  <Footer />
</template>
<script>
import VueWebMobile from '@/components/NavWebMobile.vue'
import BannerFlex from '@/components/BannerFlex.vue'
import GridBox from '@/components/GridBox.vue'
import GridBoxMobile from '@/components/GridBoxMobile.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'HomePage',
  components: {
    VueWebMobile,
    BannerFlex,
    GridBox,
    GridBoxMobile,
    Footer
  }
}
</script>
