<template>
  <section :class="[panelClass.cname]">
    <h4>-{{title}}-</h4>
    <slot></slot>
  </section>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    cname: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      panelClass: 'panel'
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../common/scss/element.scss";
.panel {
  @include panel;
}
</style>
