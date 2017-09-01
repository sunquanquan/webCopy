var express = require("express");
var router = express.Router();
var jade = require('jade');


/* GET home page. */
router.post("/", function (req, res, next) {
    var params = req.body;
    var account = params.account;
    console.log('check');
    console.log(params);
    res.json({'errorCode':30100});//账号可以使用
    //res.json({'errorCode':0});//账号已经有人使用了，需要找回账号？
});
module.exports = router;
