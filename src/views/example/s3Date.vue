<template>
  <div class="demo-s3Date">
    今天的日期：<s3-date :date="dateNum"></s3-date>
  </div>
</template>

<script>
  import s3Date from '@/components/s3-date.vue'
  export default {
    components: {
      s3Date
    },
    computed: {
      dateNum () {
        return new Date()
      }
    }
  }
</script>

<style>
.demo-s3Date{
  padding-top: 40px;
}
</style>
