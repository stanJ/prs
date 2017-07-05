var app = new Vue({
	el: '#app',
	data: {
		qualityData: [],
		numAnalysisData: [],
		focusData: [],
		dealStoreData: [],
		dealPeopleData: [],
		activeStoreData: [],
		dealAmountData: [],
		dealGoodsData: [],
		channelHealthData1: [],
		channelHealthData2: [],
		dateRange: '',
		queryProject: '',
		channelHealthQuery: {
			query: '',
		}
	},
	created: function () {
		this.fetchData();
	},
	methods: {
		showArrow: utilObj.showArrow,
		transferInteger: utilObj.transferInteger,
		transferDoubleFloat: utilObj.transferDoubleFloat,
		fetchData: function(){
			this.loadQualityList();
			this.loadFocusList();
			this.loadMaturityList();
			this.loadChannelHealthList();
		},
		loadQualityList: function(){
			this.qualityData = [{
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
			},{
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
				'4': 'xxx',
				'5': 'xxx',
				'6': 'xxx',
			},]
			this.numAnalysisData = [{
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
			},{
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
				'4': 'xxx',
				'5': 'xxx',
				'6': 'xxx',
			},]
		},
		loadFocusList: function(){
			this.focusData = [{
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
			},{
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
				'4': 'xxx',
				'5': 'xxx',
				'6': 'xxx',
			},]
		},
		loadMaturityList: function(){
			var vm = this;
			var today = utilObj.dayStart(moment().format("YYYY-MM-DD"));
			var yesterday = utilObj.dayStart(moment().subtract(1, 'days').format("YYYY-MM-DD"));
			utilObj.ajax({
				url: '/m/productStats/statsChannelSaleToday',
				type: 'POST',
				data: {
					today: today,
					yesterday: yesterday,
				},
				success: function(data){
					vm.dealStoreData = data.object;
					vm.activeStoreData = data.object;
					vm.dealGoodsData = data.object;
					vm.dealAmountData = data.object;
				}
			})
			this.dealPeopleData = [{
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
			},{
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
				'4': 'xxx',
			},]
//			this.dealAmountData = [{
//				'1': 'xxx',
//				'2': 'xxx',
//				'3': 'xxx',
//				'4': 'xxx',
//			},{
//				'1': 'xxx',
//				'2': 'xxx',
//				'3': 'xxx',
//				'4': 'xxx',
//			},{
//				'1': 'xxx',
//				'2': 'xxx',
//				'3': 'xxx',
//				'4': 'xxx',
//			},{
//				'1': 'xxx',
//				'2': 'xxx',
//				'3': 'xxx',
//				'4': 'xxx',
//			},]
		},
		loadChannelHealthList: function(){
			this.channelHealthData1 = [
			{
				'1': '渠道份额',
				'2': '17.0%',
			},
			{
				'1': '周/月活跃率',
				'2': '3.5% | 8.7%',
			},
			{
				'1': '每日人均启动次数',
				'2': '5.0',
			},
			{
				'1': '每日人均启动次数',
				'2': '5.0',
			},
			]
			this.channelHealthData2 = [
			{
				'1': '渠道份额',
				'2': '17.0%',
			},
			{
				'1': '周/月活跃率',
				'2': '3.5% | 8.7%',
			},
			{
				'1': '每日人均启动次数',
				'2': '5.0',
			},
			{
				'1': '每日人均启动次数',
				'2': '5.0',
			},
			]
		}
	}
})
$(function(){
//	lineChannelBasic();
	getChannelBasicData();
	barStayTime();
})
function getChannelBasicData(){
	var startDate = utilObj.dayStart(moment().subtract(13, 'days').format('YYYY-MM-DD'));
	var endDate = utilObj.dayEnd(moment().format('YYYY-MM-DD'));
	utilObj.ajax({
		url: '/m/productStats/statsChannelSale',
		type: 'POST',
		data: {
			startDate: startDate,
			endDate: endDate,
			mode: 3,
		},
		success: function(data){
			var names = utilObj.getNameAry(data.object, 'channelName');
			var originXAixsData = utilObj.getMultipleAry(data.object, 'ddate')[0];
			var xAixsData = utilObj.transferDateAry(originXAixsData);
			var amountData = utilObj.getMultipleAry(data.object, 'amount');
			var amountMoneyData = utilObj.getMultipleAry(data.object, 'amountMoney');
			var shopCountData = utilObj.getMultipleAry(data.object, 'shopCount');
			
			var newUserCountData = utilObj.getMultipleAry(data.object, 'newUserCount');
			var activeUserCountData = utilObj.getMultipleAry(data.object, 'activeUserCount');
			var startupTimesData = utilObj.getMultipleAry(data.object, 'startupTimes');
			lineChannelBasic({
				names: names,
				xAixsData: xAixsData,
				amountData: amountData,
				amountMoneyData: amountMoneyData,
				shopCountData: shopCountData,
				newUserCountData: newUserCountData,
				activeUserCountData: activeUserCountData,
				startupTimesData: startupTimesData,
			})
		}
		
	})
}
function lineChannelBasic(params){
	$(".tab-content").show();
	var line1 = echarts.init($(".chart--line--new-customers")[0]);
	var line2 = echarts.init($(".chart--line--active-customers")[0]);
	var line3 = echarts.init($(".chart--line--start-times")[0]);
	var line4 = echarts.init($(".chart--line--channel-sales")[0]);
	var line5 = echarts.init($(".chart--line--channel-money")[0]);
	var line6 = echarts.init($(".chart--line--channel-store")[0]);
	frameObj.loadTabs();
	var option = {
		color: ['#2c82be', '#76ddfb','#53a8e2',],
		grid: {
			left: '10',
			right: '20',
			top: '60',
			bottom: '10',
			containLabel: true,
		},
		title: {
			text: 'LINE CHART 2',
			textStyle: {
				fontSize: '13'
			}
		},
        tooltip: {
//      	trigger: 'axis',
//      	axisPointer: {
//	            lineStyle: {
//	                color: '#c8f1fd'
//	            },
//	        },
	        formatter: function (params) {
//	            var params = params[0];
//	            var date = new Date(params.name);
	            return params.name + '<br />' + params.value;
	        },
	    },
        legend: {
            data:[{
            	name: 'PARTNER 1',
            	icon: 'circle',
            }],
            right: '50',
            top: '10',
            itemHeight: '9',
            show: true,
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            axisLine: {
	            lineStyle: {
	        		color: '#d7d7d7',
	        		width: 2,
	        	}
	        },
	        data: ['2017-04-26','2017-04-27','2017-04-28','2017-04-29','2017-04-30','2017-05-01','2017-05-02','2017-05-03','2017-05-04','2017-05-05','2017-05-06','2017-05-07','2017-05-08','2017-05-09'],
	        axisTick: {
	        	show: false,
	        	alignWithLabel: true,
	        	
	        },
	        axisLabel: {
	            textStyle: {
	            	color: '#000'
	            },
	            formatter: function (value, index) {
				    // 格式化成月/日，只在第一个刻度显示年份
				    var date = new Date(value);
				   return [date.getFullYear(),date.getMonth()+1,date.getDate()].join('-')
				},
				interval: 0,
	        },
	        splitLine: {
	        	show: false,
	        }
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
//	        max: 500,
        },
        series: [{
            name: 'PARTNER 1',
            type: 'line',
//          lineStyle: {
//          	normal: {
//          		color: '#51a5de'
//          	}
//          	
//          },
//          itemStyle: {
//          	normal: {
//          		color: '#51a5de'
//          	}
//          	
//          },
            'symbol': 'emptyCircle',
            symbolSize: 8,
            hoverAnimation: false,
            data: [
            	['2017-04-26', 100],
            	['2017-04-27', 10],
            	['2017-04-28', 200],
            	['2017-04-29', 180],
            	['2017-04-30', 160],
            	['2017-05-01', 280],
            	['2017-05-02', 400],
            	['2017-05-03', 250],
            	['2017-05-04', 300],
            	['2017-05-05', 200],
            	['2017-05-06', 270],
            	['2017-05-07', 170],
            	['2017-05-08', 200],
            	['2017-05-09', 50]
            ]
        }]
    };
    
//  line1.setOption(option)
//  line2.setOption(option)
//  line3.setOption(option)
    line1.setOption(utilObj.getChartOption(option, params, 'newUserCountData', {
    	title: '新增用户'
    }))
    line2.setOption(utilObj.getChartOption(option, params, 'activeUserCountData', {
    	title: '活跃用户'
    }))
    line3.setOption(utilObj.getChartOption(option, params, 'startupTimesData', {
    	title: '启动次数'
    }))
    
    line4.setOption(utilObj.getChartOption(option, params, 'amountData', {
    	title: '销量'
    }))
    line5.setOption(utilObj.getChartOption(option, params, 'amountMoneyData', {
    	title: '成交金额'
    }))
    line6.setOption(utilObj.getChartOption(option, params, 'shopCountData', {
    	title: '成交店铺'
    }))
}
function barStayTime(){
	var barStayTime = echarts.init($(".chart--bar--staytime")[0]);
	var option = {
//	    color: ['#3398DB'],
	    title: {
	    	text: '用户数',
	    	textStyle: {
				fontSize: '14',
				fontWeight: 'normal'
			},
			left: '8',
	    },
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data : ['1分钟','5分钟', '10分钟', '15分钟','20分钟','25分钟', '30分钟','35分钟', '40分钟', ],
	            axisLine: {
		            lineStyle: {
		        		color: '#d7d7d7',
		        		width: 2,
		        	}
		        },
		        axisTick: {
		        	show: true,
		        	inside: false,
		        	
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
	            max: 2500,
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
	        }
	    ],
	    series : [
	        {
	            name:'用户数量',
	            type:'bar',
	            barWidth: '50%',
	            itemStyle: {
	            	normal: {
	            		color: '#6cbceb'
	            	}
	            },
	            data:[1000, 200, 300, 500, 50,1000, 200, 300, 500,]
	        }
	    ]
	};
    barStayTime.setOption(option)
}
