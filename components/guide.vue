<template>
	<view class="guide-box" v-if="mr">
		<view class="guide-box-arrow" :style="{right:mr}"></view>
		<view class="guide-box-content">添加到我的小程序，找我更方便</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		computed: {
			mr() {
				let s = wx.getSystemInfoSync();
				let sys = s.system;
				let r = '';
				if (sys.includes('iOS')) {
					r = 56
				} else {
					r = 67
				}
				return `${r}px`
			}
		}
	}
</script>

<style>
	.guide-box {
		position: fixed;
		right: 10rpx;
		top: 0;
		width: 80%;
		z-index: 10;
	}
	.guide-box-arrow {
		width: 0;
		height: 0;
		border-width: 0 20rpx 15rpx;
		border-style: solid;
		border-color: transparent transparent #444;
		position: absolute;
		right: 16%;
	}
	.guide-box-content {
		float: right;
		margin: 10rpx 10rpx;
		color: #fff;
		background-color: #444;
		font-size: 24rpx;
		line-height: 60rpx;
		text-align: center;
		padding: 0 20rpx;
		border-radius: 10rpx;
	}
</style>