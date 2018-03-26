<template>
  <div class="demo-s3Date">
    <s3-upload ref="upload" @sendFile="sendFile" @deleteFile="deleteFile" :fileLoading="fileLoading" :filelist="filelist"></s3-upload>
  </div>
</template>

<script>
  import s3Upload from '@/components/s3-upload.vue'
  export default {
    components: {
      s3Upload
    },
    data () {
      return {
        postData: {},
        file:'',
        fileLoading:'',
        filelist:[],
      }
    },
    methods:{
      //后台请求上传
      sendFile:function (file){
        let promise = s3.upload('https://jsonplaceholder.typicode.com/posts/',file,this.postData,this.$refs.upload.onprogress);
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
    }
  }
</script>

<style>
.demo-s3Date{
  padding-top: 40px;
}
</style>
