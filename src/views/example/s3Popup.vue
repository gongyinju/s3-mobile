<template>
  <div class="demo-s3Popup">
    <s3-popup :popup-list="dealerList" ></s3-popup>
  </div>
</template>

<script>
  import s3Popup from '@/components/s3-popup.vue'
  export default {
    components: {
      s3Popup
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
          this.$store.commit('setCurrentDealer',all)
          this.dealerList = [all].concat(res.dealerList);
          console.log(this.$store.state.currentDealer)
        })
    },
  }
</script>

<style>
.demo-s3Popup{
  padding-top: 40px;
}
</style>
