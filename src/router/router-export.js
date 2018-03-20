/**
 * 路由配置
 *
 */
module.exports = {
  url: 'http://localhost:8080/components/', 
  module: 'async',
  routes: [
    {
      path: '/',
      name: '异步组件',
      component: 'asyncComponent',
      dir: 'src/components/asyncComponent.vue'
    },
    {
      path: '/list',
      name: '异步组件2',
      component: 'asyncList',
      dir:  'src/components/asyncList.vue'
    }
  ]
}