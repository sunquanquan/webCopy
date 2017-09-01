/**
 * Created by quanquan.sun on 2017/8/24.
 */
var express = require("express");
var router = express.Router();


/* 账号锁定 */
router.get("/", function (req, res, next) {
    res.render('accountLock', {title: "账号锁定"})
});
router.post('/',function(req,res,next){
    var url = req.url;
    var params = req.body;
    res.send({'errorCode':0});
});

module.exports = router;