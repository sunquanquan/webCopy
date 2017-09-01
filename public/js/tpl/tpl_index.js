MPT.addTmpl('t_index', function(data){
	var a = [];
	a.push('<div class="clearfix index-product">');
	a.push('	<h2 class="title">游戏客服专区</h2>');
	a.push('	<h3 class="subtitle">请选择游戏进入</h3>');
	a.push('	<ul class="clearfix index-product-list e_index_product"></ul>');
	a.push('</div>');
	a.push('<div class="clearfix index-faq">');
	a.push('	<h2 class="title">常见问题服务</h2>');
	a.push('	<h3 class="subtitle">FAQ Service</h3>');
	a.push('	<dl class="clearfix">');
	a.push('		<dt class="fl icon-1">账号问题</dt>');
	a.push('		<dd class="fl"><a href="' + MPT.Config['url']['findByMobile'] + '" target="_blank">找回密码</a></dd>');
	a.push('		<dd class="fl"><a href="' + MPT.Config['url']['getbackacc'] + '" target="_blank">找回账号</a></dd>');
	a.push('		<dd class="fl"><a href="' + MPT.Config['url']['accountLock'] + '" target="_blank">账号锁定</a></dd>');
	a.push('		<dd class="fl"><a href="' + MPT.Config['url']['accountUnlock'] + '" target="_blank">账号解锁</a></dd>');
	a.push('		<dd class="fl"><a href="' + MPT.Config['url']['accountRecord'] + '" target="_blank">记录查询</a></dd>');
	a.push('	</dl>');
	a.push('	<dl class="clearfix">');
	a.push('		<dt class="fl icon-2">安全保护</dt>');
	a.push('		<dd class="fl"><a href="' + MPT.Config['url']['passport']['changePass'] + '" target="_blank">修改密码</a></dd>');
	a.push('		<dd class="fl"><a href="' + MPT.Config['url']['passport']['securityToken'] + '" target="_blank">安全令牌</a></dd>');
	a.push('		<dd class="fl"><a href="' + MPT.Config['url']['passport']['safeMobilep'] + '" target="_blank">安全手机</a></dd>');
	a.push('		<dd class="fl"><a href="' + MPT.Config['url']['passport']['safeEmail'] + '" target="_blank">安全邮箱</a></dd>');
	a.push('		<dd class="fl"><a href="' + MPT.Config['url']['passport']['securityQues'] + '" target="_blank">密保问题</a></dd>');
	a.push('	</dl>');
	a.push('</div>');
	return a.join('');
});
MPT.addTmpl('t_index_product', function(data){
	var a = [];
	for(var i = 0, l = data.length; i < l; i++){
		a.push('<li class="fl">');
		a.push('	<a href="' + data[i].linkurl + '" target="_blank" class="block">');
		a.push('		<img src="' + data[i].imageurl + '" alt="' + data[i].alt + '"></img>');
		a.push('		<h4>' + data[i].alt + '</h4>');
		a.push('	</a>');
		a.push('</li>');
	}
	return a.join('');
});