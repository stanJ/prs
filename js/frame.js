Vue.filter('rate', function (value) {
	if(value){
		value = Math.abs(parseFloat(value))*100;
		value = value.toFixed(0)+'%';
	}else {
//		value = '0%';
	}
	return value;
})
Vue.filter('rateOneFloat', function (value) {
	if(!value){
		value = 0;
	}
	value = parseFloat(value)*100;
	value = value.toFixed(1)+'%';
	return value;
})
Vue.filter('doubleFloat', function (value) {
	if(!value){
		value = 0;
	}
	value = parseFloat(value);
	value = value.toFixed(2);
	return value;
})

$(function(){
	frameObj.init();
})
var frameObj = {
	init: function(){
		loadFrame();
		this.loadMainTabs();
		this.loadTabs();
		this.bindEvent();
//		this.login();
	},
	bindEvent: function(){
		var _this = this;
		$(".tab-title").click(function(){
			$(".tab-title").removeClass('is-active');
			$(this).addClass('is-active')
			_this.loadMainTabs();
		})
		$(".tab-item").click(function(){
			var items = $(this).parents('.tabs:first').find('.tab-item');
			items.removeClass('is-active');
			$(this).addClass('is-active')
			_this.loadTabs($(this));
		})
	},
	loadMainTabs: function(){
		var tab = $(".tab-title.is-active")
		if(tab){
			$(".tab-pane").hide();
			var name = tab.data('name');
			$(".tab-pane[data-name='"+name+"']").show();
			var title = $(".nav__title");
			if(title){
				title.find('.title-prefix-md').text(tab.text());
			}
			var func = tab.data('func');
			var page = tab.data('page');
			if(page){
				if(func){
					if(page == 'product'){
						productObj[func]();
					}else if(page == 'user'){
						userObj[func]();
					}
					
				}
			}
			
			
		}
	},
	loadTabs: function(tabAry){
		if(!tabAry){
			tabAry = $(".tabs .tabs__header .tab-item.is-active");
			$(".tab-content").hide();
		}else{
			tabAry.parents(".tabs:first").find('.tab-content').hide();
		}
//		var tabAry = $(".tabs .tabs__header .tab-item.is-active");
//		$(".tab-content").hide();
		tabAry.each(function(i){
			var index = $(this).index();
			var tabContent = $(this).parents(".tabs:first").children(".tabs__content").children(".tab-content").eq(index);
			tabContent.show();
		})
	},
	login: function(){
		if(sessionStorage.getItem('t')){
			return;
		}
		utilObj.ajax({
			url:"/j_spring_security_check",
			type: "POST",
			async: false,
			data:{
				j_username: 'superadmin',
				j_password: '123456',
			},
			beforeSend: function (xhr) {
				xhr.setRequestHeader("X-Ajax-call", "true");
			},
			success: function(data){
				var response = JSON.parse(data);
				if(response.authentication.authenticated==false){
					return;
				}
				sessionStorage.setItem('t',response.token);
				sessionStorage.setItem('userinfo',JSON.stringify(response.user));
			},
			fail:function(data){
//				alert('请求失败')
			},
			error:function (data, status, e){
//				alert('请求失败')
			}
		})
	},
	
}
function loadFrame(){
	var h1 = `<header>
			<nav class="top-nav clearfix">
				<div class="nav-left">
					<a href="channel_draw.html">渠道画像</a>
					<a href="user_analysis.html">用户画像</a>
					<a href="product_analysis.html">产品分析</a>
				</div>
				<div class="btn-keys">
					<div class="triangle-down">
						
					</div>
				</div>
				<div class="nav-right">
					<span class="nr-left">welcome</span>
					<span class="nr-right">3ti</span>
					<span class="icon-exit">&nbsp;</span>
					
				</div>
				
			</nav>
			<div class="keys-wrapper clearfix">
				<div class="kw-left">
					<span class="kwl-add">+ Add</span>
					<span class="kwl-find">Find Content</span>
				</div>
				<div class="kw-right">编辑快捷键</div>
			</div>
		</header>	
		<div class="left-menu">
			<div class="lm-icon-wrapper">
				<div class="lm-icon icon-list"></div>
			</div>
			<div class="lm-icon-wrapper">
				<div class="lm-icon icon-home"></div>
			</div>
			<div class="lm-icon-wrapper">
				<div class="lm-icon icon-user"></div>
			</div>
			<div class="lm-icon-wrapper">
				<div class="lm-icon icon-products"></div>
			</div>
			<div class="lm-icon-wrapper">
				<div class="lm-icon icon-channel"></div>
			</div>
			<div class="lm-icon-wrapper">
				<div class="lm-icon icon-label"></div>
			</div>
			<div class="lm-icon-wrapper">
				<div class="lm-icon icon-analysis"></div>
			</div>
		</div>`;
	$("body").prepend(h1);

//	var h2 = `<div class="nav-path">
//				<div class="np-prs">PRS</div>
//				<div class="prs-left">
//					<span class="prs-text fl">PRS System</span>
//					<select name=""  class="prs__select">
//						<option value="">标签管理</option>
//					</select>
//					<div class="breadcrumb fl">
//						<div class="breadcrumb-item">
//							产品分类
//						</div>
//						<span class="arrow-gt"> > </span>
//						<div class="breadcrumb-item">
//							手机
//						</div>
//					</div>
//				</div>
//				<div class="prs-right">
//					<div class="icon icon-mail"></div>
//					<div class="icon icon-star"></div>
//				</div>
//			</div>`;
//	$(".content").prepend(h2)
	$( ".prs__select" ).selectify({
		btnText: '',
		classes: {
			container: "prs__select sl-container"
		}
	});
	$( ".select" ).each(function(i){
		var className = $(this).attr('class');
		$(this).selectify({
			btnText: '',
			classes: {
				container: className+ ' sl-container'
			}
		});
	})
	$( "select" ).on( "change", function ( ) {
		console.log( "Yes, these events work as they did on the native UI!" );
	});
}
frameObj.login();