<template>
  <div class="page-indicator">
    <div class="page-indicator-wrapper">
      <mt-button @click.native="openIndicator" size="large">点击弹出 Indicator</mt-button>
      <mt-button @click.native="openIndicatorWithSpinner" size="large">可配置 spinner</mt-button>
      <mt-button @click.native="openIndicatorWithText" size="large">点击弹出带有文字的 Indicator</mt-button>
    </div>
  </div>
</template>

<style>
  .page-indicator .page-indicator-wrapper {
    padding: 0 20px;
    top: 50%;
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .page-indicator button{
    margin-bottom: 20px;
  }
  .mint-indicator-wrapper {
    z-index: 9;
  }
</style>

<script type="text/babel">
  import { Indicator } from 'mint-ui';

  export default {
    methods: {
      openIndicator() {
        Indicator.open();
        setTimeout(() => Indicator.close(), 2000);
      },

      openIndicatorWithSpinner() {
        Indicator.open({ spinnerType: 'fading-circle' });
        setTimeout(() => Indicator.close(), 2000);
      },

      openIndicatorWithText() {
        Indicator.open('加载中...');
        setTimeout(() => Indicator.close(), 2000);
      }
    },

    beforeDestroy() {
      Indicator.close();
    }
  };
</script>
