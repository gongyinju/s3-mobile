<template>
  <div class="demo-s3Banner">
    <s3-banner :images = 'images'></s3-banner>
  </div>
</template>

<script>
  //banner
  import s3Banner from '@/components/s3-banner.vue'
  export default {
    data(){
      return{
        images:[]
      }
    },
    components: {
      s3Banner
    },
    created(){
      s3.ajax('/getBanner',{},'s3core')
        .then(res =>{
          this.images = res.images;
        })
    },
  }
</script>

<style>
  .demo-s3Banner{
    padding-top: 40px;
  }
</style>
