<template>
  <div class="search-css">
    <mt-search v-model="value"></mt-search>
  </div>

</template>

<script>
  export default {
    name: "search",
    data () {
      return {
        value:''
      }

    },
    method:{
      a:function () {
//        this.$emit('update:foo', newValue)
      }
    }
  }
</script>

<style>
  /*搜索样式更改*/
  .mint-searchbar-inner{
    height: 18px;
  }
  .scroll-header {
    -webkit-transition: top .5s ease;
    transition: top .5s ease;
  }

  .mint-search{
    margin-top: -1px;
    height: auto;
    -webkit-transition: top .5s ease;
    transition: top .5s ease;
  }
  .mint-searchbar-cancel{
    color: #fff;
  }
  .nav-css .mint-cell-title{
    text-align: left;
  }
  .mint-navbar .mint-tab-item.is-selected{
    margin-bottom: 0;
  }
  .mint-searchbar{
    background-color: #26a2ff;
  }
</style>
