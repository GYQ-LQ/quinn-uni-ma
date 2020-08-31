<template name="report">
	<div>
		<van-empty
			v-if="reportList.length==0"
			description="暂无报告数据"
		/>
		<div
			v-else
			class="padding"
		>
			<navigator
				url="/pages/report/info/info"
				hover-class="none"
				class="bg-white padding margin-bottom radius"
				v-for="(item,index) in reportList"
				:key="index"
			>
				<div class="text-black text-lg padding-bottom-xs">张三</div>
				<span class="text-grey">Log into StackBlitz so you can save and resume your work. If you have a GitHub account, you can log into StackBlitz with that account. In order to save your progress, first fork the project using the Fork button at the top left, then you'll be able to save your work to your own StackBlitz account by clicking the Save button.</span>
			</navigator>
		</div>
	</div>
</template>

<script>
export default {
	name: 'report',
	data() {
		return {
			name: 'report',
			reportList: [1, 2, 3, 4]
		};
	},
};
</script>

<style></style>
