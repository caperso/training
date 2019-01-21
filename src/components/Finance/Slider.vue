<template>
  <slider class="items" :cname="$style.slider"></slider>
</template>

<script type="text/ecmascript-6">
import Slider from '@/components/Cores/Slider'

export default {
  data () {
    return {
      items: [{
        href: '/index',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400'
      }, {
        href: '/index',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400'
      }
      ]
    }
  },
  components: {
    slider: Slider
  }
}
</script>

<style lang="scss" module>
@import "../../common/scss/element.scss";
.slider {
  margin-top: 120px;
  img {
    width: 100vw;
  }
}
</style>
