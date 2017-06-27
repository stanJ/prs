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
		buyTimesMonth: function(row){
			return row.month + '月份'
		},
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
			var curYear = new Date().getFullYear();
			var startDate = utilObj.dayStart(curYear + '-01-01');
			var endDate = utilObj.dayEnd(curYear + '-09-30');
			var vm = this;
			utilObj.ajax({
				url: '/m/productStats/statsUserBuy',
				type: 'POST',
				data: {
					startDate: startDate,
					endDate: endDate,
				},
				success: function(data){
					vm.buyTimesData = data.object;
				}
			})
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
var userObj = {
	loadTab1: function(){
	},
	loadTab2: function(){
		pieAges();
		barEducation();
		lineIncome();
		pointJobs();
		pieSex();
		piePlace();
	},
	loadTab3: function(){
		lineMoneyPeople();
		mapBuyMoney();
		areaVisitors();
		lineBuyTimes();
	},
	loadTab4: function(){
		lineO2O();
		piePriceAnalysis();
		barBrandPrefer();
		radarAgeDiff();
		personalityCloud();
	},
	loadTab5: function(){
		lineVisitTime();
		lineVisitAmount();
	},
}
function mapBuyMoney(){
	var map1 = echarts.init($(".chart--map--buy-money")[0]);
	var data = [
	    {name: '海门', value: 9},
	    {name: '鄂尔多斯', value: 12},
	    {name: '招远', value: 12},
	    {name: '舟山', value: 12},
	    {name: '齐齐哈尔', value: 14},
	    {name: '盐城', value: 15},
	    {name: '赤峰', value: 16},
	    {name: '青岛', value: 18},
	    {name: '乳山', value: 18},
	    {name: '金昌', value: 19},
	    {name: '泉州', value: 21},
	    {name: '南通', value: 23},
	    {name: '拉萨', value: 24},
	    {name: '云浮', value: 24},
	    {name: '上海', value: 25},
	    {name: '攀枝花', value: 25},
	    {name: '承德', value: 25},
	    {name: '汕尾', value: 26},
	    {name: '丹东', value: 27},
	    {name: '瓦房店', value: 30},
	    {name: '延安', value: 38},
	    {name: '咸阳', value: 43},
	    {name: '南昌', value: 54},
	    {name: '柳州', value: 54},
	    {name: '三亚', value: 54},
	    {name: '泸州', value: 57},
	    {name: '克拉玛依', value: 72}
	];
	
	var geoCoordMap = {
	   '海门':[121.15,31.89],
	   '鄂尔多斯':[109.781327,39.608266],
	   '招远':[120.38,37.35],
	   '舟山':[122.207216,29.985295],
	   '齐齐哈尔':[123.97,47.33],
	   '盐城':[120.13,33.38],
	   '赤峰':[118.87,42.28],
	   '青岛':[120.33,36.07],
	   '乳山':[121.52,36.89],
	   '金昌':[102.188043,38.520089],
	   '泉州':[118.58,24.93],
	   '莱西':[120.53,36.86],
	   '日照':[119.46,35.42],
	   '胶南':[119.97,35.88],
	   '南通':[121.05,32.08],
	   '拉萨':[91.11,29.97],
	   '云浮':[112.02,22.93],
	   '梅州':[116.1,24.55],
	   '文登':[122.05,37.2],
	   '上海':[121.48,31.22],
	   '攀枝花':[101.718637,26.582347],
	   '威海':[122.1,37.5],
	   '承德':[117.93,40.97],
	   '厦门':[118.1,24.46],
	   '汕尾':[115.375279,22.786211],
	   '潮州':[116.63,23.68],
	   '丹东':[124.37,40.13],
	   '太仓':[121.1,31.45],
	   '曲靖':[103.79,25.51],
	   '烟台':[121.39,37.52],
	   '福州':[119.3,26.08],
	   '瓦房店':[121.979603,39.627114],
	   '即墨':[120.45,36.38],
	   '抚顺':[123.97,41.97],
	   '玉溪':[102.52,24.35],
	   '张家口':[114.87,40.82],
	   '阳泉':[113.57,37.85],
	   '莱州':[119.942327,37.177017],
	   '湖州':[120.1,30.86],
	   '汕头':[116.69,23.39],
	   '昆山':[120.95,31.39],
	   '宁波':[121.56,29.86],
	   '湛江':[110.359377,21.270708],
	   '揭阳':[116.35,23.55],
	   '荣成':[122.41,37.16],
	   '连云港':[119.16,34.59],
	   '葫芦岛':[120.836932,40.711052],
	   '常熟':[120.74,31.64],
	   '东莞':[113.75,23.04],
	   '河源':[114.68,23.73],
	   '淮安':[119.15,33.5],
	   '泰州':[119.9,32.49],
	   '南宁':[108.33,22.84],
	   '营口':[122.18,40.65],
	   '惠州':[114.4,23.09],
	   '江阴':[120.26,31.91],
	   '蓬莱':[120.75,37.8],
	   '韶关':[113.62,24.84],
	   '嘉峪关':[98.289152,39.77313],
	   '广州':[113.23,23.16],
	   '延安':[109.47,36.6],
	   '太原':[112.53,37.87],
	   '清远':[113.01,23.7],
	   '中山':[113.38,22.52],
	   '昆明':[102.73,25.04],
	   '寿光':[118.73,36.86],
	   '盘锦':[122.070714,41.119997],
	   '长治':[113.08,36.18],
	   '深圳':[114.07,22.62],
	   '珠海':[113.52,22.3],
	   '宿迁':[118.3,33.96],
	   '咸阳':[108.72,34.36],
	   '铜川':[109.11,35.09],
	   '平度':[119.97,36.77],
	   '佛山':[113.11,23.05],
	   '海口':[110.35,20.02],
	   '江门':[113.06,22.61],
	   '章丘':[117.53,36.72],
	   '肇庆':[112.44,23.05],
	   '大连':[121.62,38.92],
	   '临汾':[111.5,36.08],
	   '吴江':[120.63,31.16],
	   '石嘴山':[106.39,39.04],
	   '沈阳':[123.38,41.8],
	   '苏州':[120.62,31.32],
	   '茂名':[110.88,21.68],
	   '嘉兴':[120.76,30.77],
	   '长春':[125.35,43.88],
	   '胶州':[120.03336,36.264622],
	   '银川':[106.27,38.47],
	   '张家港':[120.555821,31.875428],
	   '三门峡':[111.19,34.76],
	   '锦州':[121.15,41.13],
	   '南昌':[115.89,28.68],
	   '柳州':[109.4,24.33],
	   '三亚':[109.511909,18.252847],
	   '自贡':[104.778442,29.33903],
	   '吉林':[126.57,43.87],
	   '阳江':[111.95,21.85],
	   '泸州':[105.39,28.91],
	   '西宁':[101.74,36.56],
	   '宜宾':[104.56,29.77],
	   '呼和浩特':[111.65,40.82],
	   '成都':[104.06,30.67],
	   '大同':[113.3,40.12],
	   '镇江':[119.44,32.2],
	   '桂林':[110.28,25.29],
	   '张家界':[110.479191,29.117096],
	   '宜兴':[119.82,31.36],
	   '北海':[109.12,21.49],
	   '西安':[108.95,34.27],
	   '金坛':[119.56,31.74],
	   '东营':[118.49,37.46],
	   '牡丹江':[129.58,44.6],
	   '遵义':[106.9,27.7],
	   '绍兴':[120.58,30.01],
	   '扬州':[119.42,32.39],
	   '常州':[119.95,31.79],
	   '潍坊':[119.1,36.62],
	   '重庆':[106.54,29.59],
	   '台州':[121.420757,28.656386],
	   '南京':[118.78,32.04],
	   '滨州':[118.03,37.36],
	   '贵阳':[106.71,26.57],
	   '无锡':[120.29,31.59],
	   '本溪':[123.73,41.3],
	   '克拉玛依':[84.77,45.59],
	   '渭南':[109.5,34.52],
	   '马鞍山':[118.48,31.56],
	   '宝鸡':[107.15,34.38],
	   '焦作':[113.21,35.24],
	   '句容':[119.16,31.95],
	   '北京':[116.46,39.92],
	   '徐州':[117.2,34.26],
	   '衡水':[115.72,37.72],
	   '包头':[110,40.58],
	   '绵阳':[104.73,31.48],
	   '乌鲁木齐':[87.68,43.77],
	   '枣庄':[117.57,34.86],
	   '杭州':[120.19,30.26],
	   '淄博':[118.05,36.78],
	   '鞍山':[122.85,41.12],
	   '溧阳':[119.48,31.43],
	   '库尔勒':[86.06,41.68],
	   '安阳':[114.35,36.1],
	   '开封':[114.35,34.79],
	   '济南':[117,36.65],
	   '德阳':[104.37,31.13],
	   '温州':[120.65,28.01],
	   '九江':[115.97,29.71],
	   '邯郸':[114.47,36.6],
	   '临安':[119.72,30.23],
	   '兰州':[103.73,36.03],
	   '沧州':[116.83,38.33],
	   '临沂':[118.35,35.05],
	   '南充':[106.110698,30.837793],
	   '天津':[117.2,39.13],
	   '富阳':[119.95,30.07],
	   '泰安':[117.13,36.18],
	   '诸暨':[120.23,29.71],
	   '郑州':[113.65,34.76],
	   '哈尔滨':[126.63,45.75],
	   '聊城':[115.97,36.45],
	   '芜湖':[118.38,31.33],
	   '唐山':[118.02,39.63],
	   '平顶山':[113.29,33.75],
	   '邢台':[114.48,37.05],
	   '德州':[116.29,37.45],
	   '济宁':[116.59,35.38],
	   '荆州':[112.239741,30.335165],
	   '宜昌':[111.3,30.7],
	   '义乌':[120.06,29.32],
	   '丽水':[119.92,28.45],
	   '洛阳':[112.44,34.7],
	   '秦皇岛':[119.57,39.95],
	   '株洲':[113.16,27.83],
	   '石家庄':[114.48,38.03],
	   '莱芜':[117.67,36.19],
	   '常德':[111.69,29.05],
	   '保定':[115.48,38.85],
	   '湘潭':[112.91,27.87],
	   '金华':[119.64,29.12],
	   '岳阳':[113.09,29.37],
	   '长沙':[113,28.21],
	   '衢州':[118.88,28.97],
	   '廊坊':[116.7,39.53],
	   '菏泽':[115.480656,35.23375],
	   '合肥':[117.27,31.86],
	   '武汉':[114.31,30.52],
	   '大庆':[125.03,46.58]
	};
	
	function convertData(data) {
	   var res = [];
	   for (var i = 0; i < data.length; i++) {
	       var geoCoord = geoCoordMap[data[i].name];
	       if (geoCoord) {
	           res.push({
	               name: data[i].name,
	               value: geoCoord.concat(data[i].value)
	           });
	       }
	   }
	   return res;
	};
	
	function randomValue() {
	    return Math.round(Math.random()*1000);
	}
	
	
	
	var option = {
	    tooltip: {},
	    visualMap: {
	        type: 'piecewise',
	        orient: 'horizontal',
	        inverse: true,
	        pieces: [
	            {min: 1500, color: '#0c4d90'},
	            {min: 900, max: 1500, color: '#51a5de'},
	            {min: 310, max: 1000, color: '#6dbfed'},
	            {min: 200, max: 300, color: '#76ddfb'},
	            {min: 10, max: 200, color: '#b9d5f6'},
	            {max: 5, color: '#d9e2e8'}
	        ],
	        min: 0,
	        max: 1500,
	        left: 'left',
	        top: 'top',
	        text: ['高','低'],
	        seriesIndex: [1],
	        calculable : true
	    },
	    geo: {
	        map: 'china',
	        roam: true,
	        label: {
	            normal: {
	                show: true,
	                textStyle: {
	                    color: 'rgba(0,0,0,0.4)'
	                }
	            }
	        },
	        itemStyle: {
	            normal:{
	                borderColor: 'rgba(0, 0, 0, 0.2)'
	            },
	            emphasis:{
	                areaColor: null,
	                shadowOffsetX: 0,
	                shadowOffsetY: 0,
	                shadowBlur: 20,
	                borderWidth: 0,
	                shadowColor: 'rgba(0, 0, 0, 0.5)'
	            }
	        }
	    },
	    series : [
	       {
	           type: 'scatter',
	           coordinateSystem: 'geo',
	           data: convertData(data),
	           symbolSize: 20,
	           symbol: 'none',
	           symbolRotate: 35,
	           label: {
	               normal: {
	                   formatter: '{b}',
	                   position: 'right',
	                   show: false
	               },
	               emphasis: {
	                   show: true
	               }
	           },
	           itemStyle: {
	               normal: {
	                    color: '#F06C00'
	               }
	           }
	        },
	        {
	            name: 'categoryA',
	            type: 'map',
	            geoIndex: 0,
	            // tooltip: {show: false},
	            data:[
	                {name: '北京', value: 1600},
	                {name: '天津', value: 1700},
	                {name: '上海', value: 2200},
	                {name: '重庆', value: randomValue()},
	                {name: '河北', value: randomValue()},
	                {name: '河南', value: randomValue()},
	                {name: '云南', value: 4},
	                {name: '辽宁', value: randomValue()},
	                {name: '黑龙江', value: randomValue()},
	                {name: '湖南', value: randomValue()},
	                {name: '安徽', value: randomValue()},
	                {name: '山东', value: 1670},
	                {name: '新疆', value: 1},
	                {name: '江苏', value: randomValue()},
	                {name: '浙江', value: randomValue()},
	                {name: '江西', value: randomValue()},
	                {name: '湖北', value: randomValue()},
	                {name: '广西', value: randomValue()},
	                {name: '甘肃', value: randomValue()},
	                {name: '山西', value: randomValue()},
	                {name: '内蒙古', value: randomValue()},
	                {name: '陕西', value: randomValue()},
	                {name: '吉林', value: randomValue()},
	                {name: '福建', value: randomValue()},
	                {name: '贵州', value: randomValue()},
	                {name: '广东', value: 1900},
	                {name: '青海', value: randomValue()},
	                {name: '西藏', value: 2},
	                {name: '四川', value: randomValue()},
	                {name: '宁夏', value: 3},
	                {name: '海南', value: randomValue()},
	                {name: '台湾', value: randomValue()},
	                {name: '香港', value: 2000},
	                {name: '澳门', value: randomValue()}
	            ]
	        }
	    ]
	};
	map1.setOption(option)
}

function pointJobs(){
	var some_words = [
	  {text: '电子网络', weight: 9, html: {'test': 'just testing'}},
	  {text: '销售客服', weight: 8, link: '#'},
	  {text: '媒体艺术', weight: 5, link: '#'},
	  {text: '教育科研', weight: 3, link: '#'},
	  {text: '电子网络1', weight: 9, html: {'test': 'just testing'}},
	  {text: '销售客服1', weight: 8, link: '#'},
	  {text: '媒体艺术1', weight: 5, link: '#'},
	  {text: '教育科研1', weight: 3, link: '#'},
	  {text: '电子网络2', weight: 9, html: {'test': 'just testing'}},
	  {text: '销售客服2', weight: 8, link: '#'},
	  {text: '媒体艺术2', weight: 5, link: '#'},
	  {text: '教育科研2', weight: 3, link: '#'},
	  {text: '电子网络3', weight: 9, html: {'test': 'just testing'}},
	  {text: '销售客服3', weight: 8, link: '#'},
	  {text: '媒体艺术3', weight: 5, link: '#'},
	  {text: '教育科研3', weight: 3, link: '#'},
	];
	$(".chart--point--jobs").html('');
	$(".chart--point--jobs").jQBubbleCloud(some_words);
}
function barEducation(){
	var bar1 = echarts.init($(".chart--bar--education")[0]);
	var data = [[0, 6, 10, '小学'], [6, 16, 9, '初中'], [16, 40, 8, '高中'], [40, 54, 7, '大学'], [54, 74, 6, '硕士'], [74, 90, 5, '博士']];
	var colorList = ['#4a90e2', '#76ddfb', '#53a8e2', '#4a90e2', '#4e76a4', '#0c4d90'];
	
	data = echarts.util.map(data, function (item, index) {
	    return {
	        value: item,
	        itemStyle: {
	            normal: {
	                color: colorList[index]
	            }
	        },
	    };
	});
	
	function renderItem(params, api) {
	    var yValue = api.value(2);
	    var start = api.coord([api.value(0), yValue]);
	    var size = api.size([api.value(1) - api.value(0), yValue]);
	    var style = api.style();
	
	    return {
	        type: 'rect',
	        shape: {
	            x: start[0],
	            y: start[1],
	            width: size[0],
	            height: size[1]
	        },
	        style: style
	    };
	}
	
	var option = {
	    tooltip: {
	    },
	    xAxis: {
	        scale: true,
	        show: false,
	    },
	    yAxis: {
	    	show: false,
	    },
	    
	    series: [{
	        type: 'custom',
	        renderItem: renderItem,
	        label: {
	            normal: {
	                show: false,
	            }
	        },
	        dimensions: ['from', 'to', 'profit'],
	        encode: {
	            x: [0, 1],
	            y: 2,
	            tooltip: [0, 1, 2],
	            itemName: 3
	        },
	        data: data
	    }]
	};
	bar1.setOption(option);
}
function getPriceAnalysisData(){
	var startDate = utilObj.dayStart('2017-01-01');
	var endDate = utilObj.dayEnd('2017-12-31');
	utilObj.ajax({
		url: '/m/productStats/statsPrice',
		type: 'POST',
		data: {
			productId: productId,
			startDate: startDate,
			endDate: endDate,
		},
		success: function(data){
			
		}
	})
}
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
	            radius: ['50%', '86%'],
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
	            radius: ['47%', '80%'],
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
	            radius: ['47%', '80%'],
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
	            radius: ['47%', '80%'],
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
	    tooltip: {},
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
function getBrandPreferData(){
	var startDate = utilObj.dayStart('2017-01-01');
	var endDate = utilObj.dayEnd('2017-12-31');
	utilObj.ajax({
		url: '/m/productStats/statsProductBrand',
		type: 'POST',
		data: {
			productId: 1,
			startDate: startDate,
			endDate: endDate,
		},
		success: function(data){
			
		}
	})
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
		grid: {
			left: '0',
			right: '12',
			top: '40',
			bottom: '13',
			containLabel: true,
		},
        tooltip: {
        	trigger: 'axis',
        	axisPointer: {
	            lineStyle: {
	                color: '#c8f1fd'
	            },
	        },
        },
        legend: {
            data:[
            {
            	name: '0-3K',
            	icon: 'circle',
            },
            {
            	name: '3-6K',
            	icon: 'circle',
            },
            {
            	name: '6-10K',
            	icon: 'circle',
            },
            ],
            left: '30%',
            bottom: '0',
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
	        max: 25,
	        interval: 5,
        },
        series: [
        {
            name: '0-3K',
            type: 'line',
            lineStyle: {
            	normal: {
            		color: '#51a5de'
            	}
            	
            },
            itemStyle: {
            	normal: {
            		color: '#51a5de'
            	},
            	
            },
            areaStyle: {
            	normal: {
            		color: '#cae0ef'
            	}
            },
            'symbol': 'emptyCircle',
            symbolSize: 10,
            showSymbol: false,
            hoverAnimation: false,
            data: [10,4,2,4,5,3,10,6,]
        },
        {
            name: '3-6K',
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
            areaStyle: {
            	normal: {
            		color: '#e4f8fe'
            	}
            },
            'symbol': 'emptyCircle',
            symbolSize: 10,
            showSymbol: false,
            hoverAnimation: false,
            data: [17,8,7,13,11,15,20,16,]
        },
        {
            name: '6-10K',
            type:'line',
            lineStyle: {
            	normal: {
            		color: '#70b6e6'
            	}
            	
            },
            itemStyle: {
            	normal: {
            		color: '#70b6e6'
            	}
            	
            },
            areaStyle: {
            	normal: {
            		color: '#ddeef9'
            	}
            },
            'symbol': 'emptyCircle',
            symbolSize: 10,
            showSymbol: false,
            hoverAnimation: false,
            data: [25,15,18,20,16,17,24,22,]
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
//          data: [900,600,1100,2000,1800,2200,2800,3300,3000],
            data: utilObj.getAryByParam(app.buyTimesData,'buyCount'),
        },
        ]
    };
    line1.setOption(option)
}	
function areaVisitors(){
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
	$(".personality-70g").html('');
	$(".personality-80g").html('');
	$(".personality-90g").html('');
    $(".personality-70g").jQCloud(word_list1);
    $(".personality-80g").jQCloud(word_list2);
    $(".personality-90g").jQCloud(word_list3);
}
