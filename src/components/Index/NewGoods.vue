<template>
  <panel title="新品推荐">
    <slider options="options" items></slider>
  </panel>
</template>

<script type="text/ecmascript-6">
import Panel from '@/components/Cores/Panel'
import Slider from '@/components/Cores/Slider'
export default {
  data () {
    return {

    }
  },
  components: {
    panel: Panel,
    slider: Slider
  }
}
</script>

<style module lang='scss'>
@import "../../common/scss/element.scss";
</style>
