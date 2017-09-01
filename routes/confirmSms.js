/**
 * Created by quanquan.sun on 2017/8/24.
 */
var express = require("express");
var router = express.Router();

//验证短信
router.post('/',function(req,res,next){
    res.send({'errorCode':0});
});

module.exports = router;