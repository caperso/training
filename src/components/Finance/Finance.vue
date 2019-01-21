<template>
  <div class="finance">
    <slider></slider>
    <banner :item="item[0]"></banner>
    <financeselect></financeselect>
    <banner :item="item[1]"></banner>
    <banner :item="item[2]"></banner>
  </div>
</template>

<script type="text/emcascript6">
import Banner from '@/components/Cores/Banner'
import Slider from '@/components/Finance/Slider'
import FinanceSelect from '@/components/Index/FinanceSelect'

export default {
  components: {
    financeselect: FinanceSelect,
    banner: Banner,
    slider: Slider
  },
  data () {
    return {
      item: [{
        src: '//img12.360buyimg.com/jrpmobile/jfs/t5842/235/8356236245/38364/2112fd7e/597a95d4Ne01da140.png?width=750&height=270',
        height: '5.75rem'
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240',
        height: '2.55rem'
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120',
        height: '3.55rem'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
