<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back">《</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link tag="div" to="/">
                <div class="iconfont header-fixed-back">《</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity: opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  // 当对组件用了keep-alive>的时候，会多出activated（）生命周期函数，在页面展示的时候会执行
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 对应deactivated（）生命周期函数，在页面即将影藏或替换的时候，这个组件的deactivated生命周期函数会执行
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
  .header-abs
    position  absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    border-radius .4rem
    text-align center
    line-height .8rem
    background rgba(0,0,0,.8)
    .header-abs-back
      color #ffffff
      font-size: 0.3rem;
      padding-right: 8px;
  .header-fixed
    z-index 5
    position fixed
    top 0
    left 0
    right 0
    height .86rem
    line-height .86rem
    text-align center
    color #fff
    background #00bcd4
    font-size .32rem
    .header-fixed-back
      width .64rem
      text-align center
      font-size .4rem
      position absolute
      top 0
      left 0
      color #fff

</style>
