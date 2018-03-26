<template>
  <div class="demo-s3Bottom">
    <s3-bottom :bottomlist="bottom" :selected = '$route.path'></s3-bottom>

  </div>
</template>

<script>
  import s3Bottom from '@/components/s3-bottom.vue'
  export default {
    data () {
      return {
        bottom:[
          {icon:'icon-shouye-copy-copy-copy',text:'首页',pathUrl:'/'},
          {icon:'icon-chanpin',text:'JS组件',pathUrl:'/jsCom'},
          {icon:'icon-chanpin',text:'CSS组件',pathUrl:'/cssCom'},
          {icon:'icon-chanpin',text:'S3组件',pathUrl:'/s3Com'},
        ]
      }
    },
    components: {
      s3Bottom
    }
  }
</script>
