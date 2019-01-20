<template>
  <article>
    <Slider :items="items" :cname="slider"></Slider>
    <section class="list">
      <div class="item" v-for="item in enters" :key="item.img">
        <router-link :to="{name:item.href}"></router-link>
        <img :src="item.src" alt>
        <h4></h4>
      </div>
    </section>
  </article>
</template>

<script type="text/ecmascript-6">
import Slider from '@/components/Cores/Slider'

export default {
  components: {
    Slider
  },
  data () {
    return {
      enters: [{
        href: '/index',
        title: '优惠券',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132'
      }, {
        href: '/index',
        title: '领红包',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132'
      }, {
        href: '/index',
        title: '抢钢镚',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132'
      }, {
        href: '/index',
        title: '领京豆',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t4618/115/2179710654/11347/bf520df/58ec9d84Nfd169001.png?width=132&height=132'
      }, {
        href: '/index',
        title: '白条提额',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135'
      }],

      items: [{
        href: 'index1',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t16138/325/817844900/36681/5d874455/5a422029Ncd678ea3.jpg?width=750&height=320'
      }, {
        href: 'index2',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t13465/324/2563794460/43029/3ffca963/5a421f83Ne8089231.jpg?width=750&height=320'
      }, {
        href: 'index3',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t13465/324/2563794460/43029/3ffca963/5a421f83Ne8089231.jpg?width=750&height=320'
      }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../common/scss/element.scss";
// .slider {
//   margin-top: 120px;
// }

.list {
  @include list(row);
  background: #fff;
  padding-top: 40px;
  padding-bottom: 20px;
  justify-content: space-around;
  a {
    text-decoration: none;
  }
  .item {
    text-align: center;
    img {
      display: inline-block;
      width: 90px;
      height: 90px;
    }
    h4 {
      font-size: 26px;
      margin-top: 12px;
      color: #666;
    }
  }
}
</style>
