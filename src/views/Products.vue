<template>
  <div>
    <!--go-right=right-->
    <s3-header head-title="订货" go-back='true' ></s3-header>
    <s3-search></s3-search>
    <s3-company :branch-company="branchCompany" > </s3-company>
    <s3-list :list="products" :modules="modules" :icon="iconclass" :detail="detail"></s3-list>
  </div>
</template>
<script>
  import s3Header from '@/components/s3-header.vue'
  import s3Search from '@/components/s3-search.vue'
  import s3Company from '@/components/s3-company.vue'
  import s3List from '@/components/s3-list.vue'

  export default {
    name: "product",
    data(){
      return{
        products:[],
        modules:'products',
        detail:'productDetail',
        iconclass:'icon-icon17',
        branchCompany:[],
      };
    },
    created(){
      //获取产品列表
      this.$http('/getPorductInfo',{},'s3core')
        .then(res=>{
           this.products =  res.dataList;
        })
      //获取分公司列表
      this.$http('/getBranchCompanyInfo',{},'s3core')
        .then(res=>{
          this.branchCompany = res.branchCompany;
        })
    },
    components: {
      s3Header,
      s3Search,
      s3Company,
      s3List
    }
  }
</script>

<style>
</style>
