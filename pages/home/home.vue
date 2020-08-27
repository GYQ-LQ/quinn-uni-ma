<template name="home">
  <scroll-view scroll-y class="page">
    <van-nav-bar title="首页" :fixed="true"> </van-nav-bar>
    <span>home</span>
  </scroll-view>
</template>

<script>
export default {
  name: 'home',
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
