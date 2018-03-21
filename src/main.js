// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {HttpProtptype, AsyncComponent, JSLoader, CSSLoader} from './global'

import Mint from'mint-ui'
import'mint-ui/lib/style.css'
Vue.use(Mint);
// global plugin
Vue.use(HttpProtptype)
Vue.use(AsyncComponent)
Vue.use(JSLoader)
Vue.use(CSSLoader)
Vue.config.productionTip = false


// dynamic router
const loader = function (resolve, url) {
  if (!s3.istore.getItemLocal[url]) {
    axios.get(url).then(function (res) {
      let asyncCom = new Function(`return ${res.data}`)()
      s3.istore.setItemLocal(url, asyncCom)
      resolve(asyncCom)
    })
  } else {
    resolve(s3.istore.getItemLocal[url])
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

//set base URL
if(config.basic['baseUrl'])
  s3.setBaseURL(config.basic.baseUrl)

// 向服务器请求config配置
s3.ajax('/config/router').then(function (result) {
  if(result)
    dynamicRouter(router, result)
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
}, function (error) {
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
  // 没读取到配置 404
  throw new Error(error)
})
