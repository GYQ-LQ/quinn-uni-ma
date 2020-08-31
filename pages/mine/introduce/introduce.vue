<template name="introduce">
	<scroll-view
		scroll-y
		class="page"
	>
		<div class="padding ">
			<van-image
				width="100%"
				height="400rpx"
				fit="cover"
				:src="img_url"
			/>
			<div class="padding">
				Log into StackBlitz so you can save and resume your work. If you have a GitHub account, you can log into StackBlitz with that account. In order to save your progress, first fork the project using the Fork button at the top left, then you'll be able to save your work to your own StackBlitz account by clicking the Save button.
				Log into StackBlitz so you can save and resume your work. If you have a GitHub account, you can log into StackBlitz with that account. In order to save your progress, first fork the project using the Fork button at the top left, then you'll be able to save your work to your own StackBlitz account by clicking the Save button.
				Log into StackBlitz so you can save and resume your work. If you have a GitHub account, you can log into StackBlitz with that account. In order to save your progress, first fork the project using the Fork button at the top left, then you'll be able to save your work to your own StackBlitz account by clicking the Save button.
			</div>
		</div>
	</scroll-view>
</template>

<script>
export default {
	name: 'introduce',
	data() {
		return {
			name: 'introduce',
			img_url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2486364639,1222604304&fm=26&gp=0.jpg'
		};
	},
};
</script>

<style></style>
