<template>
  <div class="demo-s3Popup">
    <s3-dealer :popup-list="dealerList" ></s3-dealer>
  </div>
</template>

<script>
  import s3Dealer from '@/components/s3-dealer.vue'
  export default {
    components: {
      s3Dealer
    },
    data () {
      return {
        dealerList:[]
      }
    },
    created(){
      //获取经销商列表
      s3.ajax('/getDealerList',{},'s3core')
        .then(res=>{
          let all = {'customerId':undefined,'userName':'全部经销商'};
          this.dealerList = [all].concat(res.dealerList);
        })
    },
  }
</script>

<style>
.demo-s3Popup{
  padding-top: 40px;
}
</style>
