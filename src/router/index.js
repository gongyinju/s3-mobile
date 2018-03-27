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
      name: '',
      meta: {
        notRequireAuth: true,
        allowBack:false
      },
      component: LoginView
    }
  ]
}catch(e){

}

let routes = [
  {
    path: '/',
    name: '',
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

  let backState = ''
  if(to.meta.backState){
    backState = to.meta.backState
  }else if(to.path !== '/login' && to.path !== '/home' && to.path !== '/'){
    backState = from.path
  }

  let page = {
    title: to.name,
    backState: backState,
    goHome: to.meta.goHome || false
  }
  store.commit('pageinfo', page)

  // 在home路由中配置的meta
  if(config.basic.login && !to.meta.notRequireAuth && !store.getters.isLogedIn) {
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
