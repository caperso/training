<template>
  <div :class="$style.founding">
    <stamp :class="$style.stamp"></stamp>
    <v-ins :class="$style.ins"></v-ins>
    <more></more>
  </div>
</template>

<script type="text/emcascript6">
import Stamp from '@/components/Founding/Stamp'
import Ins from '@/components/Founding/Ins'
import More from '@/components/Founding/More'

export default {
  data () {
    return {
    }
  },
  components: {
    stamp: Stamp,
    'v-ins': Ins,
    more: More
  }
}
</script>

<style lang="stylus" module>
</style>
