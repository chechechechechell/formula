<template>
	<view class="whCenter" style="flex-direction: column;">
		<view class="wCenter" style="flex-direction: column;width: 94%;padding: 0 0 50upx;">
			<image src="../../static/book.jpg" mode="aspectFit" style="width: 120upx;height: 100upx;margin: 50upx auto 30upx;"></image>
			<navigator :key="index" class="" v-for="(item,index) in juniorChemistry" :url="'../chemistryDetail/chemistryDetail?id='+index" hover-class="none" style="margin-top: 18upx;">
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
				juniorChemistry: [{
						name: '相对原子质量',
					},{
						name: '相对分子质量及质量比及质量分数',
					},{
						name: '混合物中含某物质的质量分数（纯度）',
					},{
						name: '标准状况下气体密度（g/L）',
					},{
						name: '纯度',
					},{
						name: '溶质的质量分数',
					},{
						name: '溶液的稀释与浓缩',
					},{
						name: '相对溶质不同质量分数的两种溶液混合',
					},{
						name: '溶液中溶质的质量',
					},{
						name: '镁在空气中燃烧',
					},{
						name: '铁在氧气中燃烧',
					},{
						name: '铜在空气中受热',
					},{
						name: '铝在空气中燃烧',
					},{
						name: '氢气中空气中燃烧',
					},{
						name: '红磷在空气中燃烧',
					},{
						name: '硫粉在空气中燃烧',
					},{
						name: '碳在氧气中充分燃烧',
					},{
						name: '碳在氧气中不充分燃烧',
					},{
						name: '一氧化碳在氧气中燃烧',
					},{
						name: '甲烷在空气中燃烧',
					},{
						name: '酒精在空气中燃烧',
					},{
						name: '水在直流电的作用下分解',
					},{
						name: '加热碱式碳酸铜',
					},{
						name: '加热氯酸钾（有少量的二氧化锰）',
					},{
						name: '加热高锰酸钾',
					},{
						name: '碳酸不稳定而分解',
					},{
						name: '高温煅烧石灰石',
					},{
						name: '氢气还原氧化铜',
					},{
						name: '木炭还原氧化铜',
					},{
						name: '焦炭还原氧化铁',
					},{
						name: '焦炭还原四氧化三铁',
					},{
						name: '一氧化碳还原氧化铜',
					},{
						name: '一氧化碳还原氧化铁',
					},{
						name: '一氧化碳还原四氧化三铁',
					},{
						name: '锌和稀硫酸',
					},{
						name: '铁和稀硫酸',
					},{
						name: '镁和稀硫酸',
					},{
						name: '铝和稀硫酸',
					},{
						name: '锌和稀盐酸',
					},{
						name: '铁和稀盐酸',
					},{
						name: '镁和稀盐酸',
					},{
						name: '铝和稀盐酸',
					},{
						name: '铁和硫酸铜溶液反应',
					},{
						name: '锌和硫酸铜溶液反应',
					},{
						name: '氧化铁和稀盐酸反应',
					},{
						name: '氧化铁和稀硫酸反应',
					},{
						name: '氧化铜和稀盐酸反应',
					},{
						name: '氧化铜和稀硫酸反应',
					},{
						name: '氧化镁和稀硫酸反应',
					},{
						name: '氧化钙和稀盐酸反应',
					},{
						name: '氢氧化钠与二氧化碳反应',
					},{
						name: '氢氧化钠与二氧化硫反应',
					},{
						name: '氢氧化钠与三氧化硫反应',
					},{
						name: '氢氧化钙与二氧化碳反应',
					},{
						name: '氢氧化钙与二氧化硫反应',
					},{
						name: '盐酸和氢氧化钠反应',
					},{
						name: '盐酸和氢氧化钾反应',
					},{
						name: '盐酸和氢氧化铜反应',
					},{
						name: '盐酸和氢氧化钙反应',
					},{
						name: '盐酸和氢氧化铁反应',
					},{
						name: '氢氧化铝药物治疗胃酸过多',
					},{
						name: '氢氧化钠与硫酸铜反应',
					},{
						name: '硫酸和氢氧化钾反应',
					},{
						name: '硫酸和氢氧化铜反应',
					},{
						name: '硫酸和氢氧化铁反应',
					},{
						name: '氢氧化钠与硝酸反应',
					},{
						name: '碳酸钙与稀盐酸反应',
					},{
						name: '碳酸钠与稀盐酸反应',
					},{
						name: '碳酸镁与稀盐酸反应',
					},{
						name: '盐酸和硝酸银溶液反应',
					},{
						name: '硫酸和碳酸钠反应',
					},{
						name: '硫酸和氯化钡溶液反应',
					},{
						name: '氢氧化钠与硫酸铜',
					},{
						name: '氢氧化钠与氯化铁',
					},{
						name: '氢氧化钠与氯化镁',
					},{
						name: '氢氧化钠与氯化铜',
					},{
						name: '氢氧化钙与碳酸钠',
					},{
						name: '氯化钠溶液和硝酸银溶液',
					},{
						name: '硫酸钠和氯化钡',
					},{
						name: '二氧化碳溶解于水',
					},{
						name: '氧化钙跟水反应',
					},{
						name: '氧化钠溶于水',
					},{
						name: '三氧化硫溶于水',
					},{
						name: '硫酸铜晶体受热分解',
					},{
						name: '无水硫酸铜作干燥剂',
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
