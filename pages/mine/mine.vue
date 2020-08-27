<template name="mine">
  <view>
    <scroll-view scroll-y class="page">
      <van-nav-bar title="我的" :fixed="true"> </van-nav-bar>
      <span>mine</span>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'mine',
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
