/**
 * Created by quanquan.sun on 2017/8/24.
 */
var express = require("express");
var router = express.Router();


/* 找回账号 */
router.get("/", function (req, res, next) {
    res.render('getBackAcc',{title:"找回账号"})
});
router.post('/',function(req,res,next){
    var bizObj=[{
        'question':'18896563273',
        'answer':'test'
    }];
    res.send({'errorCode':0,'bizObj':bizObj});
});

module.exports = router;