<template>
    <div class="list" ref='wrapper'>
      <div>
          <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
              <div class="button-wrapper">
                <div class="button">{{this.currentCity}}</div>
              </div>
            </div>
          </div>
          <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
              <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
                <div class="button">{{item.name}}</div>
              </div>
            </div>
          </div>
          <div class="area"
           v-for="(item,key) of cities"
            :key="key"
            :ref="key"
            >
            <div class="title border-topbottom">{{key}}</div>
              <div class="item-list" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
                <div class="item border-bottom">{{innerItem.name}}</div>
              </div>
          </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // 调用vuex的dispatch到store中的action
      // this.$store.dispatch('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }

  },
  // { mouseWheel: true, click: true, tap: true }点击事件失效是因为better-scroll的问题，加上此段代码就好了
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true })
  }
}
</script>
<style lang="stylus" scoped>
.border-topbottom
  &:before
    border-color:#ccc
  &:after
    border-color:#ccc
.border-bottom
  &:before
    border-color:#ccc
.list
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  overflow hidden
  .title
    line-height .54rem
    font-size .26rem
    background #eeeeee
    padding-left .2rem
    color #666
  .button-list
    overflow hidden
    padding .1rem .6rem .1rem .1rem
    .button-wrapper
      float left
      width 33.3%
      .button
        text-align center
        margin .1rem
        padding .1rem 0
        border .02rem solid #cccccc
  .item-list
    .item
      line-height .76rem
      padding-left .2rem

</style>
