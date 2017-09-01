/**
 * Created by quanquan.sun on 2017/8/24.
 */
var express = require("express");
var router = express.Router();


/* 客服中心 */
router.get("/", function (req, res, next) {
    res.render('customService',{title:'客服中心'});
});

module.exports = router;