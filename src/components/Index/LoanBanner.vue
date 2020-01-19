<template>
  <panel :class="$style.panel" title="急速借贷">
    <router-link :to="{path:'/index'}">
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280"
      >
    </router-link>
  </panel>
</template>

<script type="text/ecmascript-6">
import Panel from '@/components/Cores/Panel'
export default {
  props: {
  },
  data () {
    return {
    }
  },
  components: {
    panel: Panel
  }
}
</script>

<style lang="scss" module>
@import "../../common/scss/element.scss";
.panel {
  @include panel;
  padding-bottom: 40px;
  img {
    display: block;
    width: 100%;
  }
}
</style>
