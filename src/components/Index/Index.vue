<template>
  <div class="index">
    <indexSlider></indexSlider>
    <div class="swiper-wrapper">
      <div class="swiper-content"></div>
      <div class="swiper-links"></div>
    </div>
    <novice></novice>
    <loanbanner></loanbanner>
    <account></account>
    <newgoods></newgoods>
    <service></service>
  </div>
</template>

<script type="text/emcascript6">
import IndexSlider from '@/components/Index/indexSlider'
import Novice from '@/components/Index/Novice'
import LoanBanner from '@/components/Index/LoanBanner'
import Account from '@/components/Index/Account'
import NewGoods from '@/components/Index/NewGoods'
import Service from '@/components/Index/Service'
export default {
  data () {
    return {

    }
  },
  components: {
    indexSlider: IndexSlider,
    novice: Novice,
    loanbanner: LoanBanner,
    account: Account,
    newgoods: NewGoods,
    service: Service
  }
}
</script>

<style lang="scss" scoped>
.index {
  background-color: rgb(245, 245, 245);
}
</style>
