<template>
  <div :class="$style.banner" :style="{height:'item.height '}">
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
          src: '',
          href: '/index',
          height: '5.75rem'
        }
      }
    }
  }
}
</script>

<style module lang="scss">
.banner {
  width: 100vw;
  margin: 10px auto;
  & > img {
    width: 100%;
    height: 100%;
  }
}
</style>
