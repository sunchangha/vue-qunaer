<template>
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img class="icon-img-concent" :src='item.imgUrl'>
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
        <!-- 小圆点 -->
       <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    icons: Array
  },
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        // pagination: '.swiper-pagination',
        // loop: true
      },
      iconList: [
        {
          id: '0001',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        }, {
          id: '0002',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游'
        }, {
          id: '0003',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
          desc: '识春赏花'
        }, {
          id: '0004',
          iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/de711920c71e38287d9f95f7910aa1aa.png',
          desc: '精品小团'
        }, {
          id: '0005',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '西安必游'
        }, {
          id: '0006',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          desc: '动植物园'
        }, {
          id: '0007',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          desc: '华清宫'
        }, {
          id: '0008',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
          desc: '兵马俑'
        }, {
          id: '0009',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          desc: '泡温泉'
        }, {
          id: '0010',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          desc: '陕历博'
        }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
    .icons >>> .swiper-.icons >>> .swiper-container
       height 0
       padding-bottom 50%
    .icons
      margin-top .2rem
      .icon
        position relative
        overflow hidden
        float left
        width 25%
        height 0
        padding-bottom 25%
        .icon-img
          position absolute
          top 0
          left 0
          right 0
          bottom 0.44rem
          .icon-img-concent
            height 90%
            display block
            margin 0 auto
        .icon-desc
          position absolute
          left 0
          right 0
          bottom 0
          height .44rem
          line-height .44rem
          text-align center
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
</style>
