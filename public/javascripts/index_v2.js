var nub = 0,
    nub1 = 0,
    timel = null,
    t = 0,
    h = 0,
    timen;
lnub = $('.loop').children('li').length;
$('.loop-in').css('width', 182 * lnub);
$('.loop-in1').css('width', 182 * lnub);
for (var i = 0; i < lnub - 1; i++) {
    $('.span-li').append('<li></li>');
}
for (var i = 0; i < lnub; i++) {
    $('.loop-in').append('<div><h5>' + $('.loop').find('li a').eq(i).attr('title') + '</h5><h6>' + $('.loop').find('li img').eq(i).attr('alt') + '</h6></div>')
    $('.loop-in1').append('<div><h5>' + $('.loop').find('li a').eq(i).attr('title') + '</h5><h6>' + $('.loop').find('li img').eq(i).attr('alt') + '</h6></div>')
}
lnub1 = Math.ceil($('.news-ul').children('li').length / 2);
for (var i = 0; i < lnub1 - 1; i++) {
    $('.span-li1').append('<li></li>');
}
$('.loop').find('li').eq(0).css('display', 'block');
$('.loop-in').css('marginLeft', -182 * (lnub - 1));
$('.loop-in1').css('marginLeft', -182);

$('.loop').find('li').eq(1).stop(true, false).animate({'opacity': '0'}, 1000).animate({'filter': 'alpha(opacity=0)'});
timel = setInterval(function () {
    nub++;
    if (nub == lnub) {
        nub = 0;
    }
    t = nub - 1;
    if (t < 0) {
        t = lnub - 1;
    }
    h = nub + 1;
    if (h >= lnub) {
        h = 0;
    }
    $('.loop-in').css('marginLeft', -182 * t)
    $('.loop-in1').css('marginLeft', -182 * h)

    $('.loop').find('li').eq(nub).show().stop(true, false).animate({'opacity': '1'}, 1000).animate({'filter': 'alpha(opacity=100)'});
    $('.loop').find('li').eq(nub).siblings().stop(true, false).animate({'opacity': '0'}, 1000, function () {
        $('.loop').find('li').eq(nub).siblings().hide()
    }).animate({'filter': 'alpha(opacity=0)'}, 1000, function () {
        $('.loop').find('li').eq(nub).siblings().hide()
    });
    $('.span-li').find('li').eq(nub).addClass('li-click').siblings().removeClass('li-click');

}, 5000);
timen = setInterval(function () {
    nub1++;
    if (nub1 == lnub1) {
        nub1 = 0;
    }
    $('.news-ul').stop().animate({marginLeft: -720 * nub1}, 1000)
    $('.span-li1').find('li').eq(nub1).addClass('li-click1').siblings().removeClass('li-click1');
}, 5000);
$('.span-li').find('li').on('click', function () {
    var index = $(this).index();
    nub = index;
    $('.span-li').find('li').removeClass('li-click');
    $(this).addClass('li-click');
    $('.loop').find('li').eq(nub).show().stop(true, false).animate({'opacity': '1'}, 1000).animate({'filter': 'alpha(opacity=100)'});
    $('.loop').find('li').eq(nub).siblings().stop(true, false).animate({'opacity': '0'}, 1000, function () {
        $('.loop').find('li').eq(nub).siblings().hide()
    }).animate({'filter': 'alpha(opacity=0)'}, 1000, function () {
        $('.loop').find('li').eq(nub).siblings().hide()
    });

})
$('.span-li1').find('li').on('click', function () {
    var index1 = $(this).index();
    nub1 = index1;
    $('.span-li1').find('li').removeClass('li-click1');
    $(this).addClass('li-click1');
    $('.news-ul').stop().animate({marginLeft: -720 * nub1}, 1000)
})

$('.foot-ul li').hover(function () {
    $(this).find('a').animate({marginTop: 0}, 500)
}, function () {
    $(this).find('a').animate({marginTop: -101}, 500)
})
$('.next').hover(function () {
    $('.next-loop').show();
}, function () {
    $('.next-loop').hide();
})
$('.prev').hover(function () {
    $('.prev-loop').show();
}, function () {
    $('.prev-loop').hide();
})
$('.next,.prev').mousedown(function () {
    clearInterval(timel);
})
$('.next,.prev').mouseup(function () {
    timel = setInterval(function () {
        nub++;
        if (nub == lnub) {
            nub = 0;
        }
        t = nub - 1;
        if (t < 0) {
            t = lnub - 1;
        }
        h = nub + 1;
        if (h >= lnub) {
            h = 0;
        }
        $('.loop-in').css('marginLeft', -182 * t)
        $('.loop-in1').css('marginLeft', -182 * h)
        $('.loop').find('li').eq(nub).show().stop(true, false).animate({'opacity': '1'}, 1000).animate({'filter': 'alpha(opacity=100)'});
        $('.loop').find('li').eq(nub).siblings().stop(true, false).animate({'opacity': '0'}, 1000, function () {
            $('.loop').find('li').eq(nub).siblings().hide()
        }).animate({'filter': 'alpha(opacity=0)'}, 1000, function () {
            $('.loop').find('li').eq(nub).siblings().hide()
        });
        $('.span-li').find('li').eq(nub).addClass('li-click').siblings().removeClass('li-click');

    }, 5000);
})
//$('.span-li,.next,.prev').hover(function(){ 
//clearInterval(timel);
//},function(){
//	timel = setInterval(function() {
//	nub++;
//	if(nub == lnub) {
//		nub = 0;
//	}
////	$('.loop').find('li').eq(nub).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
//$('.loop').find('li').eq(nub).show().stop(true,false).animate({'opacity':'1'},1000).animate({'filter':'alpha(opacity=100)'});
//	$('.loop').find('li').eq(nub).siblings().stop(true,false).animate({'opacity':'0'},1000,function(){$('.loop').find('li').eq(nub).siblings().hide()}).animate({'filter':'alpha(opacity=0)'},1000,function(){$('.loop').find('li').eq(nub).siblings().hide()});
//
//	$('.span-li').find('li').eq(nub).addClass('li-click').siblings().removeClass('li-click');
//}, 5000);
//})
var screenW = document.body.clientWidth;
var imgLeft = parseInt((screenW - 1920) / 2);
if (imgLeft < -360) {
    imgLeft = -360
}
$('.loop li a img').css('marginLeft', imgLeft);
$(window).resize(function () {
    var screenW = document.body.clientWidth;
    var imgLeft = parseInt((screenW - 1920) / 2);
    if (imgLeft < -360) {
        imgLeft = -360
    }
    $('.loop li a img').css('marginLeft', imgLeft);
});
$('.loop-news').hover(function () {
    clearInterval(timen);
}, function () {
    timen = setInterval(function () {
        nub1++;
        if (nub1 == lnub1) {
            nub1 = 0;
        }
        $('.news-ul').stop().animate({marginLeft: -720 * nub1}, 1000)
        $('.span-li1').find('li').eq(nub1).addClass('li-click1').siblings().removeClass('li-click1');
    }, 5000);
})


var count = 0;
var flag = null;
function done() {
    count = 0;
}


$('.next').click(function () {
    if (count == 0) {
        count = 1;
        nub++;
        if (nub == lnub) {
            nub = 0;
        }
        t = nub - 1;
        if (t < 0) {
            t = lnub - 1;
        }
        h = nub + 1;
        if (h >= lnub) {
            h = 0;
        }
        $('.loop-in1').css('marginLeft', -182 * h)
        $('.loop-in').css('marginLeft', -182 * t)

        $('.loop').find('li').eq(nub).css('display', 'block');
        $('.loop').find('li').eq(nub).show().stop(true, false).animate({'opacity': '1'}, 1000).animate({'filter': 'alpha(opacity=100)'});
        $('.loop').find('li').eq(nub).siblings().stop(true, false).animate({'opacity': '0'}, 1000, function () {
            $('.loop').find('li').eq(nub).siblings().hide()
        }).animate({'filter': 'alpha(opacity=0)'}, 1000, function () {
            $('.loop').find('li').eq(nub).siblings().hide()
        });
        $('.span-li').find('li').eq(nub).addClass('li-click').siblings().removeClass('li-click');
        flag = setTimeout(done, 500);
    }


})
$('.prev').click(function () {
    if (count == 0) {
        count = 1;
        nub--;
        if (nub < 0) {
            nub = lnub - 1;
        }
        t = nub - 1;
        if (t < 0) {
            t = lnub - 1;
        }
        h = nub + 1;
        if (h >= lnub) {
            h = 0;
        }
        $('.loop-in1').css('marginLeft', -182 * h)
        $('.loop-in').css('marginLeft', -182 * t)
        $('.loop').find('li').eq(nub).show().stop(true, false).animate({'opacity': '1'}, 1000).animate({'filter': 'alpha(opacity=100)'});
        $('.loop').find('li').eq(nub).siblings().stop(true, false).animate({'opacity': '0'}, 1000, function () {
            $('.loop').find('li').eq(nub).siblings().hide()
        }).animate({'filter': 'alpha(opacity=0)'}, 1000, function () {
            $('.loop').find('li').eq(nub).siblings().hide()
        });
        $('.span-li').find('li').eq(nub).addClass('li-click').siblings().removeClass('li-click');
        flag = setInterval(done, 100);
    }
})

for (var i = 0; i < $('.news-ul').find('li').length; i++) {
    $('.news-ul').find('li a').eq(i).append('<div class="news-hide"><em class="out2"></em><span class="news-span1">' + $('.news-ul').find('li a').eq(i).attr('title') + '</span><span class="news-span2">' + $('.news-ul').find('li img').eq(i).attr('alt') + '</span><span class="news-bg"></span></div>')
//	<div class="news-hide"><em class="out1"></em><span><b>'+$('.news-ul').find('li a').eq(i).attr('title')+'</b><br />'+$('.news-ul').find('li img').eq(i).attr('alt')+'</span></div>')
}
$('.news-ul').find('li').hover(function () {
//	$('.news-ul').find('li a').append('<div class="news-hide"><em class="out1"></em><span><b>'+$(this).find('a').attr('title')+'</b><br />'+$(this).find('img').attr('alt')+'</span></div>')
    $(this).find('img').stop().animate({marginLeft: -10}, 300)
    $(this).find('.out2').stop().animate({opacity: 0}, 300)
    $(this).find('.news-span1').stop().animate({top: 40}, 300)
    $(this).find('.news-span2').stop().animate({top: 230}, 300)
    $(this).find('.news-bg').stop().animate({top: 200}, 300)

}, function () {
    $(this).find('img').stop().animate({marginLeft: 0}, 300)
    $(this).find('.out2').animate({opacity: 0.3}, 300)
    $(this).find('.news-span1').stop().animate({top: 130}, 300)
    $(this).find('.news-span2').stop().animate({top: 165}, 300)
    $(this).find('.news-bg').stop().animate({top: 300}, 300)

})

$('.game-ul').find('li').hover(function () {
    $(this).find('.game-hide').stop().animate({top: 0}, 500)
}, function () {
    $(this).find('.game-hide').stop().animate({top: -178}, 500)
})

/*var map = true;
$('.nav-map').click(function () {
    if (map) {
        $('.out').stop().animate({height: 560}, 500)
        map = false;
    } else {
        map = true;
        $('.out').stop().animate({height: 0}, 500)
    }

});*/


$('.to-hide').click(function () {
    map = true;
    $('.out').stop().animate({height: 0}, 500)

})

$('.select-out').hover(function () {
    $(this).find('.select-ul').attr('style', 'display: block;');
}, function () {
    $(this).find('.select-ul').attr('style', 'display: none;');
})

$('.select-ul1').on('click', 'li', function () {
    $('.select-ul1').attr('style', 'display: none;');
    $(this).parent().parent('.select-out').find('span').html($(this).html());
})
$('.select-ul2').on('click', 'li', function () {
    $('.select-ul2').attr('style', 'display: none;');
    $(this).parent().parent('.select-out').find('span').html($(this).html());
})
var numLi = Math.ceil($('.game-ul').find('li').length / 3);
$('.game-ul').css('height', 331 * numLi);

