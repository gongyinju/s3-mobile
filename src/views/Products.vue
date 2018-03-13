<template>
  <div>
    <!--go-right=right-->
    <s3-header head-title="订货" go-back='true' ></s3-header>
    <s3-search></s3-search>
    <s3-company :branch-company="branchCompany"  :company-name="companyName"> </s3-company>
    <!--列表访问详情为传入的modules加该列表的id-->
    <s3-list :list="products" :modules="modules" :icon="iconclass" :detail="detail" ></s3-list>
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
        companyName:'切换分公司',
      };
    },
    methods: {
      changeCompany: function(e){
        this.companyName =e.companyName;
      }
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
          this.branchCompany.forEach((item,index)=> {
            item.method = this.changeCompany;
            item.name = item.companyName;
          })
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
