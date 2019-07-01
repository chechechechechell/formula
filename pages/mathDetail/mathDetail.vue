<template>
	<view>
		<view class="body">
			<view class="content">
			    <view class="whCenter" style="flex-direction: column;margin-top: 50upx;">
					<text class="" style="font-size: 40upx;">{{imgList[optionId].name}}</text>
			        <image style="width: 100%" mode="widthFix" :src="imgList[optionId].src"></image>
			    </view>
			</view>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				optionId:0,
				imgList: [{
						name: '绝对值运算',
						src: '/static/mathJunior0.png'
					},{
						name: '有理数的运算',
						src: '/static/mathJunior1.png'
					},{
						name: '整式的乘法运算',
						src: '/static/mathJunior2.png'
					},{
						name: '整式除法公式',
						src: '/static/mathJunior3.png'
					},{
						name: '分式的运算公式',
						src: '/static/mathJunior4.png'
					},{
						name: '一元二次方程',
						src: '/static/mathJunior5.png'
					},{
						name: '因式分解',
						src: '/static/mathJunior6.png'
					},{
						name: '不等式',
						src: '/static/mathJunior7.png'
					},{
						name: '二次根式',
						src: '/static/mathJunior8.png'
					},{
						name: '角',
						src: '/static/mathJunior9.png'
					},{
						name: '三角形',
						src: '/static/mathJunior10.png'
					},{
						name: '四边形',
						src: '/static/mathJunior11.png'
					},{
						name: '比例性质',
						src: '/static/mathJunior12.png'
					},{
						name: '三角函数',
						src: '/static/mathJunior13.png'
					},{
						name: '与圆有关的公式',
						src: '/static/mathJunior14.png'
					},{
						name: '点与圆的位置',
						src: '/static/mathJunior15.png'
					},{
						name: '直线与圆的位置',
						src: '/static/mathJunior16.png'
					},{
						name: '两圆的位置',
						src: '/static/mathJunior17.png'
					},{
						name: '集合、函数',
						src: '/static/mathSenior1.png'
					},{
						name: '数列',
						src: '/static/mathSenior2.png'
					},{
						name: '不等式',
						src: '/static/mathSenior3.png'
					},{
						name: '复数',
						src: '/static/mathSenior4.png'
					},{
						name: '排列组合与二项式定理',
						src: '/static/mathSenior5.png'
					},{
						name: '三角函数同角关系',
						src: '/static/mathSenior6.png'
					},{
						name: '三角函数诱导公式',
						src: '/static/mathSenior7.png'
					},{
						name: '三角函数和差公式',
						src: '/static/mathSenior8.png'
					},{
						name: '三角函数倍角公式',
						src: '/static/mathSenior9.png'
					},{
						name: '三角函数半角公式',
						src: '/static/mathSenior10.png'
					},{
						name: '三角函数万能公式',
						src: '/static/mathSenior11.png'
					},{
						name: '三角函数正弦定理',
						src: '/static/mathSenior12.png'
					},{
						name: '三角函数余弦定理',
						src: '/static/mathSenior13.png'
					},{
						name: '向量的加法',
						src: '/static/mathSenior14.png'
					},{
						name: '向量减法',
						src: '/static/mathSenior15.png'
					},{
						name: '实数与向量的积',
						src: '/static/mathSenior16.png'
					},{
						name: '直线方程',
						src: '/static/mathSenior17.png'
					},{
						name: '两点距离、定比分点',
						src: '/static/mathSenior18.png'
					},{
						name: '两直线关系',
						src: '/static/mathSenior19.png'
					},{
						name: '圆锥曲线',
						src: '/static/mathSenior20.png'
					},{
						name: '空间两直线平行判定',
						src: '/static/mathSenior21.png'
					},{
						name: '空间两直线垂直判定',
						src: '/static/mathSenior22.png'
					},{
						name: '直线与平面平行',
						src: '/static/mathSenior23.png'
					},{
						name: '直线与平面垂直',
						src: '/static/mathSenior24.png'
					},{
						name: '平面与平面平行',
						src: '/static/mathSenior25.png'
					},{
						name: '平面与平面垂直',
						src: '/static/mathSenior26.png'
					},{
						name: '几何体的侧面积',
						src: '/static/mathSenior27.png'
					},{
						name: '几何体的体积',
						src: '/static/mathSenior28.png'
					},{
						name: '概率与统计',
						src: '/static/mathSenior29.png'
					},{
						name: '极限',
						src: '/static/mathSenior30.png'
					},{
						name: '导数',
						src: '/static/mathSenior31.png'
					},{
						name: '微分',
						src: '/static/mathSenior32.png'
					},{
						name: '不定积分',
						src: '/static/mathSenior33.png'
					},{
						name: '定积分',
						src: '/static/mathSenior34.png'
					}
				]
			}
		},
		onLoad(options) {
			this.optionId = options.id; // 获取上个页面传过来的item id
		},
		methods: {
			
		}
	}
</script>

<style>
	
</style>
