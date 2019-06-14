<template>
	<view class="whCenter" style="flex-direction: column;">
		<view class="wCenter" style="flex-direction: column;width: 94%;padding: 0 0 50upx;">
			<image src="../../static/book.png" mode="aspectFit" style="width: 120upx;height: 100upx;margin: 50upx auto 30upx;"></image>
			<navigator :key="index" class="" v-for="(item,index) in juniorPhysics" :url="'../physicsDetail/physicsDetail?id='+index" hover-class="none" style="margin-top: 18upx;">
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
				juniorPhysics: [{
						name: '重力',
					},{
						name: '密度',
					},{
						name: '压强',
					},{
						name: '液体压强',
					},{
						name: '速度',
					},{
						name: '同直线二力的合成',
					},{
						name: '阿基米德原理',
					},{
						name: '功',
					},{
						name: '功率',
					},{
						name: '杠杆平衡条件',
					},{
						name: '机械功率',
					},{
						name: '热学',
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
