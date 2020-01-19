<template>
  <panel title="白条福利">
    <ul :class="$style.detail">
      <li :class="$style.detailItem" v-for="(item,key) in items" :key="key">
        <img :src="item.src" alt>
        <div :class="$style.text">
          <h4 :class="$style.title">{{item.title}}</h4>
          <p :class="$style.subtitle">{{item.subtitle}}</p>
        </div>
        <router-link :class="$style.entrance" to="{path:item.href}">{{item.enterance}}</router-link>
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
        src: '//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120',
        title: '开通白条',
        subtitle: '送188元礼包',
        enterance: '立即开通 > ',
        href: '/download'
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120',
        title: '白条闪付',
        subtitle: '新手享158元礼包',
        enterance: '随机立减 > ',
        href: '/download'
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120',
        title: '白条提额',
        subtitle: '金融app专享提额礼包',
        enterance: '去提额 > ',
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
.detail {
  background-color: #fff;
  margin: 120px 0 20px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;

  .detailItem {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 140px;
    line-height: 140px;

    &>img {
      width: 88px;
      height: 88px;
      margin: auto 8.8px;
    }

    .text {
      width: 1fr;
      min-width: 7.6rem;

      .title {
        font-size: 30px;
        line-height: 1.4;
      }

      .subtitle {
        color: #999;
        font-size: 24px;
        line-height: 1.1;
      }
    }

    &>a {
      color: #FF801A;
      text-decoration: none;
      font-size: 28px;
    }
  }
}
</style>
