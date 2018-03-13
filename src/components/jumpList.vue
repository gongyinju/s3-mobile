<template>
  <div>
    <div class="page-cell">
      <a class="mint-cell">
        <span class="mint-cell-mask"></span>
          <div class="mint-cell-left"></div>
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
              <span class="mint-cell-text">编号</span>
            </div>
            <div class="mint-cell-value is-link">
              <span style="color: #f37b1d;">审核状态</span>
            </div>
            <i class="mint-cell-allow-right"></i>
        </div>
        <div class="mint-cell-right"></div>
      </a>
    </div>
    <div class="mint-cell-content">
      <!--<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">-->
      <!--<mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" >-->
        <ul>
          <li>
            <p class="mint-p-list"><span>用户名称</span><span>用户1</span></p>
            <p class="mint-p-list"><span>经销商编号</span><span>demojxs</span></p>
            <p class="mint-p-list"><span>创建时间</span><span>2018-03-05 10:09</span></p>
          </li>
        </ul>
        <!--<div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">Loading...</span>
        </div>-->
      <!--</mt-loadmore>-->
    </div>
  </div>
</template>

<script>
    export default {
        name: "list",
      data(){
          return {
            topStatus: '',
          }
      },
      methods: {
        handleTopChange(status) {
          this.topStatus = status;
        },
        loadTop() {
          // 加载更多数据
          this.$refs.loadmore.onTopLoaded();
        },
        loadBottom() {
          this.allLoaded = true;// 若数据已全部获取完毕
          this.$refs.loadmore.onBottomLoaded();
        }
      },
    }
</script>

<style scoped>
  .mint-cell-content .mint-p-list{
    display: flex;
    padding: 5px 0;
    color: #999;
  }
  .mint-p-list span{
    flex: 2;
    text-align: left;
    padding: 0 10px;
  }
  .mint-p-list span:nth-child(2){
    text-align: right;
  }
  ul,li{
    list-style: none;
    margin: 0;padding: 0;
  }
</style>
