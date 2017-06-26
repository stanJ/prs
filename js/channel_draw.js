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
	},
	created: function () {
		this.fetchData();
	},
	methods: {
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
			this.dealStoreData = [{
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
			this.activeStoreData = [{
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
			this.dealAmountData = [{
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
			this.dealGoodsData = [{
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
	lineBasic();
	barStayTime();
})
function lineBasic(){
	var lineBasic = echarts.init($(".chart--line--basic")[0]);
	var option = {
		grid: {
			left: '35',
			right: '20',
			top: '60',
			bottom: '40'
		},
		title: {
			text: 'LINE CHART 2',
			textStyle: {
				fontSize: '13'
			}
		},
        tooltip: {
	        formatter: function (params) {
	            var params = params[0];
	            var date = new Date(params.name);
	            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
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
	        max: 500,
        },
        series: [{
            name: 'PARTNER 1',
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
    lineBasic.setOption(option)
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
