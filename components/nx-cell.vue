<template>
	<view class="nx-cell hCenter" hover-class="nx-cell-active">
		<view class="nx-cell-left">
			<image class="nx-cell-icon" :src="icon"></image>
		</view>
		<view class="nx-cell-right hCenter" :class="border?'border-b':''">
			<text style="width: 90%">{{title}}</text>
			<image class="nx-cell-right2" src="../static/next.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		props: {
			icon: String,
			title: String,
			border: {
				type: Boolean,
				value: true
			}
		}
	}
</script>

<style scoped>
	.nx-cell {
		background: white;
		color: #353535;
	}

	.nx-cell-left {
		padding: 31upx 36upx;
	}

	.nx-cell-right {
		width: 100%;
		font-size: 36upx;
		padding: 31upx 0;
	}

	.nx-cell-icon {
		width: 40upx;
		height: 40upx;
	}

	.nx-cell-active {
		background-color: #e5e5e5;
	}

	.nx-cell-right2 {
		width: 60upx;
		height: 60upx;
	}

	.border-b {
		border-bottom: 1upx solid #F3F3F3;
	}
</style>
