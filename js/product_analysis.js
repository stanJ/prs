var app = new Vue({
	el: "#app",
	data: {
		categoryData: [],
		highlightData: [],
		salesData: [],
		commentActiveData: [],
		emotionAnalysisData: [],
		emotionTrendData: [],
		productSalesData: [],
		promotionWaysData: [],
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
			this.loadProductSalesList();
			this.loadPromotionWaysList();
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
		
		loadPromotionWaysList: function(){
			this.promotionWaysData = [
			{
				'1': '团购',
				'2': '4356',
				'3': '4500',
				'4': '1%',
				'5': '京东',
			},
			{
				'1': '买赠',
				'2': '4356',
				'3': '4300',
				'4': '1%',
				'5': '天猫',
			},
			{
				'1': '捆绑',
				'2': '4256',
				'3': '4500',
				'4': '1%',
				'5': '中国电信',
			},
			{
				'1': '搭售',
				'2': '4356',
				'3': '4200',
				'4': '1%',
				'5': '淘宝',
			},
			{
				'1': '低价',
				'2': '3356',
				'3': '4500',
				'4': '1%',
				'5': '唯品会',
			},
			{
				'1': '免单',
				'2': '4356',
				'3': '3500',
				'4': '1%',
				'5': '小红书',
			},
			{
				'1': '秒杀',
				'2': '2356',
				'3': '4500',
				'4': '1%',
				'5': '亚马逊',
			},
			{
				'1': '积分',
				'2': '4356',
				'3': '4500',
				'4': '1%',
				'5': '美团',
			},
			{
				'1': '抽奖',
				'2': '1356',
				'3': '4500',
				'4': '1%',
				'5': '大众点评',
			},
			{
				'1': '打折',
				'2': '4356',
				'3': '4500',
				'4': '1%',
				'5': '苏宁易购',
			},
			{
				'1': '返券',
				'2': '4356',
				'3': '4500',
				'4': '1%',
				'5': '国美',
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
		loadProductSalesList: function(){
			this.productSalesData = [
			{
				'1': '季度1',
				'2': '4356',
				'3': '3000',
				'4': '1356',
				'5': '4500',
				'6': '1%',
				'7': '1%',
			},
			{
				'1': '季度2',
				'2': '4356',
				'3': '3200',
				'4': '1356',
				'5': '4500',
				'6': '1%',
				'7': '3%',
			},
			{
				'1': '季度3',
				'2': '4356',
				'3': '3010',
				'4': '1356',
				'5': '4500',
				'6': '2%',
				'7': '1%',
			},
			{
				'1': '季度4',
				'2': '4356',
				'3': '4000',
				'4': '1356',
				'5': '4520',
				'6': '1%',
				'7': '1%',
			},
			]
		},
	}
})
$(function(){
	lineGoodComment();
	userCommentCloud();
	goodsCommentCloud();
	basicLabel();
	barLabelOverView();
	hotKeyCloud();
	linePriceTrend();
	piePriceSpread();
	lineGoodReputation();
	radarHotSalesSpot();
})
function piePriceSpread(){
	var pie1 = echarts.init($(".chart--pie--price-spread")[0]);
	var option = {
		color: ['#0c4d90','#53a8e2','#2c82be','#76ddfb',],
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    series: [
	        {
	            name:'用户关注价格区间',
	            type:'pie',
	            radius: ['40%', '86%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                },
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:45, name:'淘宝'},
	                {value:30, name:'天猫'},
	                {value:20, name:'京东'},
	                {value:5, name:'唯品会'},
	            ]
	        }
	    ]
	};
	pie1.setOption(option)
}
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
function linePriceTrend(){
	var linePriceTrend = echarts.init($(".chart--line--product-price-trend")[0]);
	var option = {
		grid: {
			left: '10',
			right: '40',
			top: '40',
			bottom: '10',
			containLabel: true,
		},
        tooltip: {},
        legend: {
            data:[{
            	name: '价格',
            	icon: 'circle',
            }],
            right: '40',
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
	        max: 3500,
	        interval: 500,
        },
        series: [{
            name: '价格',
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
            	['1月', 500],
            	['2月', 1500],
            	['3月', 2000],
            	['4月', 1000],
            	['5月', 2200],
            ]
        }]
    };
    linePriceTrend.setOption(option)
}

function lineGoodReputation(){
	var lineGoodReputation = echarts.init($(".chart--line--good-reputation")[0]);
	var option = {
		grid: {
			left: '10',
			right: '40',
			top: '40',
			bottom: '10',
			containLabel: true,
		},
        tooltip: {},
        legend: {
            data:[{
            	name: '好评指数',
            	icon: 'circle',
            }],
            right: '40',
            top: '0',
            itemHeight: '9'
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data:['1月','2月','3月','4月','5月','6月'],
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
	        max: 70,
	        interval: 10,
        },
        series: [{
            name: '好评指数',
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
            data: [10,25,30,20,32,11]
        }]
    };
    lineGoodReputation.setOption(option)
}

function userCommentCloud(){
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
    $(".cloud--user-comment").jQCloud(word_list);
}
function goodsCommentCloud(){
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
    $(".cloud--goods-comment").jQCloud(word_list);
}
function hotKeyCloud(){
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
    $(".cloud--hot-key").jQCloud(word_list,{
//  	width: 300,
//  	height: 200,
    });
}
function basicLabel(){
	var b1 = echarts.init($(".chart--bar--basic-label1")[0]);
	var b2 = echarts.init($(".chart--bar--basic-label2")[0]);
	var option1 = {
		color: ['#66b4e7'],
	    grid: {
	        left: '20',
	        right: '20',
	        bottom: '0',
	        top: '0',
	        containLabel: true
	    },
	    xAxis: {
	    	show: false,
	        type: 'value',
	    },
	    yAxis: {
			inverse: true,
	        type: 'category',
	        data: ['系统流畅','外观漂亮','反应快','屏幕大','功能齐全','照相不错','分辨率高','指纹识别','通话质量好','性价比高'],
	        axisLine: {
	            show: false,
	        },
	        axisTick: {
	            show: false,
	        },
	        splitLine: {
	            show: false
	        },
	        axisLabel: {
	            textStyle: {
	                fontSize: '14',
	            },
	            margin: 18
	        }
	    },
	    series: [
	        {
	            name: '',
	            type: 'bar',
	            data: [508, 477, 433, 429, 420, 364,323,321,313,309],
	            barCategoryGap: '50%',
	            label: {
	            	normal: {
	            		show: true,
	            		position: 'right',
	            		offset: [5,0],
	            		textStyle: {
	            			fontSize: 13
	            		}
	            	},
	            	
	            	
	            }
	        },
	    ]
	};
	var option2 = {
		color: ['#3fc2d7'],
	    grid: {
	        left: '20',
	        right: '20',
	        bottom: '0',
	        top: '0',
	        containLabel: true
	    },
	    xAxis: {
	    	show: false,
	        type: 'value',
	        max: 100
	    },
	    yAxis: {
			inverse: true,
	        type: 'category',
	        data: ['高品质量和安全','是否正品','返修退货不方便','等待时间太长','操作流程繁琐','语言',],
	        axisLine: {
	            show: false,
	        },
	        axisTick: {
	            show: false,
	        },
	        splitLine: {
	            show: false
	        },
	        axisLabel: {
	            textStyle: {
	                fontSize: '14',
	            },
	            margin: 18
	        }
	    },
	    series: [
	        {
	            name: '',
	            type: 'bar',
	            data: [60, 51.0, 35.3, 34, 28.8, 13.7,],
	            barCategoryGap: '50%',
	            label: {
	            	normal: {
	            		show: true,
	            		position: 'right',
	            		offset: [5,0],
	            		textStyle: {
	            			fontSize: 13
	            		},
	            		formatter: '{c}%'
	            	},
	            	
	            	
	            }
	        },
	    ]
	};
	b1.setOption(option1);
	b2.setOption(option2);
}

function barLabelOverView(){
	var b1 = echarts.init($(".chart--bar-h1")[0]);
	var b2 = echarts.init($(".chart--bar-h2")[0]);
	var option1 = {
		color: ['#66b4e7'],
	    grid: {
	        left: '20',
	        right: '20',
	        bottom: '0',
	        top: '0',
	        containLabel: true
	    },
	    xAxis: {
	    	show: false,
	        type: 'value',
	    },
	    yAxis: {
			inverse: true,
	        type: 'category',
	        data: ['系统流畅','外观漂亮','反应快','屏幕大','功能齐全','照相不错','分辨率高','指纹识别','通话质量好','性价比高'],
	        axisLine: {
	            show: false,
	        },
	        axisTick: {
	            show: false,
	        },
	        splitLine: {
	            show: false
	        },
	        axisLabel: {
	            textStyle: {
	                fontSize: '14',
	            },
	            margin: 18
	        }
	    },
	    series: [
	        {
	            name: '',
	            type: 'bar',
	            data: [508, 477, 433, 429, 420, 364,323,321,313,309],
	            barCategoryGap: '50%',
	            label: {
	            	normal: {
	            		show: true,
	            		position: 'right',
	            		offset: [5,0],
	            		textStyle: {
	            			fontSize: 13
	            		}
	            	},
	            	
	            	
	            }
	        },
	    ]
	};
	var option2 = {
		color: ['#3fc2d7'],
	    grid: {
	        left: '20',
	        right: '20',
	        bottom: '0',
	        top: '0',
	        containLabel: true
	    },
	    xAxis: {
	    	show: false,
	        type: 'value',
	        max: 100
	    },
	    yAxis: {
			inverse: true,
	        type: 'category',
	        data: ['高品质量和安全','是否正品','返修退货不方便','等待时间太长','操作流程繁琐','语言',],
	        axisLine: {
	            show: false,
	        },
	        axisTick: {
	            show: false,
	        },
	        splitLine: {
	            show: false
	        },
	        axisLabel: {
	            textStyle: {
	                fontSize: '14',
	            },
	            margin: 18
	        }
	    },
	    series: [
	        {
	            name: '',
	            type: 'bar',
	            data: [60, 51.0, 35.3, 34, 28.8, 13.7,],
	            barCategoryGap: '50%',
	            label: {
	            	normal: {
	            		show: true,
	            		position: 'right',
	            		offset: [5,0],
	            		textStyle: {
	            			fontSize: 13
	            		},
	            		formatter: '{c}%'
	            	},
	            	
	            	
	            }
	        },
	    ]
	};
	b1.setOption(option1);
	b2.setOption(option2);
}

function radarHotSalesSpot(){
	var radar1 = echarts.init($(".chart--radar--hot-sales-spot")[0]);
	var option = {
		color: ['#a0b6e3','#63d0f4'],
	    title: {
	        text: '销售渠道',
	        left: 10,
	        top: 10,
	        textStyle: {
	        	fontSize: 17,
	        }
	    },
	    tooltip: {},
	    legend: {
            data:[{
            	name: '电商',
            	icon: 'circle',
            },{
            	name: '实体店',
            	icon: 'circle',
            },],
            left: '10',
            top: '45',
            itemHeight: '9'
        },
	    radar: {
	        indicator: [
	           { name: '春节', max: 100},
	           { name: '节假日', max: 100},
	           { name: '情人节', max: 100},
	           { name: '五一', max: 100},
	           { name: '国庆', max: 100},
	           { name: '双十一', max: 100}
	        ],
	        center: ['65%','50%'],
	        name: {
                textStyle: {
                    color: '#000'
                }
           },
            splitLine: {
                lineStyle: {
                    color: ['#bcd9ed','#d0e0ea']
                }
            },
            splitArea: {
                areaStyle: {
                    color: '#ecf0f3'
                }
            },
	    },
	    series: [{
//	        name: '预算 vs 开销（Budget vs spending）',
	        type: 'radar',
	        symbol: 'none',
	        data : [
	            {
	                value : [90, 55, 60, 60, 88, 90],
	                name : '电商',
	                areaStyle: {
                        normal: {
                            opacity: 0.6,
                            color: '#d2ddee'
                        }
                   },
                   lineStyle: {
                   		normal: {
                   			color: '#a5bae3'
                   		}
                   }
	            },
	            {
	                value : [40, 45, 45, 60, 40, 90],
	                name : '实体店',
	                areaStyle: {
                        normal: {
                            opacity: 0.6,
                            color: '#b0d0f1'
                        }
                   },
                   lineStyle: {
                   		normal: {
                   			color: '#6fd2f1'
                   		}
                   }
	            }
	        ]
	    }]
	};
	radar1.setOption(option);
}
