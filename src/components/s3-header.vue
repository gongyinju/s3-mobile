<template>
  <div >
    <mt-header :title="headTitle">
      <!--@click="$router.go(-1)"-->
      <router-link to="/" v-if="goBack" slot="left">
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
    props: ['headTitle', 'goBack','goRight'],
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
</style>
