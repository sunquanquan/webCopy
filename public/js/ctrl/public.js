function navShow(){
	var $publicTopMenu = $('.e_public_top_menu > li');
	$publicTopMenu.hover(function(){
		$(this).find('div').show();
	},function(){
		$(this).find('div').hide();
	}); 
}
//弹窗登录
function popupLogin(){
	var popup1 = $('.popup');
	popup1.html(MPT.getTmpl('t_popup_login'));
	popup($('.popup'),{width:392,height:411});
}
//弹窗登录
function popupLogin_finpw(){
	var popup1 = $('.popup');
	MPT.Config['findpw_flag'] = true;
	popup1.html(MPT.getTmpl('t_popup_login'));
	popup($('.popup'),{width:392,height:411});
}
//弹窗通用方法
function popup(htm,attrs){
	$.blockUI({
		message: htm,
		css: {
			width: attrs.width + 'px',
			height: attrs.height + 'px',
			top:20+'%',
			left:($(window).width() - attrs.width)/2
		},
		focusInput:false
	});
	return false;
}
function popupAlert(msg){
	$.blockUI({
		message: MPT.getTmpl('t_iw_alert', {'msg': msg}),
		css: {
			left: ($(window).width() - 360) / 2,
			top: '10%'
		},
		focusInput: false,
		onBlock: function(){
			$('.iw-alert a').click(function(){
				$.unblockUI();
			});
		},
		overlayCSS: {
			opacity: 0.1
		}
	});
}
//登录回调函数
function loginSucc(){
	$.unblockUI();
	if(MPT.Config['findpw_flag'] && (/findPw.do/ig.test(window.location.href))){
		window.location.href = MPT.Config['url']['passport']['center'];
	}else{
		window.location.reload();
	}
}
//获取FAQ信息
function getFAQ(type){
	var result = null;
	$.ajax({
		async: false,
		type: 'post',
		url: MPT.Config['req']['faq'],
		data: {'typeCode': type, 'pid': MPT.pid},
		dataType: 'json',
		error: function(){
			popupAlert('FAQ信息获取失败！');
			return false;
		},
		success: function(res){
			switch(res.errorCode){
				case MPT.Config['result']['ok']:
					result = res;
					break;
				case MPT.Config['result']['notLogin'][0]:
					return false;
					break;
				default:
					popupAlert("未知错误，错误原因：内部错误！");
					break;
			}
		}
	});
	$('.faq_box').html(MPT.getTmpl('t_FAQ',result));
	$('.faq_btn').click(function(){
		if($(this).hasClass('cur')){
			$(this).removeClass('cur');
			$('.faq').stop(true,false).animate({right:'-212px'},500);
		}else{
			$(this).addClass('cur');
			$('.faq').stop(true,false).animate({right:'0'},500);
		}
	});
	$('.faq_list li .list_item').each(function(i){
		$(this).click(function(){
			$(this).next().show();
			$(this).parent().siblings().hide();
		});
	});
	$('.closeAwser').each(function(){
		$(this).click(function(){
			$('.faq_list li').show();
			$(this).parent().hide();
		});
	});
}
//左侧导航信息
function leftnav(){
	$('.leftNav_list_icon').each(function(i){
		$(this).click(function(){
			$(this).parents('.leftNav_con').siblings().find('.leftNav_list_con').hide();
			$(this).siblings('.leftNav_list_con').hide();
			$(this).next().show();
		});
	});
	 $('.leftNav_list_con').find('a').each(function(){
		$(this).hover(function(){
			$(this).parent().addClass('cur');
		},function(){
			$(this).parent().removeClass('cur');
		});
	});
}
$(function(){
	$.ajax({
		async: false,
		type: 'post',
		url: MPT.Config['req']['accData'],
		data: {'pid': MPT.pid},
		dataType: 'json',
		error: function(){
			return false;
		},
		success: function(res){
			switch(res.errorCode){
				case MPT.Config['result']['ok']:
					MPT.Config['accData'] = res.bizObj;
					if(!res.bizObj.completeIdCard){
						if(!/\/tipIdcard.do$/i.test(window.location.href)){
							window.location.href = MPT.Config['cs_http']+'/tipIdcard.do';
						}
					}
					break;
				case MPT.Config['result']['notLogin'][0]:
					return true;
					break;
				default:
					break;
			}
		}
	});
	$('#h').html(MPT.getTmpl('t_public_top',MPT.Config['accData']));
	$('#f').html(MPT.getTmpl('t_conmon_footer'));
	$('.nav').html(MPT.getTmpl('t_conmon_nav'));
	navShow();
	$('.nav_slide ul li').not('.last').each(function(){
		$(this).hover(function(){
			$(this).addClass('cur');
		},function(){
			$(this).removeClass('cur');
		})
	});
});
function getNewCaptcha2(obj, ct){
	console.log("obj : "+obj);
	console.log("  ct: "+ct);
	//var oImg = obj.getElementsByTagName('img')[0];
	//var capId = obj.getElementsByTagName('input')[0].value;
	var oImg = document.getElementsByTagName('img')[0];
	var capId = document.getElementsByTagName('input')[0].value;
	console.log("  ct: "+oImg);
	console.log(capId);
	if(!capId){
		capId = genCapId(obj, ct);
	}
	if(capId){
		oImg.src = '/captcha?c=' + capId + '&r=' + Math.random();
		oImg.style.display = 'block';
		oImg.onerror = function(){
			console.log("1");
			imgError2(oImg);
		};
		obj.onclick = function(){
			getNewCaptcha(obj);
		}
	}else{
		console.log("2");
		imgError2(oImg);
	}
}
function genCapId(obj, ct){
	//var oCapId = obj.getElementsByTagName('input')[0];
	var oCapId = document.getElementsByTagName('input')[0];
	var oCapName = oCapId.name;
	var capId = null;
	$.ajax({
		async: false,
		type: 'post',
		url: MPT.Config['req']['gencapid'],
		data: {'ct': ct, 'pid': MPT.pid},
		dataType: 'json',
		success: function(result){
			if(result.errorCode == MPT.Config['result']['ok']){
				capId = result.bizObj;
			}
		}
	});
	oCapId.value = capId;
	if(!oCapName){
		oCapId.name = 'capId';
	}
	return capId;
}
function imgError2(obj){
	popupAlert('页面已过期，请重新刷新页面！');
	obj.onerror = null;
}