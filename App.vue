<script>
import Vue from 'vue';
export default {
  onLaunch: function () {
    uni.getSystemInfo({
      success: function (e) {
        // #ifdef MP-WEIXIN || MP-QQ
        Vue.prototype.StatusBar = e.statusBarHeight;
        // #endif
      },
    });
  },
};
</script>

<style>
/*每个页面公共css */
@import 'colorui/main.css';
@import 'colorui/icon.css';
@import 'colorui/animation.css';
@import './wxcomponents/vant/dist/common/index.wxss';
#app,
page {
  height: 100%;
}
.page {
  height: 100vh;
}
</style>
