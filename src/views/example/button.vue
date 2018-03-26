<template>
  <div class="page-button">
    <div class="page-button-group">
      <mt-button size="large">default</mt-button>
      <mt-button size="large" type="primary">primary</mt-button>
      <mt-button size="large" type="danger">danger</mt-button>
    </div>

    <div class="page-button-group">
      <mt-button>default</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="danger">danger</mt-button>
    </div>

    <div class="page-button-group">
      <mt-button size="small">default</mt-button>
      <mt-button size="small" type="primary">primary</mt-button>
      <mt-button size="small" type="danger">danger</mt-button>
    </div>

    <div class="page-button-group">
      <mt-button disabled size="large">default</mt-button>
      <mt-button disabled size="large" type="primary">primary</mt-button>
      <mt-button disabled size="large" type="danger">danger</mt-button>
    </div>

    <div class="page-button-group">
      <mt-button plain size="large">default</mt-button>
      <mt-button plain size="large" type="primary">primary</mt-button>
      <mt-button plain size="large" type="danger">danger</mt-button>
    </div>

    <div class="page-button-group">
      <mt-button>
        <img src="http://file.gongyinju.com/group1/M00/00/5B/bQYdm1mH6MCARxkxAABfhUPd7bM324.jpg" height="20" width="20" slot="icon">
        带自定义图标
      </mt-button>
    </div>
  </div>
</template>


<style lang="css">
  .page-button {
    padding:50px 15px;
  }
  .page-button-group {
    margin-bottom: 15px;
  }
  .page-button-group  button{
    margin-bottom: 15px;
  }
</style>
