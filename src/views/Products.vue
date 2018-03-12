<template>
  <div>
    <!--go-right=right-->
    <s3-header head-title="订货" go-back='true'  ></s3-header>
    <s3-search></s3-search>
    <s3-company></s3-company>
  </div>
</template>
<script>
  import s3Header from '@/components/s3-header.vue'
  import s3Search from '@/components/s3-search.vue'
  import s3Company from '@/components/s3-company.vue'

  export default {
    name: "product",
    data(){
      return{
      };
    },
    created(){
    },
    components: {
      s3Header,
      s3Search,
      s3Company
    },
    methods: {
    }

  }
</script>
