<template>
  <div>

    <!--go-right=right-->
    <s3-header head-title="审核" go-back='true' ></s3-header>
    <s3-nodata></s3-nodata>
  </div>
</template>

<script>
  import s3Header from '@/components/s3-header.vue'
  import s3Nodata from '@/components/s3-noData.vue'
  export default {
    components: {
      s3Nodata,s3Header
    }

  }
</script>

<style scoped>

</style>
