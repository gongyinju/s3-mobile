<template>
  <div>
    <s3-login></s3-login>
  </div>
</template>
<script>

  import s3Login from '@/components/s3-login.vue'

  export default {
    name: "home",
    data(){
      return{
      }
    },
    components: {
      s3Login
    }
  }
</script>

<style >
</style>
