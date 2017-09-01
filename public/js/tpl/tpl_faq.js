MPT.addTmpl('t_faq_left', function(data){
	var a = [], t, t2;
	a.push('<div class="fl faq-list-left">');
	a.push('	<ul class="clearfix faq-list-menu e_faq_menu">');
	for(t in data){
		a.push('	<li class="fl">');
		a.push('		<a href="javascript:;" class="block" title="' + t + '"><strong>></strong>' + t + '</a>');
		a.push('		<h2 class="clearfix">');
		for(var i = 0; i < data[t].length; i++){
			for(t2 in data[t][i]){
				a.push('	<a href="javascript:;" class="block" title="' + t2 + '" rel="' + t + '"><strong>></strong>' + t2 + '</a>');
			}
		}
		a.push('		</h2>');
		a.push('	</li>');
	}
	a.push('	</ul>');
	a.push('	<a href="' + MPT.Config['question']['jyfk'] + '" class="block faq-list-btn">建议反馈</a>');
	a.push('</div>');
	return a.join('');
});
MPT.addTmpl('t_faq_main', function(){
	var a = [];
	a.push('<div class="fr faq-list-main">');
	a.push('	<h2 class="clearfix"><em class="fl e_faq_title"></em><a href="' + MPT.Config['url']['cs'] + '" class="fr"><i class="fl"></i>返回首页</a></h2>');
	a.push('	<div class="faq-list-content e_faq_content"></div>');
	a.push('</div>');
	return a.join('');
});
MPT.addTmpl('t_faq_list', function(data){
	console.log("data:     "+data);
	var a = [];
	for(var i = 0; i < data.length; i++){
		a.push('<dl>');
		a.push('	<dt class="clearfix"><i class="fr"></i>&#8226&nbsp;<a href="javascript:;" id="' + data[i].id + '">' + Utils.striptScript(data[i].question.toString()) + '</a></dt>');
		a.push('	<dd>' + Utils.striptScript(data[i].answer.toString()) + '</dd>');
		a.push('</dl>');
	}
	return a.join('');
});