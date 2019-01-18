<template>
  <swiper>
    <swiperSlide></swiperSlide>
  </swiper>
</template>

<script type="text/ecmascript-6">
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  props: {
    swiperSlide
  },
  data () {
    return {

    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped lang="stylus">
@import 'swiper/dist/css/swiper.css';
</style>
