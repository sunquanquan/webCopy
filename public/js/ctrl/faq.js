function faqFunc(){
	var $title = $('.e_faq_content dt a');
	var $content = $('.e_faq_content dd');
	var $pic = $('.e_faq_content dt i');
	$.each($title, function(i){
		$title.eq(i).click(function(){
			$pic.removeClass('arrow-up').eq(i).addClass('arrow-up');
			$content.hide().eq(i).show();
		});
	});
}
MPT.addAction('faq', function(elm){
	console.log('elm:        '+elm);
	var _id = Utils.getUrl('id');
	console.log('_id:    '+_id);
	var _name = decodeURIComponent(Utils.getUrl('parentTypeCodeName'));
	$.ajax({
		type: 'post',
		url: MPT.Config['req']['getAllFaqQuestion'],
		data: {'pid': MPT.pid},
		dataType: 'json',
		success: function(result){
			$(elm).html(MPT.getTmpl('t_faq_left', result)).append(MPT.getTmpl('t_faq_main'));
			var $menu = $('.e_faq_menu').find('li > a');
			var $menusList = $('.e_faq_menu').find('h2');
			var $menus = $menusList.find('a');
			var $title = $('.e_faq_title');
			var $content = $('.e_faq_content');
			$menu.click(function(){
				var $this = $(this);
				var _title = $this.attr('title');
				console.log(_title);
				console.log(result);
				var aResult = [];
				$menu.removeClass('cur');
				$menus.removeClass('cur');
				$menusList.hide();
				$this.addClass('cur').siblings('h2').show();
				$title.text(_title);
				for(var i = 0;i < result[_title].length;i++){
					for(var k in result[_title][i]){
						for(var j = 0;j < result[_title][i][k].length;j++){
							aResult.push(result[_title][i][k][j]);
						}
					}
				}
				$content.html(MPT.getTmpl('t_faq_list', aResult));
				faqFunc();
			});
			$menus.click(function(){
				var $this = $(this);
				var _title = $this.attr('title');
				var _rel = $this.attr('rel');
				$menu.removeClass('cur');
				$menus.removeClass('cur');
				$this.addClass('cur');
				$title.text(_title);
				for(var i = 0;i < result[_rel].length;i++){
					for(var k in result[_rel][i]){
						if(k === _title){
							$content.html(MPT.getTmpl('t_faq_list', result[_rel][i][k]));
						}
					}
				}
				faqFunc();
			});
			if(_id && _name){
				$.each($menu, function(){
					var $this = $(this);
					if($this.attr('title') == _name){
						$this.trigger('click');
						$('#' + _id).trigger('click');
					}
				});
			}else{
				$menu.eq(0).trigger('click');
			}
		}
	});
});