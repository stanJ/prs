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
			this.pageStayData = [{
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
		loadPageAnalysisList: function(){
			this.pageAnalysisData = [{
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
			},{
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
			},{
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
			},]
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
			