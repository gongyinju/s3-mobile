<template>
  <div>
    <div id="app">
      <router-view></router-view>
    </div>
    <s3-bottom :bottomlist="bottom" :selected = '$route.path' v-if="$route.path !== '/login'"></s3-bottom>
  </div>
</template>

<script>
  import s3Bottom from './components/s3-bottom.vue'
  export default {
    name: 'App',
    data () {
      return {
        bottom:[
          {icon:'icon-shouye-copy-copy-copy',text:'首页',pathUrl:'/'},
          {icon:'icon-tuangou',text:'订货',pathUrl:'/products'},
          {icon:'icon-guanxi',text:'个人中心',pathUrl:'/person'},
        ],
      }
    },
    components: {
      s3Bottom
    },
  }
</script>

<style scoped>
  #app{
    position: fixed;
    left: 0;right: 0;
    z-index: 1;
    bottom: 46px;
    height: 100%;
    overflow: auto;
    background: #fff;
  }
  #app>div{
    padding-top: 46px;
  }
  ul{
    list-style: none;
  }
</style>
