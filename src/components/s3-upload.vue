<template>
  <div >
    <div class="file_box">
      <input type="file" v-on:change="upload">点击上传
    </div>
    <!--v-on:increment="incrementTotal"-->
    {{fileName}}

  </div>
</template>
<script>
  Mock.mock('https://www.test.com/api/upload',{});

  export default {
    props: {
      uploadURL: {
        type: String,
        default: 'https://api.github.com'
      }
    },
    data () {
      return {
        fileName: ''
      }
    },
    methods: {
      upload(e) {
        console.log(this.uploadURL)
        var fileupload = e.target.files[0];
        this.fileName = fileupload.name;
        console.log(fileupload.name)
        var a = s3.upload(fileupload,{},'https://www.test.com/api/upload');
        a.then(res => {
          console.log(res);
          // 将参数传回父组件中的回调函数
          this.$emit('uploadstatus',res)

        })
      },
    }
  }
</script>
<style>

  .file_box {
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin: 0;
    transition: .1s;
    text-indent: 0;
    line-height: 20px;
    padding: 6px 16px;
    font-size: 12px;
    border-radius: 3px;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
  .file_box input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
  }
  .file_box:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
</style>
