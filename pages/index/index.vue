<template>
	<view>
<!-- 		<view class="whCenter searchBody">
			<input class="inputText" v-model="searchName" @input='isShow' type="text" value="" placeholder="搜索"
			 placeholder-style="color:#d6d6d6;" />
			<i class="clearInput" @click="clearInput" v-show='show'></i>
		</view> -->
		<view class="whCenter" style='margin-top: 30%'>
			<navigator :key='item.key' class="whCenter itemStyle" v-for="item in subjects" :url="item.url" hover-class="none">
                <button hover-class="btn-hover" style="background-color: #FFFFFF;" >{{item.name}}</button>
            </navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchName: '',
				show: false,
				subjects: [
					{
						name: '数学',
						url:'../mathematics/mathematics'
					},
					{
						name: '物理',
						url:'../physics/physics'
					},
					{
						name: '化学',
						url:'../chemistry/chemistry'
					}
				],
			}
		},
		onLoad() {

		},
		methods: {
			toMath() {
				uni.navigateTo({
					url: '../mathematics/mathematics'
				})
			},
			isShow() {
				if (this.searchName != '') {
					this.show = true
				} else {
					this.show = false
				}
				
			},
			clearInput() {
				this.searchName = '';
				this.show = false;
			}
		}
	}
</script>

<style>
	.searchBody {
		position: relative;
		height: 100upx;
		border-bottom: 1upx solid #d7d6dc;
	}

	.inputText {
		width: 78%;
		height: 68upx;
		text-align: left;
		padding: 0 60upx;
		border-radius: 10upx;
		border: 1upx solid #e6e6ea;
		font-size: 32upx;
		background: #ffffff url(../../static/search@2x.png) no-repeat 20upx center;
		background-size: 28upx;
	}

	.clearInput {
		display: inline-block;
		position: absolute;
		width: 70upx;
		height: 50%;
		background: url(../../static/clear.png) no-repeat center;
		background-size: 34upx;
		right: 30upx;
	}

	.itemStyle {
		width: 200upx;
		height: 300upx;
		background-color: #fff;
		margin-right: 24upx;
		box-shadow: 0 15upx 30upx rgba(0,0,0,0.1);
		/* transform: translate3d(0,-2upx,0); */
	}
</style>
