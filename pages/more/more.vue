<template>
	<view>
		<button open-type="share">
			<nx-cell icon="/static/share.png" border title="分享给好友"></nx-cell>
		</button>
		<button open-type="contact">
			<nx-cell title="我要吐槽" icon="/static/service.png"></nx-cell>
		</button>
		<view class="hCenter" style="color: #957B30;flex-direction: column;font-size: 26upx;position: fixed;bottom: 10upx;left: 20%;">
			<!-- <text>『公式大全2』是一款查询各类公式的神器，现处于项目创建阶段，功能会逐步完善。</text>
			<text>您的支持和反馈是我们最大的动力，喜欢可以加入我的小程序。</text> -->
			<text>©liuli作品 V1.0.0</text>
			<text>本程序所有资料均来自互联网，仅供参考</text>
		</view>
	</view>
</template>

<script>
	import nxCell from '../../components/nx-cell.vue';
	import guide from '../../components/guide.vue';
	
	export default {
		data() {
			return {}
		},
		methods: {
			onShareAppMessage() {
				return {
					title: '公式大全2',
					path: '/pages/index/index',
					imageUrl:'../../static/shareImg.png'
				}
			},
		},
		components: {
			nxCell
		}
	}
</script>

<style>
	button {
		padding: 0;
		line-height: 1.6;
		font-size: initial;
		text-align: initial;
		border-radius: inherit;
	}
	button:after {
		border: none;
		border-radius: 0;
	}
</style>