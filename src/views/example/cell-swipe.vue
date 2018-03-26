<template>
  <div class="page-cell">
    <mt-cell-swipe
      v-for="n in 10"
      :right="rightButtons"
      title="向左滑动">
    </mt-cell-swipe>
  </div>
</template>

<script>
  export default {
    created() {
      this.rightButtons = [
        {
          content: 'Mark as Unread',
          style: { background: 'lightgray', color: '#fff' }
        },
        {
          content: 'Delete',
          style: { background: 'red', color: '#fff' },
          handler: () => this.$messagebox('delete')
        }
      ];
    },

    methods: {
      leftButtonHandler(evt) {
        console.log(123);
      }
    }
  };
</script>
<style>
  .page-cell{
    padding-top: 40px;
  }
</style>
