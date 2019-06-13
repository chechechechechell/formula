<template>
	<view>
		<view class="body">
			<view class="content">
			    <view class="whCenter" style="flex-direction: column;margin-top: 50upx;">
					<text class="" style="font-size: 40upx;">{{imgList[optionId].name}}</text>
			        <image style="width: 80%;" mode="aspectFit" :src="imgList[optionId].src"></image>
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
					},
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
