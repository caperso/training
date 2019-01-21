<template>
  <panel title="理财精选" :class="$style.panel">
    <div :class="$style.content">
      <dl :class="$style.item" v-for="(item,key) in items" :key="key">
        <dt>
          {{item.title}}
          <span>{{item.sub}}</span>
        </dt>
        <dd>{{item.rate}}</dd>
        <dd>{{item.desc}}</dd>
      </dl>
    </div>
  </panel>
</template>

<script type='text/ecmascript-6'>
import Panel from '@/components/Cores/Panel'
export default {
  props: {

  },
  data () {
    return {
      items: [{
        title: '定期理财',
        sub: '理财首选',
        rate: '5.60%',
        desc: '历史年化回报率'
      }, {
        title: '小白理财',
        sub: '理财首选',
        rate: '4.22%',
        desc: '7日年化收益率'
      }, {
        title: '月月盈',
        sub: '养老保障',
        rate: '5%',
        desc: '七日年化收益率'
      }, {
        title: '小白基金',
        sub: '天天赚钱',
        rate: '4.27%',
        desc: '7日年化收益率'
      }]
    }
  },
  components: {
    panel: Panel
  }
}
</script>

<style module lang='scss'>
@import "../../common/scss/element.scss";
.panel {
  @include panel;
  .content {
    @include flex(row);
    justify-content: space-around;
    box-sizing: border-box;
    &:after {
      content: " ";
      display: block;
      width: 100%;
      height: 0px;
      box-sizing: border-box;
      border-bottom: 1px solid #ddd;
      position: relative;
      top: -208px;
    }
    .item {
      position: relative;
      width: 50%;
      box-sizing: border-box;
      &:after {
        content: " ";
        width: 1px;
        height: 136px;
        display: block;
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -68px;
        border-right: 1px solid #eee;
      }
      &:nth-child(2n) {
        &:after {
          display: none;
        }
      }
      padding: 34px 16px;
      dt {
        font-size: 30px;
        line-height: 42px;
        color: #333;
        span {
          font-size: 22px;
          color: #ff5155;
          border: 1px solid #ff5155;
          padding: 0 8px;
          vertical-align: 1px;
          margin-left: 2px;
        }
      }
      dd {
        &:nth-child(2) {
          font-weight: 700;
          font-size: 44px;
          height: 58px;
          line-height: 58px;
          color: #ff5155;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        &:nth-child(3) {
          font-size: 24px;
          height: 34px;
          line-height: 34px;
          color: #999;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
