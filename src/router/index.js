import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)
import Home from '@/views/Home'

let routes = [
  {
    path: '/',
    component: Home,
    meta : {
      requireAuth: true,
    },
  },
  {
    path: '/login',
    component: function (resolve) {
      require(['@/views/Login'], resolve)
    }
  },
  {
    path: '/firstlogin',
    component: function (resolve) {
      require(['@/views/FirstLogin'], resolve)
    }
  },
  {
    path: '/products',
    component: function (resolve) {
      require(['@/views/Products'], resolve)
    }
  },
  {
    path: '/products/:userId',
    name: 'productDetail',
    component: function (resolve) {
      require(['@/views/ProductDetail'], resolve)
    }
  },
  {
    path: '/person',
    component: function (resolve) {
      require(['@/views/Person'], resolve)
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
  /*if(to.meta.requireAuth){
    // 判断是否登录
    if (store.getters.isLogedIn){
      next();
    }else {
      // 没有登录跳转到登录页面，登录成功之后再返回到之前请求的页面
      next({
        path : '/login',
        query : {redirect : to.fullPath}
      })
    }
  }else {*/
    // 进入路由前
    console.log('导航开始，进入组件前，导航触发');
    next()
  // }
})

router.afterEach((to, from) => {
  // 进入路由后
  console.log('进入组件，守卫触发')
})

export default router
