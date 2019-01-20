<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
    <v-navi></v-navi>
  </div>
</template>

<script>
import header from '@/components/Header/Header'
import navi from '@/components/Navi/Navi'
export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-navi': navi
  }
}
</script>

<style>
</style>
