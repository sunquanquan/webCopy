MPT.addTmpl("t_pay_mode", function (e) {
    var c = [];
    c.push('<ul class="clearfix pay-mode-main">');
    for (var d = 0, b = MPT.Config.payMode.length; d < b; d++) {
        if (!e.isNest || (MPT.Config.payMode[d]["id"] !== "mobile" && MPT.Config.payMode[d]["id"] !== "sftcard" && MPT.Config.payMode[d]["id"] !== "jwcard")) {
            c.push('<li class="fl"><a href="javascript:;" class="block pay-public' + (e.payMode === MPT.Config.payMode[d]["id"] ? " cur" : '" onclick="getPayTmpl(\'' + MPT.Config.payMode[d]["id"] + "'," + e.isNest + ");") + '"><i class="pay-public pay-mode-' + MPT.Config.payMode[d]["id"] + '"></i>' + MPT.Config.payMode[d]["name"] + "</a></li>")
        }
    }
    c.push("</ul>");
    if (e.isNest) {
        c.push('<h2 class="pay-nest-mode-tip">' + e.gpName + "是" + e.productName + "中专有的一种虚拟“代币”，玩家可以用一定数量的" + e.gpName + "购买游戏商城内的任何商品道具。</h2>");
        c.push('<ul class="clearfix pay-nest-mode-link">');
        c.push('	<li class="fl"><a href="' + MPT.Config.url["pay_history"] + '" target="_blank">充值记录查询</a></li>');
        c.push('	<li class="fl"><a href="' + MPT.Config.url["pay"] + '" target="_blank">前往网页版充值</a></li>');
        c.push("</ul>")
    } else {
        c.push('<div class="pay-service">');
        c.push('	<h2 class="clearfix"><em class="fl">客服电话</em><i class="fl pay-public pay-service-phone"></i></h2>');
        c.push('	<div class="clearfix pay-service-list e_pay_service"></div>');
        c.push("</div>");
        c.push('<div class="pay-service">');
        c.push('	<h2 class="clearfix"><em class="fl">客服邮箱</em><i class="fl pay-public pay-service-email"></i></h2>');
        c.push('	<div class="clearfix pay-service-list e_pay_service"></div>');
        c.push("</div>")
    }
    return c.join("")
});
MPT.addTmpl("t_pay_service", function (g) {
    var b = [];
    var e = g.type;
    var f = g.content;
    var c = g.pid;
    b.push('<input type="text" value="--请按游戏选择--" readonly="readonly"/>');
    b.push('<ul class="hide">');
    for (var d = 0; d < f.length; d++) {
        b.push("<li" + (c == f[d].pid ? " selected" : "") + ">" + f[d].product + " " + (e == "phone" ? f[d].phone : f[d].email) + "</li>")
    }
    b.push("</ul>");
    return b.join("")
});
MPT.addTmpl("t_pay_product", function (e) {
    var b = [];
    var d;
    b.push('<label class="fl pay-title">游戏/区服：</label>');
    b.push('<div class="fl pay-select z2 e_product">');
    b.push('	<span class="pay-select-arrow">&#9660;</span>');
    b.push('	<input type="text" class="fl pay-select-selected e_selected" readonly="readonly" value="请选择游戏" datatype="/[^请选择游戏]/" nullmsg="请选择游戏" errormsg="请选择游戏" sucmsg="&nbsp;"/>');
    b.push('	<div class="clearfix pay-select-options-w hide e_options">');
    b.push('		<h2 class="fl pay-select-options">');
    for (var c = 0; c < e.length; c++) {
        b.push('		<a href="javascript:;" class="fl' + (c ? "" : " first") + '" data-pid="' + e[c].id + '" data-gpname="' + decodeURIComponent(e[c].gpName) + '" data-pname="' + e[c].name + '">');
        b.push('		<img src="' + ((d = getProduct(e[c].id)) == null ? MPT.Config.iwgame_http : d.url) + '/pay/favicon.ico"/>' + e[c].name + "</a>")
    }
    b.push("		</h2>");
    b.push("	</div>");
    b.push('	<span class="Validform_checktip"></span>');
    b.push("</div>");
    b.push('<div class="fl pay-select z1 e_zone">');
    b.push('	<span class="pay-select-arrow">&#9660;</span>');
    b.push('	<input type="text" class="fl pay-select-selected e_selected" readonly="readonly" value="请选择服务器" datatype="/[^请选择服务器]/" nullmsg="请选择服务器" errormsg="请选择服务器" sucmsg="&nbsp;"/>');
    b.push('	<div class="clearfix pay-select-options-w hide e_options"></div>');
    b.push('	<span class="Validform_checktip"></span>');
    b.push("</div>");
    return b.join("")
});
MPT.addTmpl("t_pay_zonelist", function (d) {
    var b = [];
    b.push('<h2 class="fl pay-select-options">');
    for (var c = 0; c < d.length; c++) {
        if (c) {
            b.push('<a href="javascript:;" class="fl" data-zid="' + d[c].id + '">' + d[c].name + "</a>")
        } else {
            b.push('<a href="javascript:;" class="fl first" data-zid="' + d[c].id + '">' + d[c].name + "</a>")
        }
    }
    b.push("</h2>");
    return b.join("")
});
MPT.addTmpl("t_pay_account", function (c) {
    var b = [];
    if (c.payForMe) {
        b.push('<label class="fl pay-title">充值账号：</label>');
        b.push('<input type="text" name="savedAccountName" class="fl pay-input e_accountName" readonly="readonly" value="' + c.accountName + '"/>');
        b.push('<a href="javascript:;" onclick="getPayAccount(0, 1);">给其他账号充值</a>')
    } else {
        b.push('<div class="clearfix pay-account-1">');
        b.push('	<label class="fl pay-title">输入通行证：</label>');
        b.push('	<input type="text" name="savedAccountName" class="fl pay-input e_accountName" maxlength="50" value="' + (c.isClear ? "" : c.accountName) + '" datatype="' + MPT.Config.regular["account"] + '" nullmsg="请输入通行证账号" errormsg="通行证账号格式不正确" sucmsg="&nbsp;"/>');
        if (c.accountName && MPT.Config.accdata) {
            b.push('<a href="javascript:;" onclick="getPayAccount(1);">给自己账号充值</a>')
        }
        b.push('	<span class="Validform_checktip e_accountName_tip"></span>');
        b.push("</div>");
        b.push('<div class="clearfix pay-account-2">');
        b.push('	<label class="fl pay-title">重复通行证：</label>');
        b.push('	<input type="text" class="fl pay-input" maxlength="50" value="' + (c.isClear ? "" : c.accountName) + '" datatype="' + MPT.Config.regular["account"] + '" nullmsg="请再次输入通行证账号" errormsg="两次输入的通行证账号不一致，请重新输入" sucmsg="&nbsp;" recheck="savedAccountName"/>');
        b.push('	<span class="Validform_checktip"></span>');
        b.push("</div>")
    }
    return b.join("")
});
MPT.addTmpl("t_pay_captcha", function () {
    var b = [];
    b.push('<label class="fl pay-title">请输入验证码：</label>');
    b.push('<input type="text" name="captcha" class="fl pay-input" maxlength="6" value="" datatype="' + MPT.Config.regular["captcha"] + '" nullmsg="请输入验证码" errormsg="验证码格式不正确" sucmsg="&nbsp;"/>');
    b.push('<a href="javascript:;" class="e_captcha_pic" title="看不清？重新换张！"><img width="120" height="38"/><input type="hidden" name="capId" value=""/></a>');
    b.push('<span class="Validform_checktip e_captcha_tip"></span>');
    return b.join("")
});
MPT.addTmpl("t_pay_money", function (d) {
    var b = [];
    for (var c = 0; c < d.length; c++) {
        b.push('<li class="fl"><i class="pay-public"></i><a href="javascript:;" class="block" data-money="' + d[c].moneyAmount + '">' + d[c].name + "</a></li>")
    }
    b.push('<li class="fl pay-money-txt"><i class="pay-public"></i><input type="text" class="fl e_money_txt" maxlength="5"/>&nbsp;元</li>');
    return b.join("")
});
MPT.addTmpl("t_pay_bank", function (d) {
    var b = [];
    var e = MPT.Config.bank;
    if (d.isNest) {
        b.push('<ul class="clearfix pay-nest-info">');
        b.push('	<li class="fl"><h2>充值账号：' + d.nestData.accountName + "</h2></li>");
        b.push('	<li class="fl"><h2>充值游戏区服：' + d.nestData.zoneName + "</h2></li>");
        b.push("</ul>")
    }
    b.push('<div class="clearfix pay-bank">');
    b.push('	<form action="" class="e_form" method="post" onsubmit="return false;">');
    b.push('		<ul class="clearfix pay-bank-form">');
    if (!d.isNest) {
        b.push('		<li class="fl z100 e_pay_product"></li>');
        b.push('		<li class="fl pay-account e_pay_account"></li>')
    }
    b.push('			<li class="fl">');
    b.push('				<label class="fl pay-title">请选择充值金额：</label>');
    b.push('				<ol class="fl pay-money e_pay_money"></ol>');
    b.push('				<div class="clear"></div>');
    b.push('				<p class="pay-money-discount e_discountWrap"></p>');
    b.push("			</li>");
    b.push('			<li class="fl">');
    b.push('				<label class="fl pay-title">请选择银行：</label>');
    b.push('				<ul class="fl pay-bank-info e_banks">');
    for (var c = 0; c < e.length; c++) {
        b.push('				<li class="fl pay-bank-' + e[c].id + '"><i class="pay-public"></i><a href="javascript:;" class="fl" data-bank="' + e[c].id + '"><em class="pay-bank-icon"></em>' + e[c].name + "</a></li>")
    }
    b.push('					<li class="clear"></li>');
    b.push("				</ul>");
    b.push('				<div class="clear"></div>');
    if (!d.isNest) {
        b.push('			<h2 class="clearfix pay-bank-info-link"><a href="javascript:;" class="fr pay-bank-info-link-more e_bank_more">更多银行&nbsp;&#9660;</a><a href="' + MPT.Config.url["pay_bank_help"] + '" class="fr" target="_blank">开通网银</a></h2>')
    }
    b.push("			</li>");
    b.push('			<li class="fl pay-captcha e_pay_captcha"></li>');
    b.push("		</ul>");
    if (d.isNest) {
        b.push('	<input type="hidden" name="savedAccountName" class="e_accountName" value="' + d.nestData.accountName + '"/>')
    }
    b.push('		<input type="hidden" name="productCode" class="e_productCode" value="' + (d.isNest ? d.nestData.productId : 0) + '"/>');
    b.push('		<input type="hidden" name="zoneCode" class="e_zoneCode" value="' + (d.isNest ? d.nestData.zoneId : 0) + '"/>');
    b.push('		<input type="hidden" name="savedMoneyAmount" class="e_savedMoneyAmount" value=""/>');
    b.push('		<input type="hidden" name="bankCode" class="e_bankCode" value=""/>');
    b.push('		<input type="hidden" name="roleId" class="e_roleId" value="' + MPT.Config["roleId"] + '"/>');
    b.push('		<input type="hidden" name="accountId" class="e_accountId" value="' + MPT.Config["accountId"] + '"/>');
    b.push('		<input type="hidden" name="accountName" class="e_accountName" value="' + MPT.Config["accountName"] + '"/>');
    b.push('		<input type="hidden" name="roleServerId" class="e_gameNodeId" value="' + MPT.Config["gameNodeId"] + '"/>');
    b.push('		<input type="hidden" class="e_productName" value="' + (d.isNest ? d.nestData.productName : "") + '"/>');
    b.push('		<input type="hidden" class="e_zoneName" value="' + (d.isNest ? d.nestData.zoneName : "") + '"/>');
    b.push('		<input type="hidden" class="e_bankName" value=""/>');
    b.push('		<input type="submit" class="block pay-submit e_submit" value="确定充值"/>');
    b.push("	</form>");
    b.push("</div>");
    return b.join("")
});
MPT.addTmpl("t_pay_zfb", function (c) {
    var b = [];
    if (c.isNest) {
        b.push('<ul class="clearfix pay-nest-info">');
        b.push('	<li class="fl"><h2>充值账号：' + c.nestData.accountName + "</h2></li>");
        b.push('	<li class="fl"><h2>充值游戏区服：' + c.nestData.zoneName + "</h2></li>");
        b.push("</ul>")
    }
    b.push('<div class="clearfix pay-zfb">');
    b.push('	<form action="" class="e_form" method="post" onsubmit="return false;">');
    b.push('		<ul class="clearfix pay-zfb-form">');
    if (!c.isNest) {
        b.push('		<li class="fl z100 e_pay_product"></li>');
        b.push('		<li class="fl pay-account e_pay_account"></li>')
    }
    b.push('			<li class="fl">');
    b.push('				<label class="fl pay-title">请选择充值金额：</label>');
    b.push('				<ol class="fl pay-money e_pay_money"></ol>');
    b.push('				<div class="clear"></div>');
    b.push('				<p class="pay-money-discount e_discountWrap"></p>');
    b.push("			</li>");
    b.push('			<li class="fl pay-captcha e_pay_captcha"></li>');
    b.push("		</ul>");
    if (c.isNest) {
        b.push('	<input type="hidden" name="savedAccountName" class="e_accountName" value="' + c.nestData.accountName + '"/>')
    }
    b.push('		<input type="hidden" name="productCode" class="e_productCode" value="' + (c.isNest ? c.nestData.productId : 0) + '"/>');
    b.push('		<input type="hidden" name="zoneCode" class="e_zoneCode" value="' + (c.isNest ? c.nestData.zoneId : 0) + '"/>');
    b.push('		<input type="hidden" name="savedMoneyAmount" class="e_savedMoneyAmount" value=""/>');
    b.push('		<input type="hidden" name="bankCode" class="e_bankCode" value="' + c.type + '"/>');
    b.push('		<input type="hidden" name="roleId" class="e_roleId" value="' + MPT.Config["roleId"] + '"/>');
    b.push('		<input type="hidden" name="accountId" class="e_accountId" value="' + MPT.Config["accountId"] + '"/>');
    b.push('		<input type="hidden" name="accountName" class="e_accountName" value="' + MPT.Config["accountName"] + '"/>');
    b.push('		<input type="hidden" name="roleServerId" class="e_gameNodeId" value="' + MPT.Config["gameNodeId"] + '"/>');
    b.push('		<input type="hidden" name="scanCode" class="e_scanCode" value="' + ((c.type == "zfbqr" || c.type == "wxqr") ? 1 : 0) + '"/>');
    b.push('		<input type="hidden" class="e_productName" value="' + (c.isNest ? c.nestData.productName : "") + '"/>');
    b.push('		<input type="hidden" class="e_zoneName" value="' + (c.isNest ? c.nestData.zoneName : "") + '"/>');
    b.push('		<input type="submit" class="block pay-submit e_submit" value="确定充值"/>');
    b.push("	</form>");
    b.push("</div>");
    return b.join("")
});
MPT.addTmpl("t_pay_card", function (c) {
    var b = [];
    if (c.isNest) {
        b.push('<ul class="clearfix pay-nest-info">');
        b.push('	<li class="fl"><h2>充值账号：' + c.nestData.accountName + "</h2></li>");
        b.push('	<li class="fl"><h2>充值游戏区服：' + c.nestData.zoneName + "</h2></li>");
        b.push("</ul>")
    }
    b.push('<div class="clearfix pay-card">');
    b.push('	<form action="" class="e_form" method="post" onsubmit="return false;">');
    b.push('		<ul class="clearfix pay-card-form">');
    if (!c.isNest) {
        b.push('		<li class="fl z100 e_pay_product"></li>');
        b.push('		<li class="fl pay-account e_pay_account"></li>')
    }
    b.push('			<li class="fl">');
    b.push('				<label class="fl pay-title">请输入一卡通卡号：</label>');
    b.push('				<input type="text" class="fl pay-input e_cardid" maxlength="18" datatype="' + MPT.Config.regular["card"] + '" nullmsg="请输入要充值的一卡通卡号" errormsg="您输入的一卡通卡号格式不正确" sucmsg="&nbsp;"/>');
    b.push('				<span class="Validform_checktip e_cardid_tip"></span>');
    b.push("			</li>");
    b.push('			<li class="fl">');
    b.push('				<label class="fl pay-title">请输入一卡通卡密：</label>');
    b.push('				<input type="password" class="fl pay-input e_cardpass" maxlength="12" datatype="' + MPT.Config.regular["cardPass"] + '" nullmsg="请输入要充值的一卡通卡密" errormsg="您输入的一卡通卡密格式不正确" sucmsg="&nbsp;"/>');
    b.push('				<span class="Validform_checktip e_cardpass_tip"></span>');
    b.push("			</li>");
    b.push('			<li class="fl pay-captcha e_pay_captcha"></li>');
    b.push("		</ul>");
    if (c.isNest) {
        b.push('	<input type="hidden" name="savedAccountName" class="e_accountName" value="' + c.nestData.accountName + '"/>')
    }
    b.push('		<input type="hidden" name="productCode" class="e_productCode" value="' + (c.isNest ? c.nestData.productId : 0) + '"/>');
    b.push('		<input type="hidden" name="zoneCode" class="e_zoneCode" value="' + (c.isNest ? c.nestData.zoneId : 0) + '"/>');
    b.push('		<input type="hidden" name="cardsInfo" class="e_cardsInfo" value=""/>');
    b.push('		<input type="hidden" name="payChan" class="e_payChan" value="iwcard"/>');
    b.push('		<input type="hidden" name="roleId" class="e_roleId" value="' + MPT.Config["roleId"] + '"/>');
    b.push('		<input type="hidden" name="accountId" class="e_accountId" value="' + MPT.Config["accountId"] + '"/>');
    b.push('		<input type="hidden" name="accountName" class="e_accountName" value="' + MPT.Config["accountName"] + '"/>');
    b.push('		<input type="hidden" name="roleServerId" class="e_gameNodeId" value="' + MPT.Config["gameNodeId"] + '"/>');
    b.push('		<input type="hidden" class="e_productName" value="' + (c.isNest ? c.nestData.productName : "") + '"/>');
    b.push('		<input type="hidden" class="e_zoneName" value="' + (c.isNest ? c.nestData.zoneName : "") + '"/>');
    b.push('		<input type="submit" class="block pay-submit e_submit" value="确定充值"/>');
    b.push("	</form>");
    b.push("</div>");
    b.push('<div class="pay-card-other">');
    b.push("	<h2>温馨提示：</h2>");
    b.push('	<p>1、您可以联系<a href="' + MPT.Config.url["pay_sale"] + '" target="_blank">当地代理商</a>，或联系全国代理商 QQ：100857338 购买绿岸一卡通。</p>');
    b.push('	<p>2、您可以在<a href="' + MPT.Config.url["pay_check"] + '" target="_blank">此处</a>，查询您的绿岸一卡通充值卡是否已被使用。</p>');
    b.push("</div>");
    return b.join("")
});
MPT.addTmpl("t_pay_card_sft", function () {
    var b = [];
    var c = MPT.Config.cardpar.sft;
    b.push('<div class="clearfix pay-card">');
    b.push('	<form action="" class="e_form" method="post" onsubmit="return false;">');
    b.push('		<ul class="clearfix pay-card-form">');
    b.push('		<li class="fl z100 e_pay_product"></li>');
    b.push('		<li class="fl pay-account e_pay_account"></li>');
    b.push('			<li class="fl">');
    b.push('				<label class="fl pay-title">请选择盛付通卡面额：</label>');
    b.push('				<ul class="fl pay-mobile-value e_card_value">');
    for (var d = 0; d < c.length; d++) {
        b.push('				<li class="fl"><i class="pay-public"></i><a href="javascript:;" class="block" data-value="' + c[d] + '">' + c[d] + "元</a></li>")
    }
    b.push("				</ul>");
    b.push('				<div class="clear"></div>');
    b.push('				<p class="pay-mobile-tip">温馨提示：1、请确保选择的面额和您输入的卡号的面额一致，否则可能导致金额丢失或充值失败。</p>');
    b.push('				<p class="pay-mobile-tip2">2、如因为订单面额和卡号面额不一致导致丢失或充值失败，请<a href="' + MPT.Config.url["cs_sjkcz"] + '" target="_blank">联系客服</a>处理。</p>');
    b.push("			</li>");
    b.push('			<li class="fl">');
    b.push('				<label class="fl pay-title">对应<span class="e_gpName">' + MPT.gpName + "</span>点数：</label>");
    b.push('				<em class="fl pay-mobile-points e_points"></em>');
    b.push("			</li>");
    b.push('			<li class="fl">');
    b.push('				<label class="fl pay-title">请输入盛付通卡卡号：</label>');
    b.push('				<input type="text" class="fl pay-input e_cardid" maxlength="16" datatype="' + MPT.Config.regular["sftCard"] + '" nullmsg="请输入要充值的盛付通卡卡号" errormsg="您输入的盛付通卡卡号格式不正确" sucmsg="&nbsp;"/>');
    b.push('				<span class="Validform_checktip e_cardid_tip"></span>');
    b.push("			</li>");
    b.push('			<li class="fl">');
    b.push('				<label class="fl pay-title">请输入盛付通卡卡密：</label>');
    b.push('				<input type="password" class="fl pay-input e_cardpass" maxlength="8" datatype="' + MPT.Config.regular["sftCardPass"] + '" nullmsg="请输入要充值的盛付通卡卡密" errormsg="您输入的盛付通卡卡密格式不正确" sucmsg="&nbsp;"/>');
    b.push('				<span class="Validform_checktip e_cardpass_tip"></span>');
    b.push("			</li>");
    b.push('			<li class="fl pay-captcha e_pay_captcha"></li>');
    b.push("		</ul>");
    b.push('		<input type="hidden" name="productCode" class="e_productCode" value=""/>');
    b.push('		<input type="hidden" name="zoneCode" class="e_zoneCode" value=""/>');
    b.push('		<input type="hidden" name="cardsInfo" class="e_cardsInfo" value=""/>');
    b.push('		<input type="hidden" name="cardParvalue" class="e_cardParvalue" value=""/>');
    b.push('		<input type="hidden" name="payChan" class="e_payChan" value="sftcard"/>');
    b.push('		<input type="hidden" name="roleId" class="e_roleId" value="' + MPT.Config["roleId"] + '"/>');
    b.push('		<input type="hidden" name="accountId" class="e_accountId" value="' + MPT.Config["accountId"] + '"/>');
    b.push('		<input type="hidden" name="accountName" class="e_accountName" value="' + MPT.Config["accountName"] + '"/>');
    b.push('		<input type="hidden" name="roleServerId" class="e_gameNodeId" value="' + MPT.Config["gameNodeId"] + '"/>');
    b.push('		<input type="hidden" class="e_productName" value=""/>');
    b.push('		<input type="hidden" class="e_zoneName" value=""/>');
    b.push('		<input type="submit" class="block pay-submit e_submit" value="确定充值"/>');
    b.push("	</form>");
    b.push("</div>");
    return b.join("")
});
MPT.addTmpl("t_pay_card_jw", function () {
    var b = [];
    var c = MPT.Config.cardpar.jw;
    b.push('<div class="clearfix pay-card">');
    b.push('	<form action="" class="e_form" method="post" onsubmit="return false;">');
    b.push('		<ul class="clearfix pay-card-form">');
    b.push('		<li class="fl z100 e_pay_product"></li>');
    b.push('		<li class="fl pay-account e_pay_account"></li>');
    b.push('			<li class="fl">');
    b.push('				<label class="fl pay-title">请选择骏网卡面额：</label>');
    b.push('				<ul class="fl pay-mobile-value e_card_value">');
    for (var d = 0; d < c.length; d++) {
        b.push('				<li class="fl"><i class="pay-public"></i><a href="javascript:;" class="block" data-value="' + c[d] + '">' + c[d] + "元</a></li>")
    }
    b.push("				</ul>");
    b.push('				<div class="clear"></div>');
    b.push('				<p class="pay-mobile-tip">温馨提示：1、请确保选择的面额和您输入的卡号的面额一致，否则可能导致金额丢失或充值失败。</p>');
    b.push('				<p class="pay-mobile-tip2">2、如因为订单面额和卡号面额不一致导致丢失或充值失败，请<a href="' + MPT.Config.url["cs_sjkcz"] + '" target="_blank">联系客服</a>处理。</p>');
    b.push("			</li>");
    b.push('			<li class="fl">');
    b.push('				<label class="fl pay-title">对应<span class="e_gpName">' + MPT.gpName + "</span>点数：</label>");
    b.push('				<em class="fl pay-mobile-points e_points"></em>');
    b.push("			</li>");
    b.push('			<li class="fl">');
    b.push('				<label class="fl pay-title">请输入骏网卡卡号：</label>');
    b.push('				<input type="text" class="fl pay-input e_cardid" maxlength="16" datatype="' + MPT.Config.regular["jwCard"] + '" nullmsg="请输入要充值的骏网卡卡号" errormsg="您输入的骏网卡卡号格式不正确" sucmsg="&nbsp;"/>');
    b.push('				<span class="Validform_checktip e_cardid_tip"></span>');
    b.push("			</li>");
    b.push('			<li class="fl">');
    b.push('				<label class="fl pay-title">请输入骏网卡卡密：</label>');
    b.push('				<input type="password" class="fl pay-input e_cardpass" maxlength="16" datatype="' + MPT.Config.regular["jwCardPass"] + '" nullmsg="请输入要充值的骏网卡卡密" errormsg="您输入的骏网卡卡密格式不正确" sucmsg="&nbsp;"/>');
    b.push('				<span class="Validform_checktip e_cardpass_tip"></span>');
    b.push("			</li>");
    b.push('			<li class="fl pay-captcha e_pay_captcha"></li>');
    b.push("		</ul>");
    b.push('		<input type="hidden" name="productCode" class="e_productCode" value=""/>');
    b.push('		<input type="hidden" name="zoneCode" class="e_zoneCode" value=""/>');
    b.push('		<input type="hidden" name="cardsInfo" class="e_cardsInfo" value=""/>');
    b.push('		<input type="hidden" name="cardParvalue" class="e_cardParvalue" value=""/>');
    b.push('		<input type="hidden" name="payChan" class="e_payChan" value="jwcard"/>');
    b.push('		<input type="hidden" name="roleId" class="e_roleId" value="' + MPT.Config["roleId"] + '"/>');
    b.push('		<input type="hidden" name="accountId" class="e_accountId" value="' + MPT.Config["accountId"] + '"/>');
    b.push('		<input type="hidden" name="accountName" class="e_accountName" value="' + MPT.Config["accountName"] + '"/>');
    b.push('		<input type="hidden" name="roleServerId" class="e_gameNodeId" value="' + MPT.Config["gameNodeId"] + '"/>');
    b.push('		<input type="hidden" class="e_productName" value=""/>');
    b.push('		<input type="hidden" class="e_zoneName" value=""/>');
    b.push('		<input type="submit" class="block pay-submit e_submit" value="确定充值"/>');
    b.push("	</form>");
    b.push("</div>");
    return b.join("")
});
MPT.addTmpl("t_pay_mobile", function () {
    var b = [];
    var d = MPT.Config.mobile;
    b.push('<div class="clearfix pay-mobile">');
    b.push('	<form action="" class="e_form" method="post" onsubmit="return false;">');
    b.push('		<ul class="clearfix pay-mobile-form">');
    b.push('			<li class="fl z100 e_pay_product"></li>');
    b.push('			<li class="fl pay-account e_pay_account"></li>');
    b.push('			<li class="fl">');
    b.push('				<label class="fl pay-title">请选择手机卡运营商：</label>');
    b.push('				<ul class="fl pay-mobile-server e_mobile_server">');
    for (var c = 0; c < d.server.length; c++) {
        b.push('				<li class="fl"><i class="pay-public"></i><a href="javascript:;" class="block" data-server="' + d.server[c].id + '">' + d.server[c].name + "</a></li>")
    }
    b.push("				</ul>");
    b.push("			</li>");
    b.push('			<li class="fl">');
    b.push('				<label class="fl pay-title">请选择手机卡面额：</label>');
    b.push('				<ul class="fl pay-mobile-value e_mobile_value">');
    b.push('				<li class="fl"><i class="pay-public"></i><a href="javascript:;" class="block" data-value="1">1元</a></li>');
    b.push('				<li class="fl"><i class="pay-public"></i><a href="javascript:;" class="block" data-value="10">10元</a></li>');
    for (var c = 0; c < d.value.length; c++) {
        b.push('				<li class="fl"><i class="pay-public"></i><a href="javascript:;" class="block" data-value="' + d.value[c] + '">' + d.value[c] + "元</a></li>")
    }
    b.push("				</ul>");
    b.push('				<div class="clear"></div>');
    b.push('				<p class="pay-mobile-tip">温馨提示：1、请确保选择的面额和您输入的卡号的面额一致，否则可能导致金额丢失或充值失败。</p>');
    b.push('				<p class="pay-mobile-tip2">2、如因为订单面额和卡号面额不一致导致丢失或充值失败，请<a href="' + MPT.Config.url["cs_sjkcz"] + '" target="_blank">联系客服</a>处理。</p>');
    b.push("			</li>");
    b.push('			<li class="fl">');
    b.push('				<label class="fl pay-title">对应<span class="e_gpName">' + MPT.gpName + "</span>点数：</label>");
    b.push('				<em class="fl pay-mobile-points e_points"></em>');
    b.push("			</li>");
    b.push('			<li class="fl pay-captcha e_pay_captcha"></li>');
    b.push("		</ul>");
    b.push('		<input type="hidden" name="productCode" class="e_productCode" value="0"/>');
    b.push('		<input type="hidden" name="zoneCode" class="e_zoneCode" value="0"/>');
    b.push('		<input type="hidden" name="bankCode" class="e_serverCode" value=""/>');
    b.push('		<input type="hidden" name="savedMoneyAmount" class="e_cardParvalue" value=""/>');
    b.push('		<input type="hidden" name="roleId" class="e_roleId" value="' + MPT.Config["roleId"] + '"/>');
    b.push('		<input type="hidden" name="accountId" class="e_accountId" value="' + MPT.Config["accountId"] + '"/>');
    b.push('		<input type="hidden" name="accountName" class="e_accountName" value="' + MPT.Config["accountName"] + '"/>');
    b.push('		<input type="hidden" name="roleServerId" class="e_gameNodeId" value="' + MPT.Config["gameNodeId"] + '"/>');
    b.push('		<input type="hidden" class="e_productName" value=""/>');
    b.push('		<input type="hidden" class="e_zoneName" value=""/>');
    b.push('		<input type="submit" class="block pay-submit e_submit" value="确定充值"/>');
    b.push("	</form>");
    b.push("</div>");
    return b.join("")
});
MPT.addTmpl("t_pay_ok", function (c) {
    var b = [];
    b.push('<h2 class="clearfix"><i class="fl pay-public"></i>恭喜您，充值成功！</h2>');
    b.push("<p>您已成功为账号（" + c.account + "）充值<em>" + c.points + "</em>点" + c.gpn + "！</p>");
    b.push('<a href="' + MPT.Config.url["pay"] + '" class="block pay-submit">继续充值</a>');
    return b.join("")
});
MPT.addTmpl("t_pay_fail", function (c) {
    var b = [];
    b.push('<h2 class="clearfix"><i class="fl pay-public"></i>充值出现错误</h2>');
    b.push("<h3>错误原因：" + c.error + "</h3>");
    b.push("<p>1、如在支付过程中遇到错误，建议您尝试重新充值。</p>");
    b.push("<p>2、如您确已支付成功，请稍后查询充值记录或游戏内余额确认（可能网络有一定延迟）。</p>");
    b.push('<p>3、如您还有其他问题，请<a href="' + MPT.Config.url["cs"] + '" target="_blank">联系客服</a>进行解决。</p>');
    b.push('<div class="clearfix pay-fail-btn">');
    b.push('	<ul class="fl">');
    b.push('		<li class="fl"><a href="' + MPT.Config.url["pay"] + '" class="block pay-submit" target="_blank">重新充值</a></li>');
    b.push('		<li class="fl"><a href="' + MPT.Config.url["pay_history"] + '" class="block pay-submit" target="_blank">查询充值记录</a></li>');
    b.push("	</ul>");
    b.push("</div>");
    return b.join("")
});
MPT.addTmpl("t_pay_popup", function (c) {
    var b = [];
    b.push('<div class="pay-popup">');
    b.push('	<div class="pay-popup-bg"></div>');
    b.push('	<div class="pay-popup-inner' + (c.type == "sure2" ? " pay-popup-inner-scan" : "") + '">');
    b.push('		<h2 class="clearfix pay-popup-title"><a href="javascript:;" class="fr pay-popup-close e_pay_popup_close" onclick="$.unblockUI();">&#10005</a>' + c.title + "</h2>");
    b.push('		<div class="clearfix pay-popup-content e_pay_popup_content"></div>');
    b.push("	</div>");
    b.push("</div>");
    return b.join("")
});
MPT.addTmpl("t_pay_popup_sure", function (c) {
    var b = [];
    b.push('<h3 class="pay-popup-sure-title">充值订单确定，请您仔细核对如下充值信息</h3>');
    b.push('<ul class="clearfix pay-popup-sure-info">');
    b.push('	<li class="fl"><h4 class="fl">您要充值的账号：</h4>' + c.account + "</li>");
    b.push('	<li class="fl"><h4 class="fl">您要充值的游戏：</h4>' + c.product + "</li>");
    b.push('	<li class="fl"><h4 class="fl">您要充值的大区：</h4>' + c.zone + "</li>");
    if (c.money) {
        b.push('	<li class="fl"><h4 class="fl">充值面额：</h4><strong>' + c.money + "</strong>元</li>")
    }
    if (c.payMode == "bank" || c.payMode == "zfb") {
        b.push('<li class="fl"><h4 class="fl">实际支付金额：</h4><em>' + c.actualPay + "</em>元</li>")
    }
    if (c.points) {
        b.push('	<li class="fl"><h4 class="fl">&nbsp;</h4>（将获得<strong>' + c.points + "</strong>" + c.gpn + "）</li>")
    }
    b.push('	<li class="fl"><h4 class="fl">充值渠道：</h4>' + c.channel + "</li>");
    b.push("</ul>");
    b.push('<ul class="clearfix pay-popup-btn">');
    if (c.payMode == "bank") {
        b.push('<li class="fl"><a href="' + MPT.Config.url["postJump"] + "?gotourl=" + encodeURIComponent(c.payUrl) + '" class="block pay-submit e_pay_popup_btn" target="_blank">进入银行支付</a></li>')
    } else {
        if (c.payMode == "mobile") {
            b.push('<li class="fl"><a href="' + MPT.Config.url["postJump"] + "?gotourl=" + encodeURIComponent(c.payUrl) + '" class="block pay-submit e_pay_popup_btn" target="_blank">进入运营商支付</a></li>')
        } else {
            if (c.payMode == "zfb") {
                b.push('<li class="fl"><a href="' + c.payUrl + '" class="block pay-submit e_pay_popup_btn" target="_blank">进入支付宝支付</a></li>')
            } else {
                b.push('<li class="fl"><button type="button" class="block pay-submit e_pay_popup_btn">确认支付</button></li>')
            }
        }
    }
    b.push('	<li class="fl"><a href="javascript:;" class="block pay-popup-btn-back" onclick="$.unblockUI();">返回修改订单</a></li>');
    b.push("</ul>");
    return b.join("")
});
MPT.addTmpl("t_pay_popup_sure2", function (c) {
    var b = [];
    b.push("<p>1、请您打开您的" + (c.payMode == "zfbqr" ? "支付宝" : "微信") + "，点击扫一扫功能。</p>");
    b.push("<p>2、将取景器对准下方二维码，进行扫描。</p>");
    b.push("<p>3、手机上弹出支付信息后，进行支付即可完成充值。</p>");
    b.push('<div class="clearfix pay-popup-scan-content">');
    b.push('	<div class="fl pay-popup-scan-info">');
    b.push("		<h3>请您仔细核对如下充值信息</h3>");
    b.push('		<ul class="clearfix pay-popup-sure-info">');
    b.push('			<li class="fl"><h4 class="fl">您要充值的账号：</h4>' + c.account + "</li>");
    b.push('			<li class="fl"><h4 class="fl">您要充值的游戏：</h4>' + c.product + "</li>");
    b.push('			<li class="fl"><h4 class="fl">您要充值的大区：</h4>' + c.zone + "</li>");
    b.push('			<li class="fl"><h4 class="fl">充值面额：</h4><strong>' + c.money + "</strong>元</li>");
    b.push('			<li class="fl"><h4 class="fl">实际支付金额：</h4><em>' + c.actualPay + "</em>元</li>");
    b.push('			<li class="fl"><h4 class="fl">&nbsp;</h4>（将获得<strong>' + c.points + "</strong>" + c.gpn + "）</li>");
    b.push('			<li class="fl"><h4 class="fl">充值渠道：</h4>' + (c.payMode == "zfbqr" ? "支付宝" : "微信") + "扫码充值</li>");
    b.push("		</ul>");
    b.push("	</div>");
    b.push('	<div class="fl pay-popup-scan-main">');
    b.push("		<h3>扫码支付</h3>");
    if (MPT.Config.regular["httpAddress"].test(c.payUrl)) {
        b.push('		<div class="pay-popup-scan-pic-iframe"><iframe src="' + c.payUrl + '" scrolling="no" frameborder="0" allowtransparency="true" height="100%" width="100%"></iframe></div>')
    } else {
        b.push('		<div class="pay-popup-scan-pic"><img src="data:image/png;base64,' + c.payUrl + '" height="100%" width="100%"/></div>')
    }
    b.push("		<p>使用" + (c.payMode == "zfbqr" ? "支付宝" : "微信") + "扫码完成付款</p>");
    b.push("	</div>");
    b.push("</div>");
    b.push('<ul class="clearfix pay-popup-btn">');
    b.push('	<li class="fl"><a href="javascript:;" class="block pay-submit e_pay_popup_cancel" onclick="$.unblockUI();">取消充值</a></li>');
    b.push('	<li class="fl"><a href="javascript:;" class="block pay-popup-btn-back e_pay_popup_btn_back" onclick="$.unblockUI();">修改订单</a></li>');
    b.push("</ul>");
    return b.join("")
});
MPT.addTmpl("t_pay_popup_tip", function (c) {
    var b = [];
    b.push('<div class="pay-popup-tip">');
    b.push("	<p>1、付款完成之前请勿关闭本窗口。</p>");
    b.push("	<p>2、完成付款操作后请根据您的当前情况点击下方按钮。</p>");
    b.push('	<p>3、如充值遇见问题，请<a href="' + MPT.Config.url["cs"] + '" target="_blank">联系客服</a>进行解决。</p>');
    b.push('	<ul class="clearfix pay-popup-tip-info">');
    b.push('		<li class="fl"><em class="fl">您选择的充值方式：</em>' + c.channel + "</li>");
    b.push('		<li class="fl"><em class="fl">您选择的要充值的游戏：</em>' + c.product + "</li>");
    b.push('		<li class="fl last">请您在<strong>新打开的' + (c.payMode == "bank" ? "银行" : "支付宝") + "页面</strong>完成账号充值付款</li>");
    b.push("	</ul>");
    b.push('	<ul class="clearfix pay-popup-btn">');
    b.push('		<li class="fl"><button type="button" class="block pay-submit e_pay_popup_btn">已完成支付</button></li>');
    b.push('		<li class="fl"><a href="javascript:;" class="block pay-popup-btn-back" onclick="$.unblockUI();">修改订单</a></li>');
    b.push("	</ul>");
    b.push("</div>");
    return b.join("")
});
MPT.addTmpl("t_pay_popup_ok", function (c) {
    var b = [];
    b.push('<div class="pay-popup-ok">');
    b.push('	<h3 class="clearfix"><i class="fl pay-public"></i>您已成功充值<em>' + c.gp + "</em>点" + c.gpName + "！</h3>");
    b.push('	<a href="javascript:;" class="block pay-submit" onclick="$.unblockUI();">确&nbsp;定</a>');
    b.push("</div>");
    return b.join("")
});
MPT.addTmpl("t_pay_popup_fail", function (c) {
    var b = [];
    b.push('<div class="pay-popup-fail">');
    b.push('	<h3 class="clearfix"><i class="fl pay-public"></i>充值出现错误</h3>');
    b.push("	<h4>错误原因：" + c.error + "</h4>");
    b.push("	<p>1、如您在支付过程中遇到错误，建议您尝试重新充值。</p>");
    b.push("	<p>2、如您确已支付成功，请稍后查询充值记录或游戏内余额确认（可能网络有一定延迟）。</p>");
    b.push('	<p>3、如您还有其他问题，请<a href="' + MPT.Config.url["cs"] + '" target="_blank">联系客服</a>进行解决。</p>');
    b.push('	<ul class="clearfix pay-popup-btn">');
    b.push('		<li class="fl"><a href="javascript:;" class="block pay-submit" onclick="$.unblockUI();">重新充值</a></li>');
    b.push('		<li class="fl"><a href="' + MPT.Config.url["pay_history"] + '" target="_blank" class="block pay-popup-btn-back">查询充值记录</a></li>');
    b.push("	</ul>");
    b.push("</div>");
    return b.join("")
});