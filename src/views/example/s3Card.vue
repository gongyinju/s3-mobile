<template>
  <div class="demo-s3Card">
    <!--列表访问详情为传入的modules加该列表的id-->
    <s3-card :list="products" :modules="modules" :icon="iconclass" :detail="detail" ></s3-card>
  </div>
</template>

<script>
  import s3Card from '@/components/s3-card.vue'
  export default {
    name: "product",
    data(){
      return{
        products:[],
        modules:'products',
        //与config结合，获取config[modules][detail]中的key展示
        detail:'productDetail',
        //列表左上角图标
        iconclass:'icon-icon17',
      };
    },
    created(){
      //获取产品列表
      s3.ajax('/getPorductInfo',{},'s3core')
        .then(res=>{
          this.products =  res.dataList;
        })
    },
    components: {
      s3Card
    }
  }
</script>
<style>
  .demo-s3Card{
    padding-top: 40px;
    padding-bottom: 46px;
  }
</style>
