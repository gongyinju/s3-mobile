<template>
  <div class="demo-s3Functionpanel">
    <s3-functionpanel :modules="gridlist"></s3-functionpanel>
  </div>
</template>

<script>
  import s3Functionpanel from '@/components/s3-functionPanel.vue'
  export default {
    data(){
      return{
        gridlist:[]
      }
    },
    components: {
      s3Functionpanel
    },
    created(){
      //获得九宫格数据
      s3.ajax('/getMobileFun',{},'s3core')
        .then(res =>{
          this.gridlist = res.menuList;
        })
    },
  }
</script>

<style>
.demo-s3Functionpanel{
  padding-top: 40px;
}
</style>
