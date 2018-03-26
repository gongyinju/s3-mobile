<template>
  <div class="s3-firstLogin">
    <div class="first-login-tig">
      <p>首次登录请先绑定你的手机号码</p>
      <p>并修改密码</p>
    </div>
    <div class="formBox">
      <s3-formvalcode ref="formvalcode" :loginName = "user.UserEntityloginName"></s3-formvalcode>
      <mt-field label="旧密码" placeholder="请输入你的旧密码" type="password" v-model.trim="oldPassword"></mt-field>
      <mt-field label="新密码" placeholder="请输入你的新密码" type="password" v-model.trim="newPassword"></mt-field>
      <mt-field label="确认密码" placeholder="请再次确认您的新密码" type="password" v-model.trim="repeatPassword"></mt-field>
    </div>
    <div class="buttonBox">
      <mt-button type="primary" size="large" class="loginBtn" v-on:click="changePassword" >确认</mt-button>
    </div>

    <div class='warningBox'>
      <p class='notice-txt'>温馨提示</p>
      <p class=''>请将密码设置为8（含）位以上，必须包含数字、大写字母、小写字母、特殊字符这四种类型中的两种</p>
      <p class=''>为了保护您的账户的安全请不要将密码设置为其他网站相同的密码；</p>
      <p class=''>建议您每隔一段时间修改您的密码，以防密码泄露。</p>
    </div>
  </div>
</template>

<script>

  import { MessageBox } from 'mint-ui';
  import s3Formvalcode from '@/components/s3-formValCode.vue'

  export default {
    components: {s3Formvalcode},
    props:{
      success: {
        type: String,
        default: '/home'
      }
    },
    data(){
      return{
        validatecode:null,
        oldPassword:'',
        newPassword:'',
        repeatPassword:''
      }
    },
    computed: {
      user () {
        return this.$store.state.currentUser || {loginName:''}
      },
      appid () {
        return this.$store.state.appid
      }
    },
    methods: {
      changePassword: function(event){
        console.log(this.user)
        console.log(this.$refs.formvalcode.phone)
        console.log(this.$refs.formvalcode.validatecode)

        this.$store.commit('userFirstLogin',false)
        this.$store.commit('userLogin')
        this.$store.dispatch('getUserState')
        this.$router.push(this.success)
      }
    },
    mounted () {
      let self = this
      window.onpopstate = () => {
        self.$store.commit('userLogout')
      }
    }
  }
</script>

<style >
  .s3-firstLogin{
    height: 100vh;
    background: #f2f2f2;
  }
  .s3-firstLogin .first-login-tig{
    width:100%;
    padding: .5rem 1rem;
    box-sizing: border-box;
  }
  .s3-firstLogin .formBox{
    position: relative;
  }
  .s3-firstLogin .formBox .mint-cell-wrapper input::-webkit-input-placeholder {
    color: #dedede;
  }
  .s3-firstLogin .buttonBox{
    padding: 2rem 1.6rem 1.2rem;
  }
  .s3-firstLogin .warningBox{
    padding: 1rem 1.6rem ;
  }
  .s3-firstLogin .warningBox p{
    margin: 0;
  }
  .s3-firstLogin .error{
    margin: 0 1.6rem;
    padding: .5rem 1rem;
    background: #ffb499;
    color: #fff;
    border-radius: 4px;
  }
</style>
