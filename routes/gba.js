/**
 * Created by quanquan.sun on 2017/8/24.
 */
var express = require("express");
var router = express.Router();

//
router.post('/',function(req,res,next){
    var bizObj=[{id:1},{id:2},{id:3}];
    res.send({'errorCode':0,'bizObj':bizObj});
});

module.exports = router;