<template>
  <div class="page-spinner">

    <mt-cell title="snake">
      <mt-spinner color="#26a2ff" type="snake"></mt-spinner>
    </mt-cell>

    <mt-cell title="double-bounce">
      <mt-spinner color="#26a2ff" type="double-bounce"></mt-spinner>
    </mt-cell>

    <mt-cell title="triple-bounce">
      <mt-spinner color="#26a2ff" type="triple-bounce"></mt-spinner>
    </mt-cell>

    <mt-cell title="fading-circle">
      <mt-spinner color="#26a2ff" type="fading-circle"></mt-spinner>
    </mt-cell>
  </div>
</template>

<script>
export default {
  name: 'page-spinner',

  data() {
    return {

    };
  }
};
</script>

<style lang="css">
  .page-spinner .mint-cell {
        min-height: 50px;
  }
  .page-spinner{
    padding-top: 40px;
  }
</style>
