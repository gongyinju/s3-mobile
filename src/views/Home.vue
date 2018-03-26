<template>
  <div>
    <s3-banner v-if = "images.length > 0" :images = 'images'></s3-banner>
    <s3-functionpanel :modules="gridlist" :otherModules="otherModules"></s3-functionpanel>
    <s3-bottom :bottomlist="bottom" :selected = '$route.path'></s3-bottom>
  </div>
</template>

<script>
  //banner
  import s3Banner from '@/components/s3-banner.vue'
  //九宫格
  import s3Functionpanel from '@/components/s3-functionPanel.vue'
  import s3Bottom from '@/components/s3-bottom.vue'

  export default {
    name: "home",
    data(){
      return{
        images:[],
        gridlist:[
          {icon:'icon-chanpin',text:'js组件',pathUrl:'/jsCom'},
          {icon:'icon-chanpin',text:'css组件',pathUrl:'/cssCom'},
          {icon:'icon-chanpin',text:'s3组件',pathUrl:'/s3Com'},
          {icon:'icon-chanpin',text:'form组件',pathUrl:'/formCom'}
        ],
        bottom: [
          {icon:'icon-shouye-copy-copy-copy',text:'首页',pathUrl:'/'},
          {icon:'icon-chanpin',text:'JS组件',pathUrl:'/jsCom'},
          {icon:'icon-chanpin',text:'CSS组件',pathUrl:'/cssCom'},
          {icon:'icon-chanpin',text:'S3组件',pathUrl:'/s3Com'},
          {icon:'icon-gerenxinxi',text:'用户信息',pathUrl:'/user'},
        ],
        otherModules: []
      }
    },
    components: {
      s3Banner,
      s3Functionpanel,
      s3Bottom
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
