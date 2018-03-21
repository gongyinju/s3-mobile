<template>
  <div class="s3-firstLogin">
    <div class="first-login-tig">
      <p>首次登录请先绑定你的手机号码</p>
      <p>并修改密码</p>
    </div>
    <div class="formBox">
      <div class="sendCode">
        <em>|</em>
        <button @click="getValidateCode(phone)" class="skin-color" :disabled="countingDown || !isPhoneValid">{{getCodeText}}</button>
      </div>
      <mt-field label="绑定手机" placeholder="输入你的手机号" type="number" v-model.trim="phone" class="phone"></mt-field>
      <mt-field label="校验码" placeholder="输入你的手机效验码" type="number" v-model.trim="validatecode"></mt-field>
      <mt-field label="旧密码" placeholder="请输入你的旧密码" type="password" v-model.trim="oldPassword"></mt-field>
      <mt-field label="新密码" placeholder="请输入你的新密码" type="password" v-model.trim="newPassword"></mt-field>
      <mt-field label="确认密码" placeholder="请再次确认您的新密码" type="password" v-model.trim="repeatPassword"></mt-field>
    </div>
    <!--{{user.user.userName}}-->
    <div class="buttonBox">
      <mt-button type="primary" size="large" class="loginBtn" @click="goHome">确认</mt-button>
    </div>
    <!--验证错误-->
    <div class="box_error2 " v-if="showTip">
      <div>短信验证码以向您的手机发送，请在输入框内填入您收到的验证码！</div>
    </div>
    <div class="error" v-if="phone && !isPhoneValid">
      <span>请输入正确手机号 </span><i class="ion-alert-circled"></i>
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
  const TIME_COUNT = 60;
  export default {
    data(){
      return{
        phone:null,
        validatecode:null,
        oldPassword:'',
        newPassword:'',
        repeatPassword:'',
        getCodeText:'获取验证码',
        showTip:false,
        countingDown:false,
        timer: null,
        count: '',
      }
    },
    computed: {
      //获取登录账号信息
      user () {
        return this.$store.state.user
      },
      //手机号验证
      isPhoneValid() {
        return /^1[3|5|7|8][0-9]\d{8}$/.test(this.phone);
      }
    },
    methods: {
      goHome: function() {
        this.$store.commit('userFirstLogout');
      },
      getValidateCode:function (phone,loginName) {
        //ajax请求
        var param = {
          mobile:phone,
          appid:'s3core'
        }
        if(loginName)
          param.loginName = loginName;
        /*var promise =s3.ajax('/getValidateCode',param,'userManage');
        promise.then(function(result){
          if(result.retCode !== "200"){
            MessageBox('提示', result.retMsg||"您的账号暂不能使用忘记密码功能，请联系企业咨询!");
            this.showTip = false;
          }else{
            this.showTip = true;
          }
        })*/
        //点击之后 倒计时
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.countingDown = true;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
              this.getCodeText = `请等待${this.count}s`;
            } else {
              clearInterval(this.timer);
              this.timer = null;
              this.getCodeText = "获取验证码";
              this.countingDown = false;
            }
          }, 1000)
        }

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
  .s3-firstLogin .formBox .sendCode {
    width: 100px;
    position: absolute;
    z-index: 1;
    right: 17px;top: 8px;
    font-size: 20px;
  }
  .s3-firstLogin .formBox .sendCode em{
    color: #cecece;
    font-style: normal;
  }
  .s3-firstLogin .formBox .sendCode button{
    background: transparent;
    border: none;
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
  .skin-color{
    color: #26a2ff;
  }
</style>
