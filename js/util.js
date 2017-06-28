var utilObj = {
	envValue:0,
	getApiHost:function(){
		var apiObj = {};
		switch(this.envValue){
			case 0:
				apiObj.baseUrl = 'http://test.3tichina.com:8023/xa-tag-web';
				apiObj.picUrl = 'http://test.3tichina.com:8026';
				break;
			case 1:
				apiObj.baseUrl = 'http://jkjy.3tichina.com:81/xa-blackcat-web';
				apiObj.picUrl = 'http://jkjy.3tichina.com';
				break;
			case 2:
				apiObj.baseUrl = 'http://www.bj-shthinktank.com/xa-blackcat-web';
				apiObj.picUrl = 'http://www.bj-shthinktank.com:81';
				break;
				
		}
		return apiObj;
	},
	ajax: function(params){
		var noToken = {
			'/j_spring_security_check':"",
		};
		if(noToken[params.url]==undefined){
			if(!sessionStorage.getItem("t")){
				sessionStorage.setItem("message","令牌失效，请登录");
				utilObj.navigate('login');
			}
		}
		params.url = utilObj.getApiHost().baseUrl + params.url;
		var ajaxparams= $.extend({},params);
		if(!ajaxparams.data) ajaxparams.data={};

		if(noToken[params.url]==undefined){
			ajaxparams.data.token=sessionStorage.getItem("t");
		}
		ajaxparams.success=function(data,status,xhr){
			if(!data || data.code==0){
				if(data.message){
					if(data.message.indexOf('已失效')!=-1 || data.message.indexOf('无效')!=-1 || data.message.indexOf('超时')!=-1){
						sessionStorage.setItem("message","登录过期,请重新登录");
						sessionStorage.removeItem('t');
						location.reload();
	//					utilObj.navigate("login");
					}else{
						utilObj.alert(data.message);
					}
				}else {
					utilObj.alert('接口出错');
				}	
				
			}else {
				if(params.success instanceof Function) params.success(data,status,xhr);
			}
			
		}
		ajaxparams.error=function(xhr){
			if(params.error instanceof Function) params.error(xhr);
		}
		return $.ajax(ajaxparams);
	},
	getRate:function (value) {
		if(value){
			value = parseFloat(value)*100;
//			value = Math.abs(value);
			value = value.toFixed(0)+'%';
		}else {
			value = '0%'
		}
		return value;
	},
	dayStart: function(value){
		return value + ' 00:00:00';
	},
	dayEnd: function(value){
		return value + ' 23:59:59';
	},
	getAryByParam: function(ary,param,func){
		return ary.map(function(x){
			if(func instanceof Function){
				return func(x[param])
			}else{
				return x[param]
			}
		})
	},
	getPieData: function(ary,obj){
		return ary.map(function(x){
			var newObj = {};
			for(var key in obj){
				newObj[key] = x[obj[key]];
			}
			return newObj;
		})
	},
	getMultipleAry: function(obj, param){
		var ary = []
		for(var  key in obj){
			var aryChild = this.getAryByParam(obj[key], param);
			ary.push(aryChild)
		}
		return ary;
	},
	getNameAry: function(obj, param){
		var ary = []
		for(var  key in obj){
			var name = this.getAryByParam(obj[key], param)[0];
			ary.push(name)
		}
		return ary;
	},
	getChartOption: function(option, params, key, extraParams){
		var names = params.names;
		var legendDataObj = option.legend.data[0];
		var legendDataAry = [];
		option.title.text = extraParams.title;
		for(var i=0;i<names.length;i++){
			var newLegendDataObj = $.extend({}, legendDataObj, { name: names[i]});
			legendDataAry.push(newLegendDataObj);
		}
		option.legend.data = legendDataAry;
		option.xAxis.data = params.xAixsData;
		var seriesObj = option.series[0];
		var seriesAry = [];
		for(var j=0;j<params[key].length;j++){
			var newSeriesObj = $.extend({}, seriesObj, { name: names[j], data: params[key][j]});
			seriesAry.push(newSeriesObj);
		}
		option.series = seriesAry;
		return option;
	},
	transferDateAry: function(ary){
		_this = this;
		return ary.map(function(x){
			return _this.transferDate(x);
		})
	},
	transferDate: function(date){
		if(date){
			date = date.toString();
			date = date.slice(0,4) + '-' + date.slice(4,6) + '-' + date.slice(6);
		}
		return date;
	},
	isInteger: function(obj) {
	 return Math.floor(obj) === obj
	},
	transferW: function(value){
		if(value>10000){
			value = value/10000;
			if(!utilObj.isInteger(value)){
				value = value.toFixed(1)
			}
			value = value + 'W+'
		}
		return value;
	},
	getMonth: function(value){
		value = value.toString();
		return value? parseInt(value.slice(-2)) + '月': value;
	},
	getCloudData: function(ary, params){
		return ary.map(function(x){
			return {
				text: x[params['text']],
				weight: x[params['weight']],
			}
		})
	}
}
