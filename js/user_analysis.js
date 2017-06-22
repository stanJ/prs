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
	commentCloud();
})
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
        series: [
        {
            name: '增长率',
            type: 'line',
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
        {
            name:'用户规模浏览时间(分钟)',
            type:'bar',
            barWidth: '40%',
            itemStyle: {
            	normal: {
            		color: '#83b5ea'
            	}
            	
            },
            data:[24.7,33.1,18.8,10.4,12.9]
        },
        ]
    };
    lineVisitTime.setOption(option)
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
	        max: 20000,
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
            data: [5000,3000,2000,4000,1000,2600,10000,15000,2000,4000,1000,2600]
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
            data: [4000,2000,1000,3000,1000,1600,9000,14000,1000,3000,1000,1600]
        },
        ]
    };
    lineVisitAmount.setOption(option)
}	
