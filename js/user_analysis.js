var app = new Vue({
	el: "#app",
	data: {
		pageStayData: [],
		pageAnalysisData: [],
		buyerAmountData: [],
		expensePlaceData: [],
		buyTimesData: [],
		pricesData: [],
		agesData: [],
		educationData: [],
		incomeData: [],
		sexData: [],
		score:null,
		pageNum: '',
		people: '',
	},
	created: function () {
		this.fetchData();
	},
	methods: {
		fetchData: function(){
			this.loadPageStayList();
			this.loadPageAnalysisList();
			this.loadBuyerAmountList();
			this.loadExpensePlaceList();
			this.loadBuyTimesList();
			this.loadPricesList();
			this.loadAgesList();
			this.loadEducationList();
			this.loadIncomeList();
			this.loadSexList();
			
		},
		loadPageStayList: function(){
			this.pageStayData = [
			{
				'1': '508',
				'2': '100%',
				'3': '256',
				'4': '256',
				'5': '1.56',
				'6': '55.68',
			},
			{
				'1': '159',
				'2': '90%',
				'3': '148',
				'4': '148',
				'5': '1.26',
				'6': '53.68',
			},
			{
				'1': '113',
				'2': '56%',
				'3': '96',
				'4': '96',
				'5': '1.16',
				'6': '52.68',
			},
			{
				'1': '94',
				'2': '15%',
				'3': '76',
				'4': '76',
				'5': '1.36',
				'6': '45.68',
			},
			{
				'1': '86',
				'2': '6.5%',
				'3': '50',
				'4': '50',
				'5': '1.54',
				'6': '55.68',
			},
			{
				'1': '52',
				'2': '4%',
				'3': '40',
				'4': '40',
				'5': '1.51',
				'6': '35.68',
			},
			{
				'1': '37',
				'2': '1.8%',
				'3': '30',
				'4': '30',
				'5': '1.86',
				'6': '25.68',
			},
			{
				'1': '24',
				'2': '2%',
				'3': '20',
				'4': '20',
				'5': '1.76',
				'6': '35.68',
			},
			{
				'1': '10',
				'2': '0.6%',
				'3': '10',
				'4': '10',
				'5': '1.56',
				'6': '55.68',
			},
			]
		},
		loadPageAnalysisList: function(){
			this.pageAnalysisData = [
			{
				'1': 'http://www.ui.cn/?p=2#project',
				'2': '64',
				'3': '1754',
			},
			{
				'1': 'http://www.cnblogs.com',
				'2': '54',
				'3': '1500',
			},
			{
				'1': 'http://www.ui.cn/?p=2#project',
				'2': '44',
				'3': '1214',
			},
			{
				'1': 'http://www.cnblogs.com',
				'2': '34',
				'3': '600',
			},
			{
				'1': 'http://www.ui.cn/?p=2#project',
				'2': '54',
				'3': '800',
			},
			{
				'1': 'http://www.cnblogs.com',
				'2': '14',
				'3': '400',
			},
			{
				'1': 'http://www.ui.cn/?p=2#project',
				'2': '24',
				'3': '520',
			},
			]
		},
		loadBuyerAmountList: function(){
			this.buyerAmountData = [{
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
				'4': 'xxx',
			},{
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
				'4': 'xxx',
			},{
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
				'4': 'xxx',
			},]
		},
		loadExpensePlaceList: function(){
			this.expensePlaceData = [{
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
				'4': 'xxx',
				'5': 'xxx',
			},{
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
				'4': 'xxx',
				'5': 'xxx',
			},{
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
				'4': 'xxx',
				'5': 'xxx',
			},]
		},
		loadBuyTimesList: function(){
			this.buyTimesData = [{
				'1': 'xxx',
				'2': 'xxx',
			},{
				'1': 'xxx',
				'2': 'xxx',
			},{
				'1': 'xxx',
				'2': 'xxx',
			},]
		},
		loadPricesList: function(){
			this.pricesData = [{
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
				'4': 'xxx',
				'5': 'xxx',
				'6': 'xxx',
			},{
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
				'4': 'xxx',
				'5': 'xxx',
				'6': 'xxx',
			},{
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
				'4': 'xxx',
				'5': 'xxx',
				'6': 'xxx',
			},]
		},
		loadAgesList: function(){
			this.agesData = [{
				'1': 'xxx',
				'2': 'xxx',
			},{
				'1': 'xxx',
				'2': 'xxx',
			},{
				'1': 'xxx',
				'2': 'xxx',
			},]
		},
		loadEducationList: function(){
			this.educationData = [{
				'1': 'xxx',
				'2': 'xxx',
			},{
				'1': 'xxx',
				'2': 'xxx',
			},{
				'1': 'xxx',
				'2': 'xxx',
			},]
		},
		loadIncomeList: function(){
			this.incomeData = [{
				'1': 'xxx',
				'2': 'xxx',
			},{
				'1': 'xxx',
				'2': 'xxx',
			},{
				'1': 'xxx',
				'2': 'xxx',
			},]
		},
		loadSexList: function(){
			this.sexData = [{
				'1': 'xxx',
				'2': 'xxx',
			},{
				'1': 'xxx',
				'2': 'xxx',
			},{
				'1': 'xxx',
				'2': 'xxx',
			},]
		},
	}
})
$(function(){
	lineVisitTime();
	lineVisitAmount();
//	commentCloud();
	lineO2O();
	personalityCloud();
	barBrandPrefer();
	radarAgeDiff();
})
function radarAgeDiff(){
	var radar1 = echarts.init($(".chart--radar-age-diff")[0]);
	var option = {
//		color: ['#a0b6e3','#63d0f4'],
//	    title: {
//	        text: '销售渠道',
//	        left: 10,
//	        top: 10,
//	        textStyle: {
//	        	fontSize: 17,
//	        }
//	    },
	    tooltip: {},
//	    legend: {
//          data:[{
//          	name: '电商',
//          	icon: 'circle',
//          },{
//          	name: '实体店',
//          	icon: 'circle',
//          },],
//          left: '10',
//          top: '45',
//          itemHeight: '9'
//      },
	    radar: {
	        indicator: [
	           { name: '生活需要', max: 100},
	           { name: '多买一辆', max: 100},
	           { name: '洗车吸引', max: 100},
	           { name: '工作需要', max: 100},
	           { name: '情感需要', max: 100},
	           { name: '收入增加', max: 100}
	        ],
	        center: ['50%','50%'],
	        name: {
                textStyle: {
                    color: '#000'
                }
           },
            splitLine: {
                lineStyle: {
                    color: ['#bcd9ed','#d0e0ea']
                },
//              show: false,
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
	            },
	            {
	                value : [40, 25, 80, 50, 30, 70],
	                name : '国外',
	                areaStyle: {
                        normal: {
                            opacity: 0.6,
                            color: '#c1d3c6'
                        }
                   },
                   lineStyle: {
                   		normal: {
                   			color: '#88bdb1'
                   		}
                   }
	            },
	        ]
	    }]
	};
	radar1.setOption(option);
}

function barBrandPrefer(){
	var b1 = echarts.init($(".chart--bar-brand-prefer")[0]);
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
	        max: 8,
	    },
	    yAxis: {
			inverse: true,
	        type: 'category',
	        data: ['IPone 6S PLUS','OPPO R9','OPPO R3','三星 GALAXY J7','三星 GALAXY J5','三星 GALAXY J2','OPPO R9 PLUS','三星 GALAXY GRAND','三星 GALAXY NEO','OPPP R7S'],
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
	            data: [1.7, 1.0, 0.9, 0.8, 0.7, 0.6,0.6,0.5,0.5,0.4],
	            barCategoryGap: '50%',
	            label: {
	            	normal: {
	            		show: true,
	            		position: 'right',
	            		offset: [5,-1],
	            		textStyle: {
	            			fontSize: 13,
	            			color: '#000'
	            		},
	            		formatter: '{c}%'
	            	},
	            	
	            	
	            }
	        },
	    ]
	};

	b1.setOption(option1);
}

function lineVisitTime(){
	var lineVisitTime = echarts.init($(".chart--line--visit-time")[0]);
	var option = {
		grid: {
			left: '35',
			right: '10',
			top: '26',
			bottom: '40'
		},
        tooltip: {},
        legend: {
            data:[
            {
            	name: '用户规模浏览时间(分钟)',
            	icon: 'circle',
            },
            {
            	name: '增长率',
            	icon: 'circle',
            },
            ],
            right: '0',
            top: '0',
            itemHeight: '9'
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data:['10分钟或以内','10-30分钟\n(含30分钟)','30分钟-1个小时\n(含1个小时)','1-2个小时\n(含2个小时)','2小时及以上'],
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
	            interval: 0,
	        },
        },
        yAxis: [
        	{
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
		        max: 350,
		        interval: 50,
	        },
        	{	
        		show: false,
		        max: 100,
		        min: 0,
	            name: '增长率',
	        },
        ],
        series: [
         {
            name:'用户规模浏览时间(分钟)',
            type:'bar',
            barWidth: '40%',
            itemStyle: {
            	normal: {
            		color: '#83b5ea'
            	}
            	
            },
            data:[200,300,180,60,100]
        },
        {
            name: '增长率',
            type: 'line',
            yAxisIndex: 1,
            lineStyle: {
            	normal: {
            		color: '#1ce7ba'
            	}
            	
            },
            itemStyle: {
            	normal: {
            		color: '#1ce7ba'
            	}
            	
            },
            'symbol': 'circle',
            symbolSize: 8,
            hoverAnimation: false,
            data: [24.7,33.1,18.8,10.4,12.9]
        },
       
        ]
    };
    lineVisitTime.setOption(option)
}	

function lineO2O(){
	var lineO2O = echarts.init($(".chart--line--o2o")[0]);
	var option = {
		grid: {
			left: '10',
			right: '10',
			top: '30',
			bottom: '10',
			containLabel: true,
		},
        tooltip: {},
        legend: {
            data:[
            {
            	name: '移动网络游戏用户规模(百万人)',
            	icon: 'circle',
            },
            {
            	name: '增长率',
            	icon: 'circle',
            },
            ],
            right: '0',
            top: '0',
            itemHeight: '9'
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data:['2015年4月','2015年5月','2015年6月','2015年7月','2015年8月','2015年9月','2015年10月','2015年11月','2015年12月',
            '2016年1月','2016年2月','2016年3月','2016年4月','2016年5月','2016年6月',],
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
	            interval: 2,
	        },
        },
        yAxis: [
        	{
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
		        max: 350,
		        interval: 50,
	        },
        	{	
        		show: false,
		        max: 100,
		        min: 0,
	            name: '增长率',
	        },
        ],
        series: [
         {
            name:'移动网络游戏用户规模(百万人)',
            type:'bar',
            barWidth: '40%',
            itemStyle: {
            	normal: {
            		color: '#83b5ea'
            	}
            	
            },
            data:[
            360,320,280,240,200,
            160,140,120,100,80,
            70,60,50,40,30,]
        },
        {
            name: '增长率',
            type: 'line',
            yAxisIndex: 1,
            lineStyle: {
            	normal: {
            		color: '#1ce7ba'
            	}
            	
            },
            itemStyle: {
            	normal: {
            		color: '#1ce7ba'
            	}
            	
            },
            'symbol': 'circle',
            symbolSize: 8,
            hoverAnimation: false,
            data: [
            24.7,33.1,18.8,10.4,12.9,
            24.7,33.1,18.8,10.4,12.9,
            24.7,33.1,18.8,10.4,12.9,
            ]
        },
       
        ]
    };
    lineO2O.setOption(option)
}	

function lineVisitAmount(){
	var lineVisitAmount = echarts.init($(".chart--line--visit-amount")[0]);
	var option = {
		grid: {
			left: '50',
			right: '10',
			top: '26',
			bottom: '20'
		},
        tooltip: {},
        legend: {
            data:[
            {
            	name: '点击数',
            	icon: 'circle',
            },
            {
            	name: '页面浏览量',
            	icon: 'circle',
            },
            ],
            right: '0',
            top: '0',
            itemHeight: '9'
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',],
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
	            interval: 0,
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
	        max: 15000,
        },
        series: [
        {
            name: '点击数',
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
            symbolSize: 10,
            hoverAnimation: false,
            data: [5000,4000,4500,8000,4100,5000,3800,4000,9000,10000,4700,9000]
        },
        {
            name:'页面浏览量',
            type:'line',
            lineStyle: {
            	normal: {
            		color: '#76ddfb'
            	}
            	
            },
            itemStyle: {
            	normal: {
            		color: '#76ddfb'
            	}
            	
            },
            'symbol': 'emptyCircle',
            symbolSize: 10,
            hoverAnimation: false,
           data: [4000,3000,4000,4100,3100,4000,2800,3000,5000,8000,4200,4900]
        },
        ]
    };
    lineVisitAmount.setOption(option)
}	
function personalityCloud(){
	var word_list1 = [
	    {text: "理财", weight: 9},
	    {text: "房产", weight: 8},
	    {text: "健身", weight: 8},
	    {text: "旅行", weight: 6},
	    {text: "奢侈品", weight: 5},
	    {text: "教育", weight: 3},
	    {text: "亲子", weight: 3},
	];
	var word_list2 = [
	    {text: "时尚", weight: 9},
	    {text: "健身", weight: 8},
	    {text: "游戏", weight: 8},
	    {text: "婚恋", weight: 6},
	    {text: "购物", weight: 5},
	    {text: "创业", weight: 3},
	    {text: "母婴", weight: 3},
	    {text: "网购", weight: 2},
	];
	var word_list3 = [
	    {text: "多元", weight: 9},
	    {text: "个性", weight: 8},
	    {text: "健身", weight: 8},
	    {text: "网购", weight: 6},
	    {text: "创新", weight: 5},
	    {text: "追星", weight: 3},
	    {text: "网游", weight: 3},
	];
    $(".personality-70g").jQCloud(word_list1);
    $(".personality-80g").jQCloud(word_list2);
    $(".personality-90g").jQCloud(word_list3);
}