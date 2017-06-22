var app = new Vue({
	el: "#app",
	data: {
		categoryData: [],
		highlightData: [],
		salesData: [],
		commentActiveData: [],
		emotionAnalysisData: [],
		emotionTrendData: [],
		score:null,
	},
	created: function () {
		this.fetchData();
	},
	methods: {
		fetchData: function(){
			this.loadCategoryList();
			this.loadHighlightList();
			this.loadSalesList();
			this.loadCommentActiveList();
			this.loadEmotionAnalysisList();
			this.loadEmotionTrendList();
		},
		renderHeader: function(createElement, { column}) {
	        return createElement(
	          'div',
	          [
	            createElement('a', ['==' + column.label + '=='], {
	              attrs: {
	                href: '#test'
	              }
	            })
	          ]
	        );
	     },
		loadCategoryList: function(){
			this.categoryData = [{
				'1': 'Apple iPhone 6s Plus',
				'2': '32G 玫瑰金色 移动联通电信4G手机',
				'3': '￥4099.00',
			},{
				'1': 'Apple iPhone 7',
				'2': '128G 红色特别版 移动联通电信4G手机',
				'3': '￥5699.00',
			},{
				'1': 'Apple iPhone 6s',
				'2': '32G 金色 移动联通电信4G手机',
				'3': '￥3999.00',
			},]
		},
		loadHighlightList: function(){
			this.highlightData = [
			{
				'0': '双卡双待',
				'1': 'true',
				'2': 'false',
				'3': 'false',
				'4': 'false',
				'5': 'false',
			},{
				'0': '指纹识别',
				'1': 'true',
				'2': 'false',
				'3': 'false',
				'4': 'false',
				'5': 'false',
			},{
				'0': '拍照神器',
				'1': 'true',
				'2': 'false',
				'3': 'false',
				'4': 'false',
				'5': 'false',
			},
			{
				'0': '金属机身',
				'1': 'true',
				'2': 'false',
				'3': 'false',
				'4': 'false',
				'5': 'false',
			},{
				'0': '快速充电',
				'1': 'true',
				'2': 'false',
				'3': 'false',
				'4': 'false',
				'5': 'false',
			},{
				'0': '骁龙芯片',
				'1': 'true',
				'2': 'false',
				'3': 'false',
				'4': 'false',
				'5': 'false',
			},
			{
				'0': '以旧换新',
				'1': 'true',
				'2': 'false',
				'3': 'false',
				'4': 'false',
				'5': 'false',
			},{
				'0': '女性手机',
				'1': 'true',
				'2': 'false',
				'3': 'true',
				'4': 'false',
				'5': 'false',
			},{
				'0': '支持NFC',
				'1': 'true',
				'2': 'false',
				'3': 'false',
				'4': 'false',
				'5': 'false',
			},
			{
				'0': '直板键盘',
				'1': 'true',
				'2': 'false',
				'3': 'false',
				'4': 'false',
				'5': 'false',
			},{
				'0': '后置摄像头',
				'1': 'true',
				'2': 'false',
				'3': 'false',
				'4': 'false',
				'5': 'false',
			},{
				'0': '拍照神器',
				'1': 'true',
				'2': 'false',
				'3': 'true',
				'4': 'false',
				'5': 'false',
			},
			{
				'0': '双卡双待',
				'1': 'false',
				'2': 'false',
				'3': 'false',
				'4': 'false',
				'5': 'false',
			},{
				'0': '指纹识别',
				'1': 'false',
				'2': 'false',
				'3': 'false',
				'4': 'false',
				'5': 'false',
			},{
				'0': '拍照神器',
				'1': 'false',
				'2': 'false',
				'3': 'false',
				'4': 'false',
				'5': 'false',
			},{
				'0': '指纹识别',
				'1': 'false',
				'2': 'false',
				'3': 'false',
				'4': 'false',
				'5': 'false',
			},
			]
		},
		loadSalesList: function(){
			this.salesData = [
			{
				'1': 'MIUI/小米',
				'2': 'true',
				'3': '1222',
				'4': '3311',
				'5': '4333',
			},{
				'1': 'Apple/苹果',
				'2': 'true',
				'3': '1222',
				'4': '3311',
				'5': '4333',
			},{
				'1': 'Huawei/华为',
				'2': 'true',
				'3': '1222',
				'4': '3311',
				'5': '4333',
			},{
				'1': 'Samsung/三星',
				'2': 'true',
				'3': '1222',
				'4': '3311',
				'5': '4333',
			},{
				'1': 'VIVO',
				'2': 'true',
				'3': '1222',
				'4': '3311',
				'5': '4333',
			},
			]
		},
		loadCommentActiveList: function(){
			this.commentActiveData = [{
				'1': '京东',
				'2': '2W+',
				'3': '600+',
				'4': '100+',
				'5': '100+',
				'6': '50',
				'7': '8',
				'8': '1.5W',
			},{
				'1': '淘宝',
				'2': '2W+',
				'3': '500+',
				'4': '100+',
				'5': '130+',
				'6': '55',
				'7': '8',
				'8': '3.5W',
			},{
				'1': '天猫',
				'2': '0.9W+',
				'3': '300+',
				'4': '100+',
				'5': '100+',
				'6': '60',
				'7': '8',
				'8': '2.5W',
			},{
				'1': '唯品会',
				'2': '1.7W+',
				'3': '200+',
				'4': '100+',
				'5': '110+',
				'6': '70',
				'7': '8',
				'8': '2.3W',
			},]
		},
		loadEmotionAnalysisList: function(){
			this.emotionAnalysisData = [
			{
				'1': '外观及功能',
				'2': '[95,5]',
				'3': '2000',

			},
			{
				'1': '价格',
				'2': '[90,10]',
				'3': '1000',

			},
			{
				'1': '售后服务',
				'2': '[80,20]',
				'3': '1500',

			},
			{
				'1': '消费体验',
				'2': '[70,30]',
				'3': '1200',

			},
			]
		},
		loadEmotionTrendList: function(){
			this.emotionTrendData = [
			{
				'0': '点评数',
				'1': '9',
				'2': '4',
				'3': '4',
				'4': '23',
				'5': '10',
				'6': '15',
				'7': '8',
				'8': '6',
			},{
				'0': '好评率',
				'1': '88%',
				'2': '86%',
				'3': '84%',
				'4': '82%',
				'5': '80%',
				'6': '90%',
				'7': '100%',
				'8': '70%',
			},{
				'0': '好评数',
				'1': '1',
				'2': '0',
				'3': '0',
				'4': '0',
				'5': '0',
				'6': '0',
				'7': '0',
				'8': '1',
			},{
				'0': '中评数',
				'1': '0',
				'2': '0',
				'3': '0',
				'4': '0',
				'5': '0',
				'6': '1',
				'7': '0',
				'8': '0',
			},{
				'0': '差评数',
				'1': '0',
				'2': '0',
				'3': '0',
				'4': '1',
				'5': '0',
				'6': '0',
				'7': '0',
				'8': '0',
			},{
				'0': '无情感',
				'1': '0',
				'2': '0',
				'3': '0',
				'4': '0',
				'5': '0',
				'6': '0',
				'7': '0',
				'8': '0',
			},
			]
		},
	}
})
$(function(){
	lineGoodComment();
	commentCloud();
})
function lineGoodComment(){
	var lineGoodComment = echarts.init($(".chart--line--goodcomment")[0]);
	var option = {
		grid: {
			left: '35',
			right: '10',
			top: '26',
			bottom: '20'
		},
        tooltip: {},
        legend: {
            data:[{
            	name: '好评分数',
            	icon: 'circle',
            }],
            right: '0',
            top: '0',
            itemHeight: '9'
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data:['1月','2月','3月','4月','5月',],
            axisLine: {
	            lineStyle: {
	        		color: '#d7d7d7',
	        		width: 2,
	        	}
	        },
	        axisTick: {
	        	show: false,
	        },
	        axisLabel: {
	            textStyle: {
	            	color: '#000'
	            },
	        },
	        
        },
        yAxis: {
        	axisLine: {
	            show: false,
	        },
	        splitLine: {
	        	lineStyle: {
	        		color: '#f7f9fa',
	        	}
	        },
	        axisTick: {
	        	show: false,
	        },
	        max: 100,
        },
        series: [{
            name: '好评分数',
            type: 'line',
            lineStyle: {
            	normal: {
            		color: '#51a5de'
            	}
            	
            },
            itemStyle: {
            	normal: {
            		color: '#51a5de'
            	}
            	
            },
            'symbol': 'emptyCircle',
            symbolSize: 8,
            hoverAnimation: false,
            data: [
            	['1月', 10],
            	['2月', 30],
            	['3月', 40],
            	['4月', 20],
            	['5月', 80],
            ]
        }]
    };
    lineGoodComment.setOption(option)
}
function commentCloud(){
	var word_list = [
	    {text: "售后服务", weight: 9, link: "https://github.com/DukeLeNoir/jQCloud"},
	    {text: "以旧换新", weight: 9, html: {title: "My Title", "class": "custom-class"}, link: {href: "http://jquery.com/", target: "_blank"}},
	    {text: "送货速度", weight: 8},
	    {text: "包装精美", weight: 9},
	    {text: "潮流", weight: 8},
	    {text: "时尚", weight: 6.2},
	    {text: "耐用", weight: 5},
	    {text: "喜爱", weight: 5},
	    {text: "个性", weight: 5},
	    {text: "送人", weight: 4},
	    {text: "顺手", weight: 4},
	    {text: "实用", weight: 4},
	    {text: "礼物", weight: 3},
	    {text: "防水", weight: 3},
	];
    $(".cloud--comment1").jQCloud(word_list,{
//  	width: 300,
//  	height: 200,
    });
}
