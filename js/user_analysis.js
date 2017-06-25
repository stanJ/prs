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
			this.buyerAmountData = [
			{
				'1': 'Day1',
				'2': '43243.33',
				'3': '6455',
				'4': '269941',
			},
			{
				'1': 'Day2',
				'2': '243243.33',
				'3': '5455',
				'4': '269941',
			},
			{
				'1': 'Day3',
				'2': '23243.33',
				'3': '4455',
				'4': '69941',
			},
			{
				'1': 'Day4',
				'2': '13243.33',
				'3': '6455',
				'4': '369941',
			},
			{
				'1': 'Day5',
				'2': '3243.33',
				'3': '6455',
				'4': '259941',
			},
			{
				'1': 'Day6',
				'2': '43243.33',
				'3': '6455',
				'4': '269941',
			},
			{
				'1': 'Day7',
				'2': '43243.33',
				'3': '6455',
				'4': '269941',
			},
			]
		},
		loadExpensePlaceList: function(){
			this.expensePlaceData = [
			{
				'1': '浙江',
				'2': '158.87',
				'3': '64',
				'4': '1754',
				'5': '3.14%',
			},
			{
				'1': '吉林',
				'2': '15.87',
				'3': '64',
				'4': '1754',
				'5': '3.14%',
			},
			{
				'1': '北京',
				'2': '18.87',
				'3': '30',
				'4': '1054',
				'5': '3.14%',
			},
			{
				'1': '其他',
				'2': '28.87',
				'3': '64',
				'4': '1754',
				'5': '3.14%',
			},
			{
				'1': '内蒙',
				'2': '158.87',
				'3': '20',
				'4': '1254',
				'5': '2.14%',
			},
			{
				'1': '江苏',
				'2': '158.87',
				'3': '64',
				'4': '1754',
				'5': '30.14%',
			},
			{
				'1': '河北',
				'2': '158.87',
				'3': '64',
				'4': '1754',
				'5': '23.14%',
			},
			{
				'1': '广东',
				'2': '158.87',
				'3': '64',
				'4': '1454',
				'5': '3.14%',
			},
			{
				'1': '湖北',
				'2': '158.87',
				'3': '64',
				'4': '1754',
				'5': '3.34%',
			},
			{
				'1': '山东',
				'2': '158.87',
				'3': '64',
				'4': '1754',
				'5': '3.14%',
			},
			]
		},
		loadBuyTimesList: function(){
			this.buyTimesData = [
			{
				'1': '201101月份',
				'2': '819',
			},
			{
				'1': '201102月份',
				'2': '719',
			},
			{
				'1': '201103月份',
				'2': '619',
			},
			{
				'1': '201104月份',
				'2': '819',
			},
			{
				'1': '201105月份',
				'2': '519',
			},
			{
				'1': '201106月份',
				'2': '819',
			},
			{
				'1': '201107月份',
				'2': '319',
			},
			{
				'1': '201108月份',
				'2': '1419',
			},
			{
				'1': '201109月份',
				'2': '2819',
			},
			]
		},
		loadPricesList: function(){
			this.pricesData = [
			{
				'1': '1',
				'2': '0-50',
				'3': '1225254',
				'4': '41.13%',
				'5': '326784',
				'6': '985556',
			},
			{
				'1': '2',
				'2': '50-100',
				'3': '1225254',
				'4': '1.13%',
				'5': '32784',
				'6': '985556',
			},
			{
				'1': '3',
				'2': '100-200',
				'3': '1225254',
				'4': '41.13%',
				'5': '326784',
				'6': '985556',
			},
			{
				'1': '4',
				'2': '200-500',
				'3': '1225254',
				'4': '41.13%',
				'5': '26784',
				'6': '985556',
			},
			{
				'1': '5',
				'2': '500-1000',
				'3': '1225254',
				'4': '51.13%',
				'5': '326784',
				'6': '9856',
			},
			{
				'1': '6',
				'2': '1000-2000',
				'3': '1225254',
				'4': '41.13%',
				'5': '326784',
				'6': '98556',
			},
			{
				'1': '7',
				'2': '2000-3000',
				'3': '1225254',
				'4': '21.13%',
				'5': '326784',
				'6': '98556',
			},
			{
				'1': '8',
				'2': '3000-5000',
				'3': '1225254',
				'4': '41.13%',
				'5': '326784',
				'6': '85556',
			},
			{
				'1': '9',
				'2': '5000-10000',
				'3': '1225254',
				'4': '41.13%',
				'5': '326784',
				'6': '98556',
			},
			]
		},
		loadAgesList: function(){
			this.agesData = [
			{
				'1': '12-20',
				'2': '6%',
			},
			{
				'1': '21-30',
				'2': '18%',
			},
			{
				'1': '31-40',
				'2': '36%',
			},
			{
				'1': '41-50',
				'2': '30%',
			},
			{
				'1': '50以上',
				'2': '10%',
			},
			]
		},
		loadEducationList: function(){
			this.educationData = [
			{
				'1': '小学',
				'2': '6%',
			},
			{
				'1': '初中',
				'2': '18%',
			},
			{
				'1': '高中',
				'2': '36%',
			},
			{
				'1': '大学',
				'2': '30',
			},
			{
				'1': '硕士',
				'2': '7%',
			},
			{
				'1': '博士',
				'2': '3%',
			},
			]
		},
		loadIncomeList: function(){
			this.incomeData = [
			{
				'1': '3000以下',
				'2': '6%',
			},
			{
				'1': '3000-6000',
				'2': '18%',
			},
			{
				'1': '6000-10000',
				'2': '36%',
			},
			{
				'1': '10000-20000',
				'2': '30%',
			},
			{
				'1': '20000以上',
				'2': '10%',
			},
			]
		},
		loadSexList: function(){
			this.sexData = [
			{
				'1': '男',
				'2': '56%',
			},
			{
				'1': '女',
				'2': '44%',
			},
			]
		},
	}
})
$(function(){
	lineVisitTime();
	lineMoneyPeople();
	lineIncome();
	lineVisitAmount();
//	commentCloud();
	lineO2O();
	personalityCloud();
	barBrandPrefer();
	radarAgeDiff();
	piePriceAnalysis();
	pieAges();
	pieSex();
	piePlace();
	lineBuyTimes();
	AreaVisitors();
})
function piePriceAnalysis(){
	var pie1 = echarts.init($(".chart--pie--price-analysis")[0]);
	var option = {
		color: ['#0c4d90','#53a8e2','#2c82be','#b9d5fe','#53a8e2','#76ddfb',],
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
	                {value:18, name:'1000元以下'},
	                {value:18, name:'1000-1499元'},
	                {value:18, name:'1500-1900元'},
	                {value:28, name:'2000-2499元'},
	                {value:6, name:'2500-2999元'},
	                {value:12, name:'3000-3499元'},
	            ]
	        }
	    ]
	};
	pie1.setOption(option)
}

function piePlace(){
	var pie1 = echarts.init($(".chart--pie--place")[0]);
	var option = {
		color: ['#0c4d90','#76ddfb','#53a8e2','#2c82be','#8194ab','#38d2dc','#62c7b3','#2c82be','#4a90e2','#53a8e2'],
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    series: [
	        {
	            name:'地域',
	            type:'pie',
	            radius: ['37%', '80%'],
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
	                {value:156, name:'广东'},
	                {value:98, name:'北京'},
	                {value:83, name:'浙江'},
	                {value:74, name:'上海'},
	                {value:44, name:'江苏'},
	                {value:31, name:'福建'},
	                {value:28, name:'四川'},
	                {value:19, name:'河南'},
	                {value:18, name:'湖南'},
	                {value:152, name:'其余地区'},
	            ]
	        }
	    ]
	};
	pie1.setOption(option)
}

function pieAges(){
	var pie1 = echarts.init($(".chart--pie--age")[0]);
	var option = {
		legend: {
            data:[
            {
            	name: '12-20',
            	icon: 'circle',
            },
            {
            	name: '21-30',
            	icon: 'circle',
            },
            {
            	name: '31-40',
            	icon: 'circle',
            },
            {
            	name: '41-50',
            	icon: 'circle',
            },
            {
            	name: '50以上',
            	icon: 'circle',
            },
            ],
            right: '10%',
            bottom: '0',
            itemHeight: '9'
        },
		color: ['#0c4d90','#2c82be','#8194ab','#53a8e2','#76ddfb',],
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    series: [
	        {
	            name:'年龄',
	            type:'pie',
	            radius: ['37%', '80%'],
	            center: ['60%','48%'],
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
	                {value:6, name:'12-20'},
	                {value:18, name:'21-30'},
	                {value:36, name:'31-40'},
	                {value:30, name:'41-50'},
	                {value:10, name:'50以上'},
	            ]
	        }
	    ]
	};
	pie1.setOption(option)
}

function pieSex(){
	var pie1 = echarts.init($(".chart--pie--sex")[0]);
	var option = {
		legend: {
            data:[
            {
            	name: '男性',
            	icon: 'circle',
            },
            {
            	name: '女性',
            	icon: 'circle',
            },
            {
            	name: '未知',
            	icon: 'circle',
            },
            ],
            right: '20%',
            bottom: '0',
            itemHeight: '9'
        },
		color: ['#2c82be','#76ddfb','#dbecf8'],
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    series: [
	        {
	            name:'性别',
	            type:'pie',
	            radius: ['37%', '80%'],
	            center: ['60%','48%'],
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
	                {value:56, name:'男性'},
	                {value:40, name:'女性'},
	                {value:4, name:'未知'},
	            ]
	        }
	    ]
	};
	pie1.setOption(option)
}

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

function lineMoneyPeople(){
	var line1 = echarts.init($(".chart--line--money-people")[0]);
	var option = {
		title: {
			text: '每日预定金额/浏览人数（不重复IP）'
		},
		grid: {
			left: '0',
			right: '12',
			top: '40',
			bottom: '13',
			containLabel: true,
		},
        tooltip: {},
        legend: {
            data:[
            {
            	name: '预定金额',
            	icon: 'circle',
            },
            {
            	name: '购买人数',
            	icon: 'circle',
            },
            ],
            left: '50%',
            top: '2',
            itemHeight: '9'
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data:['2017-04-26','2017-04-27','2017-04-28','2017-04-29','2017-04-30','2017-05-01','2017-05-02','2017-05-03',],
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
	        max: 20000,
        },
        series: [
        {
            name: '预定金额',
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
            data: [4000,4000,3000,2000,5000,10000,4200,5000,]
        },
        {
            name:'购买人数',
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
           data: [6000,8000,14000,6100,1000,2200,3900,3700,]
        },
        ]
    };
    line1.setOption(option)
}	

function lineIncome(){
	var line1 = echarts.init($(".chart--line--income")[0]);
	var option = {
//		title: {
//			text: '每日预定金额/浏览人数（不重复IP）'
//		},
		grid: {
			left: '0',
			right: '12',
			top: '40',
			bottom: '13',
			containLabel: true,
		},
        tooltip: {},
        legend: {
            data:[
            {
            	name: '预定金额',
            	icon: 'circle',
            },
            {
            	name: '购买人数',
            	icon: 'circle',
            },
            ],
            left: '50%',
            top: '2',
            itemHeight: '9'
        },
        xAxis: {
        	show: false,
            type: 'category',
            boundaryGap: true,
            data:['2017-04-26','2017-04-27','2017-04-28','2017-04-29','2017-04-30','2017-05-01','2017-05-02','2017-05-03',],
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
	        max: 20000,
        },
        series: [
        {
            name: '预定金额',
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
            data: [4000,4000,3000,2000,5000,10000,4200,5000,]
        },
        {
            name:'购买人数',
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
           data: [6000,8000,14000,6100,1000,2200,3900,3700,]
        },
        ]
    };
    line1.setOption(option)
}	

function lineBuyTimes(){
	var line1 = echarts.init($(".chart--line--buy-times")[0]);
	var option = {
		title: {
			text: '2011年前三季度团购购买人次月度统计',
			left: 0,
		},
		grid: {
			left: '0',
			right: '12',
			top: '40',
			bottom: '13',
			containLabel: true,
		},
        tooltip: {},
        legend: {
            data:[
            {
            	name: '购买人次（万）',
            	icon: 'circle',
            },
            ],
            left: '40%',
            top: '4',
            itemHeight: '9'
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data:['1月','2月','3月','4月','5月','6月','7月','8月','9月',],
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
	        max: 4000,
	        interval: 500,
        },
        series: [
        {
            name: '购买人次（万）',
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
            data: [900,600,1100,2000,1800,2200,2800,3300,3000]
        },
        ]
    };
    line1.setOption(option)
}	
function AreaVisitors(){
	var area1 = echarts.init($(".chart--area--visitors")[0]);
	var option = {
	    grid: {
	        left: 10,
	        right: 10,
	        bottom: 10,
	        top: 10,
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'value',
	            boundaryGap : false,
	            min: 1,
	            max: 20,
	            axisLine: {
		            lineStyle: {
		        		color: '#e2edf4',
		        		width: 1,
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
		        splitLine: {
		        	show: false,
		        }
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
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
		        max: 12,
		        interval: 3,
	        }
	    ],
	    series : [
	        {
	            type:'line',
	            symbol: 'none',
//	            label: {
//	                normal: {
//	                    show: true,
//	                    position: 'top'
//	                }
//	            },
	            smooth: true,
	            areaStyle: {normal: {
	            	color: '#edf6fc'
	            }},
	            lineStyle: {
	            	normal: {
	            		color: '#53a8e2'
	            	}
	            },
	            data:[
	            	[1,3.2],[2,3],[3,4.5],[4,4],[5,5],[6,8],[7,8],[8,6],[9,6.5],[10,2],
	            	[11,1],[12,9],[13,11],[14,6],[15,1],[16,5],[17,9],[18,3],[19,2],[20,5],
	            ]
	        }
	    ]
	};
	area1.setOption(option);
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
