/**
 * Created by quanquan.sun on 2017/8/24.
 */
var express = require("express");
var router = express.Router();


/* 充值 */
router.get("/", function (req, res, next) {
    res.render('pay1',{title:'充值'});
});
router.post('/',function(req,res,next){
    var bizObj={
        'lastSaved':{
            payType:1,
            serverCode:0,
            savedMoney:10,
            bankCode:'zfb',
            productId:1,
            gameZoneId:1,
            productName:1,
            gameZoneName:1
        }
    };
    res.send({'errorCode':0,'bizObj':bizObj});
});

module.exports = router;