/**
 * Created by quanquan.sun on 2017/8/24.
 */
var express = require("express");
var router = express.Router();


/* 帮助说明 */
router.get("/", function (req, res, next) {
    res.render('faq',{title:'帮助说明'});
});

module.exports = router;