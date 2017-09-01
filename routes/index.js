var express = require("express");
var router = express.Router();
var jade = require('jade');


/* GET home page. */
router.get("/", function (req, res, next) {
    //导航栏
    var nav = [{"href": "#", "title": "首页"}, {"href": "#", "title": "账号中心"}, {"href": "/pay", "title": "充值中心"}, {"href": "#", "title": "关于初度"}, {"href": "#", "title": "客服中心"}];
    var webMap = [[{"href": "#", "title": "权御天下"}, {"href": "#", "title": "天之禁"}, {"href": "#", "title": "醉逍遥"}, {"href": "#", "title": "新蜀门"}, {"href": "#", "title": "守护神之觉醒"}], [{
        "href": "#",
        "title": "注册账号"
    }, {"href": "#", "title": "账号中心"}, {"href": "#", "title": "客服中心"}, {"href": "/pay", "title": "充值中心"}, {"href": "#", "title": "家长监控"}], [{"href": "#", "title": "修改密码"}, {
        "href": "#",
        "title": "找回密码"
    }, {"href": "#", "title": "找回账号"}, {"href": "#", "title": "账号锁定"}, {"href": "#", "title": "账号解锁"}, {"href": "#", "title": "记录查询"}], [{"href": "#", "title": "安全令牌"}, {
        "href": "#",
        "title": "安全手机"
    }, {"href": "#", "title": "安全邮箱"}, {"href": "#", "title": "密保问题"}], [{"href": "#", "title": "关于初度"}, {"href": "#", "title": "企业文化"}, {"href": "#", "title": "产品介绍"}, {
        "href": "#",
        "title": "商务洽谈"
    }, {"href": "#", "title": "招聘动态"}]];

    var banner = [{"href": "#", "title": "《敬请期待》", "src": "./images/banner1.jpg", "alt": "敬请期待"}];

    var tip = [{"href": "#", "title": "《敬请期待》", "src": "./images/tips.jpg", "alt": "敬请期待"}, {
        "href": "#",
        "title": "敬请期待",
        "src": "./images/tips1.jpg",
        "alt": "敬请期待"
    }];
    var news = [{"href": "#", "title": "【敬请期待】", "word": "【敬请期待】", "date": "03/30"}];
    var newGame = [/*{
        "img": "./images/10_20170111021900519.jpg",
        "ewm": "./images/11_20170110043614283.jpg",
        "reg": "#",
        "download": "#",
        "title": "MMORPG国战",
        "title1": "《权御天下》",
        "title2": "3D无锁定幻想国战网游，等你来战！",
        "href": "#"
    }, {
        "img": "./images/12_20170111021829614.jpg",
        "ewm": "./images/13_20170111020538897.jpg",
        "reg": "#",
        "download": "#",
        "title": "MMO奇幻PK网游",
        "title1": "《守护神之觉醒》",
        "title2": "2017开年巨作西方正统奇幻网游！",
        "href": "#"
    }, {
        "img": "./images/14_20170111021926336.jpg",
        "ewm": "./images/15_20170110043316947.jpg",
        "reg": "#",
        "download": "#",
        "title": "2.8D玄幻武侠",
        "title1": "《天之禁》",
        "title2": "无禁式MMORPG玄幻武侠大作，庆典公测邀您再战江湖。",
        "href": "#"
    }, {
        "img": "./images/16_20170111022051742.jpg",
        "ewm": "./images/17_20170110044150624.jpg",
        "reg": "#",
        "download": "#",
        "title": "2.8D武侠MMO",
        "title1": "《新蜀门》",
        "title2": "永恒经典之作《新蜀门》，与兄弟共续江湖情缘。",
        "href": "#"
    }, {
        "img": "./images/18_20170111022110487.jpg",
        "ewm": "./images/19_20170110043905185.jpg",
        "reg": "#",
        "download": "#",
        "title": "2.8D叛逆武侠",
        "title1": "《醉逍遥》",
        "title2": "《醉逍遥》重新归来2.8D叛逆武侠，非玩不可。",
        "href": "#"
    }*/];
    //var phone = ["权御 021-60561814", "天之禁 021-60561813", "新蜀门 021-60561810", "醉逍遥 021-60561811"];
    //var email = ["权御 qytxkefu@iwgame.com", "天之禁 tzjkefu@iwgame.com", "新蜀门 kefu@shumenol.com", "醉逍遥 kf@zuixiaoyao.com"];
    var phone = ["0512-68310112"];
    var email = ["3255258810@qq.com"];

    //res.render('index', {nav: nav, webMap: webMap, banner: banner, tip: tip, news: news, newGame: newGame, phone: phone, email: email});
    var fn = jade.compileFile('./views/index.jade');
    var html = fn({nav: nav, webMap: webMap, banner: banner, tip: tip, news: news, newGame: newGame, phone: phone, email: email});

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(html);
    res.end();
    //游戏
    /*each item in newGame
    li
    img(src=item.img).game-img1
    div.game-hide
    em.out1
    div.er
    img(src=item.ewm)
    span 微信公众号
    div.game-hide-right
    span #{item.title}
    a(href=item.reg).game-reg 账号注册
    a(href=item.download).game-down 游戏下载
    div.game-up
    b #{item.title1}
    br
    span #{item.title2}
    br
    a(href=item.href).go-net*/
});

module.exports = router;
