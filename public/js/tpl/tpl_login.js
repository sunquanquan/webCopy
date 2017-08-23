MPT.addTmpl("t_login_other", function () {
    var b = [];
    b.push('<li class="fl tar"><a href="' + MPT.Config.url["cs_findpw"] + '" target="_blank">忘记密码?</a></li>');
    b.push('<li class="fl tar"><a href="' + MPT.Config.url["cs_getbackacc"] + '" target="_blank">忘记账号?</a></li>');
    b.push('<li class="fl tac"><a href="' + MPT.Config.url["regMobilePage"] + '">注册</a></li>');
    b.push('<li class="fl"><a href="' + MPT.Config.url["cs_faq"] + '" target="_blank">帮助中心</a></li>');
    return b.join("")
});
MPT.addTmpl("t_other", function () {
    var b = [];
    b.push('<ul class="fl">');
    b.push('	<li class="fl">');
    b.push('		<i class="login-public fl other-icon1"></i>');
    b.push('		<h3><a href="' + MPT.Config.url["iwgame_stdownload"] + '" target="_blank">绿岸安全令牌</a></h3>');
    b.push("		<p>账号安全保护神器</p>");
    b.push("	</li>");
    b.push('	<li class="fl">');
    b.push('		<i class="login-public fl other-icon2"></i>');
    b.push('		<h3><a href="' + MPT.Config.url["cs_findpw"] + '" target="_blank">找回密码</a></h3>');
    b.push("		<p>多种方式密码找回</p>");
    b.push("	</li>");
    b.push('	<li class="fl">');
    b.push('		<i class="login-public fl other-icon4"></i>');
    b.push('		<h3><a href="' + MPT.Config.url["pay"] + '" target="_blank">账号充值</a></h3>');
    b.push("		<p>快速充值，一键搞定</p>");
    b.push("	</li>");
    b.push('	<li class="fl last">');
    b.push('		<i class="login-public fl other-icon5"></i>');
    b.push('		<h3><a href="javascript:;" onclick="alert(\'敬请期待！\')">在线客服</a></h3>');
    b.push("		<p>24小时无休贴心服务</p>");
    b.push("	</li>");
    b.push("</ul>");
    return b.join("");
});
MPT.addTmpl("t_product_poster", function (c) {
    var b = [];
    b.push('<div class="poster clearfix e_poster">');
    b.push('	<a href="javascript:;" class="poster-close e_poster_close">&#10005;</a>');
    b.push('	<a href="' + c.url + '" target="_blank"><img src="' + c.imgurl + '" alt="' + c.title + '"/></a>');
    b.push("</div>");
    return b.join("")
});
MPT.addTmpl("t_login_url", function (e) {
    var c = [];
    for (var d = 0, b = e.length; d < b; d++) {
        if (e[d]) {
            c.push('<a href="' + e[d] + '" class="link' + (d ? "2" : "") + '" target="_blank"></a>')
        }
    }
    return c.join("")
});