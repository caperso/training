<template>
  <div id="app">
    <input class="inputEvent" type="text" v-bind:class="event" ref="event">
    <button class="getEvent" @click="addEvent()">添加</button>
    <hr>

    <h2>UNDERGOING</h2>
    <div class="eventList">
      <ul v-for="(item,key) in list" :key="key" v-if="!item.checked">
        <input type="checkbox" @click="checked(key)" v-model="item.checked">
        {{key}} -- {{item.text}}
        <button class="delete" @click="removeEvent(key)">X</button>
      </ul>
    </div>
    <hr>

    <h2>DONE</h2>
    <div class="eventsDone">
      <ul v-for="(item,key) in list" :key="key" v-if="item.checked">
        <input type="checkbox" @click="checked(key)" v-model="item.checked">
        {{key}} -- {{item.text}}
        <button class="delete" @click="removeEvent(key)">X</button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todolist',
  data () {
    return {
      list: [],
      event: undefined
    }
  },
  methods: {
    addEvent () {
      let event = this.$refs.event.value
      this.list.push({
        checked: false,
        text: event
      })
    },
    removeEvent (key) {
      this.list.splice(key, 1)
    }
  }
}
</script>

<style>
.event {
  text-align: left;
  margin: 2px 6px;
}
</style>
