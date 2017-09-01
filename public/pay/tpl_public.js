MPT.addTmpl("t_public_top", function (e) {
    var c = [];
    c.push('<div class="public-top">');
    c.push('	<div class="clearfix public-w">');
    if (e.eaccountName) {
        c.push('	<ul class="fl public-top-account islogin">');
        c.push('		<li class="fl public-pic public-top-account-icon"></li>');
        c.push('		<li class="fl">欢迎您，<strong>' + e.eaccountName + "</strong></li>");
        c.push('		<li class="fl"><a href="' + MPT.Config.url["pay_logout"] + '" class="block public-top-account-logout">退出</a></li>');
        c.push("	</ul>")
    } else {
        c.push('	<ul class="fl public-top-account nologin">');
        c.push('		<li class="fl public-pic public-top-account-icon"></li>');
        c.push('		<li class="fl"><a href="javascript:;" onclick="popupLogin()">登录</a> | <a href="' + MPT.Config.url["regMobilePage"] + '" target="_blank">注册</a></li>');
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
        c.push('				<h2><a href="' + MPT.Config.url["cs_findpw"] + '" target="_blank">密码找回</a></h2>');
        c.push('				<h2><a href="' + MPT.Config.url["user_center_pw"] + '">密码修改</a></h2>');
        c.push('				<h2><a href="' + MPT.Config.url["user_center_mobile"] + '">安全手机</a></h2>')
    } else {
        c.push('				<h2><a href="' + MPT.Config.url["cs_findpw"] + '" target="_blank">密码找回</a></h2>')
    }
    c.push("				</div>");
    c.push("			</li>");
    c.push('			<li class="fl public-top-menu-list">');
    c.push('				<a href="javascript:;" class="block" title="目录"><i class="fr"></i><em class="fl public-pic"></em></a>');
    c.push('				<div class="hide public-top-menu-options">');
    c.push('					<i class="public-pic"></i>');
    c.push('					<h2><a href="' + MPT.Config.url["user_passport"] + '" target="_blank">账号</a></h2>');
    c.push('					<h2><a href="' + MPT.Config.url["cs"] + '" target="_blank">客服</a></h2>');
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
    b.push('		<h1><a href="' + MPT.Config.url["iwgame"] + '" class="fl public-pic public-header-logo" target="_blank" title="绿岸在线"></a></h1>');
    b.push('		<ul class="fr public-header-nav">');
    if (c.cur == "我的通行证") {
        b.push('		<li class="fl cur"><a href="' + MPT.Config.url["user_passport"] + '" target="_blank">我的通行证</a></li>')
    } else {
        b.push('		<li class="fl"><a href="' + MPT.Config.url["user_passport"] + '" target="_blank">我的通行证</a></li>')
    }
    if (c.cur == "账号中心") {
        b.push('		<li class="fl cur"><a href="' + MPT.Config.url["user_center"] + '" target="_blank">账号中心</a></li>')
    } else {
        b.push('		<li class="fl"><a href="' + MPT.Config.url["user_center"] + '" target="_blank">账号中心</a></li>')
    }
    if (c.cur == "充值中心") {
        b.push('		<li class="fl cur"><a href="' + MPT.Config.url["pay"] + '">充值中心</a></li>')
    } else {
        b.push('		<li class="fl"><a href="' + MPT.Config.url["pay"] + '">充值中心</a></li>')
    }
    if (c.cur == "客服中心") {
        b.push('		<li class="fl cur"><a href="' + MPT.Config.url["cs"] + '" target="_blank">客服中心</a></li>')
    } else {
        b.push('		<li class="fl"><a href="' + MPT.Config.url["cs"] + '" target="_blank">客服中心</a></li>')
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
    b.push('			<li class="fl"><a href="' + MPT.Config.url["iwgame"] + '" class="block public-pic public-footer-logo" target="_blank" title="绿岸网络"></a></li>');
    b.push('			<li class="fl"><a href="' + MPT.Config.url["zx110"] + '" class="block public-pic public-footer-pic1" target="_blank" title="网站可信度评估"></a></li>');
    b.push('			<li class="fl"><a href="' + MPT.Config.url["gov"] + '" class="block public-pic public-footer-pic2" target="_blank" title="互联网文化经营单位"></a></li>');
    b.push("		</ul>");
    b.push('		<ul class="fl public-footer-copyright">');
    b.push('			<li class="fl"><a href="' + MPT.Config.url["lvan_gsabout"] + '" target="_blank">关于绿岸</a>&nbsp;|&nbsp;<a href="' + MPT.Config.url["lvan_cptzj"] + '" target="_blank">产品介绍</a>&nbsp;|&nbsp;<a href="' + MPT.Config.url["lvan_lxcontact"] + '" target="_blank">商务洽谈</a>&nbsp;|&nbsp;<a href="' + MPT.Config.url["lvan_iwhr"] + '" target="_blank">绿岸招聘</a>&nbsp;|&nbsp;<a href="' + MPT.Config.url["cs"] + '" target="_blank">客服中心</a>&nbsp;|&nbsp;<a href="' + MPT.Config.url["iwgame_jiazhang"] + '" target="_blank">家长监控</a>&nbsp;|&nbsp;<a href="' + MPT.Config.url["cs_rss"] + '" target="_blank">网站地图</a></li>');
    b.push('			<li class="fl">上海绿岸网络科技股份有限公司 版权所有<a href="' + MPT.Config.url["beian"] + '" target="_blank"> 沪ICP备10006417号</a></li>');
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
    b.push('	<iframe src="' + MPT.Config.url["pLoginPage"] + "?ls=pay&loginback=" + MPT.Config.url["pay_loginback"] + '" allowtransparency="true" frameborder="0"  height="100%" scrolling="no" width="100%"></iframe>');
    b.push("</div>");
    return b.join("")
});
MPT.addTmpl("t_public_info", function (c) {
    var b = [];
    b.push('<ul class="clearfix pay-info">');
    b.push('	<li class="fl pay-info-account">');
    if (c.eaccountName) {
        b.push("	<h2>欢迎您：" + c.eaccountName + "</h2>")
    } else {
        b.push('	<em class="fl">请登录您的账号</em><a href="javascript:;" class="fl pay-info-login" onclick="popupLogin()">账号登录</a>')
    }
    b.push("	</li>");
    b.push('	<li class="fl pay-info-other">');
    b.push('		<ul class="clearfix">');
    b.push('			<li class="fl"><a href="' + MPT.Config.url["pay_history"] + '"><i class="fl pay-public pay-info-history"></i>充值历史</a></li>');
    b.push('			<li class="fl"><a href="' + MPT.Config.url["pay_check"] + '"><i class="fl pay-public pay-info-check"></i>卡号验证</a></li>');
    b.push('			<li class="fl"><a href="' + MPT.Config.url["pay_sale"] + '"><i class="fl pay-public pay-info-sale"></i>销售网点</a></li>');
    b.push("		</ul>");
    b.push("	</li>");
    b.push('	<li class="fl pay-info-home"><a href="' + MPT.Config.url["pay"] + '"><i class="fl pay-public"></i>充值首页</a></li>');
    b.push("</ul>");
    if (c.eaccountName && c.productName) {
        b.push('<p class="pay-info-last">您上次充值的是【<em>' + decodeURIComponent(c.productName) + "</em>】-【<em>" + decodeURIComponent(c.zoneName) + '</em>】&nbsp;&nbsp;&nbsp;&nbsp;<a href="' + (c.page == "other" ? MPT.Config.url["pay"] + '"' : 'javascript:;" onclick="getPayTmpl(\'' + c.payMode + "', 0, 1);\"") + ">再次充值</a></p>")
    }
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