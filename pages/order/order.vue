<template name="order">
  <view>
    <scroll-view scroll-y class="page">
      <van-nav-bar title="订单" :fixed="true"> </van-nav-bar>
      <span>order</span>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'order',
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
