/**
 * 路由配置
 *
 */
module.exports = {
  url: 'http://localhost:8080/components/', 
  project: 's3Core',
  routes: [
    {
      path: '/async',
      name: '异步组件',
      component: 'asyncComponent',
      dir: 'src/views/Home.vue'
    },
    {
      path: '/async/list',
      name: '异步组件2',
      component: 'asyncList',
      dir:  'src/views/Person.vue'
    }
  ]
}