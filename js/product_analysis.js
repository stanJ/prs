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
		score:4,
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
	
	
	basicLabel();
	barLabelOverView();
	
	linePriceTrend();
	piePriceSpread();
	lineGoodReputation();
	radarHotSalesSpot();
	mapPrice();
})
var productObj = {
	loadTab1: function(){
		goodsCommentCloud();
	},
	loadTab2: function(){
		hotKeyCloud();
	},
	loadTab4: function(){
		userCommentCloud();
	},
}
function mapPrice(){
	var map1 = echarts.init($(".chart--map--price")[0]);
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
	    	show: false,
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

function piePriceSpread(){
	var pie1 = echarts.init($(".chart--pie--price-spread")[0]);
	var option = {
		color: ['#0c4d90','#53a8e2','#2c82be','#76ddfb',],
	    tooltip: {
	        trigger: 'item',
//	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	        formatter: "{b}<br/>{d}%"
	    },
	    series: [
	        {
	            name:'',
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
	$(".cloud--user-comment").html('');
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
	$(".cloud--goods-comment").html('');
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
	$(".cloud--hot-key").html('');
    $(".cloud--hot-key").jQCloud(word_list);
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
