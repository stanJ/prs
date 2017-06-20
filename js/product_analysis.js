var app = new Vue({
	el: "#app",
	data: {
		categoryData: [],
		highlightData: [],
		salesData: [],
		commentActiveData: [],
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
		},
		loadCategoryList: function(){
			this.categoryData = [{
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
		loadHighlightList: function(){
			this.highlightData = [{
				'0': '双卡双待',
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
			},{
				'0': '指纹识别',
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
			},{
				'0': '拍照神器',
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
			},]
		},
		loadSalesList: function(){
			this.salesData = [{
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
		loadCommentActiveList: function(){
			this.commentActiveData = [{
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
				'4': 'xxx',
				'5': 'xxx',
				'6': 'xxx',
				'7': 'xxx',
				'8': 'xxx',
			},{
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
				'4': 'xxx',
				'5': 'xxx',
				'6': 'xxx',
				'7': 'xxx',
				'8': 'xxx',
			},{
				'1': 'xxx',
				'2': 'xxx',
				'3': 'xxx',
				'4': 'xxx',
				'5': 'xxx',
				'6': 'xxx',
				'7': 'xxx',
				'8': 'xxx',
			},]
		},
	}
})
			