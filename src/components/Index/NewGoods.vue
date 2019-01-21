<template>
  <panel title="新品推荐" :class="$style.panel">
    <section :class="$style.content">
      <a href="/index" :class="$style.more">更多尖货&gt;</a>
      <slider :options="options" :items="items" :class="cname"></slider>
    </section>
  </panel>
</template>

<script type="text/ecmascript-6">
import Panel from '@/components/Cores/Panel'
import Slider from '@/components/Cores/Slider'
export default {
  data () {
    return {
      cname: 'goods',
      options: {
        slidesPerView: 2.3,
        spaceBetween: 30,
        freeMode: true,
        autoplay: false
      },
      items: [{
        href: '/index',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t13963/267/2355123229/48850/254f797a/5a3c59aeN9cb550f6.jpg?width=335&height=421'
      }, {
        href: '/index',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421'
      }, {
        href: '/index',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421'
      }, {
        href: '/index',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421'
      }
      ]
    }
  },
  components: {
    panel: Panel,
    slider: Slider
  }
}
</script>

<style module lang='scss'>
@import "../../common/scss/element.scss";
.panel {
  @include panel;
  .content {
    position: relative;
    padding-bottom: 40px;
    & > div {
      position: absolute;
      font-size: 28px;
      color: #999;
      right: 20px;
      top: -70px;
    }
    & > img {
      margin-right: 30px;
      @media screen and (max-width: 768px) {
        margin-right: 0px;
      }
    }
    .more {
      position: absolute;
      right: 20px;
      top: -70px;
      color: #999;
      font-size: 28px;
      text-decoration: none;
    }
  }
}
</style>

<style lang="scss">
//传入本地slider
.goods {
  .swiper-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 24px;
    .swiper-slide {
      flex-shrink: 0;
      height: 100%;
      a {
        display: inline-block;
        width: 100%;
        img {
          width: 100%;
          max-width: 335px;
          display: block;
          height: 314px;
          border: 1px solid #fafafa;
        }
      }
    }
  }
}
</style>
