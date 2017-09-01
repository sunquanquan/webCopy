/**
 * Created by quanquan.sun on 2017/8/30.
 */
var express = require("express");
var router = express.Router();


/* 登录成功 */
router.get("/", function (req, res, next) {
    res.render('passport',{title:"登录成功"})
});

module.exports = router;