<template>
	<view>
		<view class="body">
            <view class="content">
                <view class="whCenter" style="flex-direction: column;margin-top: 50upx;">
					<text class="" style="font-size: 40upx;">{{imgList[optionId].name}}</text>
                    <image style="width: 100%;" mode="widthFix" :src="imgList[optionId].src"></image>
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
						name: '重力',
						src: '/static/physicsJunior0.png'
					},{
						name: '密度',
						src: '/static/physicsJunior1.png'
					},{
						name: '压强',
						src: '/static/physicsJunior2.png'
					},{
						name: '液体压强',
						src: '/static/physicsJunior3.png'
					},{
						name: '速度',
						src: '/static/physicsJunior4.png'
					},{
						name: '同直线二力的合成',
						src: '/static/physicsJunior5.png'
					},{
						name: '阿基米德原理',
						src: '/static/physicsJunior6.png'
					},{
						name: '功',
						src: '/static/physicsJunior7.png'
					},{
						name: '功率',
						src: '/static/physicsJunior8.png'
					},{
						name: '杠杆平衡条件',
						src: '/static/physicsJunior9.png'
					},{
						name: '机械功率',
						src: '/static/physicsJunior10.png'
					},{
						name: '热学',
						src: '/static/physicsJunior11.png'
					},{
						name: '静力学',
						src: '/static/physicsSenior1.png'
					},{
						name: '运动学',
						src: '/static/physicsSenior2.png'
					},{
						name: '动力学',
						src: '/static/physicsSenior3.png'
					},{
						name: '冲量与动量、功和能',
						src: '/static/physicsSenior4.png'
					},{
						name: '振动和波',
						src: '/static/physicsSenior5.png'
					},{
						name: '高中热学',
						src: '/static/physicsSenior6.png'
					},{
						name: '电磁学',
						src: '/static/physicsSenior7.png'
					},{
						name: '光学、原子物理',
						src: '/static/physicsSenior8.png'
					},{
						name: '近代物理',
						src: '/static/physicsSenior9.png'
					}
				]
			}
		},
		onLoad(options) {
			this.optionId = options.id;
        },
		methods: {
			
		}
	}
</script>

<style>
	
</style>
