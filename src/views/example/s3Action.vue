<template>
  <div class="demo-s3Acion">
    <s3-action  :action-list="branchCompany"  :current-name="companyName" ></s3-action>
  </div>
</template>

<script>
  import s3Action from '@/components/s3-action.vue'
  export default {
    name: "product",
    components: {
      s3Action
    },
    data(){
      return{
        branchCompany:[],
        companyName:'切换分公司',
      };
    },
    methods: {
      changeCompany: function(e){
        console.log(e)
        this.companyName =e.companyName;
      }
    },
    created(){
      //获取分公司列表
      s3.ajax('/user/branchCompany',{},'s3core')
        .then(res=>{
          this.branchCompany = res.branchCompany;
          this.branchCompany.forEach(item => {
            item.method = this.changeCompany;
            item.name = item.companyName;
          });
        })
    },

  }
</script>

<style>
.demo-s3Acion{
  padding-top: 40px;
}
</style>
