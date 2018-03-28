<template>
  <transition class="animated" enter-active-class="slideInUp" enter-leave-class="slideOutDown" mode = "out-in">
    <div  class="loginBox">
      <div class="container">
        <img class="logo" alt="s3core" :src="logo" />
        <div>{{company}}</div>
        <form >
          <input type="text" placeholder="请输入用户名" v-model="loginName" required maxlength="30"/>
          <input type="password" placeholder="请输入密码" v-model="password" required maxlength="16"/>
          <a href="#">忘记密码?</a>
          <mt-button type="primary" size="large" class="loginBtn" @click="doLogin">登录</mt-button>
        </form>

        <!--表单验证-->
        <div class="errorBox">
          <div v-if="loginNameValidate"><i class="iconfont icon-zanwushuju mint-field-state is-warning"></i> 用户名不能为空</div>
          <div v-if="passValidate"><i class="iconfont icon-zanwushuju mint-field-state is-warning"></i> 密码不能为空</div>
        </div>

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
    },
    /*loginNameValidate: function() {
      if (this.loginName  == '')
        return false;
    },
    passValidate: function() {
      if (this.passValidate == '')
        return false;
    }*/
  },
  methods: {
    doLogin () {
      let self = this


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
      .then(data => {
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
          let firstLoginFlag = true
          if (result.isFirstLogin === 'true') {
            firstLoginFlag = true
            self.$store.commit('userFirstLogin',firstLoginFlag)
          } else {
            self.$store.commit('userLogin')
            self.$store.dispatch('getUserState')
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
  .loginBox .container {
    position: relative;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
  }

  .loginBox .container img.logo {
    display: block;
    margin: 0 auto;
    width: 100px;
    padding: 60px 0 10px 0;
  }
  .loginBox .container img.logo~div{
    text-align: center;
    margin : 16px  0 30px 0;
  }

  .loginBox .container a {
    text-decoration: none;
    color: inherit;
  }

  .loginBox .container input[type="text"] {
    padding: 16px;
    border-radius: 4px 4px 0 0;
    background: transparent;
    border: 1px solid #CFD0D1;
    display: block;
    margin: 0 auto;
    width: 75%;
  }

  .loginBox .container input[type="password"] {
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

  .loginBox .container .loginBtn {
    display: block;
    margin: 0 auto;
    margin-top: 12px;
    width: 80%;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
  }

  .loginBox .container form a{
    display: block;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 28px;
    text-align: right;
    color: #5B5A5A;
  }

  .loginBox .container  div.signup {
    text-align: center;
    width: 100%;
    position: absolute;
    bottom:0;
  }

  .loginBox .container div.signup p {
    padding: 0px;
    margin: 4px 0px;
  }
  .loginBox .container .errorBox div{
    width: 80%;
    text-align: left;
    margin: auto;
    margin-bottom: .5rem;
  }
  .loginBox .container .errorBox div>i{
    margin: 0 .2rem 0 0;
  }
</style>
