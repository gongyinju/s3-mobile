<template>
  <div class="s3Com">
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
    name: "s3Com",
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
        return navs[2]
      }
    },
    methods: {
    }
  }
</script>

<style>
  .s3Com{
    padding-top: 40px;
  }
</style>
