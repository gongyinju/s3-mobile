<template>
  <div class='s3-changePhone'>
    <div class='changePhone-title '>请输入新手机号</div>

    <div class='formBox'>
      <div class="sendCode">
        <em>|</em>
        <button @click="getValidateCode(phone)" class="skin-color" :disabled="countingDown || !isPhoneValid">{{getCodeText}}</button>
      </div>
      <mt-field label="手机号" placeholder="新手机号" type="number" v-model.trim="phone" class="phone"></mt-field>
      <mt-field label="验证码" placeholder="输入验证码" type="number" v-model.trim="validatecode"></mt-field>

    </div>

    <div class="" v-show='showTip'>
      <div>
        <div>请输入正确的手机号</div>
      </div>
    </div>

    <div class="" v-show ='showTip'>
      <div>
        <div> 请输入6位验证码</div>
      </div>
    </div>



  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  const TIME_COUNT = 60;
  export default {
    props: {
      url: {
        type: String,
        default: 'http://localhost:8080/mocks'
      },
    },
    data(){
      return{
        phone:null,
        validatecode:null,
        getCodeText:'获取验证码',
        showTip:false,
        countingDown:false,
        timer: null,
        count: '',
      }
    },
    computed: {
      //手机号验证
      isPhoneValid() {
        return /^1[3|5|7|8][0-9]\d{8}$/.test(this.phone);
      }
    },
    methods: {
      getValidateCode:function (phone,loginName) {
        //ajax请求
        var param = {
          mobile:phone,
          appid:'s3core'
        }
        if(loginName)
          param.loginName = loginName;
        //显示提示信息
        Toast('短信验证码以向您的手机发送，请在输入框内填入您收到的验证码！');

        /*var promise =s3.ajax(this.url,param,'userManage');
        promise.then(function(result){
          if(result.retCode !== "200"){
            Toast(result.retMsg||"您的账号暂不能使用忘记密码功能，请联系企业咨询!");
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

      },

    }
  }
</script>

<style>

  .s3-changePhone .changePhone-title {
    padding: 1.6rem 1.6rem 1.2rem;
    margin: auto;
    background: #f2f2f2;
  }
  .s3-changePhone .formBox{
    position: relative;
  }
  .s3-changePhone .formBox .mint-cell-wrapper input::-webkit-input-placeholder {
    color: #dedede;
  }
  .s3-changePhone .formBox .sendCode {
    width: 100px;
    position: absolute;
    z-index: 1;
    right: 17px;top: 8px;
    font-size: 20px;
  }
  .s3-changePhone .formBox .sendCode em{
    color: #cecece;
    font-style: normal;
  }
  .s3-changePhone .formBox .sendCode button{
    background: transparent;
    border: none;
  }

  .skin-color{
    color: #26a2ff;
  }
</style>
