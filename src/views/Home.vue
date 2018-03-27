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
        gridlist:[],
        bottom: [],
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
      //获得九宫格数据
      s3.ajax('/getMobileFun',{},'s3core')
        .then(res =>{
          this.gridlist = res.menuList;
          //获得底部栏数据
          res.menuList.map(item => {
            if(item.bottom == '1'){
              this.bottom.push(item)
            }
          })
        })
    },
  }
</script>

<style>

</style>
