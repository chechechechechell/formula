<template>
	<view>
		<view class="whCenter searchBody">
			<input class="inputText" v-model="searchName" @input='isShow' type="text" value="" placeholder="搜索"
			 placeholder-style="color:#d6d6d6;" />
			<i class="clearInput" @click="clearInput" v-show='show'></i>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchName: '',
				show: false

			}
		},
		onLoad() {

		},
		methods: {
			toDetail() {
				uni.navigateTo({
					url: '../detail/detail'
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
	.whCenter {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.wCenter {
		display: flex;
		justify-content: center;
	}

	.hCenter {
		display: flex;
		align-items: center;
	}

	.searchBody {
		position: relative;
		height: 100upx;
		border-bottom: 1upx solid #d7d6dc;
	}

	.inputText {
		width: 78%;
		height: 68%;
		text-align: left;
		padding: 0 60upx 0 60upx;
		border-radius: 10upx;
		border: 1upx solid #e6e6ea;
		font-size: 32upx;
		background: url(../../static/search@2x.png) no-repeat 20upx center;
		background-size: 28upx;
		background-color: #ffffff;
	}

	.clearInput {
		display: inline-block;
		position: absolute;
		width: 70upx;
		height: 50%;
		background: url(../../static/delete@2x.png) no-repeat center;
		background-size: 28upx;
		right: 24upx;
	}
</style>
