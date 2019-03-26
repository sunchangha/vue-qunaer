<template>
<div>
    <div class="banner" @click="handleBannerClick">
        <img class="banner-img" :src="this.bannerImg"/>
        <div class="banner-info">
            <div class="banner-tittle">{{this.sightName}}</div>
            <div class="banner-number"><span class="iconfont banner-icon">&#xe608; </span>{{this.bannerImgs.length}}</div>
        </div>
    </div>
    <FadeAnmation>
      <CommonGallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></CommonGallary>
    </FadeAnmation>
 </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnmation from 'common/fade/FadeAnmation'
export default {
  name: 'Banner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array

  },
  components: {
    CommonGallary,
    FadeAnmation
  },
  data () {
    return {
      // imgs: [
      //   'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg',
      //   'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg'
      // ],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position relative
    color #ffffff
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      background-image linear-gradient(top,rgba(0 ,0 ,0 , 0),rgba(0 , 0, 0, 0.8))
      .banner-tittle
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        padding 0 .4rem
        line-height .32rem
        margin-top .14rem
        height .32rem
        font-size .24rem
        border-radius .2rem
        .banner-icon
          font-size .24rem

</style>
