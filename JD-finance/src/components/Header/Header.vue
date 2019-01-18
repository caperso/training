<template>
  <div class="header">
    <span class="log">
      <a class="register">注册</a>&nbsp;|&nbsp;
      <a class="login">登陆</a>
    </span>
    <button class="appDownload btn">APP下载</button>
  </div>
</template>

<script type="text/emcascript6">
export default {
}
</script>

<style lang="stylus" scoped>
.header {
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  right: 0;
  justify-content: space-between;
  height: 2.5rem;
  line-height: 2.5rem;
  background: #fff url('//m.jr.jd.com/spe/qyy/main/images/jr-logo.png') center center no-repeat;
  background-size: auto 50%;
  font-size: 32;
  z-index: 100;

  .log {
    height: 0.75rem;
    line-height: 0.75rem;
    font-size: 28px;
    margin: 0 0 0 0.45rem;
    flex: 1;
  }

  .appDownload {
    margin: 0 0.6rem 0 0;
    font-size: 0.6rem;
    height: 1.4rem;
    border-radius: 0.1rem;
  }
}
</style>
