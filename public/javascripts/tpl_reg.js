MPT.addTmpl("t_reg_menu", function (e) {
    var d = e.type, g = e.rsUrl, c = e.rsVal, f = e.rsType, b = [];
    b.push('<ul class="clearfix menu">');
    if (d != "e" && d != "p") {
        b.push('<li class="fl current"><a href="javascript:;" class="block"><i class="reg-public reg-public-mobile"></i>手机注册</a></li>')
    } else {
        b.push('<li class="fl"><a href="' + MPT.Config.url["regMobilePage"] + (g ? ("&rsurl=" + encodeURIComponent(g)) : "") + (c ? ("&rsval=" + c) : "") + (f ? ("&rstype=" + f) : "") + '" class="block"><i class="reg-public reg-public-mobile"></i>手机注册</a></li>')
    }
    if (d == "e") {
        b.push('<li class="fl current"><a href="javascript:;" class="block"><i class="reg-public reg-public-email"></i>邮箱注册</a></li>')
    } else {
        if (MPT.Config.isopen["email"]) {
            b.push('<li class="fl"><a href="' + MPT.Config.url["regEmailPage"] + (g ? ("&rsurl=" + encodeURIComponent(g)) : "") + (c ? ("&rsval=" + c) : "") + (f ? ("&rstype=" + f) : "") + '" class="block"><i class="reg-public reg-public-email"></i>邮箱注册</a></li>')
        } else {
            b.push('<li class="fl"><a href="javascript:;" onclick="alert(\'暂未开放，敬请期待！\');" class="block"><i class="reg-public reg-public-email"></i>邮箱注册</a></li>')
        }
    }
    if (d == "p") {
        b.push('<li class="fl current"><a href="javascript:;" class="block"><i class="reg-public reg-public-personal"></i>个性注册</a></li>')
    } else {
        if (MPT.Config.isopen["personal"]) {
            b.push('<li class="fl"><a href="' + MPT.Config.url["regPersonalPage"] + (g ? ("&rsurl=" + encodeURIComponent(g)) : "") + (c ? ("&rsval=" + c) : "") + (f ? ("&rstype=" + f) : "") + '" class="block"><i class="reg-public reg-public-personal"></i>个性注册</a></li>')
        } else {
            b.push('<li class="fl"><a href="javascript:;" onclick="alert(\'暂未开放，敬请期待！\');" class="block"><i class="reg-public reg-public-personal"></i>个性注册</a></li>')
        }
    }
    b.push("</ul>");
    b.push('<h3>已有通行证？马上<a href="' + MPT.Config.url["loginPage"] + '">登录</a></h3>');
    return b.join("")
});
MPT.addTmpl("t_reg_ok", function (d) {
    var c = d.type, b = [];
    b.push('<h3 class="reg-ok-title">恭喜您注册成功</h3>');
    b.push('<h4 class="reg-ok-tip">请牢记您的通行证：' + d.account + '<span class="e_reg_ok_tip"></span><br/>为了保障您的通行证账号安全我们建议您<em>完善资料</em>，享受更多<em>安全服务</em></h4>');
    b.push('<a href="' + MPT.Config.url["space"]["passport"] + '" class="block reg-ok-btn">进入我的账号中心</a>');
    b.push('<div class="clearfix reg-ok-other">');
    b.push('	<ul class="fl">');
    b.push('		<li class="fl"><a href="' + MPT.Config.url["space"]["center_st"] + '" class="fl reg-ok-other-st" title="绑定令牌"></a></li>');
    if (c == "m") {
        b.push('	<li class="fl"><a href="' + MPT.Config.url["space"]["center_email"] + '" class="fl reg-ok-other-email" title="绑定邮箱"></a></li>')
    } else {
        if (c == "e") {
            b.push('	<li class="fl"><a href="' + MPT.Config.url["space"]["center_mobile"] + '" class="fl reg-ok-other-mobile" title="绑定手机"></a></li>')
        } else {
            b.push('	<li class="fl"><a href="' + MPT.Config.url["space"]["center_mobile"] + '" class="fl reg-ok-other-mobile" title="绑定手机"></a></li>');
            b.push('	<li class="fl"><a href="' + MPT.Config.url["space"]["center_email"] + '" class="fl reg-ok-other-email" title="绑定邮箱"></a></li>')
        }
    }
    b.push("	</ul>");
    b.push("</div>");
    return b.join("")
});
MPT.addTmpl("t_reg_email_confirm", function (c) {
    var b = [];
    b.push('<h3 class="reg-confirm-title">只差一步，点击邮箱链接立即完成注册！</h3>');
    b.push('<h4 class="reg-confirm-tip">系统已向您的注册邮箱：<em class="e_email">' + c.account + "</em>&nbsp;&nbsp;&nbsp;发送确认邮件</h4>");
    b.push('<ul class="clearfix reg-confirm-email">');
    b.push('	<li class="fl"><a href="javascript:;" class="fl reg-confirm-btn e_email_login">立即登录我的邮箱</a></li>');
    b.push('	<li class="fl reg-confirm-send"><a href="javascript:;" class="e_email_send">重新发送邮件</a></li>');
    b.push("</ul>");
    b.push('<dl class="clearfix reg-confirm-notice">');
    b.push('	<dt class="fl">温馨提示：</dt>');
    b.push('	<dd class="clear"></dd>');
    b.push("	<dd>1、由于网络传输原因，可能会出现邮件接受延迟，请您耐心等待3-5分钟；</dd>");
    b.push("	<dd>2、若长时间仍未收到邮件，建议您检查邮箱账号是否填写有误，或查阅垃圾邮件；</dd>");
    b.push('	<dd>3、若多次尝试仍未收到邮件，建议请尝试更换注册邮箱或者使用 <a href="' + MPT.Config.url["regMobilePage"] + '">手机注册</a> 或者 <a href="' + MPT.Config.url["regPersonalPage"] + '">个性注册</a>；</dd>');
    b.push("</dl>");
    return b.join("")
});
MPT.addTmpl("t_reg_email_fail", function () {
    var b = [];
    b.push('<h3 class="reg-fail-title">很抱歉，邮箱注册失败！</h3>');
    b.push('<h4 class="reg-fail-tip">请您重新填写信息进行注册，并在1小时内进入邮箱完成通行证账号注册。</h4>');
    b.push('<a href="' + MPT.Config.url["regEmailPage"] + '" class="block reg-fail-btn">邮箱账号注册</a>');
    b.push('<dl class="reg-fail-other">');
    b.push("	<dt>您还可以：</dt>");
    b.push('	<dd class="clearfix">');
    b.push('		<a href="' + MPT.Config.url["regMobilePage"] + '" class="fl">手机账号注册</a>');
    b.push('		<a href="' + MPT.Config.url["regPersonalPage"] + '" class="fl">个性账号注册</a>');
    b.push("	</dd>");
    b.push("</dl>");
    return b.join("")
});
MPT.addTmpl("t_reg_mobile", function (c) {
    var b = [];
    b.push('<form action="' + MPT.Config.req["register"] + '" autocomplete="off" class="e_form" id="regMobileForm" method="post" onsubmit="return false;">');
    b.push('	<ul class="clearfix reg">');
    b.push('		<li class="fl">');
    b.push('			<div class="reg-w fl">');
    b.push('				<input type="text" name="identityId" autocomplete="off" class="fl reg-txt e_account" maxlength="11" datatype="mobile" nullmsg="可别忘了填写手机号码" errormsg="手机号码格式填写错误" sucmsg="&nbsp;"/>');
    b.push("			</div>");
    b.push('			<div class="fl reg-tip">');
    b.push('				<em class="Validform_checktip"></em>');
    b.push('				<em class="fl reg-tip-focus e_reg_tip_focus">请填写有效的11位手机号码<i class="reg-tip-arrow reg-tip-arrow1">&#9670;</i><i class="reg-tip-arrow reg-tip-arrow2">&#9670;</i></em>');
    b.push("			</div>");
    b.push("		</li>");
    b.push('		<li class="fl">');
    b.push('			<div class="reg-w fl">');
    b.push('				<input type="password" oncopy="return false;" oncut="return false;"onpaste="return false;"  name="credential" autocomplete="off" class="fl reg-txt e_pass" maxlength="16" datatype="password" nullmsg="可别忘了填写密码" errormsg="密码格式填写错误" sucmsg="&nbsp;"/>');
    b.push("			</div>");
    b.push('			<div class="fl reg-tip">');
    b.push('				<em class="Validform_checktip"></em>');
    b.push('				<em class="fl reg-tip-focus e_reg_tip_focus">密码由6-16位区分大小写英文字母、数字及符号组成<i class="reg-tip-arrow reg-tip-arrow1">&#9670;</i><i class="reg-tip-arrow reg-tip-arrow2">&#9670;</i></em>');
    b.push("			</div>");
    b.push("		</li>");
    b.push('		<li class="fl">');
    b.push('			<div class="reg-w fl">');
    b.push('				<input type="password" oncopy="return false;" oncut="return false;"onpaste="return false;"  autocomplete="off" class="fl reg-txt e_pass2" maxlength="16" datatype="password" nullmsg="可别忘了填写再次输入确认密码" errormsg="两次密码填写必须一样" sucmsg="&nbsp;" recheck="credential"/>');
    b.push("			</div>");
    b.push('			<div class="fl reg-tip">');
    b.push('				<em class="Validform_checktip"></em>');
    b.push('				<em class="fl reg-tip-focus e_reg_tip_focus">需要再输入一次相同密码<i class="reg-tip-arrow reg-tip-arrow1">&#9670;</i><i class="reg-tip-arrow reg-tip-arrow2">&#9670;</i></em>');
    b.push("			</div>");
    b.push("		</li>");
    b.push('		<li class="fl">');
    b.push('			<div class="reg-w fl">');
    b.push('				<input type="text" name="captcha" autocomplete="off" class="fl reg-txt-captcha e_captcha" maxlength="6" datatype="captcha" nullmsg="可别忘了填写短信验证码" errormsg="验证码格式输入错误" sucmsg="&nbsp;"/>');
    b.push('				<em class="fl reg-btn-captcha"><a href="javascript:;" class="block e_getCaptcha">获取验证码</a></em>');
    b.push("			</div>");
    b.push('			<div class="fl reg-tip">');
    b.push('				<em class="Validform_checktip"></em>');
    b.push('				<em class="fl reg-tip-focus e_reg_tip_focus">请输入手机收到的验证码<i class="reg-tip-arrow reg-tip-arrow1">&#9670;</i><i class="reg-tip-arrow reg-tip-arrow2">&#9670;</i></em>');
    b.push("			</div>");
    b.push("		</li>");
    b.push('		<li class="fl">');
    b.push('			<div class="reg-w fl">');
    b.push('				<input type="text" name="fullname" autocomplete="off" class="fl reg-txt e_fullname" maxlength="8" datatype="fullname" nullmsg="可别忘了填写真实姓名" errormsg="真实姓名格式不对" sucmsg="&nbsp;"/>');
    b.push("			</div>");
    b.push('			<div class="fl reg-tip">');
    b.push('				<em class="Validform_checktip"></em>');
    b.push('				<em class="fl reg-tip-focus e_reg_tip_focus">请输入真实姓名<i class="reg-tip-arrow reg-tip-arrow1">&#9670;</i><i class="reg-tip-arrow reg-tip-arrow2">&#9670;</i></em>');
    b.push("			</div>");
    b.push("		</li>");
    b.push('		<li class="fl">');
    b.push('			<div class="reg-w fl">');
    b.push('				<input type="text" name="idcardNumber" autocomplete="off" class="fl reg-txt e_idcard" maxlength="18" datatype="idcard" nullmsg="身份证号码很重要，可别忘了填写" errormsg="您输入的身份证号码错误" sucmsg="&nbsp;"/>');
    b.push("			</div>");
    b.push('			<div class="fl reg-tip">');
    b.push('				<em class="Validform_checktip"></em>');
    b.push('				<em class="fl reg-tip-focus e_reg_tip_focus">需输入15或18位身份证号码<i class="reg-tip-arrow reg-tip-arrow1">&#9670;</i><i class="reg-tip-arrow reg-tip-arrow2">&#9670;</i></em>');
    b.push("			</div>");
    b.push("		</li>");
    b.push("	</ul>");
    b.push('	<div class="clearfix reg-agree">');
    b.push('		<input type="checkbox" checked="checked" class="fl e_reg_agree"/><label class="fl">我已阅读并同意</label><a href="' + MPT.Config.url["agreement"] + '" target="_blank">《绿岸用户协议》</a>');
    b.push("	</div>");
    b.push('	<input type="submit" value="提 交 注 册" class="block reg-submit e_submit"/>');
    b.push('	<input type="hidden" name="accountType" value="CELLPHONE"/>');
    b.push('	<input type="hidden" name="registInfo.source.sourceType" value="' + c.rsType + '"/>');
    b.push('	<input type="hidden" name="registInfo.source.sourceValue" value="' + c.rsVal + '"/>');
    b.push('	<input type="hidden" name="registInfo.source.sourceLocation" value="' + c.rsUrl + '"/>');
    b.push('	<input type="hidden" name="registInfo.source.appId" value="' + c.pid + '"/>');
    b.push("</form>");
    return b.join("")
});
MPT.addTmpl("t_reg_email", function (c) {
    var b = [];
    b.push('<form action="' + MPT.Config.req["register"] + '" autocomplete="off" class="e_form" id="regEmailForm" method="post" onsubmit="return false;">');
    b.push('	<ul class="clearfix reg">');
    b.push('		<li class="fl">');
    b.push('			<div class="reg-w fl">');
    b.push('				<input type="text" name="identityId" autocomplete="off" class="fl reg-txt e_account e_mail_account" maxlength="50" datatype="email" nullmsg="可别忘了填写邮箱账号" errormsg="邮箱格式填写错误" sucmsg="&nbsp;"/>');
    b.push("			</div>");
    b.push('			<div class="fl reg-tip">');
    b.push('				<em class="Validform_checktip"></em>');
    b.push('				<em class="fl reg-tip-focus e_reg_tip_focus">方便记忆，快捷找回密码必备，邮箱长度最大50位<i class="reg-tip-arrow reg-tip-arrow1">&#9670;</i><i class="reg-tip-arrow reg-tip-arrow2">&#9670;</i></em>');
    b.push("			</div>");
    b.push("		</li>");
    b.push('		<li class="fl">');
    b.push('			<div class="reg-w fl">');
    b.push('				<input type="password" oncopy="return false;" oncut="return false;"onpaste="return false;"  name="credential" autocomplete="off" class="fl reg-txt e_pass" maxlength="16" datatype="password" nullmsg="可别忘了填写密码" errormsg="密码格式填写错误" sucmsg="&nbsp;"/>');
    b.push("			</div>");
    b.push('			<div class="fl reg-tip">');
    b.push('				<em class="Validform_checktip"></em>');
    b.push('				<em class="fl reg-tip-focus e_reg_tip_focus">密码由6-16位区分大小写英文字母、数字及符号组成<i class="reg-tip-arrow reg-tip-arrow1">&#9670;</i><i class="reg-tip-arrow reg-tip-arrow2">&#9670;</i></em>');
    b.push("			</div>");
    b.push("		</li>");
    b.push('		<li class="fl">');
    b.push('			<div class="reg-w fl">');
    b.push('				<input type="password" oncopy="return false;" oncut="return false;"onpaste="return false;"  autocomplete="off" class="fl reg-txt e_pass2" maxlength="16" datatype="password" nullmsg="可别忘了填写再次输入确认密码" errormsg="两次密码填写必须一样" sucmsg="&nbsp;" recheck="credential"/>');
    b.push("			</div>");
    b.push('			<div class="fl reg-tip">');
    b.push('				<em class="Validform_checktip"></em>');
    b.push('				<em class="fl reg-tip-focus e_reg_tip_focus">需要再输入一次相同密码<i class="reg-tip-arrow reg-tip-arrow1">&#9670;</i><i class="reg-tip-arrow reg-tip-arrow2">&#9670;</i></em>');
    b.push("			</div>");
    b.push("		</li>");
    b.push('		<li class="fl">');
    b.push('			<div class="reg-w fl">');
    b.push('				<input type="text" name="fullname" autocomplete="off" class="fl reg-txt e_fullname" maxlength="8" datatype="fullname" nullmsg="可别忘了填写真实姓名" errormsg="真实姓名格式不对" sucmsg="&nbsp;"/>');
    b.push("			</div>");
    b.push('			<div class="fl reg-tip">');
    b.push('				<em class="Validform_checktip"></em>');
    b.push('				<em class="fl reg-tip-focus e_reg_tip_focus">请输入真实姓名<i class="reg-tip-arrow reg-tip-arrow1">&#9670;</i><i class="reg-tip-arrow reg-tip-arrow2">&#9670;</i></em>');
    b.push("			</div>");
    b.push("		</li>");
    b.push('		<li class="fl">');
    b.push('			<div class="reg-w fl">');
    b.push('				<input type="text" name="idcardNumber" autocomplete="off" class="fl reg-txt e_idcard" maxlength="18" datatype="idcard" nullmsg="身份证号码很重要，可别忘了填写" errormsg="您输入的身份证号码错误" sucmsg="&nbsp;"/>');
    b.push("			</div>");
    b.push('			<div class="fl reg-tip">');
    b.push('				<em class="Validform_checktip"></em>');
    b.push('				<em class="fl reg-tip-focus e_reg_tip_focus">需输入15或18位身份证号码<i class="reg-tip-arrow reg-tip-arrow1">&#9670;</i><i class="reg-tip-arrow reg-tip-arrow2">&#9670;</i></em>');
    b.push("			</div>");
    b.push("		</li>");
    b.push('		<li class="fl">');
    b.push('			<div class="reg-w-captcha fl">');
    b.push('				<input type="text" name="captcha" autocomplete="off" class="fl reg-txt e_captcha" maxlength="6" datatype="captcha" nullmsg="输入图片上的数字或字母，不区分大小写" errormsg="验证码输入不正确" sucmsg="&nbsp;"/>');
    b.push("			</div>");
    b.push('			<a href="javascript:;" title="看不清？重新换张！">');
    b.push('				<img width="150" height="48" style="display:none;"/>');
    b.push('				<input type="hidden" name="" value=""/>');
    b.push("			</a>");
    b.push('			<div class="fl reg-tip">');
    b.push('				<em class="Validform_checktip"></em>');
    b.push('				<em class="fl reg-tip-focus e_reg_tip_focus">输入图片上的数字或字母，不区分大小写<i class="reg-tip-arrow reg-tip-arrow1">&#9670;</i><i class="reg-tip-arrow reg-tip-arrow2">&#9670;</i></em>');
    b.push("			</div>");
    b.push("		</li>");
    b.push("	</ul>");
    b.push('	<div class="clearfix reg-agree">');
    b.push('		<input type="checkbox" checked="checked" class="fl e_reg_agree"/><label class="fl">我已阅读并同意</label><a href="' + MPT.Config.url["agreement"] + '" target="_blank">《绿岸用户协议》</a>');
    b.push("	</div>");
    b.push('	<input type="submit" value="提 交 注 册" class="block reg-submit e_submit"/>');
    b.push('	<input type="hidden" name="accountType" value="EMAIL"/>');
    b.push('	<input type="hidden" name="registInfo.source.sourceType" value="' + c.rsType + '"/>');
    b.push('	<input type="hidden" name="registInfo.source.sourceValue" value="' + c.rsVal + '"/>');
    b.push('	<input type="hidden" name="registInfo.source.sourceLocation" value="' + c.rsUrl + '"/>');
    b.push('	<input type="hidden" name="registInfo.source.appId" value="' + c.pid + '"/>');
    b.push("</form>");
    return b.join("")
});
MPT.addTmpl("t_reg_personal", function (c) {
    var b = [];
    b.push('<form action="' + MPT.Config.req["register"] + '" autocomplete="off" class="e_form" id="regPersonalForm" method="post" onsubmit="return false;">');
    b.push('	<ul class="clearfix reg">');
    b.push('		<li class="fl">');
    b.push('			<div class="reg-w fl">');
    b.push('				<input type="text" name="identityId" autocomplete="off" class="fl reg-txt e_account" maxlength="16" datatype="personal" nullmsg="可别忘了填写个性账号" errormsg="必须由6-16位小写英文字母或数字组成，首位为字母" sucmsg="&nbsp;"/>');
    b.push("			</div>");
    b.push('			<div class="fl reg-tip">');
    b.push('				<em class="Validform_checktip"></em>');
    b.push('				<em class="fl reg-tip-focus e_reg_tip_focus">由6-16位小写英文字母或数字组成，首位为字母<i class="reg-tip-arrow reg-tip-arrow1">&#9670;</i><i class="reg-tip-arrow reg-tip-arrow2">&#9670;</i></em>');
    b.push("			</div>");
    b.push("		</li>");
    b.push('		<li class="fl">');
    b.push('			<div class="reg-w fl">');
    b.push('				<input type="password" oncopy="return false;" oncut="return false;"onpaste="return false;"  name="credential" autocomplete="off" class="fl reg-txt e_pass" maxlength="16" datatype="password" nullmsg="可别忘了填写密码" errormsg="密码格式填写错误" sucmsg="&nbsp;"/>');
    b.push("			</div>");
    b.push('			<div class="fl reg-tip">');
    b.push('				<em class="Validform_checktip"></em>');
    b.push('				<em class="fl reg-tip-focus e_reg_tip_focus">密码由6-16位区分大小写英文字母、数字及符号组成<i class="reg-tip-arrow reg-tip-arrow1">&#9670;</i><i class="reg-tip-arrow reg-tip-arrow2">&#9670;</i></em>');
    b.push("			</div>");
    b.push("		</li>");
    b.push('		<li class="fl">');
    b.push('			<div class="reg-w fl">');
    b.push('				<input type="password" oncopy="return false;" oncut="return false;"onpaste="return false;"  autocomplete="off" class="fl reg-txt e_pass2" maxlength="16" datatype="password" nullmsg="可别忘了填写再次输入确认密码" errormsg="两次密码填写必须一样" sucmsg="&nbsp;" recheck="credential"/>');
    b.push("			</div>");
    b.push('			<div class="fl reg-tip">');
    b.push('				<em class="Validform_checktip"></em>');
    b.push('				<em class="fl reg-tip-focus e_reg_tip_focus">需要再输入一次相同密码<i class="reg-tip-arrow reg-tip-arrow1">&#9670;</i><i class="reg-tip-arrow reg-tip-arrow2">&#9670;</i></em>');
    b.push("			</div>");
    b.push("		</li>");
    b.push('		<li class="fl">');
    b.push('			<div class="reg-w fl">');
    b.push('				<input type="text" name="fullname" autocomplete="off" class="fl reg-txt e_fullname" maxlength="8" datatype="fullname" nullmsg="可别忘了填写真实姓名" errormsg="真实姓名格式不对" sucmsg="&nbsp;"/>');
    b.push("			</div>");
    b.push('			<div class="fl reg-tip">');
    b.push('				<em class="Validform_checktip"></em>');
    b.push('				<em class="fl reg-tip-focus e_reg_tip_focus">请输入真实姓名<i class="reg-tip-arrow reg-tip-arrow1">&#9670;</i><i class="reg-tip-arrow reg-tip-arrow2">&#9670;</i></em>');
    b.push("			</div>");
    b.push("		</li>");
    b.push('		<li class="fl">');
    b.push('			<div class="reg-w fl">');
    b.push('				<input type="text" name="idcardNumber" autocomplete="off" class="fl reg-txt e_idcard" maxlength="18" datatype="idcard" nullmsg="身份证号码很重要，可别忘了填写" errormsg="您输入的身份证号码错误" sucmsg="&nbsp;"/>');
    b.push("			</div>");
    b.push('			<div class="fl reg-tip">');
    b.push('				<em class="Validform_checktip"></em>');
    b.push('				<em class="fl reg-tip-focus e_reg_tip_focus">需输入15或18位身份证号码<i class="reg-tip-arrow reg-tip-arrow1">&#9670;</i><i class="reg-tip-arrow reg-tip-arrow2">&#9670;</i></em>');
    b.push("			</div>");
    b.push("		</li>");
    b.push('		<li class="fl">');
    b.push('			<div class="reg-w-captcha fl">');
    b.push('				<input type="text" name="captcha" autocomplete="off" class="fl reg-txt e_captcha" maxlength="6" datatype="captcha" nullmsg="输入图片上的数字或字母，不区分大小写" errormsg="验证码输入不正确" sucmsg="&nbsp;"/>');
    b.push("			</div>");
    b.push('			<a href="javascript:;" title="看不清？重新换张！">');
    b.push('				<img width="150" height="48" style="display:none;"/>');
    b.push('				<input type="hidden" name="" value=""/>');
    b.push("			</a>");
    b.push('			<div class="fl reg-tip">');
    b.push('				<em class="Validform_checktip"></em>');
    b.push('				<em class="fl reg-tip-focus e_reg_tip_focus">输入图片上的数字或字母，不区分大小写<i class="reg-tip-arrow reg-tip-arrow1">&#9670;</i><i class="reg-tip-arrow reg-tip-arrow2">&#9670;</i></em>');
    b.push("			</div>");
    b.push("		</li>");
    b.push("	</ul>");
    b.push('	<div class="clearfix reg-agree">');
    b.push('		<input type="checkbox" checked="checked" class="fl e_reg_agree"/><label class="fl">我已阅读并同意</label><a href="' + MPT.Config.url["agreement"] + '" target="_blank">《绿岸用户协议》</a>');
    b.push("	</div>");
    b.push('	<input type="submit" value="提 交 注 册" class="block reg-submit e_submit"/>');
    b.push('	<input type="hidden" name="accountType" value="PERSONALITY"/>');
    b.push('	<input type="hidden" name="registInfo.source.sourceType" value="' + c.rsType + '"/>');
    b.push('	<input type="hidden" name="registInfo.source.sourceValue" value="' + c.rsVal + '"/>');
    b.push('	<input type="hidden" name="registInfo.source.sourceLocation" value="' + c.rsUrl + '"/>');
    b.push('	<input type="hidden" name="registInfo.source.appId" value="' + c.pid + '"/>');
    b.push("</form>");
    return b.join("")
});