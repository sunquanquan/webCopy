//找回密码内部导航
MPT.addTmpl('t_findpw_menu',function(_data){
	var _curStatus = _data.curStatus;
	var a = [];
	a.push('<ul class="account-menu e-findpw-menu">');
	if(_curStatus == 'mobile'){
		a.push('<li class="fl cur"><a href="javascript:;" class="block account-menu-mobile" title="通过安全手机找回"></a></li>');
	}else{
		a.push('<li class="fl"><a href="'+MPT.Config['url'].findByMobile+'" class="block account-menu-mobile" title="通过安全手机找回"></a></li>');
	}
	if(_curStatus == 'email'){
		a.push('<li class="fl cur"><a href="javascript:;" class="block account-menu-email" title="通过安全邮箱找回"></a></li>');
	}else{
		a.push('<li class="fl"><a href="'+MPT.Config['url'].findByEmail+'" class="block account-menu-email" title="通过安全邮箱找回"></a></li>');
	}
	if(_curStatus == 'sq'){
		a.push('<li class="fl cur"><a href="javascript:;" class="block account-menu-sq" title="通过密保问题找回"></a></li>');
	}else{
		a.push('<li class="fl"><a href="'+MPT.Config['url'].findBySq+'" class="block account-menu-sq" title="通过密保问题找回"></a></li>');
	}
	if(_curStatus == 'ss'){
		a.push('<li class="fl cur last"><a href="javascript:;" class="block account-menu-ss" title="通过申诉找回"></a></li>');
	}else{
		a.push('<li class="fl last"><a href="'+MPT.Config['url'].findBySs+'" class="block account-menu-ss" title="通过申诉找回"></a></li>');
	}
	a.push('</ul>');
	return a.join('');
});
//步骤—找回密码
MPT.addTmpl('t_findpw_step',function(_data){
	var _curStatus = _data.curStatus;
	var _curStep = _data.curStep;
	var a = [];
	a.push('<ul class="clearfix findpw-step e_findpw_step">');
	a.push('<li class="fl findpw-step-green">');
	a.push('	<i class="block public-icon icon-step-green"></i>');
	a.push('	<em>输入账号</em>');
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
	switch(_curStatus){
		case 'mobile':
			a.push('	<em>验证安全手机</em>');
			break;
		case 'email':
			a.push('	<em>验证安全邮箱</em>');
			break;
		case 'sq':
			a.push('	<em>验证密保问题</em>');
			break;
		default:
			a.push('	<em>验证其他</em>');
	}
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
	a.push('	<em>重新设置密码</em>');
	a.push('</li>');
	if(_curStep == 4){
		a.push('<li class="fl findpw-step-line-green"></li>');
		a.push('<li class="fl findpw-step-green">');
		a.push('	<i class="block public-icon icon-step-green"></i>');
	}else{
		a.push('<li class="fl findpw-step-line-gray"></li>');
		a.push('<li class="fl findpw-step-gray">');
		a.push('	<i class="block public-icon icon-step-gray"></i>');
	}
	a.push('	<em>修改成功</em>');
	a.push('</li>');
	a.push('</ul>');
	return a.join('');
});
//绑定手机
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
	a.push('			<button class="fl gradient2 form-button e_sendsms public_img"></button>');
	a.push('		</li>');
	a.push('		<li class="clearfix">');
	a.push('			<label for="" class="fl">请输入短信验证码：</label>');
	if(_curStatus == 'findpw'){
		a.push('			<input type="text" name="smsCaptcha" class="fl form-input-captcha" maxlength="6" autocomplete="off" datatype="/[0-9]{6}/" nullmsg="可别忘了输入收到的手机验证码" errormsg="手机验证码输入错误" sucmsg="&nbsp;"/>');
	}else{
		a.push('			<input type="text" name="captcha" class="fl form-input-captcha" maxlength="6" autocomplete="off" datatype="/[0-9]{6}/" nullmsg="可别忘了输入收到的手机验证码" errormsg="手机验证码输入错误" sucmsg="&nbsp;"/>');
	}
	a.push('		</li>');
	a.push('		<li class="clearfix account-mobile-tip e_account_tip"></li>');
	a.push('		<li class="clearfix">');
	a.push('			<input type="submit" value="下一步" class="block form-submit account-form-submit e_account_submit"/>');
	a.push('		</li>');
	a.push('	</ul>');
	if(_curStatus == 'lock' || _curStatus == 'unlock'){
		a.push('	<dl class="clearfix account-tips">');
		a.push('		<dt>温馨提示：</dt>');
		a.push('		<dd>如果上面显示的手机号码不是本人所有，或手机已丢失，请<a href="" target="_blank" class="account-mobile-blue">点击这里</a>，</dd>');
		a.push('		<dd>申诉解除手机绑定措施。</dd>');
		a.push('	</dl>');
		a.push('	<input type="hidden" name="product" value="' + _product + '"/>');
		a.push('	<input type="hidden" name="optype" value="' + _curStatus + '"/>');
		a.push('	<input type="hidden" name="account" value="' + _account + '"/>');
		a.push('	<input type="hidden" name="mobile" value="' + _mobile + '"/>');
	}else if(_curStatus == 'findpw'){
		a.push('	<input type="hidden" name="type" value="pw"/>');
		a.push('	<input type="hidden" name="username" value="' + _account + '"/>');
		a.push('	<input type="hidden" name="mobileNumber" value="' + _mobile + '"/>');
	}
	a.push('</form>');
	return a.join('');
});
MPT.addTmpl('t_findpw_passform',function(_data){
	var _curStatus = _data.curStatus;
	var _key = _data.key;
	var a = [];
	a.push('<form action="" class="e_findpw_form" method="post">');
	a.push('	<ul class="findpw-form Relative">');
	a.push('		<li class="findpw-form-list clearfix">');
	a.push('			<label for="" class="fl">设置新的密码：</label>');
	a.push('			<input type="password" name="password" class="fl form-input" plugin="passwordStrength" maxlength="16" autocomplete="off" datatype="/^[^\\u4E00-\\u9FA5\\s]{6,16}$/" nullmsg=" * 可别忘了输入密码" errormsg=" * 密码由6-16位区分大小写英文字母、数字及符号组成" sucmsg="&nbsp;" tabindex="1"/>');
	a.push('			<label class="fl password_mess Validform_checktip"></label>');
	a.push('		</li>');
	a.push('		<div class="passwordStrength clearfix">');
	a.push('			<span class="fl">弱</span>');
	a.push('			<span class="fl">中</span>');
	a.push('			<span class="fl">强</span>');
	a.push('		</div>');
	a.push('		<li class="findpw-form-list clearfix">');
	a.push('			<label for="" class="fl">重复新的密码：</label>');
	a.push('			<input type="password" class="fl form-input" maxlength="16" autocomplete="off" datatype="/^[^\\u4E00-\\u9FA5\\s]{6,16}$/" nullmsg=" * 可别忘了再次输入确认密码" errormsg=" * 两次密码输入必须一样" sucmsg="&nbsp;" recheck="password" tabindex="1"/>');
	a.push('			<label class="fl password_mess Validform_checktip"></label>');
	a.push('		</li>');
	a.push('		<li class="findpw-form-list clearfix">');
	a.push('			<label for="" class="fl">&nbsp;</label>');
	a.push('			<input type="submit" value="确定修改" class="fl form-submit account-form-submit e_submit"/>');
	a.push('		</li>');
	a.push('	</ul>');
	a.push('	<input type="hidden" name="key" value="' + _key + '"/>');
	a.push('</form>');
	return a.join('');
});
MPT.addTmpl('t_findpw_email',function(_data){
	var _eemail = _data.eemail;
	var _emailUrl = _data.emailUrl;
	var a = [];
	a.push('<h3 class="findpw-email-title">点击发送邮件后，系统就会向您的安全邮箱<br/>'+ _eemail +'<br/>发送确认邮件，点击邮件中的链接即可进入下一步</h3>');
	a.push('<h4 class="clearfix findpw-email-btn">');
	a.push('	<a href="' + _emailUrl + '" target="_blank" class="fl form_btn m3">立即登录</a>');
	a.push('	<button class="fl form_btn e_email_send">发送邮件</button>');
	a.push('</h4>');
	a.push('<dl class="clearfix findpw-email-tips">');
	a.push('	<dt>温馨提示：</dt>');
	a.push('	<dd>1、由于网络传输原因，可能会出现邮件接收延迟，请您耐心等待3-5分钟；</dd>');
	a.push('	<dd>2、若长时间仍未收到邮件，建议您检查垃圾箱或重新发送；</dd>');
	a.push('	<dd>3、若仍长时间未收到邮件，建议您进入客服中心进行申诉尝试。</dd>');
	a.push('</dl>');
	return a.join('');
});
MPT.addTmpl('t_findpw_ss',function(){
	var a = [];
	a.push('<h2 class="findpw-ss-title">您即将通过申诉找回密码，请您按照如下流程进行操作。</h2>');
	a.push('<p class="findpw-ss-txt">1、请您使用无需找回密码的另一个账号登录客服中心。</p>');
	a.push('<p class="findpw-ss-txt">2、登录后，请点击本页面快捷功能<a href="'+MPT.Config["url"].question+'" target="_blank">申诉找回密码</a>，提交申诉找回密码工单。您也可打开客服中心-安全保护-申诉找回账号密码，填写找回密码工单。</p>');
	a.push('<p class="findpw-ss-txt">3、在提交的工单中，填写您需要找回密码的账号、该账号的注册身份证电子档、需要重置的密码。</p>');
	a.push('<p class="findpw-ss-txt">4、您的工单提交后，我们的工作人员会对您提交的账号资料进行审核，若审核通过，您需要找回密码的账号其密码会被重置成您填写的密码。</p>');
	a.push('<p class="findpw-ss-txt">5、若您需要修改密码的账号存在账号争议，您可能需要提交更多相关证据证明该账号属于您。如账号交易凭证等。</p>');
	a.push('<a href="'+MPT.Config["url"].question+'" class="block form-submit margin-t">申诉找回密码</a>');
	return a.join('');
});
MPT.addTmpl('t_findpw_ok',function(){
	var a = [];
	a.push('<div class="findpw-ok clearfix fl">');
	a.push('	<em class="fl public_img"></em>');
	a.push('	<span class="fl">密码修改成功</span>');
	a.push('</div>');
	a.push('<div class="clear"></div>');
	a.push('<h4 class="findpw-ok-tips">温馨提示：修改通行证密码后，请用新密码登录游戏。</h4>');
	a.push('<a href="javascript:;" class="block login_password" onclick="popupLogin_finpw()">使用新密码登录</a>');
	return a.join('');
});
MPT.addTmpl('t_findpw_sq',function(_data){
	var _username = _data.username;
	var _q1 = _data.q1;
	var _q2 = _data.q2;
	var _q3 = _data.q3;
	var a = [];
	a.push('<form action="" class="e_account_form" method="post" onsubmit="return false;">');
	a.push('	<ul class="clearfix findpw-sq">');
	a.push('		<li class="fl findpw-sq-list">');
	a.push('			<label for="" class="fl">问题一：</label>');
	a.push('			<input type="text" class="fl form-input" value="' + securityQuestion[_q1].question + '" readonly="readonly"/>');
	a.push('			<input type="hidden" name="q1" value="' + _q1 + '"/>');
	a.push('		</li>');
	a.push('		<li class="fl findpw-sq-tip"></li>');
	a.push('		<li class="fl findpw-sq-list">');
	a.push('			<label for="" class="fl">答案：</label>');
	a.push('			<input type="text" name="a1" class="fl form-input" maxlength="100" tabindex="1" datatype="/.*/" nullmsg="可别忘了输入密保答案" errormsg="答案格式不符合规则" sucmsg="&nbsp;"/>');
	a.push('		</li>');
	a.push('		<li class="fl findpw-sq-tip e_findpw_tip"></li>');
	a.push('		<li class="fl findpw-sq-list">');
	a.push('			<label for="" class="fl">问题二：</label>');
	a.push('			<input type="text" class="fl form-input" value="' + securityQuestion[_q2].question + '" readonly="readonly"/>');
	a.push('			<input type="hidden" name="q2" value="' + _q2 + '"/>');
	a.push('		</li>');
	a.push('		<li class="fl findpw-sq-tip"></li>');
	a.push('		<li class="fl findpw-sq-list">');
	a.push('			<label for="" class="fl">答案：</label>');
	a.push('			<input type="text" name="a2" class="fl form-input" maxlength="100" tabindex="1" datatype="/.*/" nullmsg="可别忘了输入密保答案" errormsg="答案格式不符合规则" sucmsg="&nbsp;"/>');
	a.push('		</li>');
	a.push('		<li class="fl findpw-sq-tip e_findpw_tip"></li>');
	a.push('		<li class="fl findpw-sq-list">');
	a.push('			<label for="" class="fl">问题三：</label>');
	a.push('			<input type="text" class="fl form-input" value="' + securityQuestion[_q3].question + '" readonly="readonly"/>');
	a.push('			<input type="hidden" name="q3" value="' + _q3 + '"/>');
	a.push('		</li>');
	a.push('		<li class="fl findpw-sq-tip"></li>');
	a.push('		<li class="fl findpw-sq-list">');
	a.push('			<label for="" class="fl">答案：</label>');
	a.push('			<input type="text" name="a3" class="fl form-input" maxlength="100" tabindex="1" datatype="/.*/" nullmsg="可别忘了输入密保答案" errormsg="答案格式不符合规则" sucmsg="&nbsp;"/>');
	a.push('		</li>');
	a.push('		<li class="fl findpw-sq-tip e_findpw_tip"></li>');
	a.push('	</ul>');
	a.push('	<input type="submit" value="下一步" class="block form-submit account-form-submit e_findpw_submit"/>');
	a.push('	<input type="hidden" name="username" value="' + _username + '"/>');
	a.push('</form>');
	return a.join('');
});