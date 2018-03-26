<template>
  <div class="demo-s3Login">
    <s3-login :appid="appid" :logo="logo" :company="company"></s3-login>
  </div>
</template>

<script>
  import s3Login from '@/components/s3-login.vue'
  export default {
    name: 'App',
    data () {
      return {
        appid: config.basic.custid,
        company: config.basic.companyName,
        logo: config.basic.logo
      }
    },
    components: {
      s3Login
    }
  }
</script>

<style>
.demo-s3Login{
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
