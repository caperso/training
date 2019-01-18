<template>
  <swiperSlide></swiperSlide>
</template>

<script type="text/ecmascript-6">
import swiperSlide from '@/components/Cores/Slider'

export default {
  data () {
    return {
      items: [{
        href: '/index',
        src: "//img12.360buyimg.com/jrpmobile/jfs/t13744/11/2508939408/43213/58bfe502/5a421ff3N52d0a474.jpg?width=750&height=320"
      }, {
        href: '/index',
        src: "//img12.360buyimg.com/jrpmobile/jfs/t16138/325/817844900/36681/5d874455/5a422029Ncd678ea3.jpg?width=750&height=320"
      }, {
        href: '/index',
        src: "//img12.360buyimg.com/jrpmobile/jfs/t13465/324/2563794460/43029/3ffca963/5a421f83Ne8089231.jpg?width=750&height=320"
      }]
    }
  },
  components: {
    swiperSlide,
  }
}
</script>

<style scoped lang="stylus">
</style>
