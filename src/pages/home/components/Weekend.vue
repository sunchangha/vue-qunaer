<template>
<div>
<div class="recommend-title">周末去哪儿</div>
<ul>
    <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper"><img class="item-img" :src="item.imgUrl"></div>
        <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
        </div>
    </li>
</ul>
</div>
</template>
<script>
export default {
  name: 'Weekend',
  props: {
    weekendList: Array
  },
  data () {
    return {
      // weekendList: [
      //   {
      //     id: '0001',
      //     imgUrl: 'http://img1.qunarzz.com/sight/source/1812/4e/77bab696d56366.jpg_r_640x214_f86f2b40.jpg',
      //     title: '西安泡汤圣地',
      //     desc: '解压之地，放松自己，来一段轻松的旅程。'
      //   },
      //   {
      //     id: '0002',
      //     imgUrl: 'http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg',
      //     title: '西安必打卡',
      //     desc: '西安必打卡'
      //   },
      //   {
      //     id: '0003',
      //     imgUrl: 'http://img1.qunarzz.com/sight/source/1811/63/808c022b285a2c.jpg_r_640x214_ad984479.jpg',
      //     title: '探寻文化古都',
      //     desc: '一场时空穿越的旅行，探寻历史悠久的文化古都！寻觅历史留下的点点足迹，细细品味古人的伟大'
      //   },
      //   {
      //     id: '0004',
      //     imgUrl: 'http://img1.qunarzz.com/sight/source/1507/de/e6ba44d61894c0.jpg_r_640x214_847324d0.jpg',
      //     title: '西安演出在线',
      //     desc: '这里有绚丽奇幻的神秘梦幻舞剧，歌舞揭开盛唐面纱，体验穿越时空的奇妙，感受大唐之盛世'
      //   }
      // ]
    }
  }
}
</script>
<style lang="stylus" scoped>
   .recommend-title
     line-height .8rem
     background #eee
     text-indent .2rem
    .item-img-wrapper
      height 0
      overflow hidden
      padding-bottom 37.35%
      .item-img
        width 100%
    .item-info
      min-width 0
      padding .1rem
      .item-title
        line-height .54rem
        font-size .32rem
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
      .item-desc
        line-height .4rem
        color #928a8a
        font-size .25rem
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis

</style>
