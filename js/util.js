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
			value = value.toFixed(2)+'%';
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
	getAryByParam: function(ary,param){
		return ary.map(function(x){
			return x[param]
		})
	}
}
