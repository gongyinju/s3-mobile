<template>
  <div class="page-field">
    <div class="page-part">
      <mt-field label="用户名" placeholder="请输入用户名" :attr="{ maxlength: 10 }"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
      <mt-field label="网站" placeholder="请输入网址" type="url"></mt-field>
      <mt-field label="数字" placeholder="请输入数字" type="number"></mt-field>
      <mt-field label="生日" placeholder="请输入生日" type="date"></mt-field>
      <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></mt-field>
    </div>

    <div class="page-part">
      <mt-field placeholder="登录邮箱" type="email"></mt-field>
      <mt-field placeholder="密码" type="password"></mt-field>
    </div>

    <div class="page-part">
      <mt-field label="邮箱" placeholder="成功状态" state="success"></mt-field>
      <mt-field label="邮箱" placeholder="失败状态" state="error"></mt-field>
      <mt-field label="邮箱" placeholder="警告状态" state="warning"></mt-field>
    </div>

    <div class="page-part">
      <mt-field label="验证码" placeholder="输入验证码">
        <!--验证码图片-->
        <img src="http://file.gongyinju.com/group1/M00/00/5B/bQYdm1mH6MCARxkxAABfhUPd7bM324.jpg" height="48px" width="100px">
      </mt-field>
    </div>
  </div>
</template>


<style>
  .page-field{
    padding-top: 40px;
    padding-bottom: 46px;
  }
</style>
