<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text><br>
			<text class="name">{{name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'Hello',
				name:'zhuzhu'
			}
		},
		onLoad() {
	
		},
		methods: {
			
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
		/* width: 400upx; */
	}
	
	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}
	
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	
	.name {
		font-size: 46upx;
		color: #8f8f94;
	}
</style>
