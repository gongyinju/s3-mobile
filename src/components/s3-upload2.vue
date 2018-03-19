<template>
  <div class="s3-fileUpload">
    <!--历史附件-->
    <ul class="upload-list upload-list--picture-card"></ul>

    <div class="aboutFile">
      <div tabindex="0" class="upload upload--picture-card">
        <i class="icon-plus">+</i>
        <input type="file" name="file" class="upload--input" @change="upload">
      </div>

      <div class="fileReader">
        <span v-if="fileupload && !preview">{{fileupload.name}}</span>
        <img  v-if="fileupload && preview" :src="imageSrc" alt="">
        <span v-if="!fileupload">添加附件内容</span>
      </div>

      <div v-if="fileupload" class="fileLoading">
        <span>{{fileLoading}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  Mock.mock('https://www.test.com/api/upload',{});

  export default {
    props: {
      uploadURL: {
        type: String,
        default: 'https://api.github.com'
      },
      showProgress:{
        type: Boolean,
        default: true
      },
      postData:{
        type:Object,
        default:function(){
          return {}
        }
      },
      sendFile:{
        type:Function
      },
      fileLoading: {
        type: String,
        default: '上传中...'
      },
    },
    data () {
      return {
        fileupload: '',
        imageSrc:'',
      }
    },
    methods: {
      upload(e) {
        var that = this;
        var fileupload = e.target.files[0];
        console.log(fileupload);
        // 将参数传回父组件中的回调函数
        this.$emit('fileupload',fileupload)
        this.fileupload = fileupload;

        let fileReader = new FileReader();

        if(this.fileupload.type.indexOf("image")>-1){
          this.preview = true;
          fileReader.readAsDataURL(this.fileupload)
          fileReader.onload = function(){
            console.log(that.imageSrc)
            that.imageSrc = this.result;
          }
        }
        if(this.fileupload.name.lastIndexOf(".")>-1){
          let res = s3.checkFile(this.fileupload);
          if (res.status =='400'){
            this.fileLoading = res.retMsg;
          }else{
            this.sendFile()
          }
        }


      }
    }
  }
</script>
<style>
  .s3-fileUpload .upload-list--picture-card {
    margin: 0;
    display: inline;
    vertical-align: top;
    padding: 0;
    list-style: none;
  }
  .s3-fileUpload .upload--picture-card {
    position: relative;
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    cursor: pointer;
    line-height: 96px;
    vertical-align: top;
    display: inline-block;
    text-align: center;
    outline: none;
  }
  .s3-fileUpload .upload--picture-card i {
    font-size: 28px;
    color: #8c939d;
    font-style: normal;
  }
  .s3-fileUpload .upload--input {
    opacity: 0;
    top: 0;left: 0;
    position: absolute;
    width: 100px;
    height: 100px;
  }
  .s3-fileUpload .aboutFile{
    height: 100px;
    overflow: hidden;
  }
  .s3-fileUpload .aboutFile>div{
    float: left;
  }
  .s3-fileUpload .fileReader{
    height: 100%;
    line-height: 100px;
    margin-left: 10px;
  }
  .s3-fileUpload .fileReader>img{
    width: 100px;
    height: 100px;
  }
  .s3-fileUpload .fileLoading{
    height: 100%;
    line-height: 100px;
    margin-left: 10px;
  }

</style>
