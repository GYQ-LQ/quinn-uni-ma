<template name="login">
	<scroll-view
		scroll-y
		class="page padding-top-xl"
	>
		<div class="padding-lr padding-top-xl margin bg-white radius margin-top-xl">
			<van-cell-group>
				<van-field
					:value="telphone"
					clearable
					label="手机号码"
					placeholder="请输入手机号码"
				/>
				<van-field
					:value="password"
					type="password"
					clearable
					label="登录密码"
					placeholder="请输入登录密码"
				/>
			</van-cell-group>
			<div class="padding-lr padding-top-lg">
				<van-button
					type="primary"
					block
				>登录</van-button>
				<div class="flex justify-between align-center text-red padding-bottom">
					<navigator
						class="padding-tb"
						url="/pages/mine/regist/regist"
						hover-class="none"
					>注册账号</navigator>
					<navigator
						class="padding-tb"
						url="/pages/mine/resetpsd/resetpsd"
						hover-class="none"
					>忘记密码？</navigator>
				</div>
			</div>
		</div>
	</scroll-view>
</template>

<script>
export default {
	name: 'login',
	data() {
		return {
			name: 'login',
			telphone: '',
			password: ''
		};
	},
};
</script>

<style>
</style>
