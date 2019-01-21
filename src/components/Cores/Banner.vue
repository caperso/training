<template>
  <div :class="$style.banner" :style="{height:'item.height'}">
    <img :src="item.src" alt>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
    }
  },
  props: {
    item: {
      type: Object,
      default () {
        return {
          src: "",
          href: "/index",
          height: '67px'
        }
      }
    }
  }
}
</script>

<style module lang="scss">
.banner {
  width: 100%;
}
</style>
