<template>
  <panel title="In货推荐" :class="$style.panel">
    <panel :class="$style.contentWrapper" v-for="(item,key) in items" :key="key">
      <div :class="$style.bg" :style="{backgroundImage:'url('+ item.src +')'}"></div>
      <ul :class="$style.content">
        <li :class="$style.good" v-for="(good,gkey) in item.goods" :key="gkey">
          <div :class="$style.elite">精选</div>
          <img :src="good.src">
          <p>{{good.title}}</p>
          <p :class="$style.price">
            ￥{{good.price}}
            <span :class="$style.gray">起</span>
          </p>
          <div :class="$style.rate">{{good.rate}}%</div>
        </li>
      </ul>
    </panel>
  </panel>
</template>

<script type="text/ecmascript-6">
import Panel from '@/components/Cores/Panel'
export default {
  data () {
    return {
      items: [{
        title: '科技',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
        goods: [{
          src: '//img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
          title: '双响炮蓝牙脑波相机箱',
          price: '29.00',
          rate: '172'
        }, {
          src: '//img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg',
          title: '脑波相机',
          price: '998.00',
          rate: '114'
        }
        ]
      }, {
        title: '智能',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
        goods: [{
          src: '//img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg',
          title: '智能电动牙刷',
          price: '19.00',
          rate: '482'
        }, {
          src: '//img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg',
          title: '烟草加热电子烟',
          price: '258.00',
          rate: '105'
        }
        ]
      }, {
        title: '食物',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
        goods: [{
          src: '//img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
          title: '赖公高淮封藏老酒',
          price: '99.00',
          rate: '199'
        }, {
          src: '//img30.360buyimg.com/cf/s250x250_jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg',
          title: '泗洪花雕醉蟹',
          price: '58.00',
          rate: '222'
        }
        ]
      }
      ]
    }
  },
  components: {
    panel: Panel
  }
}
</script>

<style module lang="scss">
@import "../../common/scss/element.scss";

.panel {
  @include panel;
  margin-bottom: 1rem;

  .contentWrapper {
    width: 100%;
    margin-bottom: 1rem;

    & > h4 {
      display: none;
    }
    .bg {
      width: 100%;
      min-height: 4.25rem;
      background-color: #fff;
      background-size: auto 100%;
      background-repeat: no-repeat;
    }
    .content {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      text-align: center;
      .good {
        position: relative;
        flex-shrink: 0;
        flex-basis: 50%;

        .elite {
          position: absolute;
          color: #ff0000;
          left: 0;
          top: 0;
          font-size: 0.5rem;
          font-family: PingFangSC-Medium;
          text-align: center;
          padding: 0.1rem 0.2rem;
          background: linear-gradient(-35deg, #c1c1c1 0, #acacac 100%);
        }
        & > img {
          width: 4.5rem;
          height: 4.5rem;
          margin: 1.1rem auto 0.5rem;
        }
        & > p {
          color: #444;
          font-size: 0.7rem;
        }
        & > .price {
          color: #ff3232;
          font-size: 0.9rem;
          margin-right: 0.1rem;
          font-family: PingFangSC-Semibold;
          .gray {
            font-size: 0.5rem;
            color: #999;
          }
        }
        .rate {
          display: block;
          width: 80%;
          height: 0.55rem;
          margin: 16px auto 0;
          border-radius: 0.55rem;
          background: linear-gradient(270deg, #f55 1%, #ff9c31 100%);
          color: #000;
          font-size: 0.6rem;
        }
      }
    }
  }
}
</style>
