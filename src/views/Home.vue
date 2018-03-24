<template>
  <div>
    <s3-banner :images = 'images'></s3-banner>
    <s3-functionpanel :modules="gridlist" :otherModules="otherModules"></s3-functionpanel>

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
          {icon:'icon-chanpin',text:'js组件',pathUrl:'/jsCom'},
          {icon:'icon-chanpin',text:'css组件',pathUrl:'/cssCom'},
          {icon:'icon-chanpin',text:'s3组件',pathUrl:'/s3Com'},
          {icon:'icon-chanpin',text:'form组件',pathUrl:'/formCom'}
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

<style>

</style>
