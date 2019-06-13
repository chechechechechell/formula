<template>
	<view>
		<view class="body">
            <view class="content">
                <view class="whCenter" style="flex-direction: column;margin-top: 50upx;">
					<text class="" style="font-size: 40upx;">{{imgList[optionId].name}}</text>
                    <image style="width: 90%;" mode="aspectFit" :src="imgList[optionId].src"></image>
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
						src: '/static/chemistryJunior0.png',
						name: '相对原子质量'
					},{
						src: '/static/chemistryJunior1.png',
						name: '相对分子质量及质量比及质量分数'
					},{
						src: '/static/chemistryJunior2.png',
						name: '混合物中含某物质的质量分数（纯度）'
					},{
						src: '/static/chemistryJunior3.png',
						name: '标准状况下气体密度（g/L）'
					},{
						src: '/static/chemistryJunior4.png',
						name: '纯度'
					},{
						src: '/static/chemistryJunior5.png',
						name: '溶质的质量分数'
					},{
						src: '/static/chemistryJunior6.png',
						name: '溶液的稀释与浓缩'
					},{
						src: '/static/chemistryJunior7.png',
						name: '相对溶质不同质量分数的两种溶液混合'
					},{
						src: '/static/chemistryJunior8.png',
						name: '溶液中溶质的质量'
					},{
						src: '/static/chemistryJunior9.png',
						name: '镁在空气中燃烧'
					},{
						src: '/static/chemistryJunior10.png',
						name: '铁在氧气中燃烧'
					},{
						src: '/static/chemistryJunior11.png',
						name: '铜在空气中受热'
					},{
						src: '/static/chemistryJunior12.png',
						name: '铝在空气中燃烧'
					},{
						src: '/static/chemistryJunior13.png',
						name: '氢气中空气中燃烧'
					},{
						src: '/static/chemistryJunior14.png',
						name: '红磷在空气中燃烧'
					},{
						src: '/static/chemistryJunior15.png',
						name: '硫粉在空气中燃烧'
					},{
						src: '/static/chemistryJunior16.png',
						name: '碳在氧气中充分燃烧'
					},{
						src: '/static/chemistryJunior17.png',
						name: '碳在氧气中不充分燃烧'
					},{
						src: '/static/chemistryJunior18.png',
						name: '一氧化碳在氧气中燃烧'
					},{
						src: '/static/chemistryJunior19.png',
						name: '甲烷在空气中燃烧'
					},{
						src: '/static/chemistryJunior20.png',
						name: '酒精在空气中燃烧'
					},{
						src: '/static/chemistryJunior21.png',
						name: '水在直流电的作用下分解'
					},{
						src: '/static/chemistryJunior22.png',
						name: '加热碱式碳酸铜'
					},{
						src: '/static/chemistryJunior23.png',
						name: '加热氯酸钾（有少量的二氧化锰）'
					},{
						src: '/static/chemistryJunior24.png',
						name: '加热高锰酸钾'
					},{
						src: '/static/chemistryJunior25.png',
						name: '碳酸不稳定而分解'
					},{
						src: '/static/chemistryJunior26.png',
						name: '高温煅烧石灰石'
					},{
						src: '/static/chemistryJunior27.png',
						name: '氢气还原氧化铜'
					},{
						src: '/static/chemistryJunior28.png',
						name: '木炭还原氧化铜'
					},{
						src: '/static/chemistryJunior29.png',
						name: '焦炭还原氧化铁'
					},{
						src: '/static/chemistryJunior30.png',
						name: '焦炭还原四氧化三铁'
					},{
						src: '/static/chemistryJunior31.png',
						name: '一氧化碳还原氧化铜'
					},{
						src: '/static/chemistryJunior32.png',
						name: '一氧化碳还原氧化铁'
					},{
						src: '/static/chemistryJunior33.png',
						name: '一氧化碳还原四氧化三铁'
					},{
						src: '/static/chemistryJunior34.png',
						name: '锌和稀硫酸'
					},{
						src: '/static/chemistryJunior35.png',
						name: '铁和稀硫酸'
					},{
						src: '/static/chemistryJunior36.png',
						name: '镁和稀硫酸'
					},{
						src: '/static/chemistryJunior37.png',
						name: '铝和稀硫酸'
					},{
						src: '/static/chemistryJunior38.png',
						name: '锌和稀盐酸'
					},{
						src: '/static/chemistryJunior39.png',
						name: '铁和稀盐酸'
					},{
						src: '/static/chemistryJunior40.png',
						name: '镁和稀盐酸'
					},{
						src: '/static/chemistryJunior41.png',
						name: '铝和稀盐酸'
					},{
						src: '/static/chemistryJunior42.png',
						name: '铁和硫酸铜溶液反应'
					},{
						src: '/static/chemistryJunior43.png',
						name: '锌和硫酸铜溶液反应'
					},{
						src: '/static/chemistryJunior44.png',
						name: '氧化铁和稀盐酸反应'
					},{
						src: '/static/chemistryJunior45.png',
						name: '氧化铁和稀硫酸反应'
					},{
						src: '/static/chemistryJunior46.png',
						name: '氧化铜和稀盐酸反应'
					},{
						src: '/static/chemistryJunior47.png',
						name: '氧化铜和稀硫酸反应'
					},{
						src: '/static/chemistryJunior48.png',
						name: '氧化镁和稀硫酸反应'
					},{
						src: '/static/chemistryJunior49.png',
						name: '氧化钙和稀盐酸反应'
					},{
						src: '/static/chemistryJunior50.png',
						name: '氢氧化钠与二氧化碳反应'
					},{
						src: '/static/chemistryJunior51.png',
						name: '氢氧化钠与二氧化硫反应'
					},{
						src: '/static/chemistryJunior52.png',
						name: '氢氧化钠与三氧化硫反应'
					},{
						src: '/static/chemistryJunior53.png',
						name: '氢氧化钙与二氧化碳反应'
					},{
						src: '/static/chemistryJunior54.png',
						name: '氢氧化钙与二氧化硫反应'
					},{
						src: '/static/chemistryJunior55.png',
						name: '盐酸和氢氧化钠反应'
					},{
						src: '/static/chemistryJunior56.png',
						name: '盐酸和氢氧化钾反应'
					},{
						src: '/static/chemistryJunior57.png',
						name: '盐酸和氢氧化铜反应'
					},{
						src: '/static/chemistryJunior58.png',
						name: '盐酸和氢氧化钙反应'
					},{
						src: '/static/chemistryJunior59.png',
						name: '盐酸和氢氧化铁反应'
					},{
						src: '/static/chemistryJunior60.png',
						name: '氢氧化铝药物治疗胃酸过多'
					},{
						src: '/static/chemistryJunior61.png',
						name: '氢氧化钠与硫酸铜反应'
					},{
						src: '/static/chemistryJunior62.png',
						name: '硫酸和氢氧化钾反应'
					},{
						src: '/static/chemistryJunior63.png',
						name: '硫酸和氢氧化铜反应'
					},{
						src: '/static/chemistryJunior64.png',
						name: '硫酸和氢氧化铁反应'
					},{
						src: '/static/chemistryJunior65.png',
						name: '氢氧化钠与硝酸反应'
					},{
						src: '/static/chemistryJunior66.png',
						name: '碳酸钙与稀盐酸反应'
					},{
						src: '/static/chemistryJunior67.png',
						name: '碳酸钠与稀盐酸反应'
					},{
						src: '/static/chemistryJunior68.png',
						name: '碳酸镁与稀盐酸反应'
					},{
						src: '/static/chemistryJunior69.png',
						name: '盐酸和硝酸银溶液反应'
					},{
						src: '/static/chemistryJunior70.png',
						name: '硫酸和碳酸钠反应'
					},{
						src: '/static/chemistryJunior71.png',
						name: '硫酸和氯化钡溶液反应'
					},{
						src: '/static/chemistryJunior72.png',
						name: '氢氧化钠与硫酸铜'
					},{
						src: '/static/chemistryJunior73.png',
						name: '氢氧化钠与氯化铁'
					},{
						src: '/static/chemistryJunior74.png',
						name: '氢氧化钠与氯化镁'
					},{
						src: '/static/chemistryJunior75.png',
						name: '氢氧化钠与氯化铜'
					},{
						src: '/static/chemistryJunior76.png',
						name: '氢氧化钙与碳酸钠'
					},{
						src: '/static/chemistryJunior77.png',
						name: '氯化钠溶液和硝酸银溶液'
					},{
						src: '/static/chemistryJunior78.png',
						name: '硫酸钠和氯化钡'
					},{
						src: '/static/chemistryJunior79.png',
						name: '二氧化碳溶解于水'
					},{
						src: '/static/chemistryJunior80.png',
						name: '氧化钙跟水反应'
					},{
						src: '/static/chemistryJunior81.png',
						name: '氧化钠溶于水'
					},{
						src: '/static/chemistryJunior82.png',
						name: '三氧化硫溶于水'
					},{
						src: '/static/chemistryJunior83.png',
						name: '硫酸铜晶体受热分解'
					},{
						src: '/static/chemistryJunior84.png',
						name: '无水硫酸铜作干燥剂'
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
