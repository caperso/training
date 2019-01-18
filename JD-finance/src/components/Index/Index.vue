<template>
  <div class="index">
    <indexSwiper></indexSwiper>

    <div class="swiper-wrapper">
      <div class="swiper-content"></div>
      <div class="swiper-links"></div>
    </div>
  </div>
</template>

<script type="text/emcascript6">
import swiperSlide from '@/components/Cores/Slider'
export default {
  data () {
    return {

    }
  },
  components: {
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
</style>
