//内页左侧导航
MPT.addTmpl('t_leftnav',function(){
	var a = [], index;
	for(var i = 0, l = MPT.productInfo.length; i < l; i++){
		if(MPT.pid === MPT.productInfo[i].pid){
			index = i;
			break;
		}
	}
	a.push('	<div class="leftNav_con">');
	a.push('		<div class="leftNav_title clearfix">');
	a.push('			<h2 class="fl">自助服务</h2>');
	a.push('		</div>');
	a.push('		<div class="leftNav_list">');
	a.push('			<div class="leftNav_list_icon">');
	a.push('				<div class="leftNav_list_icon_bg clearfix">');
	a.push('					<em class="left_sprit fl left_icon1"></em>');
	a.push('					<a href="javascript:;" class="fl left_sprit left_icon">安全产品</a>');
	a.push('				</div>');
	a.push('			</div>');
	a.push('			<div class="leftNav_list_con hide">');
	a.push('				<ul>');
	a.push('					<li class="clearfix">');
	a.push('						<a href="" class="fl">安全令牌</a>');
	a.push('					</li>');
	a.push('					<li class="clearfix">');
	a.push('						<a href="" class="fl">安全手机</a>');
	a.push('					</li>');
	a.push('					<li class="clearfix">');
	a.push('						<a href="" class="fl">安全邮箱</a>');
	a.push('					</li>');
	a.push('					<li class="clearfix">');
	a.push('						<a href="" class="fl">密保问题</a>');
	a.push('					</li>');
	a.push('				</ul>');
	a.push('			</div>');
	a.push('			<div class="leftNav_list_icon">');
	a.push('				<div class="leftNav_list_icon_bg clearfix">');
	a.push('					<em class="left_sprit fl left_icon2"></em>');
	a.push('					<a href="javascript:;" class="fl left_sprit left_icon">账号保护</a>');
	a.push('				</div>');
	a.push('			</div>');
	a.push('			<div class="leftNav_list_con hide">');
	a.push('				<ul>');
	a.push('					<li class="clearfix">');
	a.push('						<a href="" class="fl">修改密码</a>');
	a.push('					</li>');
	a.push('					<li class="clearfix">');
	a.push('						<a href="'+MPT.Config['url'].findPw+'" class="fl">找回密码</a>');
	a.push('					</li>');
	a.push('					<li class="clearfix">');
	a.push('						<a href="'+MPT.Config['url'].getbackacc+'" class="fl">找回账号</a>');
	a.push('					</li>');
	a.push('					<li class="clearfix">');
	a.push('						<a href="'+MPT.Config['url'].accountLock+'" class="fl">账号锁定</a>');
	a.push('					</li>');
	a.push('					<li class="clearfix">');
	a.push('						<a href="'+MPT.Config['url'].accountUnlock+'" class="fl">账号解锁</a>');
	a.push('					</li>');
	a.push('					<li class="clearfix">');
	a.push('						<a href="" class="fl">记录查询</a>');
	a.push('					</li>');
	a.push('				</ul>');
	a.push('			</div>');
	a.push('		</div>');
	a.push('	</div>');
	a.push('	<div class="left_bottom">');
	a.push('		<div class="content_list clearfix">');
	a.push('			<em class="fl">客服电话</em>');
	a.push('			<div class="list_mess fl">');
	if(typeof index === 'undefined'){
		a.push('			<span>--请按游戏选择--</span>');
	}else{
		a.push('			<span>' + MPT.productInfo[index].product + '&nbsp;' + MPT.productInfo[index].phone + '</span>');
	}
	a.push('				<ul class="list_mess_content hide">');
	for(var i = 0, l = MPT.productInfo.length; i < l; i++){
		a.push('				<li>' + MPT.productInfo[i].product + ' ' + MPT.productInfo[i].phone + '</li>');
	}
	a.push('				</ul>');
	a.push('			</div>');
	a.push('		</div>');
	a.push('		<div class="content_list clearfix">')
	a.push('			<em class="fl">客服邮箱</em>');
	a.push('			<div class="list_mess fl">');
	if(typeof index === 'undefined'){
		a.push('			<span>--请按游戏选择--</span>');
	}else{
		a.push('			<span>' + MPT.productInfo[index].product + '&nbsp;' + MPT.productInfo[index].email + '</span>');
	}
	a.push('				<ul class="list_mess_content hide">');
	for(var i = 0, l = MPT.productInfo.length; i < l; i++){
		a.push('				<li>' + MPT.productInfo[i].product + ' ' + MPT.productInfo[i].email + '</li>');
	}
	a.push('				</ul>');
	a.push('			</div>');
	a.push('		</div>');
	a.push('	</div>');
	return a.join('');
});