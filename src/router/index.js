import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '@/views/Home'
import LoginView from '@/views/login'
//获取组件列表
import NavConfig from './../../static/nav.config.json'

Vue.use(VueRouter)


let loginRoutes = []
try {
  let loginConfig = config.basic.login
  loginRoutes = [
    {
      path: '/login',
      name: '登录',
      meta: {
        notRequireAuth: true,
      },
      component: LoginView
    }
  ]
}catch(e){

}

let routes = [
  {
    path: '/',
    name: '首页',
    component: Home,
  },
  {
    path: '/jsCom',
    name: 'js组件库',
    meta: {
      backState: '/',
      goHome: true
    },
    component: function (resolve) {
      require(['@/views/jsComponents'], resolve)
    }
  },
  {
    path: '/cssCom',
    name: 'css组件库',
    meta: {
      backState: '/'
    },
    component: function (resolve) {
      require(['@/views/cssComponents'], resolve)
    }
  },
  {
    path: '/s3Com',
    name: 's3组件库',
    meta: {
      backState: '/'
    },
    component: function (resolve) {
      require(['@/views/s3Components'], resolve)
    }
  },
  {
    path: '/formCom',
    name: 'form组件库',
    meta: {
      backState: '/'
    },
    component: function (resolve) {
      require(['@/views/formComponents'], resolve)
    }
  },
  {
    path: '/user',
    name: '用户信息',
    meta: {
      backState: '/'
    },
    component: function (resolve) {
      require(['@/views/formComponents'], resolve)
    }
  }
]

routes = loginRoutes.concat(routes)

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
  let page = {
    title: to.name,
    backState: to.meta.backState || '',
    goHome: to.meta.goHome || false
  }
  store.commit('pageinfo', page)

  // 在home路由中配置的meta
  if(!to.meta.notRequireAuth && !store.state.isLogedIn) {
      store.commit('userLogout')
      next({
        path: '/login'
      })
  }else{
    next()
  }
})

router.afterEach((to, from) => {
  // 进入路由后
})

export default router
