<template>
  <div class="checkList">
    <s3-upload ref="upload" @sendFile="sendFile" @deleteFile="deleteFile" :fileLoading="fileLoading" :filelist="filelist"></s3-upload>
    <s3-formvalcode ></s3-formvalcode>

    <div class='buttonBox' >
      <button @click="changePhone()" >确认</button>
    </div>

  </div>
</template>

<script>
  import s3Upload from '@/components/s3-upload.vue'
  import s3Formvalcode from '@/components/s3-formValCode.vue'

  export default {
    components: {
      s3Upload,
      s3Formvalcode
    },

    data () {
      return {
        postData: {},
        file:'',
        fileLoading:'',
        filelist:[]
      }
    },
    methods:{
      //后台请求上传
      sendFile:function (file){
        let promise = s3.upload('https://www.test.com/api/upload',file,this.postData,this.$refs.upload.onprogress);
        promise.then(res => {
          if (res.status == 200) {
            this.fileLoading = '上传完成'
            this.getFileList();
          } else {
            this.fileLoading = '上传失败'
          }
        })
      },
      //获取已上传文件列表
      getFileList:function () {
        let promise = s3.ajax('/getuploadFilelist',{},'s3core');
        promise.then(res => {
          this.filelist = res.dataList;
        })
      },
      //删除历史附件
      deleteFile:function (annexUrl) {
        console.log(annexUrl)
      },
      //确认修改手机号
      changePhone:function (phone,validateCode) {

      }
    },


  }
</script>

<style scoped>
  .checkList{
    padding-top: 86px!important;
  }
</style>
