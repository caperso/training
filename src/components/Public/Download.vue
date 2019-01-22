<template>
  <div :class="$style.download">
    <div :class="$style.pic"></div>
    <router-link :class="$style.downloadBtn" :to="{name:'index'}">立即下载</router-link>
    <div :class="$style.cprs">Copyright © 2004-2017 京东JD.com 版权所有</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  },
  components: {
  }
}
</script>

<style module lang="scss">
@import "../../common/scss/element.scss";
.download {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: #fff;
  z-index: 101;
  .pic {
    width: 600px;
    height: 800px;
    background-image: url(//img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% auto;
    margin-top: -400px;
  }
  .downloadBtn {
    @include btn(
      $size: 32px,
      $color: #fff,
      $bgColor: #f1443e,
      $padding: 5px,
      $radius: 5px
    );
    height: 100px;
    line-height: 100px;
    width: 471px;
    background-image: linear-gradient(270deg, #f55c33 0, #ee2d1b 75%);
    box-shadow: 0 12px 32px 0 rgba(255, 159, 135, 0.6);
    text-decoration: none;
    bottom: 130px;
  }
  .cprs {
    position: fixed;
    bottom: 16px;
    font-size: 24px;
    color: #eee;
  }
}
</style>
