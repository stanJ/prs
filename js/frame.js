$(function(){
	loadFrame();
})
function loadFrame(){
	var h1 = `<header>
			<nav class="top-nav clearfix">
				<div class="nav-left">
					<a href="javascript:">Dashboard</a>
					<a href="javascript:">Content</a>
					<a href="javascript:">Construction</a>
					<a href="javascript:">User</a>
					<a href="javascript:">Module</a>
					<a href="javascript:">Configuration</a>
					<a href="javascript:">Report</a>
					<a href="javascript:">Help</a>
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

	var h2 = `<div class="nav-path">
				<div class="np-prs">PRS</div>
				<div class="prs-left">
					<span class="prs-text fl">PRS System</span>
					<select name=""  class="prs__select">
						<option value="">标签管理</option>
					</select>
					<div class="breadcrumb fl">
						<div class="breadcrumb-item">
							产品分类
						</div>
						<span class="arrow-gt"> > </span>
						<div class="breadcrumb-item">
							手机
						</div>
					</div>
				</div>
				<div class="prs-right">
					<div class="icon icon-mail"></div>
					<div class="icon icon-star"></div>
				</div>
			</div>`;
	$(".content").prepend(h2)
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
//	$( ".select" ).selectify({
//		btnText: '',
//		classes: {
//			container: 'select ' ++ ' sl-container'
//		}
//	});
	$( "select" ).on( "change", function ( ) {
		console.log( "Yes, these events work as they did on the native UI!" );
	});
}
