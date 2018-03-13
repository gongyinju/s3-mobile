<template>
  <div class="nav-css">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">option A</mt-tab-item>
      <mt-tab-item id="2">option B</mt-tab-item>
      <mt-tab-item id="3">option C</mt-tab-item>
      <mt-tab-item id="4">option D</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 1" :title="'content ' + n" is-link></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 2" :title="'content ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="(n,key) in 3" :title="'content ' + key" />
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <mt-cell v-for="n in 4" :title="'content ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  import jumplist from './jumpList'
    export default {
      components:{"mt-cell":jumplist},
      methods:{

      },
      data() {
        return {
          selected: '1',
          title:'',
          showlist:[]
        };
      }
    }
</script>

<style scoped>
  .nav-css{
  margin-top: 40px;
  }
  .mint-navbar{
    border-bottom:1px solid #f2f2f2;
  }
</style>
