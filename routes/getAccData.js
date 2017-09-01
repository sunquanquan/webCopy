/**
 * Created by quanquan.sun on 2017/8/24.
 */
var express = require("express");
var router = express.Router();


/* 是否登录 */
router.post('/',function(req,res,next){
    var bizObj = {
        completeIdCard:0
    };
    res.send({'errorCode':30132,'bizObj':bizObj});
});

module.exports = router;