<template>
  <div class="s3-quantity">
    <button @click="decrement()">-</button>
    <input type="text" :value="quantity" >
    <button @click="increment()">+</button>
  </div>
</template>

<script>

  import { Toast } from 'mint-ui';
  export default{
    name:"quantity",
    data () {
      return {
        quantity: 1
      }
    },
    methods: {
      increment () {
        this.quantity++
      },
      decrement () {
        if (this.quantity === 1) {
          Toast('不能再少啦');
        } else {
          this.quantity--
        }
      }
    }
  }

</script>

<style scoped>
  .s3-quantity{
    background: #fff;
    height:24px;
    overflow: hidden;
  }
  .s3-quantity button{
    height: 20px;
    width: 20px;
    text-align: center;
    color: red;
    background: #f4f4f4;
    border: 0;
  }
  .s3-quantity input{
    width: 66px;
    margin: 0 5px;
    height: 20px;
    background: #f4f4f4;
    border: none;
    text-align: center;
  }
</style>
