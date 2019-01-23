<template>
  <panel :class="$style.more" title="更多福利">
    <div :class="$style.content">
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330"
      >
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330"
      >
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330"
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

<style module lang="scss">
@import "../../common/scss/element.scss";

.more {
  @include panel;

  .content {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    img {
      flex-basis: 33%;
      height: 7rem;
    }
  }
}
</style>
