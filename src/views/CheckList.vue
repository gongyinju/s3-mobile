<template>
  <div class="checkList">
    <!--<anav></anav>-->
    <!--<s3-date></s3-date>-->
    <!--<s3-upload ref="upload" @sendFile="sendFile" @deleteFile="deleteFile" :fileLoading="fileLoading" :filelist="filelist"></s3-upload>-->
  </div>
</template>

<script>
//  import anav from '@/components/nav.vue'
//  import s3Date from '@/components/s3-date.vue'
//  import s3Upload from '@/components/s3-upload.vue'

  export default {
    components: {
//      s3Upload,
//      anav
    },

    data () {
      return {
        postData: {},
        file:'',
        fileLoading:'',
        filelist:[]
      }
    },
   /* methods:{
      //后台请求上传
      sendFile:function (file){
        let promise = s3.upload('https://www.test.com/api/upload',file,this.$refs.upload.onprogress,this.postData);
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
      deleteFile:function (annexUrl) {
        console.log(annexUrl)
      }



    },*/
    created(){


    }


  }
</script>

<style scoped>
.checkList{
  padding-top: 46px!important;
}
</style>
