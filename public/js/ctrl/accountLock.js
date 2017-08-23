MPT.addAction('account',function(elm){
	var url = Utils.getUrl('cur');
	console.log(url);
	var box = $('.accountLock_content');
	var leftnav_box = $('.leftNav');
	var accountR = $('.accountLock_r');
	var pos = null;
	leftnav_box.html(MPT.getTmpl('t_leftnav',MPT.Config['accData']));
	var leftbox = $('.leftNav_list_con');
	var accrTip = $('.accountLock-rightTip');
	var accountMstep = $('.accountLock-menu_step');
	var _productId = $('.e_product');
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
	$.ajax({
		type: 'post',
		url: MPT.Config['req']['product'],
		data: 'pid=' + MPT.pid,
		error: function(){
			_productId.html('<li class="iw-select-option" data-value="0">请选择</li>');
		},
		success: function(result){
			//result = $.parseJSON(result);
			if(result.errorCode == MPT.Config['result']['ok']){
				var _html = [];
				var _productList = result.bizObj;
				if(_productList != null){
					for(var i = 0;i < _productList.length;i++){
						_html.unshift('<li class="iw-select-option" data-value="' + _productList[i].id + '">' + _productList[i].name + '</li>');
					}
					_productId.append(_html.join(''));
					var $document = $(document);
					var $select = $('.iw-select');
					var $selected = $select.find('.iw-select-selected');
					var $options = $select.find('.iw-select-options');
					var $option = $select.find('.iw-select-option');
					var $arrow = $select.find('.iw-select-arrow');
					$document.click(function(){
						$options.hide();
					});
					$selected.click(function(e){
						$options.show();
						e.stopPropagation();
					});
					$option.click(function(e){
						var $this = $(this);
						var _val = $this.data('value');
						var _txt = $this.text();
						$selected.data('value', _val).val(_txt);
						$options.hide();
						e.stopPropagation();
						$('input[name=product]').val(_val).trigger('blur');
					});
					$.each($option, function(i){
						if($option.eq(i).data('value') === MPT.pid){
							$option.eq(i).trigger('click');
							return false;
						}
					});
				}else{
					_productId.html('<li class="iw-select-option" data-value="0">请选择</li>');
				}
			}else{
				_productId.html('<li class="iw-select-option" data-value="0">请选择</li>');
			}
		}
	});
	//找回密码
	switch(url){
		case 'lock':
			accrTip.html(MPT.getTmpl('t_rightInner',{'curpos':[{'list':'账号安全'},{'list':'账号锁定'}]}));
			pos = {'col':2,'pos':4};
			accountMstep.html(MPT.getTmpl('t_accountLock_step',{'curStep':1}));
			//getNewCaptcha('accountLockCaptcha');
			accountSubmit('lock');
			getFAQ('zhjs');
			break;
		case 'unlock':
			console.log('111111111111111111111');
			accrTip.html(MPT.getTmpl('t_rightInner',{'curpos':[{'list':'账号安全'},{'list':'账号解锁'}]}));
			pos = {'col':2,'pos':5};
			accountMstep.html(MPT.getTmpl('t_accountLock_step',{'curStep':1}));
			//getNewCaptcha('accountLockCaptcha');
			accountSubmit('unlock');
			//accountSubmit('lock');
			getFAQ('zhjs');
			break;
		default:
			accrTip.html(MPT.getTmpl('t_rightInner',{'curpos':[{'list':'账号安全'},{'list':'账号锁定'}]}));
			pos = {'col':2,'pos':4};
			accountMstep.html(MPT.getTmpl('t_accountLock_step',{'curStep':1}));
			//getNewCaptcha('accountLockCaptcha');
			accountSubmit('lock');
			getFAQ('zhjs');
			break;
	}
	leftbox.eq(pos.col-1).show().find('li').eq(pos.pos-1).addClass('curimp');
	leftnav();
});
//锁定解锁-账号验证码验证提交
function accountSubmit(_curStatus){
	var _submit = $('.e_submit');
	var _accountStep = $('.accountLock-menu_step');
	var _accountContent = $('.accountLock_content');
	$('.e_accountLock_form').attr('action',MPT.Config['req']['check']).Validform({
		tiptype: 2,
		ajaxPost: true,
		beforeSubmit: function(){
			_submit.prop('disabled',true);
			$.Hidemsg();
		},
		callback: function(result){
			console.log("lockSubmit:    "+result);
			$.Hidemsg();
			switch(result.errorCode){
				case MPT.Config['result']['ok']:
					switch(result.bizObj.status){
						//账号状态正常
						case 0:
							if(_curStatus == 'lock'){
								_submit.prop('disabled',false);
								var _account = $('.e_account')[0].value;
								var _product = $('input[name=product]').val();
								_accountStep.html(MPT.getTmpl('t_accountLock_step',{'curStep':2}));
								_accountContent.html(MPT.getTmpl('t_accountLock_method',{'account': _account,'curStatus':_curStatus,'product':_product}));
							}else if(_curStatus == 'unlock'){
								$('.e_account_tip').html('<span class="Validform_checktip Validform_wrong">您的通行证没有被锁定</span>');
								//getNewCaptcha('accountLockCaptcha');
								_submit.prop('disabled',false);
							}
							break;
						//账号状态正常
						case 2:
							if(_curStatus == 'lock'){
								$('.e_account_tip').html('<span class="Validform_checktip Validform_wrong">您的通行证已经锁定了</span>');
								getNewCaptcha('accountLockCaptcha');
								_submit.prop('disabled',false);
							}else if(_curStatus == 'unlock'){
								_submit.prop('disabled',false);
								var _account = $('.e_account')[0].value;
								var _product = $('input[name=product]').val();
								_accountStep.html(MPT.getTmpl('t_accountLock_step',{'curStep':2}));
								_accountContent.html(MPT.getTmpl('t_accountLock_method',{'account': _account,'curStatus':_curStatus,'product':_product}));
							}
							break;
						default:
							if(_curStatus == 'lock'){
								$('.e_account_tip').html('<span class="Validform_checktip Validform_wrong">该通行证处于封停状态，无法进行锁定操作</span>');
								//getNewCaptcha('accountLockCaptcha');
								_submit.prop('disabled',false);
							}else if(_curStatus == 'unlock'){
								$('.e_account_tip').html('<span class="Validform_checktip Validform_wrong">该通行证处于封停状态，无法进行解锁操作</span>');
								//getNewCaptcha('accountLockCaptcha');
								_submit.prop('disabled',false);
							}
					}
					break;
				case MPT.Config['result']['notExist'][0]:
					$('.e_account_tip').html('<span class="Validform_checktip Validform_wrong">' + MPT.Config['result']['notExist'][1] + '</span>');
					//getNewCaptcha('accountLockCaptcha');
					_submit.prop('disabled',false);
					break;
				case MPT.Config['result']['captchaExpired'][0]:
					$('.e_captcha_tip').html('<span class="Validform_checktip Validform_wrong">' + MPT.Config['result']['captchaExpired'][1] + '</span>');
					//getNewCaptcha('accountLockCaptcha');
					_submit.prop('disabled',false);
					break;
				case MPT.Config['result']['captchaError'][0]:
					$('.e_captcha_tip').html('<span class="Validform_checktip Validform_wrong">' + MPT.Config['result']['captchaError'][1] + '</span>');
					_submit.prop('disabled',false);
					break;
				default:
					popupAlert('提交失败，失败原因：内部错误！');
					//getNewCaptcha('accountLockCaptcha');
					_submit.prop('disabled',false);
			}
		}
	});
	$.Hidemsg();
}
//锁定解锁-两种验证方式
function accountMethod(_validtype){
	var _accountContent = $('.accountLock_content');
	var _account = $('input[name=account]')[0].value;
	var _product = $('input[name=product]')[0].value;
	var _curStatus = Utils.getUrl('cur');
	var _submit = $('.e_account_submit');
	if(_validtype == 'idcard'){
		_accountContent.html(MPT.getTmpl('t_account_idcard',{'account':_account,'curStatus':_curStatus,'product':_product}));
		$('.e_account_form').attr('action',MPT.Config['req']['lock'] + '?validtype=' + _validtype).Validform({
			tiptype:2,
			ajaxPost: true,
			datatype:{
				'idcard': function(gets,obj,curform,datatype){
					var Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ];
					var ValideCode = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];
					if(gets.length == 15){
						return isValidityBrithBy15IdCard(gets);
					}else if(gets.length == 18){
						var a_idCard = gets.split('');
						if (isValidityBrithBy18IdCard(gets)&&isTrueValidateCodeBy18IdCard(a_idCard)){
							return true;
						}
						return false;
					}
					return false;
					function isTrueValidateCodeBy18IdCard(a_idCard){
						var sum = 0;
						if (a_idCard[17].toLowerCase() == 'x'){
							a_idCard[17] = 10;
						}
						for ( var i = 0; i < 17; i++){
							sum += Wi[i] * a_idCard[i];
						}
						valCodePosition = sum % 11;
						if (a_idCard[17] == ValideCode[valCodePosition]){
							return true;
						}
						return false;
					}
					function isValidityBrithBy18IdCard(idCard18){
						var year = idCard18.substring(6,10);
						var month = idCard18.substring(10,12);
						var day = idCard18.substring(12,14);
						var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));
						if(temp_date.getFullYear()!=parseFloat(year) || temp_date.getMonth()!=parseFloat(month)-1 || temp_date.getDate()!=parseFloat(day)){
							return false;
						}
						return true;
					}
					function isValidityBrithBy15IdCard(idCard15){
						var year =  idCard15.substring(6,8);
						var month = idCard15.substring(8,10);
						var day = idCard15.substring(10,12);
						var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));
						if(temp_date.getYear()!=parseFloat(year) || temp_date.getMonth()!=parseFloat(month)-1 || temp_date.getDate()!=parseFloat(day)){
							return false;
						}
						return true;
					}
				}
			},
			beforeSubmit: function(){
				$.Hidemsg();
			},
			callback: function(result){
				$.Hidemsg();
				switch(result.errorCode){
					case MPT.Config['result']['ok']:
						$('.accountLock-menu_step').html(MPT.getTmpl('t_accountLock_step',{'curStep':3}));
						_accountContent.html(MPT.getTmpl('t_account_ok',{'account':_account,'curStatus':Utils.getUrl('cur')}));
						break;
					case MPT.Config['result']['idcardError'][0]:
						$('.e_account_tip').html('<span class="Validform_checktip Validform_wrong">' + MPT.Config['result']['idcardError'][1] + '</span>');
						_submit.prop('disabled',false);
						break;
					case MPT.Config['result']['accountLock'][0]:
						$('.e_account_tip').html('<span class="Validform_checktip Validform_wrong">' + MPT.Config['result']['accountLock'][1] + '</span>');
						_submit.prop('disabled',false);
						break;
					case MPT.Config['result']['accountUnlock'][0]:
						$('.e_account_tip').html('<span class="Validform_checktip Validform_wrong">' + MPT.Config['result']['accountUnlock'][1] + '</span>');
						_submit.prop('disabled',false);
						break;
					case MPT.Config['result']['accountKill'][0]:
						if(_curStatus == 'lock'){
							$('.e_account_tip').html('<span class="Validform_checktip Validform_wrong">' + MPT.Config['result']['accountKill'][1] + '</span>');
						}else{
							$('.e_account_tip').html('<span class="Validform_checktip Validform_wrong">' + MPT.Config['result']['accountKill'][2] + '</span>');
						}
						_submit.prop('disabled',false);
						break;
					default:
						popupAlert('提交失败，失败原因：内部错误！');
						_submit.prop('disabled',false);
				}
			}
		});
		$.Hidemsg();
	}else if(_validtype == 'mobile'){
		$.ajax({
			type: 'post',
			url: MPT.Config['req']['isBindMobile'],
			data: 'username=' + _account + '&pid=' + MPT.pid,
			error: function(){
				popupAlert('操作失败！');
			},
			success: function(result){
				result = $.parseJSON(result);
				if(result.errorCode == MPT.Config['result']['ok']){
					var _emobile = '';
					_emobile = result.bizObj.replace(result.bizObj.substr(3,4),'****');
					_accountContent.html(MPT.getTmpl('t_account_mobile_bind',{
						'account':_account,
						'curStatus':_curStatus,
						'product':_product,
						'mobile':result.bizObj,
						'emobile':_emobile,
						'showTips':1
					}));
					$('.e_sendsms').click(function(){
						sendSms(result.bizObj,_curStatus,_account);
					});
					$('.e_account_form').attr('action',MPT.Config['req']['lock'] + '?validtype=' + _validtype).Validform({
						tiptype:2,
						ajaxPost: true,
						beforeSubmit: function(){
							$.Hidemsg();
						},
						callback: function(result){
							$.Hidemsg();
							switch(result.errorCode){
								case MPT.Config['result']['ok']:
									$('.accountLock-menu_step').html(MPT.getTmpl('t_accountLock_step',{'curStep':3}));
									_accountContent.html(MPT.getTmpl('t_account_ok',{'account':_account,'curStatus':Utils.getUrl('cur')}));
									break;
								case MPT.Config['result']['smsCaptchaError'][0]:
									$('.e_account_tip').html('<span class="Validform_checktip Validform_wrong">' + MPT.Config['result']['smsCaptchaError'][1] + '</span>');
									_submit.prop('disabled',false);
									break;
								case MPT.Config['result']['accountLock'][0]:
									$('.e_account_tip').html('<span class="Validform_checktip Validform_wrong">' + MPT.Config['result']['accountLock'][1] + '</span>');
									_submit.prop('disabled',false);
									break;
								case MPT.Config['result']['accountUnlock'][0]:
									$('.e_account_tip').html('<span class="Validform_checktip Validform_wrong">' + MPT.Config['result']['accountUnlock'][1] + '</span>');
									_submit.prop('disabled',false);
									break;
								case MPT.Config['result']['accountKill'][0]:
									if(_curStatus == 'lock'){
										$('.e_account_tip').html('<span class="Validform_checktip Validform_wrong">' + MPT.Config['result']['accountKill'][1] + '</span>');
									}else{
										$('.e_account_tip').html('<span class="Validform_checktip Validform_wrong">' + MPT.Config['result']['accountKill'][2] + '</span>');
									}
									_submit.prop('disabled',false);
									break;
								default:
									popupAlert('提交失败，失败原因：内部错误！');
									_submit.prop('disabled',false);
							}
						}
					});
					$.Hidemsg();
				}else if(result.errorCode == MPT.Config['result']['unbindMobile'][0]){
					_accountContent.html(MPT.getTmpl('t_account_mobile_unbind',{'curStatus':_curStatus}));
					$('.e_mobile_prev').click(function(){
						_accountContent.html(MPT.getTmpl('t_accountLock_method',{'account':_account,'curStatus':_curStatus,'product':_product}));
						return false;
					});
				}else{
					popupAlert('操作失败！');
				}
			}
		});
	}else{
		_accountContent.empty();
	}
}
//发送短信验证码
function sendSms(_mobile,_type,_username){
	var _sendBtn = $('.e_sendsms');
	_sendBtn.prop('disabled',true);
	$.ajax({
		type: 'post',
		url: MPT.Config['req']['sendSmsCaptcha'],
		data: 'mobileNumber=' + _mobile + '&type=' + _type + '&username=' + _username + '&pid=' + MPT.pid,
		error: function(){
			popupAlert('短信验证码发送失败！');
			_sendBtn.prop('disabled',false);
		},
		success: function(result){
			result = $.parseJSON(result);
			switch(result.errorCode){
				case MPT.Config['result']['ok']:
					countDown(60,'mobile');
					break;
				case MPT.Config['result']['smsFrequent'][0]:
					popupAlert(MPT.Config['result']['smsFrequent'][1]);
					_sendBtn.prop('disabled',false);
					break;
				case MPT.Config['result']['smsLimit'][0]:
					popupAlert(MPT.Config['result']['smsLimit'][1]);
					_sendBtn.prop('disabled',false);
					break;
				default:
					popupAlert('短信验证码发送失败，失败原因：内部错误！');
					_sendBtn.prop('disabled',false);
			}
		}
	});
}
//60秒倒计时
function countDown(_time,_type){
	if(_type == 'mobile'){
		var _sendBtn = $('.e_sendsms');
	}else if(_type == 'email'){
		var _sendBtn = $('.e_email_send');
	}
	var _timer = null;
	_time = parseInt(_time);
	_timer = setInterval(function(){
		if(_time > 0){
			if(_type == 'mobile'){
				_sendBtn.removeClass('gradient2').addClass('gray').html('重新发送验证码&nbsp;' + _time + '&nbsp;秒');
			}else if(_type == 'email'){
				_sendBtn.removeClass('form_btn').addClass('emailgray').html('重新发送&nbsp;' + _time + '&nbsp;秒');
			}
			_time--;
		}else{
			if(_type == 'mobile'){
				_sendBtn.prop('disabled',false).removeClass('gray').addClass('gradient2').html('');
			}else if(_type == 'email'){
				_sendBtn.prop('disabled',false).removeClass('emailgray').addClass('form_btn').html('发送邮件');
			}
			clearInterval(_timer);
		}
	},1000);
}