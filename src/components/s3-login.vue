<template>
  <transition class="animated" enter-active-class="slideInUp" enter-leave-class="slideOutDown" mode = "out-in">
    <div  class="loginBox">
        <!--<div>
          <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        </div>
        <mt-button type="primary" size="large" class="loginBtn">登录</mt-button>-->
      <div class="container">
        <img class="logo" alt="s3core" :src="logo" />
        <div>{{company}}</div>
        <form >
          <input type="text" placeholder="请输入用户名" v-model="loginName" />
          <input type="password" placeholder="请输入密码" v-model="password" />
          <a href="#">忘记密码?</a>
          <mt-button type="primary" size="large" class="loginBtn" @click="doLogin">登录</mt-button>
        </form>

        <div class="signup">
          <p><span>{{fullyear}}</span> <span >{{company}}</span>版权所有</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { MessageBox } from 'mint-ui';
import store from '@/store'
export default {
  props:{
    company: {
      type: String,
      default:'核心企业电子供应链平台'
    },
    logo:{
      type: String,
      default:'http://file.gongyinju.com/group1/M00/00/5B/bQYdm1mH6MCARxkxAABfhUPd7bM324.jpg'
    },
    success: {
      type: String,
      default: '/home'
    }
  },
  data(){
    return{
      loginName:'',
      password:''
    }
  },
  computed: {
    fullyear () {
      return new Date().getFullYear()
    },
    appid () {
      return this.$store.state.appid
    }
  },
  methods: {
    doLogin () {
      let self = this

      if (this.loginName == ''){
        MessageBox('提示', '用户名不能为空' );
        return false
      }
      if (this.password == ''){
        MessageBox('提示', '密码名不能为空');
        return false
      }

      var getPublicKey = function() {
        return new Promise((resolve,reject) => {
          let param = {
            appid: self.appid
          }
          s3.ajax('/publicKey',param,'usermanage').then(result => {
            if(result.retCode == '200') {
              resolve(result) 
            } else {
              reject(result)
            }
          })
        })
      }

      getPublicKey()
      .then( data => {
        let pwd = s3.RSAEncrypt(data.modulus,data.exponent,self.password)
        let param = {
          loginName: self.loginName,
          password: pwd,
          appid: self.appid
        }
        return s3.ajax('/login',param,'usermanage')
      })
      .then(result => {
        if (result.retCode === '200'){
          self.$store.commit('userLogin')
          self.$store.dispatch('getUserState')

          let firstLoginFlag = true
          if (result.isFirstLogin === 'true') {
            firstLoginFlag = true
            self.$store.commit('userFirstLogin',firstLoginFlag)
          } else {
            self.$router.push(self.success)
          }
        } else {
          MessageBox('提示', result.retMsg ||result.retmsg )
        }
      })
      .catch(error => {
        throw new Error(error)
      })
    }
  }
}
</script>

<style scoped>
  .container {
    position: relative;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
  }

  .container img.logo {
    display: block;
    margin: 0 auto;
    width: 100px;
    padding: 60px 0 10px 0;
  }
  .container img.logo~div{
    text-align: center;
    margin : 16px  0 30px 0;
  }

  .container a {
    text-decoration: none;
    color: inherit;
  }

  .container input[type="text"] {
    padding: 16px;
    border-radius: 4px 4px 0 0;
    background: transparent;
    border: 1px solid #CFD0D1;
    display: block;
    margin: 0 auto;
    width: 75%;
  }

  .container input[type="password"] {
    padding: 16px;
    border-radius: 0 0 4px 4px;
    border: 1px solid #CFD0D1;
    border-top: none;
    background: transparent;
    display: block;
    margin: 0 auto;
    margin-bottom: 12px;
    width: 75%;
  }

  .container .loginBtn {
    display: block;
    margin: 0 auto;
    margin-top: 12px;
    width: 80%;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
  }

  .container form a{
    display: block;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 28px;
    text-align: right;
    color: #5B5A5A;
  }

  .container  div.signup {
    text-align: center;
    width: 100%;
    position: absolute;
    bottom:0;
  }

  .container div.signup p {
    padding: 0px;
    margin: 4px 0px;
  }


</style>
