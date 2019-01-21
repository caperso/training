<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
    <v-copy></v-copy>
    <v-navi></v-navi>
  </div>
</template>

<script>
import header from '@/components/Public/Header'
import navi from '@/components/Public/Navi'
import copyright from '@/components/Public/Copyright'
export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-navi': navi,
    'v-copy': copyright
  }
}
</script>

<style>
</style>
