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
        bottom:[]
      }
    },
    components: {
      s3Bottom
    },
    created(){
      //获得九宫格数据
      s3.ajax('/getMobileFun',{},'s3core')
        .then(res =>{
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
