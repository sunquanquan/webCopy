MPT.addAction('index', function(elm){
	$(elm).html(MPT.getTmpl('t_index'));
	$.getScript((MPT.Config['req']['slide'] ? MPT.Config['req']['slide'] : MPT.Config['product_http'] + '/js/poster_js/38.js'), function(){
		$('.e_index_product').html(MPT.getTmpl('t_index_product', _slide));
	});
	var isPosterShow = parseInt(Utils.getCookie('isPosterShow') || 1);
	if(isPosterShow){
		$.getScript(MPT.Config['poster']['productPoster'], function(){
			var index = 0;
			$.each(MPT.productInfo, function(i){
				if(MPT.pid === MPT.productInfo[i].pid){
					index = MPT.productInfo[i].index;
				}
			});
			$('body').append('<div class="poster clearfix e_poster"><a href="javascript:;" class="poster-close e_poster_close">&#10005;</a><a href="' + productPoster[index].url + '" target="_blank"><img src="' + productPoster[index].imgurl + '" alt="' + productPoster[index].title + '"/></a></div>');
			var $poster = $('.e_poster'),
				$posterClose = $('.e_poster_close'),
				isLink = $poster.find('img').parent().attr('href');

			if(isLink === 'javascript:;' || isLink === ''){
				$poster.hide();
			}else{
				if(isPosterShow){
					$poster.show();
				}else{
					$poster.hide();
				}
			}
			$poster.click(function(){
				Utils.setCookie('isPosterShow', 0, 1);
				$poster.hide();
			});
			$posterClose.click(function(){
				$poster.hide();
				return false;
			});
		});
	}
});
