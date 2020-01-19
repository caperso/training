<template>
  <panel title="每日签到">
    <div :class="$style.coupon">
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160"
      >
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160"
      >
    </div>
  </panel>
</template>

<script type="text/ecmascript-6">
import Panel from '@/components/Cores/Panel'

export default {
  data () {
    return {

    }
  },
  components: {
    panel: Panel
  }
}
</script>

<style module lang="stylus">
.coupon {
  width: 100%;
  height: 176px;
  margin: 120px 0 20px;
  display: flex;
  flex-flow: rows nowrap;
  overflow: hidden;

  img {
    height: 3.4rem;
    width: 8rem;
    display: inline-block;
  }
}
</style>
