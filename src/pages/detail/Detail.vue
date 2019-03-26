<template>
    <div>
      <DetailBanner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="bannerImgs"></DetailBanner>
      <DetailHeader></DetailHeader>
      <div class="concent">
        <DetailList :list="list"></DetailList>
      </div>
    </div>
</template>
<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
// name的作用，做递归组件，不让缓存
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      bannerImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json?', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.bannerImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }

  },
  mounted () {
    this.getDetailInfo()
  },
  activated () {
    this.getDetailInfo()
  }
}
</script>
<style lang="stylus" scoped>
 .concent
   height 50rem
</style>
