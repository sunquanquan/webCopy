/**
 * Created by quanquan.sun on 2017/8/24.
 */
var express = require("express");
var router = express.Router();

//验证账号
router.post('/',function(req,res,next){
    var url = req.url;
    var type = url.split('?type=')[1];
    console.log(url);
    console.log(type);
    var bizObj;
    if(type == 'mobile'){
        bizObj={
            'mobile':'18896563273',
            'emobile':'test'
        };
        res.send({'errorCode':0,'bizObj':bizObj});
    }else if(type == "email"){
        bizObj={
            'email':'393980327@qq.com',
            'eemail':'test'
        };
        res.send({'errorCode':0,'bizObj':bizObj});
    }else if(type == "sq"){
        bizObj=[{id:1},{id:2},{id:3}];
        res.send({'errorCode':0,'bizObj':bizObj});
    }else if(type = "lock"){
        var bizObj = {status:0};
        res.send({'errorCode':0,'bizObj':bizObj});
    }
});

module.exports = router;