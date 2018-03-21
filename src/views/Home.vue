<template>
  <div>
    <s3-banner :images = 'images'></s3-banner>
    <div id="grid">
      <s3-functionpanel :modules="gridlist" :otherModules="otherModules"></s3-functionpanel>
    </div>
  </div>
</template>
<script>
  //banner
  import s3Banner from '@/components/s3-banner.vue'
  //九宫格
  import s3Functionpanel from '@/components/s3-functionPanel.vue'

  export default {
    name: "home",
    data(){
      return{
        gridlist:[
          {icon:'icon-tuangou',text:'订货',pathUrl:'/products'},
          {icon:'icon-icon17',text:'审核',pathUrl:'/checklist'},
          {icon:'icon-guanxi',text:'团购',pathUrl:'/orderlist'}
        ],
        images:[],
        otherModules:[]
      }
    },
    components: {
      s3Banner,
      s3Functionpanel
    },
    created(){
      s3.ajax('/getBanner',{},'s3core')
        .then(res =>{
          this.images = res.images;
        })
      //获得特色九宫格数据
    },
  }
</script>

<style >
  #grid ul{
    width:100%;
    list-style: none;
    overflow: hidden;
    padding: 0;
    text-align: center;
  }
  #grid .iconfont{
    font-size: 24px!important;
  }
  #grid ul li{
    width:33.333333333%;
    padding: 18px 0;
    float: left;
  }
  #grid ul li .iconfont{
    color:#26a2ff;
  }
  #grid ul li p{
    font-size: 14px;
  }
</style>
