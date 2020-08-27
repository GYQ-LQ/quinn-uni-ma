<template name="home">
	<scroll-view
		scroll-y
		style="background: lightblue"
		class="page"
	>
		<van-nav-bar
			title="quinn"
			:fixed="true"
		> </van-nav-bar>
		<span>quinn</span>
	</scroll-view>
</template> 

<script>
import Vue from "vue";
export default {
	data: () => ({
		name: 'quinn'
	}),
	methods: {},
	computed: {},
	watch: {},
	beforeCreate() {
		console.log('beforeCreate from ' + this.name);
	},
	created() {
		console.log('created from ' + this.name)
	},
	beforeUpdate() {
		console.log('beforeUpdate from ' + this.name)
	},
	updated() {
		console.log('updated from ' + this.name);
	},
	beforeMount() {
		console.log('beforeMount from ' + this.name);
	},
	mounted() {
		console.log('mounted from ' + this.name);
	},
	beforeDestroy() {
		console.log('beforeDestroy from ' + this.name);
	},
	destroyed() {
		console.log('destroyed from ' + this.name);
	},
	onLoad(options) { console.log('onLoad from ' + this.name) },
	onReady() { console.log('onReady from ' + this.name) },
	onShow() { console.log('onShow from ' + this.name) },
	onHide() { console.log('onHide from ' + this.name) },
	onUnload() { console.log('onUnload from ' + this.name) },
	onPullDownRefresh() { console.log('onPullDownRefresh from ' + this.name) },
	onReachBottom() { console.log('onReachBottom from ' + this.name) },
};
</script>

<style>
</style>
