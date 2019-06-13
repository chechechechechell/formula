<template>
	<view>
		<view class="body">
            <view class="content" v-for="(item,index) in imgList" :key="index" v-show='item.show'>
                <view class="whCenter" style="flex-direction: column;margin-top: 50upx;">
					<text class="" style="font-size: 40upx;">{{item.name}}</text>
                    <image style="width: 90%;" mode="aspectFit" :src="item.src"></image>
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
						src: '/static/chemistryJunior0.png',
						name: '相对原子质量'
					},{
						show:false,
						src: '/static/chemistryJunior1.png',
						name: '相对分子质量及质量比及质量分数'
					},{
						show:false,
						src: '/static/chemistryJunior2.png',
						name: '混合物中含某物质的质量分数（纯度）'
					},{
						show:false,
						src: '/static/chemistryJunior3.png',
						name: '标准状况下气体密度（g/L）'
					},{
						show:false,
						src: '/static/chemistryJunior4.png',
						name: '纯度'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '溶质的质量分数'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '溶液的稀释与浓缩'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '相对溶质不同质量分数的两种溶液混合'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '溶液中溶质的质量'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '镁在空气中燃烧'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '铁在氧气中燃烧'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '铜在空气中受热'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '铝在空气中燃烧'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '氢气中空气中燃烧'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '红磷在空气中燃烧'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '硫粉在空气中燃烧'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '碳在氧气中充分燃烧'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '碳在氧气中不充分燃烧'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '一氧化碳在氧气中燃烧'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '甲烷在空气中燃烧'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '酒精在空气中燃烧'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '水在直流电的作用下分解'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '加热碱式碳酸铜'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '加热氯酸钾（有少量的二氧化锰）'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '加热高锰酸钾'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '碳酸不稳定而分解'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '高温煅烧石灰石'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '氢气还原氧化铜'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '木炭还原氧化铜'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '焦炭还原氧化铁'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '焦炭还原四氧化三铁'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '一氧化碳还原氧化铜'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '一氧化碳还原氧化铁'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '一氧化碳还原四氧化三铁'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '锌和稀硫酸'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '铁和稀硫酸'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '镁和稀硫酸'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '铝和稀硫酸'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '锌和稀盐酸'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '铁和稀盐酸'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '镁和稀盐酸'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '铝和稀盐酸'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '铁和硫酸铜溶液反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '锌和硫酸铜溶液反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '氧化铁和稀盐酸反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '氧化铁和稀硫酸反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '氧化铜和稀盐酸反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '氧化铜和稀硫酸反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '氧化镁和稀硫酸反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '氧化钙和稀盐酸反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '苛性钠暴露在空气中变质'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '苛性钠吸收二氧化硫气体'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '苛性钠吸收三氧化硫气体'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '消石灰放在空气中变质'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '消石灰吸收二氧化硫'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '盐酸和烧碱起反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '盐酸和氢氧化钾反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '盐酸和氢氧化铜反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '盐酸和氢氧化钙反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '盐酸和氢氧化铁反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '氢氧化铝药物治疗胃酸过多'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '硫酸和烧碱反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '硫酸和氢氧化钾反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '硫酸和氢氧化铜反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '硫酸和氢氧化铁反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '硝酸和烧碱反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '大理石与稀盐酸反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '碳酸钠与稀盐酸反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '碳酸镁与稀盐酸反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '盐酸和硝酸银溶液反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '硫酸和碳酸钠反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '硫酸和氯化钡溶液反应'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '氢氧化钠与硫酸铜'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '氢氧化钠与氯化铁'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '氢氧化钠与氯化镁'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '氢氧化钠与氯化铜'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '氢氧化钙与碳酸钠'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '氯化钠溶液和硝酸银溶液'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '硫酸钠和氯化钡'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '二氧化碳溶解于水'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '生石灰溶于水'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '氧化钠溶于水'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '三氧化硫溶于水'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '硫酸铜晶体受热分解'
					},{
						show:false,
						src: '/static/chemistryJunior0.png',
						name: '无水硫酸铜作干燥剂'
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
