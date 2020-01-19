<template>
  <div :class="$style.loan">
    <softloan></softloan>
    <more></more>
    <service></service>
  </div>
</template>

<script type="text/emcascript6">
import Softloan from '@/components/Loan/Softloan'
import More from '@/components/Loan/More'
import Service from '@/components/Public/Service'
export default {
  data () {
    return {
      items: [{
        src: '//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120',
        title: '开通白条',
        subtitle: '送188元礼包',
        enterance: '立即开通 &gt; ',
        href: '/download'
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120',
        title: '白条闪付',
        subtitle: '新手享158元礼包',
        enterance: '随机立减 &gt; ',
        href: '/download'
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120',
        title: '白条提额',
        subtitle: '金融app专享提额礼包',
        enterance: '去提额 &gt; ',
        href: '/download'
      }
      ]
    }
  },
  components: {
    softloan: Softloan,
    more: More,
    service: Service
  }
}
</script>

<style lang="stylus" module>
</style>
