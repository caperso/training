<template>
  <panel title="更多服务" :class="$style.wrapper">
    <ul :class="$style.detail">
      <li :class="$style.detailItem" v-for="(item,key) in items" :key="key">
        <router-link to="{path:item.href}">
          <img :src="item.src" alt>
          <div :class="$style.title">{{item.title}}</div>
        </router-link>
      </li>
    </ul>
  </panel>
</template>

<script type="text/emcascript6">
import Panel from '@/components/Cores/Panel'

export default {
  data () {
    return {
      items: [{
        src: '//img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135',
        title: '小白卡',
        href: '/download'
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135',
        title: '白条商城',
        href: '/download'
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t5095/216/1045040184/12370/564ae632/590ac7deN9a0eac2a.png?width=135&height=135',
        title: '消费分期',
        href: '/download'
      }, {
        src: 'http://img12.360buyimg.com/jrpmobile/jfs/t8311/300/1385281399/9501/130a0046/59b8da06N14f62cf3.png?',
        title: '借钱',
        href: '/download'
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
        title: '白条提额',
        href: '/download'
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t4453/75/4132459214/14188/939b7f34/590ac860N752d5738.png?width=135&height=135',
        title: '小白会玩',
        href: '/download'
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t4417/98/4154366136/13785/5433ca92/590ac8afN5dd91d6e.png?width=135&height=135',
        title: '白条闪付',
        href: '/download'
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t5371/323/1038197138/12031/3ec72f6c/590aca20N089fd34a.png?width=135&height=135',
        title: '钢镚',
        href: '/download'
      }
      ]
    }
  },
  components: {
    panel: Panel
  }
}
</script>

<style lang="stylus" module>
.wrapper {
  background-color: #fff;

  &>h4 {
    height: 2.8rem;
    line-height: 2.8rem;
    padding: 0 0.8rem;
    text-align: center;
    font-size: 0.8rem;
  }

  .detail {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    .detailItem {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;

      &>a {
        text-decoration: none;
        text-align: center;

        &>img {
          width: 2.25rem;
          height: 2.25rem;
        }

        .title {
          font-size: 26px;
          color: #000;
        }
      }
    }
  }
}
</style>
