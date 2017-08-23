var _regPopFlag = 1;
var config = {
	form: [{
		id: 'smsForm',
		aftersubmit: function(result){
			$('#smsForm').remove();
			var mobile = $('.e_mobile').val();
			var $captcha = $('.e_captcha');
			var $sendBtn = $('.e_send_sms');
			$sendBtn.removeAttr('disabled');
			switch(result.errorCode){
				case MPT.Config['result']['ok']:
					countDown(120);
					break;
				case MPT.Config['result']['smsFrequent'][0]:
					popupAlert(MPT.Config['result']['smsFrequent'][1]);
					countDown(120);
					break;
				case MPT.Config['result']['smsLimit'][0]:
					popupAlert(MPT.Config['result']['smsLimit'][1]);
					countDown(120);
					break;
				case MPT.Config['result']['nullCaptcha'][0]:
					popup(MPT.getTmpl('t_pop_sms', {'sm': mobile}), {'width': 260}, function(){
						$('.e_pop_sms_close').click(function(){
							$.unblockUI();
						});
						popSmsCaptcha();
					});
					break;
				default:
					popupAlert('短信验证码发送失败，失败原因：' + result.errorCode);
					countDown(120);
			}
		}
	},{
		id: 'popSmsForm',
		aftersubmit: function(result){
			var $captcha = $('.e_captcha');
			var $form = $('.e_pop_sms_form');
			var $submit = $('.e_pop_sms_submit');
			var $tip = $form.find('.Validform_checktip');
			var $cid = $form.find('input[name=cid]');
			$submit.removeAttr('disabled').val('提  交');
			switch(result.errorCode){
				case MPT.Config['result']['ok']:
					countDown(120);
					$.unblockUI();
					break;
				case MPT.Config['result']['captchaExpired'][0]:
					$tip.text(MPT.Config['result']['captchaExpired'][1]);
					$cid.val('');
					getNewCaptcha2($cid.parent().get(0), 'fasms');
					_regPopFlag = 0;
					break;
				case MPT.Config['result']['captchaError'][0]:
					$tip.text(MPT.Config['result']['captchaError'][1]);
					_regPopFlag = 0;
					break;
				default:
					$tip.text('短信验证码发送失败');
					_regPopFlag = 0;
			}
		}
	}]
}
function popup(content, opts, callback){
	var _width = opts.width;
	var _height = opts.height;
	var _top = opts.top || '10%';
	if(_height){
		_top = ($(window).height() - _height) / 2;
	}
	$.blockUI({
		message: content,
		css: {
			left: ($(window).width() - _width) / 2,
			top: _top
		},
		focusInput: false,
		onBlock: function(){
			if(callback) callback();
		},
		overlayCSS: {
			opacity: 0.1
		}
	});
}
function popSmsCaptcha(){
	var $form = $('.e_pop_sms_form');
	var $submit = $('.e_pop_sms_submit');
	var $cid = $form.find('input[name=cid]');
	getNewCaptcha2($cid.parent().get(0), 'fasms');
	$form.Validform({
		tiptype: function(msg,o,cssctl){
			if(o.type == 3){
				_regPopFlag = 0;
			}else if(o.type == 2){
				_regPopFlag = 1;
			}
			o.obj.parent().siblings().text(msg);
		},
		beforeCheck: function(){
			if(!_regPopFlag){
				return false;
			}
		},
		beforeSubmit: function(){
			$submit.prop('disabled', true).val('提 交 中');
		},
		callback: function(){
			config.go('popSmsForm');
			return false;
		}
	});
}
function sendSms(mobile){
	var $sendBtn = $('.e_send_sms');
	if(!(MPT.Config['regexp']['mobile'].test(mobile))){
		return false;
	}else{
		$('body').append('<form action="' + MPT.Config['req']['sms'] + '" class="hide" id="smsForm"><input type="hidden" name="st" value="fa"/><input type="hidden" name="sm" value="' + mobile + '"/></form>');
		//config.go('smsForm');
	}
	$.ajax({
		type: 'post',
		url: MPT.Config['req']['sms'],
		data: 'mobilenum=' + mobile + '&type=fa' + '&pid=' + MPT.pid,
		dataType: 'json',
		error: function(){
			popupAlert('短信验证码发送失败！');
		},
		complete: function(){
			$sendBtn.removeAttr('disabled');
		},
		success: function(result){
			switch(result.errorCode){
				case MPT.Config['result']['ok']:
					countDown(60);
					break;
				case MPT.Config['result']['smsFrequent'][0]:
					popupAlert(MPT.Config['result']['smsFrequent'][1]);
					$sendBtn.prop('disabled',false);
					break;
				case MPT.Config['result']['smsLimit'][0]:
					popupAlert(MPT.Config['result']['smsLimit'][1]);
					$sendBtn.prop('disabled',false);
					break;
				default:
					popupAlert('短信验证码发送失败，失败原因：内部错误！');
			}
		}
	});
}
//60秒倒计时
function countDown(_time){
	var $sendBtn = $('.e_send_sms');
	var _timer = null;
	_time = parseInt(_time);
	_timer = setInterval(function(){
		if(_time > 0){
			$sendBtn.prop('disabled', true).addClass('disabled').html('重新发送&nbsp;' + _time + '&nbsp;秒');
			_time--;
		}else{
			$sendBtn.removeAttr('disabled').removeClass('disabled').html('免费获取短信验证码');
			clearInterval(_timer);
		}
	},1000);
}
function findAccountSucc(){
	$('.e_find_account_mobile').val($('.e_mobile').val());
	$.ajax({
		type: 'post',
		url: MPT.Config['req']['gba'],
		data: 'mobile=' + $('.e_mobile').val() + '&pid=' + MPT.pid,
		dataType: 'json',
		error: function(){
			popupAlert('关联账号数据获取失败，请稍后重试！');
		},
		success: function(result){
			if(result.errorCode == MPT.Config['result']['ok']){
				$('.e_find_account').html(MPT.getTmpl('t_find_account_succ', {'list': result.bizObj, 'type': 'encrypt'}));
				$('.e_find_account_link').click(function(){
					findAccountIdcard();
				});
			}else{
				popupAlert('关联账号数据获取失败，失败原因：内部错误！');
			}
		}
	});
}
function findAccountIdcard(){
	$('.e_find_account').html(MPT.getTmpl('t_find_account_idcard'));
	var $form = $('.e_find_account_idcard_form');
	var $submit = $('.e_find_account_idcard_submit');
	$form.Validform({
		tiptype: function(msg, o){
			if(o.type == 3){
				o.obj.siblings('.Validform_checktip').text(msg);
			}
			if(o.type == 2){
				o.obj.siblings('.Validform_checktip').empty();
			}
		},
		datatype: {
			'idcard': function(gets){
				return validateIdCard(gets);
			}
		},
		beforeSubmit: function(){
			$submit.prop('disabled', true);
		},
		callback: function(){
			$.ajax({
				type: 'post',
				url: MPT.Config['req']['gba'],
				dataType: 'json',
				data: 'mobile=' + $('.e_find_account_mobile').val() + '&idcard=' + $('.e_idcardnum').val() + '&pid=' + MPT.pid,
				complete: function(){
					$submit.removeAttr('disabled');
				},
				success: function(result){
					if(result.errorCode == MPT.Config['result']['ok']){
						$('.e_find_account').html(MPT.getTmpl('t_find_account_succ', {'list': result.bizObj}));
					}else{
						popupAlert('关联账号数据获取失败，失败原因：内部错误！');
					}
				}
			});
			return false;
		}
	});
}
MPT.addAction('account',function(elm){
	var accountTip = $('.account-rightTip');
	var leftnav_box = $('.leftNav');
	var accountR = $('.account_r');
	var pos = null;
	accountTip.html(MPT.getTmpl('t_rightInner', {'curpos': [{'list': '账号安全'}, {'list': '找回账号'}]}));
	leftnav_box.html(MPT.getTmpl('t_leftnav', MPT.Config['accData']));
	pos = {'col': 2, 'pos': 3};
	$('.leftNav_list_con').eq(pos.col-1).show().find('li').eq(pos.pos-1).addClass('curimp');
	leftnav();
	getFAQ('zhzh');
	$('.list_mess').each(function(){
		$(this).mouseover(function(){
			$(this).find('.list_mess_content').show();
		});
		$(this).mouseout(function(){
			$(this).find('.list_mess_content').hide();
		});
	});
	$('.list_mess_content li').each(function(){
		$(this).hover(function(){
			$(this).addClass('cur');
		},function(){
			$(this).removeClass('cur');
		})
	});
	$('.list_mess_content li').each(function(){
		$(this).click(function(){
			$(this).parents('.list_mess').find('span').text($(this).html());
			$(this).parent().hide();
		});
	});
	accountR.append(MPT.getTmpl('t_find_account'));
	var $mobile = $('.e_mobile');
	var $send = $('.e_send_sms');
	var $form = $('.e_form');
	var $captcha = $('.e_captcha');
	var $submit = $('.e_submit');
	var $tip = $form.find('.Validform_checktip');
	$send.click(function(){
		var _mobile = $mobile.val();
		if(MPT.Config['regexp']['mobile'].test(_mobile)){
			$send.prop('disabled', true);
			sendSms(_mobile);
		}else{
			if(_mobile == ''){
				$mobile.focus();
			}
		}
	});
	$form.Validform({
		tiptype: function(msg, o){
			if(o.type == 3){
				o.obj.siblings('.Validform_checktip').text(msg);
			}
			if(o.type == 2){
				if($captcha.data('captcha') != $captcha.val()){
					o.obj.siblings('.Validform_checktip').empty();
				}
			}
		},
		beforeSubmit: function(){
			if($captcha.data('captcha') == $captcha.val()){
				return false;
			}
			$submit.prop('disabled', true);
		},
		callback: function(){
			$.ajax({
				type: 'post',
				url: MPT.Config['req']['confirmsms'],
				dataType: 'json',
				data: $form.serialize() + '&pid=' + MPT.pid,
				complete: function(){
					$captcha.data('captcha', $captcha.val());
					$submit.removeAttr('disabled');
				},
				success: function(result){
					switch(result.errorCode){
						case MPT.Config['result']['ok']:
							findAccountSucc();
							break;
						case MPT.Config['result']['notLogin'][0]:
							popupAlert(MPT.Config['result']['notLogin'][1]);
							Utils.toTargetView(MPT.Config['url']['loginPage']);
							break;
						case MPT.Config['result']['captchaError'][0]:
							$tip.eq(1).text(MPT.Config['result']['captchaError'][1]);
							break;
						case MPT.Config['result']['captchaExpired'][0]:
							$tip.eq(1).text(MPT.Config['result']['captchaExpired'][1]);
							break;
						case MPT.Config['result']['smsAccept'][0]:
							$tip.eq(1).text(MPT.Config['result']['smsAccept'][1]);
							break;
						default:
							popupAlert('提交失败，失败原因：内部错误！');
					}
				}
			});
			return false;
		}
	});
});