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
        gridlist:[
          {icon:'icon-chanpin',text:'首页',pathUrl:'/jsCom'},
          {icon:'icon-chanpin',text:'订货',pathUrl:'/cssCom'},
          {icon:'icon-chanpin',text:'订单',pathUrl:'/s3Com'},
          {icon:'icon-chanpin',text:'审批',pathUrl:'/formCom'},
          {icon:'icon-chanpin',text:'发货单',pathUrl:'/cssCom'},
          {icon:'icon-chanpin',text:'订单',pathUrl:'/s3Com'},
          {icon:'icon-chanpin',text:'审核',pathUrl:'/formCom'},
          {icon:'icon-chanpin',text:'发货单',pathUrl:'/cssCom'},
          {icon:'icon-chanpin',text:'订单',pathUrl:'/s3Com'}
        ]
      }
    },
    components: {
      s3Functionpanel
    }
  }
</script>

<style>
.demo-s3Functionpanel{
  padding-top: 40px;
}
</style>
