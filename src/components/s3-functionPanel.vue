<template>
  <div class="s3-functionPanel">
    <ul>
      <li v-for="(item,index) in modules" >
        <router-link :to="item.pathUrl" solt="" tag="span">
          <i class="iconfont" :class="item.icon"></i>
          <p v-text="item.text" ></p>
        </router-link>
      </li>
      <li v-for="(item,index) in otherModules" >
        <router-link :to="item.pathUrl"  tag="span">
          <i class="iconfont" :class="item.icon"></i>
          <p v-text="item.text" ></p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "s3-functionPanel",
    props:{
      modules: {
        type: Array,
      },
      otherModules:{
        type: Array,
        default:function () {
          return []
        }
      }
    },
    data(){
      return{

      }
    },
    created(){

    },
  }
</script>

<style scoped>

</style>
