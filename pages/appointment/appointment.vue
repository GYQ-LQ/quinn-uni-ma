<template name="appointment">
	<scroll-view
		scroll-y
		class="page"
	>
		<van-empty
			description="暂无预约套餐"
			image='search'
		/>
	</scroll-view>
</template>

<script>
export default {
	name: 'appointment',
	data() {
		return {
			name: 'appointment',
		};
	},
	mounted() {
		uni.navigateTo({
			url: '/pages/mine/login/login'
		});;
	},
};
</script>

<style></style>
