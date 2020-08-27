<script>
import Vue from 'vue';
export default {
	onLaunch: function () {
		uni.getSystemInfo({
			success: function (e) {
				console.log(e)
				// #ifdef MP-WEIXIN || MP-QQ
				Vue.prototype.StatusBar = e.statusBarHeight;
				// #endif
			},
		});
	},
};
</script>

<style>
@import './wxcomponents/vant/dist/common/index.wxss';
.page {
	height: 100vh;
}
</style>
