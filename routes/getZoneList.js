/**
 * Created by quanquan.sun on 2017/8/24.
 */
var express = require("express");
var router = express.Router();

//获取游戏大区列表
router.post('/',function(req,res,next){
    var bizObj=[{id:1,name:111},{id:2,name:222},{id:3,name:3333}];
    res.send({'errorCode':0,'bizObj':bizObj});
});

module.exports = router;