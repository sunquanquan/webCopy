MPT.addTmpl("t_public_top", function (e) {
    var c = [];
    c.push('<div class="public-top">');
    c.push('	<div class="clearfix public-w">');
    if (e.accountName) {
        c.push('	<ul class="fl public-top-account islogin">');
        c.push('		<li class="fl public-pic public-top-account-icon"></li>');
        c.push('		<li class="fl">欢迎您，<strong>' + e.accountName + "</strong></li>");
        c.push('		<li class="fl"><a href="" class="block public-top-account-logout">退出</a></li>');
        c.push("	</ul>")
    } else {
        c.push('	<ul class="fl public-top-account nologin">');
        c.push('		<li class="fl public-pic public-top-account-icon"></li>');
        c.push('		<li class="fl"><a href="javascript:;" onclick="popupLogin()">登录</a> | <a href="" target="_blank">注册</a></li>');
        c.push("	</ul>")
    }
    c.push('		<ul class="fr public-top-menu e_public_top_menu">');
    c.push('			<li class="fl"><a href="javascript:;" class="block" onclick="Utils.setHome(this,\'' + location.href + "');\">设为首页</a></li>");
    c.push('			<li class="fl">');
    c.push('				<a href="javascript:;" class="block"><i class="fr"></i>绿岸游戏</a>');
    c.push('				<div class="hide public-top-menu-options">');
    c.push('					<i class="public-pic"></i>');
    for (var d = 0, b = MPT.productInfo.length; d < b; d++) {
        c.push('				<h2><a href="' + MPT.productInfo[d].url + '" target="_blank">' + MPT.productInfo[d].product + "</a></h2>")
    }
    c.push("				</div>");
    c.push("			</li>");
    c.push('			<li class="fl public-top-menu-setting">');
    c.push('				<a href="javascript:;" class="block" title="设置"><i class="fr"></i><em class="fl public-pic"></em></a>');
    c.push('				<div class="hide public-top-menu-options">');
    c.push('					<i class="public-pic"></i>');
    if (e.accountName) {
        c.push('				<h2><a href="" target="_blank">密码找回</a></h2>');
        c.push('				<h2><a href="">密码修改</a></h2>');
        c.push('				<h2><a href="">安全手机</a></h2>')
    } else {
        c.push('				<h2><a href="" target="_blank">密码找回</a></h2>')
    }
    c.push("				</div>");
    c.push("			</li>");
    c.push('			<li class="fl public-top-menu-list">');
    c.push('				<a href="javascript:;" class="block" title="目录"><i class="fr"></i><em class="fl public-pic"></em></a>');
    c.push('				<div class="hide public-top-menu-options">');
    c.push('					<i class="public-pic"></i>');
    c.push('					<h2><a href="" target="_blank">充值</a></h2>');
    c.push('					<h2><a href="" target="_blank">客服</a></h2>');
    c.push("				</div>");
    c.push("			</li>");
    c.push("		</ul>");
    c.push("	</div>");
    c.push("</div>");
    return c.join("")
});
MPT.addTmpl("t_public_header", function (c) {
    var b = [];
    b.push('<div class="public-header">');
    b.push('	<div class="clearfix public-w">');
    b.push('		<h1><a href="" class="fl public-pic public-header-logo" target="_blank" title="绿岸在线"></a></h1>');
    b.push('		<ul class="fr public-header-nav">');
    if (c.cur == "我的通行证") {
        b.push('		<li class="fl cur"><a href="">我的通行证</a></li>')
    } else {
        b.push('		<li class="fl"><a href="">我的通行证</a></li>')
    }
    if (c.cur == "账号中心") {
        b.push('		<li class="fl cur"><a href="">账号中心</a></li>')
    } else {
        b.push('		<li class="fl"><a href="">账号中心</a></li>')
    }
    if (c.cur == "充值中心") {
        b.push('		<li class="fl cur"><a href="" target="_blank">充值中心</a></li>')
    } else {
        b.push('		<li class="fl"><a href="" target="_blank">充值中心</a></li>')
    }
    if (c.cur == "客服中心") {
        b.push('		<li class="fl cur"><a href="" target="_blank">客服中心</a></li>')
    } else {
        b.push('		<li class="fl"><a href="" target="_blank">客服中心</a></li>')
    }
    b.push("		</ul>");
    b.push("	</div>");
    b.push("</div>");
    return b.join("")
});

MPT.addTmpl("t_public_footer", function () {
    var b = [];
    b.push('<div class="public-footer">');
    b.push('	<div class="clearfix public-w">');
    b.push('		<ul class="fl public-footer-pic">');
    b.push('			<li class="fl"><a href="" class="block public-pic public-footer-logo" target="_blank" title="绿岸网络"></a></li>');
    b.push('			<li class="fl"><a href="" class="block public-pic public-footer-pic1" target="_blank" title="网站可信度评估"></a></li>');
    b.push('			<li class="fl"><a href="" class="block public-pic public-footer-pic2" target="_blank" title="互联网文化经营单位"></a></li>');
    b.push("		</ul>");
    b.push('		<ul class="fl public-footer-copyright">');
    b.push('			<li class="fl"><a href="" target="_blank">关于绿岸</a>&nbsp;|&nbsp;<a href="" target="_blank">产品介绍</a>&nbsp;|&nbsp;<a href="" target="_blank">商务洽谈</a>&nbsp;|&nbsp;<a href="" target="_blank">绿岸招聘</a>&nbsp;|&nbsp;<a href="" target="_blank">客服中心</a>&nbsp;|&nbsp;<a href="" target="_blank">家长监控</a>&nbsp;|&nbsp;<a href="" target="_blank">网站地图</a></li>');
    b.push('			<li class="fl">上海绿岸网络科技股份有限公司 版权所有 本公司产品适合18岁以上人群使用 <a href="" target="_blank"> 沪ICP备10006417号</a></li>');
    b.push('			<li class="fl">增值电信业务经营许可证 ICP号：沪B2-20090066  网络文化经营许可证 编号：沪网文[2015]0248-078号</li>');
    b.push("		</ul>");
    b.push("	</div>");
    b.push("</div>");
    return b.join("")
});

MPT.addTmpl("t_public_popup_login", function () {
    var b = [];
    b.push('<div class="public-popup-login">');
    b.push('	<a href="javascript:;" class="public-popup-login-close e_public_popup_login" title="关闭"></a>');
    b.push('	<iframe src="' + MPT.Config.url["pLoginPage"] + "?ls=passport&loginback=" + MPT.Config.url["loginback"] + '" allowtransparency="true" frameborder="0"  height="100%" scrolling="no" width="100%"></iframe>');
    b.push("</div>");
    return b.join("")
});
MPT.addTmpl("t_iw_alert", function (c) {
    var b = [];
    b.push('<div class="iw-alert">');
    b.push('	<div class="iw-alert-bg"></div>');
    b.push('	<div class="iw-alert-inner">');
    b.push("		<p>" + c.msg + "</p>");
    b.push('		<a href="javascript:;" class="block">确定</a>');
    b.push("	</div>");
    b.push("</div>");
    return b.join("")
});

MPT.addTmpl("t_reg_pop_sms", function (c) {
    var b = [];
    b.push('<div class="reg-pop-sms">');
    b.push('	<a href="javascript:;" class="reg-pop-sms-close e_reg_pop_sms_close" title="关闭"></a>');
    b.push('	<h2 class="reg-pop-sms-title">请输入图形验证码，以便接收短信</h2>');
    b.push('	<form action="' + MPT.Config.req["smsReg"] + '" autocomplete="off" class="e_reg_pop_sms_form" id="regPopSmsForm" method="post" onsubmit="return false;">');
    b.push('		<ul class="clearfix reg-pop-sms-form">');
    b.push('			<li class="fl">');
    b.push('				<input type="text" name="capt" class="fl" maxlength="6" datatype="' + MPT.Config.regular["captcha"] + '" nullmsg="请输入图片上的数字或字母，不区分大小写" errormsg="验证码格式不正确" sucmsg="&nbsp;"/>');
    b.push('				<a href="javascript:;" title="看不清？重新换张！">');
    b.push('					<img width="120" height="30" style="display:none;"/>');
    b.push('					<input type="hidden" name="cid" value=""/>');
    b.push("				</a>");
    b.push("			</li>");
    b.push('			<li class="fl Validform_checktip"></li>');
    b.push("		</ul>");
    b.push('		<input type="hidden" name="st" value="reg"/>');
    b.push('		<input type="hidden" name="sm" value="' + c.sm + '"/>');
    b.push('		<input type="submit" value="提&nbsp;&nbsp;交" class="block reg-pop-sms-submit e_reg_pop_sms_submit"/>');
    b.push("	</form>");
    b.push("</div>");
    return b.join("")
});
