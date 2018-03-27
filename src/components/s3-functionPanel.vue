<template>
  <div class="s3-functionPanel " id="grid">
    <ul>
      <router-link :to="item.pathUrl" v-for="(item,index) in modules" tag="li">
        <i class="iconfont" :class="item.icon"></i>
        <p v-text="item.text" ></p>
      </router-link>

      <router-link :to="item.pathUrl" tag="li" v-for="(item,index) in otherModules" >
        <i class="iconfont" :class="item.icon"></i>
        <p v-text="item.text" ></p>
      </router-link>
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
