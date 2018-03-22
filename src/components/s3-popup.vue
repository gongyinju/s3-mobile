<template>
  <div class="s3-popup">
    <div class="page-actionsheet">
      <div class="page-actionsheet-wrapper" @click="popupVisible  = true">
        <i class="iconfont icon-gongsi skin-color"></i>
        <span >{{companyName}}</span>
        <span class="flexCenter"></span>
        <i class="iconfont icon-qiehuan1 skin-color"></i>
      </div>

      <mt-popup v-model="popupVisible" position="right" class="mint-popup mint-popup-dealer"  :modal="false">
        <mt-button @click.native="popupVisible = false" size="large" type="primary">关闭 popup</mt-button>
      </mt-popup>

    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name:'change-company',
    props: {
      //经销商列表
      branchCompany: {
        type: Array,
        default: function () {
          return []
        }
      },
      //展示经销商名称
      companyName:{
        type:String
      },
      //切换经销商函数
      changeCompany:{
        type:Function
      }
    },
    data() {
      return {
        popupVisible : false
      };
    },
    computed: {
      companyList(){
        this.branchCompany.forEach(item => {
          item.method = this.changeCompany;
          item.name = item.companyName;
        });
        return this.branchCompany;
      }
    }
  };
</script>
<style>
  .s3-popup .page-actionsheet-wrapper{
    background-color: #fff;
    box-shadow: 0 1px 0 #dfdfdf;
    -webkit-box-shadow: 0 1px 0 #dfdfdf;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
  .s3-popup .page-actionsheet-wrapper >i.iconfont:first-child{
    margin-right: 5px;
  }
  .skin-color{
    color:#26a2ff;
  }
  .flexCenter{
    flex:1
  }
  .s3-popup .mint-popup-dealer {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .s3-popup .mint-popup-dealer button {
    margin-top: 200px;
  }
</style>
