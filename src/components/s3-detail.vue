<template>
  <div class="detail">
    <div class="detail-information">
      <div class="detail-information-title px-10 b-b-dashed"><i class="iconfont icon-dingdanxinxi text-orange pr-10"></i>××信息</div>
      <div class="detail-information-list px-10">
        <p v-for=""><span>编号</span><span>EF2018030916304500001（复制该订单）</span></p>
        <p><span>创建时间</span><span>2018-03-09 16:33</span></p>
        <p><span>备注</span><span>我是备注</span></p>
        <p v-for=""><span>保留字段*</span><span></span></p><!--(item,index) in detailConfig-->
      </div>
    </div>
    <div class="detail-list px-10">
      <ul>
        <li v-for="">
          <div class="detail-list-title b-b-dashed">6538467<span class="pl-10">××产品</span></div>
          <div>
            <div class="detail-list-product">
              <p v-for=""><span>产地</span>：<span>杭州</span></p>
              <p><span>产地</span>：<span>杭州</span></p>
              <p><span>产地</span>：<span>杭州</span></p>
            </div>
            <div style="clear: both"></div>
          </div>
          <div>

            <div class="detail-list-product">
              <p v-for=""><span>产地</span>：<span>杭州</span></p>
              <p><span>产地</span>：<span>杭州</span></p>
              <p><span>产地</span>：<span>杭州</span></p>
            </div>
            <div style="clear: both"></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="detail-note">
      <div class="detail-note-title px-10 b-b-dashed"><i class="iconfont icon-bill-sent text-orange pr-10"></i>××信息</div>
      <div class="p-10">备注信息展示区</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "s3-detail"
    }
</script>

<style scoped>
.detail{
  font-size: 12px;
}
ul{
  list-style: none;
  margin: 0;
  padding-left: 0;
}
  .text-right{
    text-align: right;
  }
  .text-orange{
    color:orange
  }
  .b-b-dashed{
    border-bottom:1px dashed #d9d9d9;
  }
  .pl-10{
    padding-left: 10px;
  }
  .pr-10{
    padding-right: 10px;
  }
  .px-10{
    padding: 0 10px;
  }
  .p-10{
    padding: 10px;
  }
  .detail-information,.detail-list,.detail-note{
    margin-bottom: 10px;
    /*padding: 0 10px;*/
    border-top:1px solid #d9d9d9;
    border-bottom:1px solid #d9d9d9;
  }
  .detail-information-title,.detail-list-title,.detail-note-title{
    height: 40px;
    line-height: 40px;
  }
  .detail-information-list p{
    display: -webkit-flex;
    display: flex;
    flex-flow: row wrap;
  }
.detail-information-list p>span{
  -webkit-flex: 1;
  flex: 1;
}
.detail-list-product p{
  float: left;
  width: 50%;
}
.detail-information-list p>span:nth-child(2){
  text-align: right;
}
</style>
