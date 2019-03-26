<template>
  <div class="heard">
    <div class="heard-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="heard-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
    <div class="heard-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe7ff;</span>
    </div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeard',
  // props: {
  //   city: String
  // },
  computed: {
    ...mapState(['city'])
    // ...mapGetters(['doubleCity'])
  },
  methods: {

  }
}
</script>
<style lang="stylus" scoped>
   @import '~styles/varibles.styl'
   .heard
     display: flex
     height: .86rem
     line-height: .86rem
     background: $bgColor
     color: #fff
    .heard-left
      width: .64rem
      float: left
      .back-icon
       font-size .4rem
       text-align center
    .heard-input
      flex: 1
      height .64rem
      padding-left .2rem
      line-height .64rem
      margin-left .2rem
      margin-top .12rem
      background #fff
      border-radius: .1rem
      color #ccc
    .heard-right
      min-width: 1.04rem
      padding 0 .1rem
      float: right
      text-align: center
      color #fff
      .arrow-icon
        line-height .74rem
        font-size .48rem
        margin-left -.14rem
</style>
