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
						name: '重力',
						src: '/static/physicsJunior0.png'
					},{
						show:false,
						name: '密度',
						src: '/static/physicsJunior1.png'
					},{
						show:false,
						name: '压强',
						src: '/static/physicsJunior2.png'
					},{
						show:false,
						name: '液体压强',
						src: '/static/physicsJunior3.png'
					},{
						show:false,
						name: '速度',
						src: '/static/physicsJunior4.png'
					},{
						show:false,
						name: '同直线二力的合成',
						src: '/static/physicsJunior5.png'
					},{
						show:false,
						name: '阿基米德原理',
						src: '/static/physicsJunior6.png'
					},{
						show:false,
						name: '功',
						src: '/static/physicsJunior7.png'
					},{
						show:false,
						name: '功率',
						src: '/static/physicsJunior8.png'
					},{
						show:false,
						name: '杠杆平衡条件',
						src: '/static/physicsJunior9.png'
					},{
						show:false,
						name: '机械功率',
						src: '/static/physicsJunior10.png'
					},{
						show:false,
						name: '热学',
						src: '/static/physicsJunior11.png'
					}
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
