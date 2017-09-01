/**
 * Created by quanquan.sun on 2017/8/24.
 */
var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var pool = require('../tools/getPool');

//登录
router.post('/',function(req,res){
    var params = JSON.parse(req.body.s);
    var account = params.identityId;
    var password = params.credential;
    var json;

    var md5 = crypto.createHash('md5');
    password = md5.update(password).digest('base64');

    var sql = "select password from user where account = '"+ account+"';";
    pool.getConnection(function(err,client){
        client.query(sql,function(err,result){
            if(result!=undefined && result.length>0){
                var passKey= result[0].password;
                if(password==passKey){
                    //登录成功
                    json = {
                        errorCode:0,
                        bizObj:'http://www.baidu.com'
                    };
                    res.send(json);
                    client.release();
                }else{
                    json={
                        'errorCode':30101
                    };
                    res.send(json);
                    client.release();
                }
            }else{
                json={
                    'errorCode':30100
                };
                res.send(json);
                client.release();
            }
        })
    })
});



module.exports = router;