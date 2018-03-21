<template>
  <div>
    <!--views-->
    <!--{{pageinfo}}-->
    <div v-if="!showLogin">
      <!--go-back:是否有返回，go-back-url:返回地址默认为首页-->
      <s3-header :head-title="pageinfo.title" :go-back='pageinfo.backState' :go-back-url="pageinfo.backUrl"  v-if="!iswx && pageinfo.title"></s3-header>
      <div id="app">
        <router-view></router-view>
      </div>
      <s3-bottom :bottomlist="bottom" :selected = '$route.path'></s3-bottom>
    </div>


    <div v-if="displayLogin">
      <s3-login v-if="showLogin" :appid="appid" :logo="logo" :company="company"></s3-login>
      <s3-firstlogin v-if="showFisrstlogin"></s3-firstlogin>
    </div>
  </div>
</template>

<script>
  import s3Header from '@/components/s3-header.vue'
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
        ],
        appid: config.basic.custid,
        company: config.basic.companyName,
        logo: config.basic.logo
      }
    },
    computed: {
      showLogin () {
        return !this.$store.state.isLogedIn
      },
      showFisrstlogin () {
        return this.$store.state.isFirstLogedIn
      },
      pageinfo () {
        return this.$store.state.page
      },
      displayLogin () {
        return config.basic.login
      },
      iswx () {
        return s3.isWeixin()
      } 
    },
    components: {
      s3Bottom,
      s3Header,
      s3Login,
      s3Firstlogin
    }
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
