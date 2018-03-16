<template>
  <div>
    <!--<s3-header head-title="产品详情" go-back='true' ></s3-header>-->
    <s3-detail></s3-detail>
  </div>
</template>

<script>
import s3Header from '@/components/s3-header.vue'
import s3Detail from '@/components/s3-detail'
  export default {
    components:{s3Header,s3Detail},
    data(){
      return{}
    }
  }
</script>

<style>

</style>
