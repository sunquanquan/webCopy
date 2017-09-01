/**
 * Created by quanquan.sun on 2017/8/24.
 */
var express = require("express");
var router = express.Router();


/* 弹窗登录 */
router.get("/", function (req, res, next) {
    res.render('pLoginPage',{title:"弹窗登录"})
});

module.exports = router;