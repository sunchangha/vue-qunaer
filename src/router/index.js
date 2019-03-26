import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
// @符指的是src目录
Vue.use(Router)
// 用户访问根路径的时候，展示的是配置的路由地址
export default new Router({
  routes: [
    {
      path: '/', // 根路径
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  // 解决滑动到下面，其他页面也跟随到下面的问题
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
