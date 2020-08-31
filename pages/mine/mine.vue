<template name="mine">
	<scroll-view
		scroll-y
		class="page"
	>
		<Info></Info>
		<view class="cu-list menu sm-border card-menu margin-top-xl shadow-warp">
			<navigator
				v-for="(item, index) in list"
				hover-class="none"
				:key="index"
				:url="item.url"
				:open-type="item.type"
				class="cu-item arrow"
			>
				<view class="content">
					<text :class="['cuIcon-'+item.icon,'text-'+item.color]"></text>
					<text class="text-grey text-df">{{item.title}}</text>
				</view>
			</navigator>
			<view class="cu-item arrow">
				<button
					class="cu-btn content"
					open-type="contact"
				>
					<text class="cuIcon-servicefill text-olive"></text>
					<text class="text-grey">在线客服</text>
				</button>
			</view>
			<view class="cu-item arrow">
				<button
					class="cu-btn content"
					open-type="openSetting"
				>
					<text class="cuIcon-settingsfill text-brown"></text>
					<text class="text-grey">授权管理</text>
				</button>
			</view>
			<view class="cu-item arrow">
				<button
					class="cu-btn content"
					open-type="feedback"
				>
					<text class="cuIcon-writefill text-cyan"></text>
					<text class="text-grey">意见反馈</text>
				</button>
			</view>
		</view>
	</scroll-view>
</template>

<script>
import Info from '@/components/user/info.vue'
export default {
	name: 'mine',
	components: {
		Info,
	},
	data() {
		return {
			name: 'mine',
			authFalg: false,
			list: [
				{
					title: "我的预约",
					url: "/pages/mine/order/order",
					color: "green",
					type: 'navigate',
					icon: "newsfill"
				},
				// {
				// 	title: "我的报告",
				// 	url: "/pages/report/report",
				// 	type: 'switchTab',
				// 	color: "brown",
				// 	icon: "formfill"
				// },
				{
					title: "中心介绍",
					url: "/pages/mine/introduce/introduce",
					color: "pink",
					type: 'navigate',
					icon: "newshotfill"
				},
				{
					title: "体检须知",
					url: "/pages/mine/notice/notice",
					color: "blue",
					type: 'navigate',
					icon: "activityfill"
				},
				{
					title: "联系我们",
					url: "/pages/mine/concat/concat",
					type: 'navigate',
					color: "blue",
					icon: "phone"
				}
			]
		};
	},
	methods: {
	},
};
</script>

<style></style>
