<template>
  <div>
      <mt-navbar v-model="selected" >
        <mt-tab-item :id="item.pathUrl" v-for="item in bottomlist">
          <i class="iconfont" :class="item.icon"></i>
          <router-link :to="item.pathUrl" tag="div">{{item.text}}</router-link>
        </mt-tab-item>
      </mt-navbar>
  </div>

</template>

<script>
  export default {
    name: "search",
    props: {
      bottomlist: {
        type: Array,
        default: [
          {icon:'icon-shouye-copy-copy-copy',text:'首页',pathUrl:'/'},
          {icon:'icon-guanxi',text:'个人中心',pathUrl:'/person'},
        ]
      }
    },
    data () {
      return {
        selected:'',
      }
    },
    method:{
    },
    created(){
      this.selected = this.bottomlist[0].pathUrl;
    },
  }
</script>

<style scoped>
  .mint-navbar{
    position: fixed;
    z-index: 1;
    width: 100%;
    bottom: 0;
    left: 0;
    height:46px;
  }
  .mint-navbar>.router-link-active span{
    color: #fff;
  }
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 0;
  }
  .mint-navbar .mint-tab-item {
    padding: 7px 0;
    font-size: 15px;
  }
  .mint-navbar .iconfont {
    display: block;
    margin-bottom: 3px;
  }

</style>
