<template>
	<view class="whCenter">
		<view class="wCenter" style="flex-direction: column;width: 94%;padding: 50upx 0;">
			<navigator :key='item.key' class="" v-for="(item,index) in juniorMath" url="../detail/detail" hover-class="none" style="margin-top: 18upx;">
				<button hover-class="btn-hover" style="background-color: #FFFFFF;text-align: left;">
					<text style="color:#999;padding-right: 10upx;width: 80upx;display: inline-block;">1.{{index}}</text>
					<text style="color: #666;">{{item.name}}</text></button>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				juniorMath: [{
						name: '绝对值运算',
					},
					{
						name: '有理数的运算',
					},
					{
						name: '整式的乘法运算',
					},
					{
						name: '整式乘法公式',
					},
					{
						name: '整式除法公式',
					},
					{
						name: '分式的运算公式',
					},
					{
						name: '一元二次方程',
					},
					{
						name: '因式分解',
					},
					{
						name: '不等式',
					},
					{
						name: '二次根式',
					},
					{
						name: '角',
					},
					{
						name: '三角形',
					},
					{
						name: '四边形',
					}, 
					{
						name: '比例性质',
					},
					{
						name: '三角函数',
					},
					{
						name: '与圆有关的公式',
					},
					{
						name: '点与圆的位置',
					},
					{
						name: '直线与圆的位置',
					},
					{
						name: '两圆的位置',
					}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>

</style>
