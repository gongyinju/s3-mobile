<template>
  <div class="demo-s3Search">
    <s3-search @keySearch="keySearch"></s3-search>
  </div>
</template>

<script>
  import s3Search from '@/components/s3-search.vue'
  export default {
    methods: {
      keySearch : function (searchVal) {
        console.log(searchVal)
      }
    },
    components: {
      s3Search,
    }
  }
</script>

<style>
.demo-s3Search{
  padding-top: 40px;
}
</style>
