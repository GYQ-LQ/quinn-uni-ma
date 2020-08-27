<template name="mine">
	<scroll-view
		scroll-y
		style="background: lightgreen"
		class="page"
	>
		<van-nav-bar
			title="我的"
			:fixed="true"
		> </van-nav-bar>
		<span>mine</span>
	</scroll-view>
</template>

<script>
export default {
	name: 'mine',
	data() {
		return {
			name: 'mine',
		};
	},
};
</script>


<style>
</style>

