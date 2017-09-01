MPT.addTmpl("t_user_passport_account", function (c) {
    var b = [];
    b.push('<div class="user-passport-account">');
    b.push('	<h2 class="clearfix">');
    if (c.accountType == 1) {
        b.push('	<a href="' + MPT.Config.url["space"]["center_m2p"] + '" class="fr" target="_blank">更换为个性账号</a>')
    }
    if (c.nickName) {
        b.push('	<em class="fl">欢迎回来：' + c.accountName + "&nbsp;（手机别名账号：" + c.nickName + "）</em>")
    } else {
        b.push('	<em class="fl">欢迎回来：' + c.accountName + "</em>")
    }
    b.push("	</h2>");
    b.push('	<h3 class="clearfix"><a href="' + MPT.Config.url["space"]["center_pw"] + '" class="fr">修改密码</a>您目前的会员等级：' + (c.level ? c.level : "普通") + "</h3>");
    b.push('	<div class="clearfix user-passport-account-score">');
    b.push('		<h4 class="fl">账号安全分：</h4>');
    b.push('		<ul class="fl user-passport-account-score-star">');
    b.push('			<li class="fl securityLv' + c.securityScore + '"></li>');
    b.push("		</ul>");
    b.push('		<span class="fl user-passport-account-score-txt"><em>' + c.securityScore + "</em> 分</span>");
    if (c.riskItems) {
        b.push('	<span class="fl user-passport-account-score-risk">尚存 <em>' + c.riskItems + "</em> 项风险</span>")
    }
    b.push('		<a href="' + MPT.Config.url["space"]["center"] + '" class="fl">点我了解详情</a>');
    b.push("	</div>");
    b.push('	<ul class="clearfix user-passport-account-security">');
    b.push('		<li class="fl user-passport-account-security-mobile">');
    b.push('			<i class="fl"></i>');
    b.push('			<h4 class="fl">安全手机</h4>');
    if (c.bindMobile) {
        b.push('		<p class="fl">您的账号已绑定手机' + c.securityMobile + "，您将可享受更丰富的手机服务，如手机找回密码等。</p>");
        b.push('		<ul class="fl user-passport-account-security-bind">');
        b.push('			<li class="fr"><a href="' + MPT.Config.url["space"]["center_mobile"] + '">更换</a></li>');
        b.push('			<li class="fl icon"></li>');
        b.push('			<li class="fl">已绑定</li>');
        b.push("		</ul>")
    } else {
        b.push('		<p class="fl">绑定常用手机，即可享受到改绑邮箱、修改登录密码、找回密码等安全服务。</p>');
        b.push('		<ul class="fl user-passport-account-security-nobind">');
        b.push('			<li class="fr"><a href="' + MPT.Config.url["space"]["center_mobile"] + '">绑定</a></li>');
        b.push('			<li class="fl icon"></li>');
        b.push('			<li class="fl">未绑定</li>');
        b.push("		</ul>")
    }
    b.push("		</li>");
    b.push('		<li class="fl user-passport-account-security-email">');
    b.push('			<i class="fl"></i>');
    b.push('			<h4 class="fl">安全邮箱</h4>');
    if (c.bindEmail) {
        b.push('		<p class="fl">您的账号已绑定' + c.securityEmail + "，验证邮箱可增强账户安全，可用于账号信息提醒等安全服务。</p>");
        b.push('		<ul class="fl user-passport-account-security-bind">');
        b.push('			<li class="fr"><a href="' + MPT.Config.url["space"]["center_email"] + '">更换</a></li>');
        b.push('			<li class="fl icon"></li>');
        b.push('			<li class="fl">已绑定</li>');
        b.push("		</ul>")
    } else {
        b.push('		<p class="fl">绑定常用邮箱可增强账户安全，可用于账号信息提醒等安全服务。</p>');
        b.push('		<ul class="fl user-passport-account-security-nobind">');
        b.push('			<li class="fr"><a href="' + MPT.Config.url["space"]["center_email"] + '">绑定</a></li>');
        b.push('			<li class="fl icon"></li>');
        b.push('			<li class="fl">未绑定</li>');
        b.push("		</ul>")
    }
    b.push("		</li>");
    b.push('		<li class="fl user-passport-account-security-token">');
    b.push('			<i class="fl"></i>');
    b.push('			<h4 class="fl">安全令牌</h4>');
    if (c.bindSt) {
        b.push('		<p class="fl">您的账号已绑定序列号' + c.securityToken + "，当您需要进行交易时，需要正确输入安全令牌才能交易。</p>");
        b.push('		<ul class="fl user-passport-account-security-bind">');
        b.push('			<li class="fr"><a href="' + MPT.Config.url["space"]["center_st"] + '">更换</a></li>');
        b.push('			<li class="fl icon"></li>');
        b.push('			<li class="fl">已绑定</li>');
        b.push("		</ul>")
    } else {
        b.push('		<p class="fl" style="line-height:44px;">绑定安全令牌保护游戏交易，提高账号安全等级。</p>');
        b.push('		<ul class="fl user-passport-account-security-nobind">');
        b.push('			<li class="fr"><a href="' + MPT.Config.url["space"]["center_st"] + '">绑定</a></li>');
        b.push('			<li class="fl icon"></li>');
        b.push('			<li class="fl">未绑定</li>');
        b.push("		</ul>")
    }
    b.push("		</li>");
    b.push('		<li class="fl last user-passport-account-security-idcard">');
    b.push('			<i class="fl"></i>');
    b.push('			<h4 class="fl">身份认证</h4>');
    b.push('			<p class="fl">为了保证您的流畅游戏体验，享受更健康的游戏生活，您在进入游戏时需要进行实名及防沉迷验证。</p>');
    if (c.bindRealName) {
        b.push('		<ul class="fl user-passport-account-security-bind">');
        b.push('			<li class="fl icon"></li>');
        b.push('			<li class="fl">已认证</li>');
        b.push("		</ul>")
    } else {
        b.push('		<ul class="fl user-passport-account-security-nobind">');
        b.push('			<li class="fr"><a href="' + MPT.Config.url["space"]["center_fill"] + '">认证</a></li>');
        b.push('			<li class="fl icon"></li>');
        b.push('			<li class="fl">未认证</li>');
        b.push("		</ul>")
    }
    b.push("		</li>");
    b.push("	</ul>");
    b.push("</div>");
    return b.join("")
});
MPT.addTmpl("t_user_passport_quick", function () {
    var b = [];
    b.push('<div class="user-passport-quick">');
    b.push('	<h2 class="clearfix user-passport-title"><em class="fl">便捷服务</em></h2>');
    b.push('	<ul class="clearfix">');
    b.push('		<li class="fl user-passport-quick-1"><a href="' + MPT.Config.url["cs_zbzh"] + '" class="block" target="_blank"><i class="block"></i><h3>被盗求助</h3></a></li>');
    b.push('		<li class="fl user-passport-quick-2"><a href="' + MPT.Config.url["space"]["center_pw"] + '" class="block"><i class="block"></i><h3>修改密码</h3></a></li>');
    b.push('		<li class="fl user-passport-quick-3"><a href="' + MPT.Config.url["cs_lock"] + '" class="block" target="_blank"><i class="block"></i><h3>账号锁定</h3></a></li>');
    b.push('		<li class="fl user-passport-quick-4"><a href="' + MPT.Config.url["cs_bfss"] + '" class="block" target="_blank"><i class="block"></i><h3>被封申诉</h3></a></li>');
    b.push('		<li class="fl last user-passport-quick-5"><a href="' + MPT.Config.url["pay"] + '" class="block" target="_blank"><i class="block"></i><h3>快速充值</h3></a></li>');
    b.push("	</ul>");
    b.push("</div>");
    return b.join("")
});
MPT.addTmpl("t_user_passport_privilege", function (e) {
    var d = e.length <= 3 ? e.length : 3;
    var b = [];
    b.push('<div class="user-passport-privilege e_user_passport_privilege">');
    b.push('	<h2 class="clearfix user-passport-title"><em class="fl">游戏特权</em></h2>');
    b.push('	<ul class="clearfix">');
    for (var c = 0; c < d; c++) {
        b.push('	<li class="fl"><a href="' + e[c].url + '" target="_blank" title="' + e[c].alt + '"><img src="' + e[c].imgurl + '" alt="' + e[c].alt + '"/></a></li>')
    }
    b.push("	</ul>");
    b.push("</div>");
    return b.join("")
});
MPT.addTmpl("t_user_passport_game", function (e) {
    var c = [];
    c.push('<ul class="user-passport-game">');
    c.push('	<li class="fl">');
    c.push('		<ul class="clearfix">');
    for (var d = 0, b = e.links.length; d < b; d++) {
        c.push('		<li class="fl"><a href="' + e.links[d].url + '" target="_blank">' + e.links[d].title + "</a></li>")
    }
    c.push("		</ul>");
    c.push('		<a href="' + e.url + '" target="_blank"><img src="' + e.imgurl + '"/></a>');
    c.push("	</li>");
    c.push("</ul>");
    return c.join("")
});
MPT.addTmpl("t_user_passport_download", function (c) {
    var b = [];
    b.push('<div class="user-passport-download"><a href="' + c[0].url + '" target="_blank" title="' + c[0].title + '"><img src="' + c[0].imgurl + '" alt="' + c[0].title + '"/></a></div>');
    return b.join("")
});
MPT.addTmpl("t_user_passport_cs", function () {
    var b = [];
    b.push('<div class="user-passport-cs"><iframe src="' + MPT.Config.url["cs_passport"] + '" allowtransparency="true" frameborder="0" height="100%" scrolling="no" width="100%"></iframe></div>');
    return b.join("")
});
MPT.addTmpl("t_user_passport_activity", function (e) {
    var d = e.length <= 3 ? e.length : 3;
    var b = [];
    b.push('<div class="user-passport-activity">');
    b.push('	<h2 class="clearfix user-passport-title"><em class="fl">近期活动</em><a href="' + MPT.Config.url["iwgame_activity"] + '" class="fr" target="_blank">更多</a></h2>');
    b.push('	<ul class="clearfix">');
    for (var c = 0; c < d; c++) {
        b.push('	<li><a href="' + e[c].url + '" class="fr" target="_blank">[了解详情]</a><a href="' + e[c].url + '" target="_blank" title="' + e[c].title + '">' + Utils.cutStr(e[c].title, 16) + "</a></li>")
    }
    b.push("	</ul>");
    b.push("</div>");
    return b.join("")
});
MPT.addTmpl("t_user_passport_idcard", function (c) {
    var b = [];
    b.push('<div class="user-passport-account" style="height:auto;">');
    b.push('	<h2 class="clearfix">');
    if (c.accountType == 1) {
        b.push('	<a href="' + MPT.Config.url["space"]["center_m2p"] + '" class="fr" target="_blank">更换为个性账号</a>')
    }
    if (c.nickName) {
        b.push('	<em class="fl">欢迎回来：' + c.accountName + "&nbsp;（手机别名账号：" + c.nickName + "）</em>")
    } else {
        b.push('	<em class="fl">欢迎回来：' + c.accountName + "</em>")
    }
    b.push("	</h2>");
    b.push('	<h3 class="clearfix"><a href="' + MPT.Config.url["space"]["center_fill"] + '" class="fr">完善资料</a>您目前的会员等级：' + (c.level ? c.level : "普通") + "</h3>");
    b.push('	<div class="clearfix user-passport-account-score" style="height:120px;">');
    b.push('		<h4 class="fl">账号安全分：</h4>');
    b.push('		<ul class="fl user-passport-account-score-star">');
    b.push("		</ul>");
    b.push('		<span class="fl user-passport-account-score-txt"><em>0</em> 分</span>');
    b.push('		<div class="clear"></div>');
    b.push('		<p class="idcard-tip-red">根据文化部要求规定，用户信息需要实名认证，目前安全、客服功能有相应限制，<br/>建议先完善您的资料信息，以便我们为您更好的服务。</p>');
    b.push("	</div>");
    b.push('	<ul class="clearfix user-passport-account-security">');
    b.push('		<li class="fl last user-passport-account-security-idcard">');
    b.push('			<i class="fl"></i>');
    b.push('			<h4 class="fl">身份认证</h4>');
    b.push('			<p class="fl">为了保证您的流畅游戏体验，享受更健康的游戏生活，您在进入游戏时需要进行实名及防沉迷验证。</p>');
    if (c.bindRealName) {
        b.push('		<ul class="fl user-passport-account-security-bind">');
        b.push('			<li class="fl icon"></li>');
        b.push('			<li class="fl">已认证</li>');
        b.push("		</ul>")
    } else {
        b.push('		<ul class="fl user-passport-account-security-nobind">');
        b.push('			<li class="fr"><a href="' + MPT.Config.url["space"]["center_fill"] + '">认证</a></li>');
        b.push('			<li class="fl icon"></li>');
        b.push('			<li class="fl">未认证</li>');
        b.push("		</ul>")
    }
    b.push("		</li>");
    b.push("	</ul>");
    b.push("</div>");
    return b.join("")
});