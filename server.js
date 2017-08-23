var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var uuid = require('./tools/getUUID');

var index = require('./routes/index');
var login = require('./routes/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(session({
    secret: 'jiang',
    name: 'jane',
    resave: false,
    saveUninitialized: true
}));

//测试页面
app.get('/test',function(req,res,next){
    res.render('test');
});

app.use('/index', index);
app.use('/login', login);
//找回密码页面
app.get('/findPw',function(req,res,next){
    res.render('findPw',{title:"忘记密码"});
});
//找回密码
app.post('/findPw',function(req,res,next){
    var bizObj=[{
        'question':'18896563273',
        'answer':'test'
    }];
    res.send({'errorCode':0,'bizObj':bizObj});
});
app.post('/gencapid',function(req,res,next){
    res.send({'errorCode':0});
});
//弹窗登录页面
app.get('/ploginpage',function(req,res,next){
    res.render('pLoginPage',{title:"弹窗登录"})
});
//找回账号页面
app.get('/getbackacc',function(req,res,next){
    res.render('getBackAcc',{title:"找回账号"})
});
//账号锁定页面
app.get('/accountLock',function(req,res,next){
    res.render('accountLock', {title: "账号"})
});
//帮助说明页面
app.get('/faq',function(req,res,next){
    res.render('faq',{title:'帮助说明'});
});
//充值页面
app.get('/pay',function(req,res,next){
    res.render('pay1',{title:'充值'});
});
//客服中心
app.get('/customService',function(req,res,next){
    res.render('customService',{title:'客服中心'});
});
//充值接口
app.post('/pay',function(req,res,next){
    var bizObj={
        'lastSaved':{
            payType:1,
            serverCode:0,
            savedMoney:10,
            bankCode:'zfb',
            productId:1,
            gameZoneId:1,
            productName:1,
            gameZoneName:1
        }
    };
    res.send({'errorCode':0,'bizObj':bizObj});
});
//获取所有问题
app.post('/getAllFaqQuestion',function(req,res,next){
    var data = {
        id:1,
        question:"哦？",
        answer:"哦！"
    };
    var resBody1 = [{'绿岸安全令牌':[data,data,data]},{'账号保护':[data,data,data]}];
    var resBody2 = [{'充值方式':[data,data,data]},{'充值查询':[data,data,data]},{'充值比率':[data,data,data]},{'充值适用范围':[data,data,data]},{'充值到账':[data,data,data]},{'失误充值':[data,data,data]}];
    var resBody3 = [{'账号注册':[data,data,data]},{'账号使用':[data,data,data]},{'密码找回':[data,data,data]},{'账号设置':[data,data,data]},{'账号修改':[data,data,data]}];
    res.send({'安全保护':resBody1,'充值问题':resBody2,'账号问题':resBody3});
});
//游戏列表
app.post('/getProductList',function(req,res,next){
    var bizObj=[{id:1,name:111},{id:2,name:222},{id:3,name:3333}];
    res.send({'errorCode':0,'bizObj':bizObj});
});
//获取大区列表
app.post('/getzonelist',function(req,res,next){
    var bizObj=[{id:1,name:111},{id:2,name:222},{id:3,name:3333}];
    res.send({'errorCode':0,'bizObj':bizObj});
});
//选择充值金额
app.post('/getparvalue',function(req,res,next){
    var bizObj=[
        {moneyAmount:10,name:10},
        {moneyAmount:20,name:20},
        {moneyAmount:50,name:50},
        {moneyAmount:100,name:100},
        {moneyAmount:200,name:200},
        {moneyAmount:500,name:500},
        {moneyAmount:1000,name:1000},
        {moneyAmount:2000,name:2000},
        {moneyAmount:3000,name:3000},
        {moneyAmount:5000,name:5000}
    ];
    res.send({'errorCode':0,bizObj:bizObj});
});
//获取折扣价
app.post('/getdiscount',function(req,res,next){
    var bizObj=[{level:1},{level:2},{level:3}];
    res.send({'errorCode':0,'bizObj':bizObj});
});
//找回账号
app.post('/getbackacc',function(req,res,next){
    var bizObj=[{
        'question':'18896563273',
        'answer':'test'
    }];
    res.send({'errorCode':0,'bizObj':bizObj});
});

//验证账号
app.post('/ajaxValidAccountCaptcha',function(req,res,next){
    var url = req.url;
    var type = url.split('?type=')[1];
    console.log(url);
    console.log(type);
    var bizObj;
    if(type == 'mobile'){
        bizObj={
            'mobile':'18896563273',
            'emobile':'test'
        };
        res.send({'errorCode':0,'bizObj':bizObj});
    }else if(type == "email"){
        bizObj={
            'email':'393980327@qq.com',
            'eemail':'test'
        };
        res.send({'errorCode':0,'bizObj':bizObj});
    }else if(type == "sq"){
        bizObj=[{id:1},{id:2},{id:3}];
        res.send({'errorCode':0,'bizObj':bizObj});
    }else if(type = "lock"){
        var bizObj = {status:0};
        res.send({'errorCode':0,'bizObj':bizObj});
    }

});
//锁定账号
app.post('/lockAccount',function(req,res,next){
    var url = req.url;
    var params = req.body;
    res.send({'errorCode':0});
});
//发短信
app.post('/sendSmsCaptcha',function(req,res,next){
    var url = req.url;
    var params = req.body;
    console.log(url);
    console.log(params);
    res.send({'errorCode':0});
});
//找回账号 发短信
app.post('/sms',function(req,res,next){
    var url = req.url;
    var params = req.body;
    console.log(url);
    console.log(params);
    res.send({'errorCode':0});
});
//验证短信
app.post('/confirmsms',function(req,res,next){
    var url = req.url;
    var params = req.body;
    console.log(url);
    console.log(params);
    res.send({'errorCode':0});
});
app.post('/gba',function(req,res,next){
    var url = req.url;
    var params = req.body;
    var bizObj=[{id:1},{id:2},{id:3}];
    console.log(url);
    console.log(params);
    res.send({'errorCode':0,'bizObj':bizObj});
});
//验证短信
app.post('/validSmsCaptcha',function(req,res,next){
    var url = req.url;
    var params = req.body;

    console.log(url);
    console.log(params);
    res.send({'errorCode':0});
});
//发送邮件
app.post('/sendMail',function(req,res,next){
    var url = req.url;
    var params = req.body;
    console.log(url);
    console.log(params);
    res.send({'errorCode':0});
});
//密保验证
app.post('/validSecurityQuestion',function(req,res,next){
    var url = req.url;
    var params = req.body;
    console.log(url);
    console.log(params);
    res.send({'errorCode':0});
});
//跟新密码
app.use('/updatePassword',function(req,res,next){
    var url = req.url;
    var params = req.body;
    console.log(url);
    console.log(params);
    res.send({'errorCode':0});
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        console.log(err);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
