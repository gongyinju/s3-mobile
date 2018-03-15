<template>
  <div class="nav-css">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1" @click="changeId()">option A</mt-tab-item>
      <mt-tab-item id="2" @click.stop.prevent="changeId">option B</mt-tab-item>
      <mt-tab-item id="3" @click.stop.prevent="changeId">option C</mt-tab-item>
      <mt-tab-item id="4" @click.stop.prevent="changeId">
        <select name="" id="">
          <option value="111">fff</option>
          <option value="222">ggg</option>
          <option value="333">hhh</option>
        </select>
      </mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 1" :title="'content ' + n" is-link></mt-cell>
      </mt-tab-container-item>
      <!--<mt-tab-container-item id="2">
        <mt-cell v-for="n in 2" :title="'content ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="(n,key) in 3" :title="'content ' + key" />
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <mt-cell v-for="n in 4" :title="'content ' + n" />
      </mt-tab-container-item>-->
    </mt-tab-container>
  </div>
</template>

<script>
  import jumplist from './jumpList'
    export default {
      props: {
        showDate: {
          type: Boolean,
          default: false
        },
        showSelect: {
          type: Boolean,
          default: false
        },
        selectArray:{
          type: Array,
        }
      },
      components:{"mt-cell":jumplist},
      methods:{
        changeId:function () {
          console.log(111)
        }
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
