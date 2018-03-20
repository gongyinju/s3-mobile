<template>
  <div  class="loginBox">
      <!--<div>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      </div>
      <mt-button type="primary" size="large" class="loginBtn">登录</mt-button>-->
    <div class="container">
      <img class="logo" alt="s3core" :src="images" />
      <div>{{company}}</div>
      <form >
        <input type="text" placeholder="请输入用户名" v-model="loginName" />
        <input type="password" placeholder="请输入密码" v-model="password" />
        <a href="#">忘记密码?</a>
        <mt-button type="primary" size="large" class="loginBtn" @click="submit">登录</mt-button>
      </form>

      <div class="signup">
        <p><span>{{fullyear}}</span> <span >{{company}}</span>版权所有</p>
      </div>
    </div>
  </div>
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
      images:{
        type: String,
        default:'http://img.hb.aicdn.com/b4e756dff556ef08277874acd970c6a14219290b3285e-5yoSex_fw658'
      }
    },
    data(){
      return{
        loginName:'',
        password:'',
        fullyear:'',
      }
    },
    created(){
      this.fullyear = new Date().getFullYear();
    },
    methods: {
      submit: function(event) {
        if (this.loginName == ''){
          MessageBox('提示', '用户名不能为空' );
          return false
        }
        if (this.password == ''){
          MessageBox('提示', '密码名不能为空');
          return false
        }
        var that = this;
        function getPublickey() {
          let param = {"appid":"s3Core"};
          let promise =  that.$http('/publicKey',param,'usermanage');
          return promise;
        };
        function login(publickey) {
          let pwd = publickey.exponent;
          let param = {"loginName":that.loginName,"password":pwd,"appid":"s3Core"};

          that.$http('/login',param,'usermanage')
            .then(res => {
              let result = res;
              if (result.retCode === '200'){
                //首次登陆
                if (result.isFirstLogin != "false"){
                  //修改状态
                  that.$store.commit('userLogin');
                  that.$store.commit('userFirstLogin');
                  that.$store.commit('increment', {
                    user: {
                      userName: that.loginName
                    }
                  })
                }else{
                  //修改状态
                  that.$store.commit('userLogin');
                  that.$store.commit('increment', {
                    user: {
                      userName: that.loginName
                    }
                  })
                }
              }else{
                MessageBox('提示', result.retMsg ||result.retmsg );
              }
            })
            .catch(function(err){
              console.log(err);
            });
        };
        let arr = [getPublickey,login];
        s3.ajaxChain(arr);
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
