/**
 * Created by quanquan.sun on 2017/8/25.
 */
var express = require("express");
var router = express.Router();


/* 登录成功 */
router.get('/',function(req,res,next){
    //导航栏
    var nav = [{"href": "#", "title": "首页"}, {"href": "#", "title": "账号中心"}, {"href": "#", "title": "充值中心"}, {"href": "#", "title": "关于初度"}, {"href": "#", "title": "客服中心"}];
    var webMap = [[{"href": "#", "title": "权御天下"}, {"href": "#", "title": "天之禁"}, {"href": "#", "title": "醉逍遥"}, {"href": "#", "title": "新蜀门"}, {"href": "#", "title": "守护神之觉醒"}], [{
        "href": "#",
        "title": "注册账号"
    }, {"href": "#", "title": "账号中心"}, {"href": "#", "title": "客服中心"}, {"href": "#", "title": "充值中心"}, {"href": "#", "title": "家长监控"}], [{"href": "#", "title": "修改密码"}, {
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
    var newGame = [];
    var news = [{"href": "#", "title": "【敬请期待】", "word": "【敬请期待】", "date": "03/30"}];
    var phone = ["0512-68310112"];
    var email = ["3255258810@qq.com"];

    //res.render('index', {nav: nav, webMap: webMap, banner: banner, tip: tip, news: news, newGame: newGame, phone: phone, email: email});

    res.redirect('/findPw');
});

module.exports = router;