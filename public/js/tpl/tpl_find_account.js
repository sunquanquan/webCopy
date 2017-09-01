MPT.addTmpl('t_find_account', function(){
	var a = [];
	a.push('<div class="clearfix find-account e_find_account">');
	a.push('	<form action="" class="find-account-form e_form" method="post" onsubmit="return false;">');
	a.push('		<ul class="clearfix">');
	a.push('			<li class="fl">');
	a.push('				<label class="fl">请输入您绑定的安全手机号：</label>');
	a.push('				<input type="text" name="mobilenum" class="fl form-input e_mobile" maxlength="11" datatype="' + MPT.Config['regexp']['mobile'] + '" nullmsg="请输入您绑定的安全手机号码" errormsg="手机号码格式错误" sucmsg="&nbsp;"/>');
	a.push('				<span class="fl find-account-send"><button class="fl e_send_sms">免费获取短信验证码</button></span>');
	a.push('				<div class="clear"></div>');
	a.push('				<span class="fl Validform_checktip"></span>');
	a.push('			</li>');
	a.push('			<li class="fl">');
	a.push('				<label class="fl">请输入短信验证码：</label>');
	a.push('				<input type="text" name="captcha" class="fl form-input find-account-captcha e_captcha" maxlength="6" datatype="' + MPT.Config['regexp']['mobileCaptcha'] + '" nullmsg="请输入正确的验证码" errormsg="验证码格式错误" sucmsg="&nbsp;"/>');
	a.push('				<span class="fl Validform_checktip"></span>');
	a.push('			</li>');
	a.push('		</ul>');
	a.push('		<input type="hidden" name="type" value="fa"/>');
	a.push('		<input type="submit" value="确&nbsp;&nbsp;定" class="block form-submit e_submit"/>');
	a.push('	</form>');
	a.push('	<p class="find-account-tip">忘记安全手机？请拨打客服电话：021-60561813</p>');
	a.push('</div>');
	a.push('<input type="hidden" class="e_find_account_mobile" value=""/>');
	return a.join('');
});
MPT.addTmpl('t_find_account_succ', function(data){
	console.log(data);
	var a = [];
	if(data.type == 'encrypt'){
		a.push('<h2 class="find-account-title">您绑定了该密保手机的账号为：</h2>');
	}else{
		a.push('<h2 class="find-account-title">您通过该身份证注册的账号为：</h2>');
	}
	a.push('<table border="0" cellspacing="0" cellpadding="0" class="find-account-table">');
	a.push('	<tr><th>编号</th><th>账号</th><th>手机别名账号</th></tr>');
	if(data.list.length){
		for(var i = 0;i < data.list.length;i++){
			a.push('<tr><td>' + (i + 1) + '</td><td>' + data.list[i].accountName + '</td><td>' + data.list[i].nickName + '</td></tr>');
		}
	}else{
		a.push('<tr><td colspan="3">此手机没有关联的账号</td></tr>');
	}
	a.push('</table>');
	if(data.type == 'encrypt'){
		if(data.list.length){
			a.push('<a href="javascript:;" class="block form-submit find-account-link e_find_account_link">填写身份证获取详细账号</a>');
		}
	}
	return a.join('');
});
MPT.addTmpl('t_find_account_idcard', function(){
	var a = [];
	a.push('<form action="" class="e_find_account_idcard_form" method="post" onsubmit="return false;">');
	a.push('	<ul class="clearfix find-account-idcard">');
	a.push('		<li class="fl">');
	a.push('			<label class="fl">请输入您注册的身份证号：</label>');
	a.push('			<input type="text" name="idcard" class="fl form-input e_idcardnum" maxlength="18" datatype="idcard" nullmsg="请输入您注册的身份证号" errormsg="您输入的身份证号码错误" sucmsg="&nbsp;"/>');
	a.push('			<span class="fl Validform_checktip"></span>');
	a.push('		</li>');
	a.push('	</ul>');
	a.push('	<input type="submit" value="确&nbsp;&nbsp;定" class="block form-submit find-account-idcard-submit e_find_account_idcard_submit"/>');
	a.push('</form>');
	return a.join('');
});
MPT.addTmpl('t_pop_sms', function(data){
	var a = [];
	a.push('<div class="pop-sms">');
	a.push('	<a href="javascript:;" class="pop-sms-close e_pop_sms_close" title="关闭"></a>');
	a.push('	<h2 class="pop-sms-title">请输入图形验证码，以便接收短信</h2>');
	a.push('	<form action="' + MPT.Config['req']['sms'] + '" autocomplete="off" class="e_pop_sms_form" id="popSmsForm" method="post" onsubmit="return false;">');
	a.push('		<ul class="clearfix pop-sms-form">');
	a.push('			<li class="fl">');
	a.push('				<input type="text" name="capt" class="fl" maxlength="6" datatype="' + MPT.Config['regexp']['captcha'] + '" nullmsg="请输入图片上的数字或字母，不区分大小写" errormsg="验证码格式不正确" sucmsg="&nbsp;"/>');
	a.push('				<a href="javascript:;" title="看不清？重新换张！">');
	a.push('					<img width="120" height="30" style="display:none;"/>');
	a.push('					<input type="hidden" name="cid" value=""/>');
	a.push('				</a>');
	a.push('			</li>');
	a.push('			<li class="fl Validform_checktip"></li>');
	a.push('		</ul>');
	a.push('		<input type="hidden" name="st" value="fa"/>');
	a.push('		<input type="hidden" name="sm" value="' + data.sm + '"/>');
	a.push('		<input type="submit" value="提&nbsp;&nbsp;交" class="block pop-sms-submit e_pop_sms_submit"/>');
	a.push('	</form>');
	a.push('</div>');
	return a.join('');
});