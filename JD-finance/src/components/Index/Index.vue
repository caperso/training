<template>
  <div class="index">
    <indexSlider></indexSlider>

    <div class="swiper-wrapper">
      <div class="swiper-content"></div>
      <div class="swiper-links"></div>
    </div>
  </div>
</template>

<script type="text/emcascript6">
import indexSlider from '@/components/Index/indexSlider'
export default {
  data () {
    return {

    }
  },
  components: {
    indexSlider
  }
}
</script>

<style lang="scss" scoped>
</style>
