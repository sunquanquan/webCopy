//步骤—账号解锁和锁定
MPT.addTmpl('t_accountLock_step',function(_data){
	var _curStep = _data.curStep;
	var a = [];
	a.push('<ul class="clearfix findpw-step e_findpw_step">');
	a.push('<li class="fl findpw-step-green">');
	a.push('	<i class="block public-icon icon-step-green"></i>');
	a.push('	<em>输入账号选择游戏</em>');
	a.push('</li>');
	if(_curStep >= 2){
		a.push('<li class="fl findpw-step-line-green"></li>');
		a.push('<li class="fl findpw-step-green">');
		a.push('	<i class="block public-icon icon-step-green"></i>');
	}else{
		a.push('<li class="fl findpw-step-line-gray"></li>');
		a.push('<li class="fl findpw-step-gray">');
		a.push('	<i class="block public-icon icon-step-gray"></i>');
	}
	a.push('<em>选择验证方式</em>');
	a.push('	</li>');
	if(_curStep >= 3){
		a.push('<li class="fl findpw-step-line-green"></li>');
		a.push('<li class="fl findpw-step-green">');
		a.push('	<i class="block public-icon icon-step-green"></i>');
	}else{
		a.push('<li class="fl findpw-step-line-gray"></li>');
		a.push('<li class="fl findpw-step-gray">');
		a.push('	<i class="block public-icon icon-step-gray"></i>');
	}
	a.push('	<em>操作成功</em>');
	a.push('</ul>');
	return a.join('');
});
MPT.addTmpl('t_accountLock_method',function(_data){
	var _account = _data.account;
	var _product = _data.product;
	var _curStatus = _data.curStatus;
	var _title1 = _title2 = '';
	var a = [];
	a.push('<div class="account-method e_account_method">');
	if(_curStatus == 'lock'){
		_title1 = '通过身份证验证完成锁定操作';
		_title2 = '通过验证绑定手机完成锁定操作';
	}else{
		_title1 = '通过身份证验证完成解锁操作';
		_title2 = '通过验证绑定手机完成解锁操作';
	}
	a.push('	<a href="javascript:;" onclick="accountMethod(\'idcard\');" class="block account-method-pic account-method-idcard e_account_method_idcard">' + _title1 + '</a>');
	a.push('	<a href="javascript:;" onclick="accountMethod(\'mobile\');" class="block account-method-pic account-method-mobile e_account_method_mobile">' + _title2 + '</a>');
	a.push('</div>');
	a.push('<input type="hidden" name="account" value="' + _account + '"/>');
	a.push('<input type="hidden" name="product" value="' + _product + '"/>');
	return a.join('');
});
MPT.addTmpl('t_account_idcard',function(_data){
	var _account = _data.account;
	var _curStatus = _data.curStatus;
	var _product = _data.product;
	var a = [];
	a.push('<form action="" method="post" class="e_account_form" onsubmit="return false;">');
	a.push('	<ul class="clearfix account-idcard">');
	a.push('		<li class="clearfix">');
	a.push('			<label for="" class="fl">请输入账号认证身份证号码：</label>');
	a.push('			<input type="text" name="idcard" class="form-input" maxlength="18" autocomplete="off" datatype="idcard" nullmsg="可别忘了输入身份证号码" errormsg="您输入的身份证格式不正确" sucmsg="&nbsp;"/>');
	a.push('		</li>');
	a.push('		<li class="clearfix account-idcard-tip e_account_tip"></li>');
	a.push('	</ul>');
	a.push('	<input type="submit" value="下一步" class="block  form-submit account-form-submit e_account_submit"/>');
	a.push('	<input type="hidden" name="account" value="' + _account + '"/>');
	a.push('	<input type="hidden" name="optype" value="' + _curStatus + '"/>');
	a.push('	<input type="hidden" name="product" value="' + _product + '"/>');
	a.push('</form>');
	return a.join('');
});
MPT.addTmpl('t_account_mobile_bind',function(_data){
	var _curStatus = _data.curStatus;
	var _mobile = _data.mobile;
	var _emobile = _data.emobile;
	var _account = _data.account;
	if(_curStatus == 'lock' || _curStatus == 'unlock'){
		var _product = _data.product;
	}
	var a = [];
	a.push('<form action="" method="post" class="e_account_form">');
	a.push('	<ul class="clearfix account-mobile">');
	a.push('		<li class="clearfix mb30">');
	a.push('			<h3 class="fl account-mobile-info">您的认证手机为：<em>' + _emobile + '</em></h3>');
	a.push('			<button class="fl gradient2 e_sendsms public_img"></button>');
	a.push('		</li>');
	a.push('		<li class="clearfix">');
	a.push('			<label for="" class="fl">请输入短信验证码：</label>');
	a.push('			<input type="text" name="captcha" class="fl form-input-captcha" maxlength="6" autocomplete="off" datatype="/[0-9]{6}/" nullmsg="可别忘了输入收到的手机验证码" errormsg="手机验证码输入错误" sucmsg="&nbsp;"/>');
	a.push('		</li>');
	a.push('		<li class="clearfix account-mobile-tip e_account_tip"></li>');
	a.push('		<li class="clearfix">');
	a.push('			<input type="submit" value="下一步" class="block form-submit account-form-submit e_account_submit"/>');
	a.push('		</li>');
	a.push('	</ul>');
	if(_curStatus == 'lock' || _curStatus == 'unlock'){
		a.push('	<dl class="clearfix account-tips">');
		a.push('		<dt>温馨提示：</dt>');
		a.push('		<dd>如果上面显示的手机号码不是本人所有，或手机已丢失，请<a href="' + MPT.Config['question']['jcbd'] + '" target="_blank" class="account-mobile-blue">点击这里</a>，申诉解除手机绑定措施。</dd>');
		a.push('	</dl>');
		a.push('	<input type="hidden" name="product" value="' + _product + '"/>');
		a.push('	<input type="hidden" name="optype" value="' + _curStatus + '"/>');
		a.push('	<input type="hidden" name="account" value="' + _account + '"/>');
		a.push('	<input type="hidden" name="mobile" value="' + _mobile + '"/>');
	}
	a.push('</form>');
	return a.join('');
});
MPT.addTmpl('t_account_mobile_unbind',function(_data){
	var _curStatus = _data.curStatus;
	var a = [];
	a.push('<h3 class="account-mobile-title pdm">您的通行证尚未绑定手机</h3>');
	if(_curStatus == 'lock'){
		a.push('<a href="' + MPT.Config['url']['passport']['safeMobilep'] + '" class="fl form-button m1">立即绑定</a>');
		a.push('<a href="javascript:;" class="fl form-button e_mobile_prev">返回上一步</a>');
	}else{
		a.push('<a href="javascript:;" class="block form-button m2 e_mobile_prev">返回上一步</a>');
	}
	return a.join('');
});
MPT.addTmpl('t_account_ok',function(_data){
	var _account = _data.account;
	var _curStatus = _data.curStatus;
	var a = [];
	if(_curStatus == 'lock'){
		a.push('<p class="account-ok"><span class="block public_img account-ok-icon"></span>游戏账号<em>' + _account + '</em>自助账号锁定申请已受理！</p>');
	}else{
		a.push('<p class="account-ok"><span class="block public_img account-ok-icon"></span>游戏账号<em>' + _account + '</em>自助账号解锁申请已受理！</p>');
	}
	a.push('<p class="account-ok-mess">请您及时登录游戏进行确认，如有问题请及时与我们联系。</p>');
	a.push('<p class="account-ok-mess">客服电话：<em>021-60561813</em></p>');
	return a.join('');
});