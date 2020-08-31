<template>
	<div>
		<van-tabs :active="activeInd">
			<van-tab title="综述">
				<div class="padding bg-white margin-top-xs">Log into StackBlitz so you can save and resume your work. If you have a GitHub account, you can log into StackBlitz with that account. In order to save your progress, first fork the project using the Fork button at the top left, then you'll be able to save your work to your own StackBlitz account by clicking the Save button.</div>
			</van-tab>
			<van-tab title="建议">
				<div class="padding bg-white margin-top-xs">
					To copy a code example from this tutorial, click the icon at the top right of the code example box, and then paste the code snippet from the clipboard into StackBlitz.
				</div>
			</van-tab>
			<van-tab title="明细">
				<div class="padding bg-white margin-top-xs">When you generate the StackBlitz example apps that accompany the tutorials, StackBlitz creates the starter files and mock data for you. The files you'll use throughout the tutorials are in the src folder of the StackBlitz example apps.</div>
			</van-tab>
			<van-tab title="其他">
				<div class="padding bg-white margin-top-xs">Before going into the source structure, the next section shows how to fill out the HTML template for the product list, using the provided sample data. This should give you an idea how easy it is to modify and update the page dynamically.</div>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeInd: 0
		}
	}
}
</script>

<style>
</style>
