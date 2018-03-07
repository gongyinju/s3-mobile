<!--
<template>
  <div>

    <mt-button plain type="primary" size="small" @click="actionSheet">点击切换分公司</mt-button>
{{actions}}
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
      <ul>
        <li></li>
      </ul>
    </mt-actionsheet>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        actions:[],
        sheetVisible:false
      };
    },
    computed(){
      console.log(this)
      this.actions = [
        {name: "ABC供应链集团有限公司",method:this.changeCompany},
        {name: "浙江工银聚集团有限公司", method:this.changeCompany},
        {name: "浙江化工有限公司",method:this.changeCompany },
        {name: "某某供应链集团有限公司",method:this.changeCompany}]
    },
    methods:{
      actionSheet:function () {
        this.sheetVisible = true;
      },
      changeCompany: function(){
        console.log("切换此分公司")
      }
    }
  }
</script>

<style>

</style>
-->
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

<script type="text/babel">
  export default {
    name:'change-company',
    data() {
      return {
        sheetVisible: false,
        actions: [],
        companyName:'切换分公司'
      };
    },
    methods: {
      takePhoto() {
        console.log('taking photo');
      },
      openAlbum() {
        console.log('opening album');
      },
      goBack() {
        history.go(-1);
      }
    },
    mounted() {
      this.actions = [{
        name: '全部公司',
        method: this.takePhoto
      }, {
        name: '分公司一',
        method: this.openAlbum
      }];
    }
  };
</script>
