import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '@/views/Home'
//获取组件列表
import NavConfig from './../../static/nav.config.json'

Vue.use(VueRouter)

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
    path: '/jsCom',
    name: 'jsCom',
    component: function (resolve) {
      require(['@/views/jsComponents'], resolve)
    },
    beforeEnter(to, from, next) {
      let page = {
        title: 'js组件库'
      }
      store.commit('pageinfo', page)
      next();
    },
  },
  {
    path: '/cssCom',
    name: 'cssCom',
    component: function (resolve) {
      require(['@/views/cssComponents'], resolve)
    },
    beforeEnter(to, from, next) {
      let page = {
        title: 'css组件库'
      }
      store.commit('pageinfo', page)
      next();
    },
  },
  {
    path: '/s3Com',
    name: 's3Com',
    component: function (resolve) {
      require(['@/views/s3Components'], resolve)
    },
    beforeEnter(to, from, next) {
      let page = {
        title: 's3组件库'
      }
      store.commit('pageinfo', page)
      next();
    },
  },
  {
    path: '/formCom',
    name: 'formCom',
    component: function (resolve) {
      require(['@/views/formComponents'], resolve)
    },
    beforeEnter(to, from, next) {
      let page = {
        title: 'form组件库',
        backState:true,
      }
      store.commit('pageinfo', page)
      next();
    },
  },

]

const registerRoute = (config) => {
  config.map(nav =>
    nav.list.map(example =>{
      routes.push({
        name: example.name,
        path: example.path,
        component:  function (resolve) {
          require(['@/views/example'+example.path], resolve)
        },
      })
    })
  );
  return { routes, navs: config };
};
registerRoute(NavConfig);


export const navs =NavConfig;

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
  console.log(to)
  // 在home路由中配置的meta
  if(to.meta.requireAuth){
    // 判断是否登录
    if (!store.state.isLogedIn){
      // 没有登录跳转到登录页面
      store.commit('userLogout')
    }
  }
  next();
})

router.afterEach((to, from) => {
  // 进入路由后
})

export default router
