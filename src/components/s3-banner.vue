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
  //假数据
  const Random = Mock.Random;
  Mock.mock(`http://localhost:8080/mocks/getBanner`,{
    "data": Array(3).fill(1).map(() => {
      return {
        src:Random.dataImage('640x280')
      }
    })
  });



  export default {
    data(){
      return{
        images:[]
      };
    },
    created(){
      let that = this;
      axios.get('http://localhost:8080/mocks/getBanner')
        .then(function(res){
          that.images = res.data.data;
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
