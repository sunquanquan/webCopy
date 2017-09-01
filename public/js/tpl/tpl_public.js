MPT.addTmpl('t_public_top', function (data) {
    console.log(data);
    var a = [];
    a.push('<div class="public-top">');
    a.push('	<div class="clearfix public-w">');
    if (data.accountName) {
        a.push('	<ul class="fl public-top-account islogin">');
        a.push('		<li class="fl public-pic public-top-account-icon"></li>');
        a.push('		<li class="fl">欢迎您，<strong>' + data.eaccountName + '</strong></li>');
        a.push('		<li class="fl"><a href="' + MPT.Config['url']['logout'] + '" class="block public-top-account-logout">退出</a></li>');
        a.push('	</ul>');
    } else {
        a.push('	<ul class="fl public-top-account nologin">');
        a.push('		<li class="fl public-pic public-top-account-icon"></li>');
        a.push('		<li class="fl"><a href="javascript:;" onclick="popupLogin()">登录</a> | <a href="' + MPT.Config['url']['register'] + '" target="_blank">注册</a></li>');
        a.push('	</ul>');
    }
    a.push('		<ul class="fr public-top-menu e_public_top_menu">');
    a.push('			<li class="fl"><a href="javascript:;" class="block" onclick="Utils.setHome(this,\'' + location.href + '\');">设为首页</a></li>');
    a.push('			<li class="fl">');
    a.push('				<a href="javascript:;" class="block"><i class="fr"></i>绿岸游戏</a>');
    a.push('				<div class="hide public-top-menu-options">');
    a.push('					<i class="public-pic"></i>');
    for (var i = 0, l = MPT.productInfo.length; i < l; i++) {
        a.push('				<h2><a href="' + MPT.productInfo[i].url + '" target="_blank">' + MPT.productInfo[i].product + '</a></h2>');
    }
    a.push('				</div>');
    a.push('			</li>');
    a.push('			<li class="fl public-top-menu-setting">');
    a.push('				<a href="javascript:;" class="block" title="设置"><i class="fr"></i><em class="fl public-pic"></em></a>');
    a.push('				<div class="hide public-top-menu-options">');
    a.push('					<i class="public-pic"></i>');
    if (data.accountName) {
        a.push('				<h2><a href="' + MPT.Config['url']['findByMobile'] + '" target="_blank">密码找回</a></h2>');
        a.push('				<h2><a href="' + MPT.Config['url']['passport']['changePass'] + '">密码修改</a></h2>');
        a.push('				<h2><a href="' + MPT.Config['url']['passport']['safeMobilep'] + '">安全手机</a></h2>');
    } else {
        a.push('				<h2><a href="' + MPT.Config['url']['findByMobile'] + '" target="_blank">密码找回</a></h2>');
    }
    a.push('				</div>');
    a.push('			</li>');
    a.push('			<li class="fl public-top-menu-list">');
    a.push('				<a href="javascript:;" class="block" title="目录"><i class="fr"></i><em class="fl public-pic"></em></a>');
    a.push('				<div class="hide public-top-menu-options">');
    a.push('					<i class="public-pic"></i>');
    a.push('					<h2><a href="' + MPT.Config['url']['pay'] + '" target="_blank">充值</a></h2>');
    a.push('					<h2><a href="' + MPT.Config['url']['passport']['center'] + '" target="_blank">账号</a></h2>');
    a.push('				</div>');
    a.push('			</li>');
    a.push('		</ul>');
    a.push('	</div>');
    a.push('</div>');
    return a.join('');
});
//公共底部
MPT.addTmpl('t_conmon_footer', function () {
    var a = [];
    a.push('<div class="foot_w">');
    a.push('	<div class="foot_line_bg"></div>');
    a.push('	<div class="foot layout clearfix">');
    a.push('		<div class="ico_foot_w fl clearfix">');
    a.push('        	<a href="' + MPT.Config['url']['company'] + '" target="_blank" class="block fl ico_foot_common ico_foot_1" target="_blank"></a>');
    a.push('        	<a href="' + MPT.Config['url']['zx110'] + '" target="_blank" class="block fl ico_foot_common ico_foot_2"></a>');
    a.push('        	<a href="' + MPT.Config['url']['gov'] + '" target="_blank" class="block fl ico_foot_common ico_foot_3"></a>');
    a.push('    	</div>');
    a.push('    	<div class="foot_detail fl">');
    a.push('        	<ul class="foot_menu clear">');
    a.push('            	<li class="fl"><a href="' + MPT.Config['url']['aboutlv'] + '" target="_blank">关于绿岸</a></li>');
    a.push('            	<li class="line fl"></li>');
    a.push('            	<li class="fl"><a href="' + MPT.Config['url']['gametj'] + '" target="_blank">产品介绍</a></li>');
    a.push('            	<li class="line fl"></li>');
    a.push('            	<li class="fl"><a href="' + MPT.Config['url']['lxcontact'] + '" target="_blank">商务洽谈</a></li>');
    a.push('            	<li class="line fl"></li>');
    a.push('            	<li class="fl"><a href="' + MPT.Config['url']['iwhr'] + '" target="_blank">绿岸招聘</a></li>');
    a.push('            	<li class="line fl"></li>');
    a.push('            	<li class="fl"><a href="' + MPT.Config['url']['cs'] + '">客服中心</a></li>');
    a.push('            	<li class="line fl"></li>');
    a.push('            	<li class="fl"><a href="' + MPT.Config['url']['jiazhang'] + '" target="_blank">家长监控</a></li>');
    a.push('            	<li class="line fl"></li>');
    a.push('            	<li class="fl"><a href="' + MPT.Config['url']['rss'] + '" target="_blank">网站地图</a></li>');
    a.push('        	</ul>');
    a.push('        	<p>上海绿岸网络科技股份有限公司 版权所有 沪ICP备10006417号</p>');
    a.push('        	<p>增值电信业务经营许可证 ICP号：沪B2-20090066  网络文化经营许可证 编号：<a href="http://www.miitbeian.gov.cn" target="_blank">沪网文【2015】0248-078号</a></p>');
    a.push('    	</div>');
    a.push('	</div>');
    a.push('</div>');
    return a.join('');
});
//头部导航
MPT.addTmpl('t_conmon_nav', function () {
    var a = [];
    a.push('<div class="nav_box clearfix">');
    a.push('	<div class="logo common_sprit fl">');
    a.push('		<a href="http://www.iwgame.com" class="block" target="_blank" title="绿岸在线首页"></a>');
    a.push('	</div>');
    a.push('	<div class="nav_slide fr">');
    a.push('		<ul>');
    a.push('			<li class="fl">');
    a.push('				<a href="' + MPT.Config['url']['passport']['passport'] + '" target="_blank">我的通行证</a>');
    a.push('			</li>');
    a.push('			<li class="fl">');
    a.push('				<a href="' + MPT.Config['url']['passport']['center'] + '" target="_blank">账号中心</a>');
    a.push('			</li>');
    a.push('			<li class="fl">');
    a.push('				<a href="' + MPT.Config['url']['pay'] + '" target="_blank">充值中心</a>');
    a.push('			</li>');
    a.push('			<li class="fl last cur">');
    a.push('				<a href="' + MPT.Config['url']['cs'] + '">客服中心</a>');
    a.push('			</li>');
    a.push('		</ul>');
    a.push('	</div>');
    a.push('</div>');
    return a.join('');
});
//登录弹层
MPT.addTmpl('t_popup_login', function (_data) {
    var _dname = _data.dname;
    var a = [];
    a.push('<div class="e_popup_login" style="height:411px;overflow:hidden;position:relative;width:392px;"><a href="javascript:;" title="关闭" style="height:13px;position:absolute;right:3px;top:4px;width:13px;" onclick="$.unblockUI();"></a><iframe src="' + MPT.Config['url']['loginPopup'] + '&dname=' + _dname + '" scrolling="no" frameborder="0" allowtransparency="true" height="411" width="392"></iframe></div>');
    return a.join('');
});
//FAQ
MPT.addTmpl('t_FAQ', function (_data) {
    console.log(_data);
    var a = [];
    a.push('<div class="faq">');
    a.push('	<a href="javascript:;" class="block faq_btn"></a>');
    a.push('	<ul class="faq_list">');
    for (var i = 0; i < _data.bizObj.length; i++) {
        a.push('	<li class=""><a href="javascript:;" class="block list_item">' + Utils.striptScript(_data.bizObj[i].question.toString()) + '</a><p class="hide">' + Utils.striptScript(_data.bizObj[i].answer.toString()) + '<a href="javascript:;" class="closeAwser">[返回]</a></p></li>');
    }
    a.push('	</ul>');
    a.push('<a href="' + MPT.Config['url']['faq'] + '" class="block faq_more">[更多]</a>');
    a.push('</div>');
    return a.join('');
});
//右侧内页信息
MPT.addTmpl('t_rightInner', function (_data) {
    var a = [];
    var temp = '您的位置：<a href="' + MPT.Config['url']['cs'] + '">客服中心</a>&nbsp;>&nbsp;';
    for (var i = 0; i < _data.curpos.length; i++) {
        if (i == _data.curpos.length - 1) {
            a.push('<h2 class="fl">' + _data['curpos'][i].list + '</h2>');
            temp += _data['curpos'][i].list;
        } else {
            temp += _data['curpos'][i].list + '&nbsp;>&nbsp;';
        }
    }
    a.push('<p class="fr">' + temp + '</p>')
    return a.join('');
});
MPT.addTmpl('t_iw_alert', function (data) {
    var a = [];
    a.push('<div class="iw-alert">');
    a.push('	<div class="iw-alert-bg"></div>');
    a.push('	<div class="iw-alert-inner">');
    a.push('		<p>' + data.msg + '</p>');
    a.push('		<a href="javascript:;" class="block">确定</a>');
    a.push('	</div>');
    a.push('</div>');
    return a.join('');
});


/////////////////////////////////////////////////



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