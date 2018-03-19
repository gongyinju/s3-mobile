<template>
  <div class="checkList">
    <!--<anav></anav>-->
    <s3-date></s3-date>
    {{fileLoading}}
    <s3-upload :sendFile="sendFile" v-on:fileupload="fileupload" :fileLoading="fileLoading"></s3-upload>
  </div>
</template>

<script>
  import anav from '@/components/nav.vue'
  import s3Date from '@/components/s3-date.vue'
  import s3Upload from '@/components/s3-upload2.vue'

  export default {
    components: {
      s3Date,
      s3Upload,
    },

    data () {
      return {
        postData: {},
        file:'',
        fileLoading:''
      }
    },
    methods:{
      //上传文件组件
      fileupload:function (res) {
        // 接收从子组件传过来的当前对象
        this.file = res;
      },
      sendFile:function (){
        let promise = s3.upload('https://www.test.com/api/upload',this.file,this.postData);
        promise.then(res => {
          if (res.status == 200) {
            this.fileLoading = '上传完成'
          } else {
            this.fileLoading = '上传失败'
          }
        })
      },


    },


  }
</script>

<style scoped>
.checkList{
  padding-top: 86px!important;
}
</style>
