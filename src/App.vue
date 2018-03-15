<template>
  <div>
    <!--views-->
    <div v-if="!showLogin  && !showFisrstlogin">
      <div id="app">
        <router-view></router-view>
      </div>
      <s3-bottom :bottomlist="bottom" :selected = '$route.path' ></s3-bottom>
    </div>
    <s3-login v-if="showLogin && !showFisrstlogin"></s3-login>
    <s3-firstlogin v-if="!showLogin && showFisrstlogin"></s3-firstlogin>
  </div>
</template>

<script>
  import s3Login from '@/components/s3-login.vue'
  import s3Firstlogin from '@/components/s3-firstlogin.vue'
  import s3Bottom from './components/s3-bottom.vue'
  export default {
    name: 'App',
    data () {
      return {
        bottom:[
          {icon:'icon-shouye-copy-copy-copy',text:'首页',pathUrl:'/'},
          {icon:'icon-tuangou',text:'订货',pathUrl:'/products'},
          {icon:'icon-guanxi',text:'个人中心',pathUrl:'/person'},
        ]
      }
    },
    computed: {
      showLogin () {
        return !this.$store.state.isLogedIn
      },
      showFisrstlogin () {
        return this.$store.state.isFirstLogedIn
      }
    },
    components: {
      s3Bottom,
      s3Login,
      s3Firstlogin
    },
    created() {
    },
  }
</script>

<style >
  body{
    margin: 0;
  }
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
