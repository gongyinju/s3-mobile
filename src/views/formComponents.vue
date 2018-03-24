<template>
  <div class="formCom">
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
    name: "formCom",
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
        return navs[3]
      }
    },
    methods: {
    }
  }
</script>

<style>
  .formCom{
    padding-top: 40px;
  }
</style>
