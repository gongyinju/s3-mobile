<template>
  <div>
    <s3-banner></s3-banner>
    <div id="grid">
      <ul>
        <li v-for="(item,index) in gridlist" >
          <router-link :to="item.pathUrl" solt="" tag="span">
            <i class="iconfont" :class="item.icon"></i>
            <p v-text="item.text" ></p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  //banner
  import s3Banner from '@/components/s3-banner.vue'
  export default {
    name: "home",
    data(){
      return{
        gridlist:[
          {icon:'icon-tuangou',text:'订货',pathUrl:'/products'},
          {icon:'icon-icon17',text:'审核',pathUrl:'/checklist'},
          {icon:'icon-guanxi',text:'团购',pathUrl:'/orderlist'}
        ],
      }
    },
    components: {
      s3Banner,
    }
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
