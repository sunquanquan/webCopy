/**
 * Created by quanquan.sun on 2017/8/24.
 */
var express = require("express");
var router = express.Router();

//充值金额列表
router.post('/',function(req,res,next){
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

module.exports = router;