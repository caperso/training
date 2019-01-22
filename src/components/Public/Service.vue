<template>
  <banner title="生活服务" :class="$style.banner" :item="item"></banner>
</template>

<script type="text/ecmascript-6">
import Banner from '@/components/Cores/Banner'
export default {
  data () {
    return {
      item: {
        height: '71.5px',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252',
        href: '/download'
      }
    }
  },
  components: {
    banner: Banner
  }
}
</script>

<style module lang="scss">
</style>
