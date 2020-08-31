<template name="order">
	<scroll-view
		scroll-y
		class="page"
	>
		<van-empty
			v-if="orderList.length==0"
			description="暂无任何预约订单"
		/>
	</scroll-view>
</template>

<script>
export default {
	name: 'order',
	data() {
		return {
			name: 'order',
			orderList: []
		};
	},
};
</script>

<style></style>
