<template>
  <div :class="$style.copyright">
    <div :class="$style.viewend">
      <div :class="$style.versions">
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108"
        >
        <p :class="$style.text">客户端</p>
      </div>
      <div :class="$style.versions">
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108"
        >
        <p :class="$style.text">触屏版</p>
      </div>
      <div :class="$style.versions">
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108"
        >
        <p :class="$style.text">电脑版</p>
      </div>
    </div>
    <div :class="$style.cprs">Copyright © 2004-2017 京东JD.com 版权所有</div>
    <div :class="$style.warning">投资有风险，购买需谨慎</div>
    <div :class="$style.agreement">京东金融平台服务协议</div>
    <div :class="$style.privacy">京东金融隐私政策</div>
    <div :class="$style.blank"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
    }
  }
}
</script>

<style module lang="scss">
.copyright {
  display: flex;
  flex-flow: column nowrap;
  .viewend {
    display: flex;
    height: 4.65rem;
    flex-flow: row nowrap;
    justify-content: space-around;
    .versions {
      height: 100%;
      padding-top: 0.5rem;
      & > img {
        width: 2.25rem;
        height: 2.25rem;
      }
      .text {
        display: block;
        color: #999;
        font-size: 0.65rem;
        text-align: center;
        margin-top: 0.3rem;
        white-space: nowrap;
      }
    }
  }
  .cprs,
  .warning,
  .agreement,
  .privacy {
    width: 100%;
    padding: 0.6rem 0;
    line-height: 0.95rem;
    height: 0.95rem;
    text-align: center;
    color: #999;
    font-size: 0.6rem;
    border-top: 0.025rem solid #ddd;
  }
  .blank {
    width: 100%;
    display: block;
    height: 100px;
  }
}
</style>
