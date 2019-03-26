<template>
<div>
<div class="recommend-title">推荐</div>
<ul>
    <router-link  tag="li" :to="'./detail/' + item.id" class="item border-bottom" v-for="item of recommend" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
        </div>
    </router-link>
</ul>
</div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommend: Array
  },
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/53/53cf6caed9f9b9ee90.img.jpg_200x200_f5476a84.jpg',
          title: '华清宫',
          desc: '探索杨贵妃御汤遗址'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/ca/ca758ff1d2c0d808.water.jpg_200x200_17c9e79c.jpg',
          title: '汤峪天潭温泉酒店',
          desc: '随买随用'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/57/57a1490e1b72901a90.img.jpg_200x200_84df18bd.jpg',
          title: '华清爱琴海温泉',
          desc: '贯通华清池温泉水脉，终年43℃水温'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/a3/a3939e44477746c490.img.jpg_200x200_327e7822.jpg',
          title: '西安临潼悦椿温泉',
          desc: '这里最近很火哦，好多人都在点评它呢！'
        }, {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/3d/3dda5c0b0085b8aa3.water.jpg_200x200_de34fdcf.jpg',
          title: '华夏文旅 《驼铃传奇》秀',
          desc: '这里最近很火哦，好多人都在点评它呢！'
        }

      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
   .recommend-title
     margin-top .2rem
     line-height .8rem
     background #eee
     text-indent .2rem
   .item
     display flex
     height 1.9rem
     overflow hidden
     .item-img
       width 1.5rem
       height 1.5rem
       padding .1rem
     .item-info
       flex 1
       padding .1rem
       min-width 0
       .item-title
         line-height .54rem
         font-size .32rem
         overflow: hidden
         white-space: nowrap
         text-overflow: ellipsis
       .item-desc
         line-height .4rem
         color #ccc
         overflow: hidden
         white-space: nowrap
         text-overflow: ellipsis
       .item-button
         line-height .44rem
         margin-top .16rem
         background #ff9300
         padding 0 .2rem
         border-radius .06rem
         color #fff

</style>
