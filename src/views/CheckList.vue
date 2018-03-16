<template>
  <div class="checkList">

    <!--<s3-header head-title="审核" go-back='true' ></s3-header>-->
    <anav></anav>
  </div>
</template>

<script>
  import s3Header from '@/components/s3-header.vue'
  import anav from '@/components/nav.vue'

  export default {
    components: {
      anav,s3Header
    }

  }
</script>

<style scoped>
.checkList{
  padding-top: 46px;
}
</style>
