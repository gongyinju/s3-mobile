// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {HttpProtptype, AsyncComponent, JSLoader, CSSLoader} from './global'

import Mint from'mint-ui'
import'mint-ui/lib/style.css'


// global plugin
Vue.use(Mint)
Vue.use(HttpProtptype)
Vue.use(AsyncComponent)
Vue.use(JSLoader)
Vue.use(CSSLoader)
Vue.config.productionTip = false

// dynamic router
const loader = function (resolve, url) {
  if (!s3.istore.getLocal(url)) {
    axios.get(url).then(function (res) {
      let asyncCom = new Function(`return ${res.data}`)()
      s3.istore.setLocal(url, asyncCom)
      resolve(asyncCom)
    })
  } else {
    resolve(s3.istore.getLocal(url))
  }
}

const dynamicRouter = function (router, outerRouter) {
  try {
    outerRouter.forEach(function (item) {
      let path = `/${item['path']}`
      router.addRoutes([
        {
          path: path,
          component: function (resolve) {
            loader(resolve, item['url'])
          }
        }
      ])
    })
  } catch (e) {
    throw new Error('你的个性化路由配置似乎出错了!')
  }
}

const getContextPath = function(){
  let url = location.pathname
  if(url === '/') {
    return url
  } else {
    let rootPath = url.split('/')[1]
    return rootPath
  }
}


let appid = getContextPath()
try {
  //set base URL
  if(config.basic['baseUrl']){
    s3.setBaseURL(config.basic.baseUrl)
  }
  if(config.basic['custid']){
    appid = config.basic['custid']
  }
}catch(e){
  window.config = {}
  config.basic = {}
  config.basic['custid'] = appid
}


// 向服务器请求config配置
s3.ajax('/config/router',{},appid)
.then(result => {
  if(result){
    dynamicRouter(router, result)
  }

  //实例化
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    mounted () {
      if(config.basic['login']=== false){
        store.commit('setAppId',appid)
      }else{
        store.commit('setAppId',appid)
        store.dispatch('getUserState',appid)
      } 
    }
  })
})
.catch( error => {
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
  throw new Error(error)
})

