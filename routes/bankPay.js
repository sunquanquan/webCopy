/**
 * Created by quanquan.sun on 2017/8/24.
 */
var express = require("express");
var router = express.Router();

//银行充值接口
router.post('/',function(req,res,next){
    var bizObj = {
        payUrl:'http://',
        orderId:'dafsdfadf'
    };
    res.send({'errorCode':0,'bizObj':bizObj});
});

module.exports = router;