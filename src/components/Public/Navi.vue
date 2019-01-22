<template>
  <ul :class="$style.navi">
    <li v-for="(item,key) in list" :key="key" :class="$style.linkWrapper">
      <router-link :class="$style.link" :to="{path:item.href}">
        <img :src="item.src" alt :class="$style.img">
        <p :class="$style.title">{{item.title}}</p>
      </router-link>
    </li>
  </ul>
</template>

<script type="text/emcascript6">
export default {
  data () {
    return {
      list: [{
        title: '首页',
        href: '/index',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/931/18/14488/935/5bda58fdE542c2cc7/f29a349a4ed750ca.png?width=60&height=60'
      }, {
        title: '理财',
        href: '/finance',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/93/2/15333/2159/5bda590eE721487cd/85ef52d2b68205ef.png?width=60&height=60'
      }, {
        title: '白条',
        href: '/loan',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/9698/36/4230/594/5bda5919Ec55e200a/dd949177311f04e7.png?width=60&height=60'
      }, {
        title: '众筹',
        href: '/founding',
        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/4948/14/14022/816/5bda5924Eb28b0d4c/fde0775f7c0e197d.png?width=60&height=60'
      }, {
        title: '我的',
        href: '/index',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/7491/15/4277/926/5bda5cb9E421a0e60/89ee14ce9daf4aab.png?width=60&height=60'
      }]
    }
  }
}
</script>

<style lang="scss" module>
.navi {
  position: fixed;
  width: 100%;
  height: 100px;
  bottom: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  box-sizing: border-box;
  border-top: 1px solid #e5e5e5;
  background: #fff;
  z-index: 100;
  .linkWrapper {
    height: 100px;
    .link {
      text-align: center;
      text-decoration: none;
      width: 20%;
      height: 100px;
      .title {
        color: #000;
        font-size: 22px;
        height: 22px;
        line-height: 22px;
      }
      .img {
        margin: 6px auto 3px;
        width: 44px;
        height: 44px;
      }
    }
  }
}
</style>
