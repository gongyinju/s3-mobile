<template>
  <div class="cssCom">
    <mt-cell
      v-for="item in group.list"
      :to="item.path"
      is-link>
      <div slot="title">
        <i :class="['iconfont', 'icon-' + item.icon]"></i>
        <span>{{ item.name }}</span>
      </div>
    </mt-cell>
  </div>
</template>

<script>

  import { navs } from '@/router';
  export default {
    name: "cssCom",
    data(){
      return{
      };
    },
    created(){
    },
    components: {
    },
    computed: {
      group(){
        return navs[1]
      }
    },
    methods: {
    }
  }
</script>

<style>
  .cssCom{
    padding-top: 40px;
  }
</style>
