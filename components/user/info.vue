<template>
	<div class="padding-bottom">
		<!-- 用户信息-->
		<div class="bg-red flex justify-between align-center text-white padding-top padding-lr">
			<!-- 左侧 -->
			<div class="flex align-end">
				<!-- 头像 -->
				<view
					class="margin-right"
					style="position:relative"
				>
					<button
						v-if="userinfo.avatarUrl!=''"
						open-type="getUserInfo"
						@getuserinfo="tapGetUserInfo"
						class="cu-avatar round lg"
					>
						<img
							class="cu-avatar round lg"
							:src="userinfo.avatarUrl"
						/>
					</button>
					<block v-if="userinfo.gender">
						<view
							v-if="userinfo.gender==1"
							class="cu-tag badge cuIcon-male bg-blue"
						></view>
						<view
							v-if="userinfo.gender==2"
							class="cu-tag badge cuIcon-female bg-pink"
						></view>
					</block>
					<button
						v-if="userinfo.avatarUrl==''"
						open-type="getUserInfo"
						@getuserinfo="tapGetUserInfo"
						class="cu-avatar round lg cuIcon-myfill text-gray"
					></button>
				</view>
				<!-- 昵称 积分 -->
				<div class="flex flex-direction align-start">
					<button
						open-type="getUserInfo"
						@getuserinfo="tapGetUserInfo"
						class="bg-red line-gray cu-btn text-white text-xl padding-0"
					>
						<span v-if="userinfo.nickName">{{userinfo.nickName}}</span>
						<span v-else>点击登录</span>
						<span class="text-xs text-yellow padding-left-sm"></span>
					</button>

					<div
						class="cu-tag round bg-orange"
						@click="Toggle"
						:class="[animation?'animation-shake' :'']"
					>
						<view class="text-lg text-yellow">
							<text class="cuIcon-newsfill"></text>
						</view>
						<span class="margin-lr-xs text-xs">{{userinfo.address}}</span>
						<!-- <span class="cuIcon-copy"></span> -->
					</div>
				</div>
			</div>
			<!-- 右侧 -->
			<div
				class="flex align-end"
				@click="navInfo"
			>
				<!-- 入住小程序时间 -->
				<view class="flex flex-direction align-center">
					<view class="text-xl text-white rotate">
						<text class="cuIcon-order"></text>
					</view>
					<view class="text-sm text-white">账户登录</view>
				</view>
			</div>
		</div>

		<!-- 波浪 -->
		<view
			class="bg-red padding-top-sm "
			style="position:relative;"
		>
			<img
				src="https://hongxiao93.cn/static/gif/wave.gif"
				mode="scaleToFill"
				class="gif-black response wave-gif"
			/>
		</view>

		<!-- 对话窗口 -->
		<view
			class="cu-modal"
			:class="modal.show?'show':''"
		>
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">{{modal.title}}</view>
					<view
						class="action"
						@click="hideModal"
					>
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<view>{{modal.content}}</view>
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button
							class="cu-btn bg-green margin-sm"
							v-if="modal.id=='modal_userinfo'"
							open-type="getUserInfo"
							@getuserinfo="tapGetUserInfo"
						>确定</button>
					</view>
				</view>
			</view>
		</view>
	</div>
</template>

<script> 
export default {
	data() {
		return {
			date: "2020-03-18",
			birthModal: true,
			animation: false,
			modal: { show: false, title: "", content: "", id: "" },
			telVal: "",
			joinDay: 0,
			user_email_val: "",
			address_auth: true, userinfo: { address: '暂无用户信息' }
		};
	},
	computed: {
	},
	beforeMount() {
		this.birthModal = true;
		uni.showLoading({ title: "获取信息" });
		this.handleUserInfo();
	},
	methods: {
		navInfo() {
			uni.navigateTo({
				url: '/pages/mine/login/login'
			});
		},
		DateChange(e) {
			this.date = e.mp.detail.value;
		},
		confirmUserBirth() {
			uni.showLoading({ title: "加载中" });
			this.upUserInfo({ user_birth: this.date }).then(res => {
				uni.hideLoading();
				uni.showToast({ title: "提交成功", icon: "none" });
				this.hideModal();
			});
		},
		// 酒龄天数
		setDay() {
			let day = this.betweenDay ? this.betweenDay : 0;
			if (day <= 20) this.joinDay = day;
			else {
				let mod = parseInt(day / 20);
				var myVar = setInterval(() => {
					this.joinDay = this.joinDay + mod;
					if (this.joinDay >= day) {
						this.joinDay = day;
						clearInterval(myVar);
					}
				}, 35);
			}
		},
		// 用户点击获取用户信息
		tapGetUserInfo(res) {
			if (res.detail.userInfo) this.handleUserInfo();
			else this.hideModal();
		},
		// 获取用户信息 并更新
		handleUserInfo() {
			uni.showLoading({ title: "请稍等" });
			uni.getUserInfo({
				success: res => {
					uni.hideLoading();
					let { nickName, avatarUrl, gender, city, country, province } = res.userInfo;
					this.userinfo = { nickName, avatarUrl, gender, address: country + ' ' + province + ' ' + city }
					this.hideModal();
				},
				fail: res => {
					this.showUserInfoModal();
				},
				complete: res => {
					this.setDay();
				}
			});
		},
		// 询问获取用户信息对话框
		showUserInfoModal() {
			uni.hideLoading();
			this.modal = {
				show: true,
				title: "微信登录",
				content: "请允许获取您的微信头像等信息",
				id: "modal_userinfo"
			};
		},
		// 隐藏对话框
		hideModal() {
			this.modal = { show: false, title: "", content: "", id: "" };
		},
		// 积分小动画
		Toggle(e) {
			this.animation = true;
			setTimeout(() => {
				this.animation = false;
			}, 500);
		},
		// 设置权限
		setOpen() {
			uni.openSetting({
				success: res => {
					this.address_auth = res.authSetting["scope.address"];
				},
				fail: res => {
					console.log("openSetting fail", res);
				}
			});
		}
	}
};
</script>

<style>
.wallet-box {
	position: absolute;
	bottom: 0;
	right: 40rpx;
	left: 40rpx;
	border-radius: 15rpx 15rpx 0 0;
	background-image: linear-gradient(45deg, #3e2723, #6d4c41);
	color: #ecd8ba;
}
.box-con {
	background-color: #ecd8ba;
	color: #3e2723;
	padding: 4rpx 16rpx;
}
.basis-3 {
	flex-basis: 30%;
}

.basis-7 {
	flex-basis: 70%;
}
.mybg {
	background: #b71c1c;
}
.myaddress {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.wave-gif {
	width: 100%;
	vertical-align: middle;
	mix-blend-mode: screen;
	height: 60rpx;
	z-index: 900;
	position: relative;
}
.bg-red {
	background-color: #d81e06;
}
.rotate {
	transform: rotate(90deg);
}
</style>
