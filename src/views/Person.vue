<template>
  <div class="person">
    <!--go-right=right-->
    <s3-header head-title="我的信息" go-back='true'  ></s3-header>
    <h2 >个人中心</h2>
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
  .person h2{
    margin-top: 40px;
  }

</style>
