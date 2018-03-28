<template>
  <div class="demo-s3Quantity">
    <s3-quantity ref="q"></s3-quantity>

  </div>
</template>

<script>
  import s3Quantity from '@/components/s3-quantity.vue'
  export default {
    methods: {

    },
    components: {
      s3Quantity,
    },
    created(){
      console.log(this.refs.q.quantity)
    }
  }
</script>

<style>
  .demo-s3Quantity{
    padding-top: 40px;
  }
</style>
