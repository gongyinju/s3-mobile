<template>
  <div>
    <s3-search @keySearch="keySearch"></s3-search>
    <s3-company :branch-company="branchCompany"  :company-name="companyName"  :changeCompany="changeCompany"> </s3-company>
    <!--列表访问详情为传入的modules加该列表的id-->
    <s3-card :list="products" :modules="modules" :icon="iconclass" :detail="detail" ></s3-card>
  </div>
</template>
<script>
  import s3Search from '@/components/s3-search.vue'
  import s3Company from '@/components/s3-company.vue'
  import s3Card from '@/components/s3-card.vue'

  export default {
    name: "product",
    data(){
      return{
        products:[],
        modules:'products',
        detail:'productDetail',
        iconclass:'icon-icon17',
        branchCompany:[],
        companyName:'切换分公司',
      };
    },
    methods: {
      changeCompany: function(e){
        this.companyName =e.companyName;
      },
      //搜索
      keySearch : function (searchVal) {
        console.log(searchVal)
      }
    },
    created(){
      //获取产品列表
      s3.ajax('/getPorductInfo',{},'s3core')
        .then(res=>{
           this.products =  res.dataList;
        })
      //获取分公司列表
      s3.ajax('/getBranchCompanyInfo',{},'s3core')
        .then(res=>{
          this.branchCompany = res.branchCompany;
        })
    },
    components: {
      s3Search,
      s3Company,
      s3Card
    }
  }
</script>

<style>
</style>
