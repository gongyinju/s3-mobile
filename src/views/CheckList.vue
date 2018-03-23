<template>
  <div class="checkList">
    <s3-upload ref="upload" @sendFile="sendFile" @deleteFile="deleteFile" :fileLoading="fileLoading" :filelist="filelist"></s3-upload>

    <!--{{dealerList}}-->
    <s3-popup :popup-list="dealerList" :current-name="operuserName" ></s3-popup>
  </div>
</template>

<script>
  import s3Upload from '@/components/s3-upload.vue'
  import s3Popup from '@/components/s3-popup.vue'


  export default {
    components: {
      s3Upload,
      s3Popup
    },

    data () {
      return {
        //
        postData: {},
        file:'',
        fileLoading:'',
        filelist:[],
        //日期参数
//        dateNum:1510621267683,
        //切换经销商
        operuserName:'全部经销商',
        dealerList:[]


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

    },
    created(){
      //获取经销商列表
      s3.ajax('/getDealerList',{},'s3core')
        .then(res=>{
          let all = {'customerId':undefined,'userName':'全部经销商'};
          this.$store.commit('setCurrentDealer',all)
          this.dealerList = [all].concat(res.dealerList);
          console.log(this.$store.state.currentDealer)
        })
    },

  }
</script>

<style scoped>
  .checkList{
    padding-top: 40px;
  }
</style>
