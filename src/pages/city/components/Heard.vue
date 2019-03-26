<template>
    <div class="heard">
        城市选择
        <router-link to="/">
        <!-- <div class="iconfont heard-back">&#xe624</div> -->
        <div class="iconfont heard-back">《</div>
        </router-link>
    </div>

</template>
<script>
export default {
  name: 'CityHeard'
}
</script>
<style lang="stylus" scoped>
 .heard
   height .86rem
   line-height .86rem
   overflow hidden
   text-align center
   color #fff
   background #00bcd4
   font-size .32rem
   position relative
   .heard-back
     width .64rem
     text-align center
     font-size .4rem
     position absolute
     top 0
     left 0
     color #fff

</style>
