/**
 * Created by quanquan.sun on 2017/8/24.
 */
var express = require("express");
var router = express.Router();

//折扣价
router.post('/',function(req,res,next){
    var bizObj=[{level:1},{level:2},{level:3}];
    res.send({'errorCode':0,'bizObj':bizObj});
});

module.exports = router;