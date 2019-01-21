<template>
  <panel title="生活服务" :class="$style.panel"></panel>
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
.panel {
  @include panel;
}
</style>
