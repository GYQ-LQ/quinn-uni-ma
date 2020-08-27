<template name="report">
  <view>
    <scroll-view scroll-y class="page">
      <van-nav-bar title="报告" :fixed="true"> </van-nav-bar>
      <span>report</span>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'report',
  data() {
    return {};
  },
  onLoad() {
    console.log('onload');
  },
};
</script>

<style>
.page {
  height: 100vh;
}
</style>
