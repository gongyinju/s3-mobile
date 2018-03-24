<template>
  <div class="jsCom">
    <mt-cell
      v-for="item in group.list"
      :to="item.path"
      is-link>
      <div slot="title">
        <i :class="['indexicon', 'icon-' + item.icon]"></i>
        <span>{{ item.name }}</span>
      </div>
    </mt-cell>
  </div>
</template>
<script>

  import { navs } from '@/router';
  export default {
    name: "jsCom",
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
        return navs[0]
      }
    },
    methods: {
    }
  }
</script>
<style>
  .jsCom{
    padding-top: 40px;
  }

</style>
