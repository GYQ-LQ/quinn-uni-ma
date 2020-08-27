<template>
	<view style="height: 100%">
		<div
			class="navpage"
			:style="{ paddingTop: StatusBar + 44 + 'px' }"
		>
			<Home v-if="tabbarInd == 0"></Home>
			<Report v-if="tabbarInd == 1"></Report>
			<Order v-if="tabbarInd == 2"></Order>
			<Mine v-if="tabbarInd == 3"></Mine>
		</div>
		<demo-block title="切换标签事件">
			<van-tabbar
				:active="tabbarInd"
				active-color="#07c160"
				z-index="99"
				@change="onChange"
			>
				<van-tabbar-item icon="home-o">首页</van-tabbar-item>
				<van-tabbar-item icon="search">报告</van-tabbar-item>
				<van-tabbar-item icon="friends-o">预约</van-tabbar-item>
				<van-tabbar-item icon="setting-o">我的</van-tabbar-item>
			</van-tabbar>
		</demo-block>
	</view>
</template>

<script>
export default {
	data() {
		return {
			name: 'index',
			StatusBar: this.StatusBar,
			tabbarInd: 0,
			title: 'Hello Index',
		};
	},
	methods: {
		onChange(e) {
			this.tabbarInd = e.detail;
		},
	},
};
</script>

<style>
.navpage {
	height: 100vh;
	box-sizing: border-box;
	/* padding-bottom: calc(100upx + env(safe-area-inset-bottom) / 2); */
	padding-bottom: 50px;
}
</style>
