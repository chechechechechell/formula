<template>
	<view>
		<view class="body">
            <view class="content" v-for="(item,index) in imgList" :key="index" v-show='item.show'>
                <view class="whCenter" style="flex-direction: column;margin-top: 50upx;">
					<text class="" style="font-size: 40upx;">{{item.name}}</text>
                    <image style="width: 80%;" mode="aspectFit" :src="item.src"></image>
                </view>
            </view>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [{
						show:false,
						name: '绝对值运算',
						src: '/static/mathJunior0.png'
					},{
						show:false,
						name: '有理数的运算',
						src: '/static/mathJunior1.png'
					},{
						show:false,
						name: '整式的乘法运算',
						src: '/static/mathJunior2.png'
					},{
						show:false,
						name: '整式除法公式',
						src: '/static/mathJunior3.png'
					},{
						show:false,
						name: '分式的运算公式',
						src: '/static/mathJunior4.png'
					},{
						show:false,
						name: '一元二次方程',
						src: '/static/mathJunior5.png'
					},{
						show:false,
						name: '因式分解',
						src: '/static/mathJunior6.png'
					},{
						show:false,
						name: '不等式',
						src: '/static/mathJunior7.png'
					},{
						show:false,
						name: '二次根式',
						src: '/static/mathJunior8.png'
					},{
						show:false,
						name: '角',
						src: '/static/mathJunior9.png'
					},{
						show:false,
						name: '三角形',
						src: '/static/mathJunior10.png'
					},{
						show:false,
						name: '四边形',
						src: '/static/mathJunior11.png'
					},{
						show:false,
						name: '比例性质',
						src: '/static/mathJunior12.png'
					},{
						show:false,
						name: '三角函数',
						src: '/static/mathJunior13.png'
					},{
						show:false,
						name: '与圆有关的公式',
						src: '/static/mathJunior14.png'
					},{
						show:false,
						name: '点与圆的位置',
						src: '/static/mathJunior15.png'
					},{
						show:false,
						name: '直线与圆的位置',
						src: '/static/mathJunior16.png'
					},{
						show:false,
						name: '两圆的位置',
						src: '/static/mathJunior17.png'
					},
				]
			}
		},
		onLoad(options) {
			for(let i = 0; i< this.imgList.length;i++){
				if(options.id == i){
					this.imgList[i].show = true;
				}
			}
        },
		methods: {
			
		}
	}
</script>

<style>
	
</style>
