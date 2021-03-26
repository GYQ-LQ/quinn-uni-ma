<!--
 * @Author: Quinn
 * @Date: 2020-08-30 21:57:53
 * @LastEditTime: 2021-01-05 21:50:02
 * @LastEditors: quinn
 * @Description:  
-->
<template name="regist">
	<scroll-view scroll-y class="page padding-top-lg">
		<div class="padding-lr-xs padding-tb-lg margin bg-white radius margin-top-xl">
			<van-cell-group>
				<van-field :value="patientName" clearable label="姓名" placeholder="请输入您的姓名" />
				<div class="mycell">
					<div class="myfield">性别</div>
					<van-cell title="单选框 2" clickable data-name="2" bind:click="onClick">
						<van-radio-group :value="sexId" @change="changeSex">
							<van-radio name="M" class="padding-right-lg" style="display: inline-block" icon-size="16">男
							</van-radio>
							<van-radio name="F" class="padding-right-lg" style="display: inline-block" icon-size="16">女
							</van-radio>
						</van-radio-group>
					</van-cell>
				</div>
				<van-field :value="idcard" type="idcard" clearable label="身份证号码" placeholder="请输入身份证号码" />
				<van-field :value="age" type="number" clearable label="年龄" placeholder="请输入年龄" />
				<van-field model:value="password" type="password" clearable label="登录密码" placeholder="请输入登录密码" />
				<van-field :value="password2" type="password" clearable label="确认密码" placeholder="请再次输入密码确认" />
				<van-field :value="number" type="telephone" clearable label="手机号码" placeholder="请输入手机号码" />
				<van-field :value="smscode" center clearable label="短信验证码" placeholder="请输入短信验证码" use-button-slot>
					<van-button slot="button" size="small" type="primary">发送验证码</van-button>
				</van-field>
				<van-field :value="imageCode" center clearable label="图形校验码" placeholder="请输入图形校验码" use-button-slot>
					<van-image slot="right-icon" @click="GetImageCode" width="78" height="30" :src="image" />
				</van-field>
			</van-cell-group>
			<div class="padding-lr padding-top-lg">
				<van-button type="primary" @click="subRegist" block>立即注册</van-button>
			</div>
		</div>
	</scroll-view>
</template>

<script>
	export default {
		name: 'regist',
		data() {
			return {
				sexId: 'M',
				image: '',
				imageCode: '',
				patientName: '',
				telphone: '',
				smscode: '',
				idcard: '',
				age: '',
				password: '',
				password2: ''
			};
		},
		created() {
			this.GetImageCode();
		},
		mounted() {

		},
		methods: {
			subRegist() {
				console.log(this.password);
				// this.$request('/ValidationCode/TryValidateImageCode', {
				// 	imageCode: this.imageCode
				// }, "POST").then(res => {
				// 	this.image = res.image
				// })
			},
			changeSex(e) {
				this.sexId = e.detail
			},
			GetImageCode() {
				this.$request('/ValidationCode/GetImageCode').then(res => {
					this.image = res.image
				})
			}
		},
	};
</script>

<style>
	.mycell {
		display: flex;
		margin: 0 16px;
		padding: 10px 0px;
		color: #646566;
		border-bottom: 1px solid #ececec;
	}

	.mycell .myfield {
		display: inline-block;
		max-width: 6.2em;
		min-width: 6.2em;
		margin-right: 8px;
	}
</style>