<template>
  <div>
    <!--go-right=right-->
    <s3-header head-title="我的信息" go-back='true'  ></s3-header>
    <h1>个人中心</h1>
  </div>
</template>
<script>
  import s3Header from '@/components/s3-header.vue'

  export default {
    name: "product",
    data(){
      return{
      };
    },
    created(){
    },
    components: {
      s3Header,
    },
    methods: {
    }

  }
</script>
<style>
  h1{
    position: relative;
    top: 40px;
  }
</style>
