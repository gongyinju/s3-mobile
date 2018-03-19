<template>
  <div class="selectCom">

    <div @click="popupVisible = true"> wwwwwwwwwwww</div>

    <mt-popup v-model="popupVisible" popup-transition="popup-fade" :modal="false">
      ...xxx
    </mt-popup>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        popupVisible:false
      };
    }
  }
</script>

<style scoped>

</style>
