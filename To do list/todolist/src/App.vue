<template>
  <div id="app">
    <div class="adder">
      <h2 class="title">添加新事项</h2>
      <input type="text" ref="newTodo">
      <button class="submit" type="submit" @click="add()">提交</button>
    </div>
    <div class="upperBox">
      <h2>还没完成</h2>
      <ul class="event" v-for="(item,key) in list" :key="key" ref="item" v-show="!item.isDone">
        <input type="checkbox" v-model="item.isDone" @change="saveList()">
        <span>{{key}}.{{item.thing}}</span>
        <button class="delBtn" @click="remove(key)">删除</button>
      </ul>
    </div>
    <div class="underBox">
      <h2>完成啦</h2>
      <ul class="eventDone" v-for="(item,key) in list" :key="key" ref="item" v-show="item.isDone">
        <input type="checkbox" v-model="item.isDone" @change="saveList()">
        <span>{{key}}.{{item.thing}}</span>
        <button class="delBtn" @click="remove()">删除</button>
      </ul>
    </div>
  </div>
</template>
<script>
import storage from './common/model/localStorage.js'
console.log(storage)
export default {
  data () {
    return {
      list: []
      // todo: undefined
    }
  },
  methods: {
    add () {
      let todo = this.$refs.newTodo.value
      this.list.push({ thing: todo, isDone: false })
      this.saveList()
    },
    remove (key) {
      this.list.splice(key, 1)
      this.saveList()
    },
    saveList () {
      localStorage.setItem('list', JSON.stringify(this.list))
    }
  },
  mounted () {
    var list = JSON.parse(localStorage.getItem('list'))
    if (list) {
      this.list = list
    }
  }
}

</script>

<style lang="stylus">
@import './common/css/base.css';

#app {
  display: grid;
  justify-content: space-around;
  grid-template-columns: 0.25fr auto 0.25fr;
  grid-template-rows: 100px auto auto;
  grid-template-areas: '. on1 .' '. on2 .' '. on3 .';

  h2 {
    color: white;
  }

  .adder {
    grid-area: on1;

    .submit {
      color: white;
      // border: 1px rgba(41, 65, 69, 0.3) solid;
      border: none;
      background: rgba(41, 65, 69, 0.3);
    }
  }

  .upperBox {
    grid-area: on2;
  }

  .underBox {
    grid-area: on3;
  }

  .event, .eventDone {
    position: relative;
    width: 100%;
    text-align: left;
    font-size: 16px;
    padding-left: 0;
    line-height: 16px;
    background: #fff;
    padding: 10px;

    .delBtn {
      background: #fff;
      border: none;
      position: absolute;
      right: 10px;
      cursor: pointer;
    }
  }

  .eventDone {
    opacity: 0.6;
  }
}
</style>
