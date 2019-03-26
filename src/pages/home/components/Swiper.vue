<template>
<div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item of swiper" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <!-- 小圆点 -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiper: Array
  },
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: '.swiper-pagination',
        loop: true
      }
      // swiperList: [{
      //   id: '0001',
      //   imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/2f5f3ea4698c9b7898db7562d89b91ed.jpg_750x200_bd3b4ce9.jpg'
      // },
      // {
      //   id: '0002',
      //   imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/ad906cbe02849a504c4a4399741013a4.jpg_750x200_8ac64dcc.jpg'
      // },
      // {
      //   id: '0003',
      //   imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/9f73976e40c4ef845cabe0efc0269ebb.jpg_750x200_aab92b7a.jpg'
      // },
      // {
      //   id: '0004',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/fe/ca8ed7adc3ff9f02.jpg_750x200_49735140.jpg'
      // }]
    }
  },
  computed: {
    showSwiper () {
      return this.swiper.length
    }
    // swiper () {
    //   return this.$refs.mySwiper.swiper
    // }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<style lang="stylus" scoped>
 .wrapper >>> .swiper-pagination-bullet-active
   background #fff !important
 .wrapper
   overflow hidden
   width 100%
   height 0
   padding-bottom 40.25%
   background #ccc
  .swiper-img
    width 100%
    height 3rem
</style>
