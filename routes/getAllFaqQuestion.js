/**
 * Created by quanquan.sun on 2017/8/24.
 */
var express = require("express");
var router = express.Router();

//获取所有问题
router.post('/',function(req,res,next){
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

module.exports = router;