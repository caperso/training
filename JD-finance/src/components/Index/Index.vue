<template>
  <div class="index">
    <indexSlider></indexSlider>
    <div class="swiper-wrapper">
      <div class="swiper-content"></div>
      <div class="swiper-links"></div>
    </div>
    <novice></novice>
    <loanbanner></loanbanner>
  </div>
</template>

<script type="text/emcascript6">
import IndexSlider from '@/components/Index/indexSlider'
import Novice from '@/components/Index/Novice'
import LoanBanner from '@/components/Index/LoanBanner'
export default {
  data () {
    return {

    }
  },
  components: {
    indexSlider: IndexSlider,
    novice: Novice,
    loanbanner: LoanBanner
  }
}
</script>

<style lang="scss" scoped>
</style>
