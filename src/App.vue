<template>
  <div id="app">
    <s3-header :head-title="pageinfo.title" :back-state="pageinfo.backState" :go-home="pageinfo.goHome"  v-if="!iswx"></s3-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import s3Header from '@/components/s3-header.vue'
  export default {
    name: 'App',
    data () {
      return {
        
      }
    },
    computed: {
      pageinfo () {
        return this.$store.state.page
      },
      iswx () {
        return s3.isWeixin()
      }
    },
    components: {
      s3Header
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
    top: 0;bottom: 46px;
    z-index: 1;
    height: 100%;
    overflow: auto;
    background: #fff;
  }
  ul{
    list-style: none;
  }
</style>
