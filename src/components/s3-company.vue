<template>
  <div class="changeCompany">
    <div class="page-actionsheet">
      <div class="page-actionsheet-wrapper" @click="sheetVisible = true">
        <i class="iconfont icon-gongsi skin-color"></i>
        <span >{{companyName}}</span>
        <span class="flexCenter"></span>
        <i class="iconfont icon-qiehuan1 skin-color"></i>
      </div>
      <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    </div>
  </div>
</template>



<script type="text/babel">
  export default {
    name:'change-company',
    props: {
      branchCompany: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    methods: {
      changeCompany: function(e){
        this.companyName =e.companyName;
      }
    },
    data() {
      return {
        sheetVisible: false,
        actions: [],
        companyName:'切换分公司'
      };
    },
    created(){
      this.branchCompany.forEach((item,index)=> {
       item.method = this.changeCompany;
       item.name = item.companyName;
       this.actions[index] = item;
     })
    },
  };
</script>
<style>
  .page-actionsheet-wrapper{
    background-color: #fff;
    box-shadow: 0 1px 0 #dfdfdf;
    -webkit-box-shadow: 0 1px 0 #dfdfdf;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
  .page-actionsheet-wrapper >i.iconfont:first-child{
    margin-right: 5px;
  }
  .skin-color{
    color:#26a2ff;
  }
  .flexCenter{
    flex:1
  }
</style>
