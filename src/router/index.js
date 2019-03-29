import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'
// @符指的是src目录
Vue.use(Router)
// 用户访问根路径的时候，展示的是配置的路由地址
export default new Router({
  mode: 'history',
  linkActiveClass: 'router-link-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      // 这里只需要把原来从外部引入的组件换成以下的语句就可以了
      component: resolve => require(['@/pages/home/Home'], resolve)
    }, {
      path: '/city',
      name: 'City',
      component: resolve => require(['@/pages/city/City'], resolve)
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: resolve => require(['@/pages/detail/Detail'], resolve)
    }
  ],
  // 解决滑动到下面，其他页面也跟随到下面的问题
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
