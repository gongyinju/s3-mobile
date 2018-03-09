<template>
  <div class="swiper-css" style="">
    <mt-swipe :auto="4000" ref="swiper" class="swipe">
      <mt-swipe-item v-for="i in images" :key="">
        <img :src="i.src" >
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        images:[]
      };
    },
    created(){
      let that = this;
      s3.setURL('http://localhost:8080/mocks');
      s3.ajax('/getBanner',{},'s3core')
        .then(function(res){
          that.images = res.data.data.images;
        })
        .catch(function(err){
          console.log(err);
        });
    }
  }
</script>

<style scoped>
  .swiper-css,img{
    width: 100%;
    height: 200px;
  }
</style>
