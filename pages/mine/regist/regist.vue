<template name="regist">
	<scroll-view
		scroll-y
		class="page padding-top-lg"
	>
		<div class="padding-lr-xs padding-tb-xl margin bg-white radius margin-top-xl">
			<van-cell-group>
				<van-field
					:value="username"
					clearable
					label="姓名"
					placeholder="请输入您的姓名"
				/>
				<van-field
					:value="number"
					type="telephone"
					clearable
					label="手机号码"
					placeholder="请输入手机号码"
				/>
				<van-field
					:value="smscode"
					center
					clearable
					label="短信验证码"
					placeholder="请输入短信验证码"
					use-button-slot
				>
					<van-button
						slot="button"
						size="small"
						type="primary"
					>发送验证码</van-button>
				</van-field>
				<van-field
					:value="idcard"
					type="idcard"
					clearable
					label="身份证号码"
					placeholder="请输入身份证号码"
				/>
				<van-field
					:value="age"
					type="number"
					clearable
					label="年龄"
					placeholder="请输入年龄"
				/>
				<van-field
					:value="password"
					type="password"
					clearable
					label="登录密码"
					placeholder="请输入登录密码"
				/>
				<van-field
					:value="password2"
					type="password"
					clearable
					label="确认密码"
					placeholder="请再次输入密码确认"
				/>
			</van-cell-group>
			<div class="padding-lr padding-top-lg">
				<van-button
					type="primary"
					block
				>立即注册</van-button>
			</div>
		</div>
	</scroll-view>
</template>

<script>
export default {
	name: 'regist',
	data() {
		return {
			name: 'regist',
			username: '',
			telphone: '',
			smscode: '',
			idcard: '',
			age: '',
			password: '',
			password2: ''
		};
	},
};
</script>

<style>
</style>
