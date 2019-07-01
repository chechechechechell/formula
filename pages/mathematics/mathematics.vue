<template>
	<view class="whCenter" style="flex-direction: column;">
		<view class="wCenter" style="flex-direction: column;width: 94%;padding: 0 0 50upx;">
			<image src="../../static/book.png" mode="aspectFit" style="width: 120upx;height: 100upx;margin: 50upx auto 30upx;"></image>
			<navigator :key="index" class="" v-for="(item,index) in juniorMath" :url="'../mathDetail/mathDetail?id='+index" hover-class="none" style="margin-top: 18upx;">
				<button hover-class="btn-hover" style="background-color: #FFFFFF;text-align: left;">
					<text style="color:#666;padding-right: 26upx;width: 80upx;display: inline-block;">1.{{index}}</text>
					<text style="color: #000;">{{item.name}}</text>
				</button>
			</navigator>
		</view>
		<view style="color: #00B26A;padding-bottom: 60upx;font-size: 34upx;">更多公式，敬请期待...</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				juniorMath: [{
						name: '绝对值运算',
					},{
						name: '有理数的运算',
					},{
						name: '整式的乘法运算',
					},{
						name: '整式除法公式',
					},{
						name: '分式的运算公式',
					},{
						name: '一元二次方程',
					},{
						name: '因式分解',
					},{
						name: '不等式',
					},{
						name: '二次根式',
					},{
						name: '角',
					},{
						name: '三角形',
					},{
						name: '四边形',
					},{
						name: '比例性质',
					},{
						name: '三角函数',
					},{
						name: '与圆有关的公式',
					},{
						name: '点与圆的位置',
					},{
						name: '直线与圆的位置',
					},{
						name: '两圆的位置',
					},{
						name: '集合、函数',
					},{
						name: '数列',
					},{
						name: '不等式',
					},{
						name: '复数',
					},{
						name: '排列组合与二项式定理',
					},{
						name: '三角函数同角关系',
					},{
						name: '三角函数诱导公式',
					},{
						name: '三角函数和差公式',
					},{
						name: '三角函数倍角公式',
					},{
						name: '三角函数半角公式',
					},{
						name: '三角函数万能公式',
					},{
						name: '三角函数正弦定理',
					},{
						name: '三角函数余弦定理',
					},{
						name: '向量的加法',
					},{
						name: '向量减法',
					},{
						name: '实数与向量的积',
					},{
						name: '直线方程',
					},{
						name: '两点距离、定比分点',
					},{
						name: '两直线关系',
					},{
						name: '圆锥曲线',
					},{
						name: '空间两直线平行判定',
					},{
						name: '空间两直线垂直判定',
					},{
						name: '直线与平面平行',
					},{
						name: '直线与平面垂直',
					},{
						name: '平面与平面平行',
					},{
						name: '平面与平面垂直',
					},{
						name: '几何体的侧面积',
					},{
						name: '几何体的体积',
					},{
						name: '概率与统计',
					},{
						name: '极限',
					},{
						name: '导数',
					},{
						name: '微分',
					},{
						name: '不定积分',
					},{
						name: '定积分',
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
