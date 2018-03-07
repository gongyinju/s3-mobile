<template>
  <div>
    <div id="app" :class="{'haveHeader': isH}">
      <router-view></router-view>
    </div>
    <s3-bottom :bottomlist="bottom"></s3-bottom>
  </div>


</template>

<script>
  //底部栏
  import s3Bottom from './components/s3-bottom.vue'
  export default {
    name: 'App',
    data () {
      return {
        isH:false,
        bottom:[
          {icon:'icon-shouye-copy-copy-copy',text:'首页',pathUrl:'/'},
          {icon:'icon-tuangou',text:'订货',pathUrl:'/products'},
          {icon:'icon-guanxi',text:'个人中心',pathUrl:'/person'},
        ],
      }
    },
    components: {
      s3Bottom
    }
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
  .haveHeader{
    top: 50px;
  }
  ul{
    list-style: none;
  }
</style>
