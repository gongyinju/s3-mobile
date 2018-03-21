import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)
import Home from '@/views/Home'

let routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta : {
      requireAuth: true,
    },
    beforeEnter(to, from, next) {
      let  page ={
        title: ''
      }
      store.commit('pageinfo', page)
      next();
    }
  },
  {
    path: '/products',
    name: 'products',
    component: function (resolve) {
      require(['@/views/Products'], resolve)
    },
    beforeEnter(to, from, next) {
      let page = {
        title: '订货',
        backState:true,
        backUrl:'/person'
      }
      store.commit('pageinfo', page)
      next();
    },
  },
  {
    path: '/products/:userId',
    name: 'productDetail',
    component: function (resolve) {
      require(['@/views/ProductDetail'], resolve)
    },
    beforeEnter(to, from, next) {
      let  page ={
        title: '产品详情',
      }
      store.commit('pageinfo', page)
      next();
    }
  },
  {
    path: '/person',
    name: 'products',
    component: function (resolve) {
      require(['@/views/Person'], resolve)
    },
    beforeEnter(to, from, next) {
      let  page ={
        title: '个人中心'
      }
      store.commit('pageinfo', page)
      next();
    }
  },
  {
    path: '/checklist',
    name: 'products',
    component: function (resolve) {
      require(['@/views/CheckList'], resolve)
    },
    beforeEnter(to, from, next) {
      let  page ={
        title: '审核'
      }
      store.commit('pageinfo', page)
      next();
    }
  },
]

var router = new VueRouter({
  routes
})

/**
 * 导航守卫
 * to: Route: 即将要进入的目标 路由对象
 * from: Route: 当前导航正要离开的路由
 * next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
 *
*/
router.beforeEach((to, from, next) => {

  // 在home路由中配置的meta
  if(to.meta.requireAuth){
    // 判断是否登录
    if (!store.state.isLogedIn){
      // 没有登录跳转到登录页面
      store.commit('userLogout');
      store.commit('userFirstLogout');
    }
    next();
  }else {
    // 进入路由前
    console.log('导航开始，进入组件前，导航触发');
    next();
  }
})

router.afterEach((to, from) => {
  // 进入路由后
  console.log('进入组件，守卫触发')
})

export default router
