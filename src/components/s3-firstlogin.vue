<template>
  <div>


    <h1>首次登陆</h1>
    <mt-button type="primary" size="large" class="loginBtn" @click="goHome">进入首页</mt-button>

  </div>
</template>

<script>
  export default {
    data(){
      return{
      }
    },
    created(){
    },
    methods: {
      goHome: function() {
        this.$store.commit('userFirstLogout');
      }
    }
  }
</script>

<style scoped>

</style>
