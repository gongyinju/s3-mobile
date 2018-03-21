<template>
  <div >
    <mt-header :title="headTitle" fixed>
      <router-link  v-if="goBack" slot="left" :to="goBackUrl" >
        <mt-button icon="back" ></mt-button>
      </router-link>
      <!--<mt-button  icon="more" slot="right"></mt-button>-->
      <!--<router-link :to="right.to" v-if="right.show" slot="right">
        <mt-button :icon="right.icon" ></mt-button>
      </router-link>-->
    </mt-header>
  </div>
</template>

<script>
  export default {
    props: {
      headTitle:{},
      goBack:{
        type: Boolean,
      },
      goBackUrl:{
        type: String,
        default:'/'
      },
      goRight:{},
    },
    data(){
      return{
      };
    },
    created(){
    }
  }
</script>

<style scoped>
.mint-header-title{
  overflow-y: auto!important;
}
.mint-header.is-fixed {
  z-index: 5;
}
</style>
