/**
 * Created by quanquan.sun on 2017/7/24.
 */
var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var moment = require('moment');
var pool = require('../tools/getPool');

router.post('/',function(req,res){
    var params = req.body;
    var userName = params.identityId;
    var password = params.credential;
    console.log(userName);
    console.log(password);

    var md5 = crypto.createHash('md5');
    password = md5.update(password).digest('base64');
    console.log(password);

    var json;
    var sql = "select password from test_user where name = '"+ userName+"';";
    pool.getConnection(function(err,client){
        client.query(sql,function(err,result){
            if(result!=undefined && result.length>0){
                var passKey= result[0].password;
                if(password==passKey){
                    //登录成功
                    json = {
                        result:"success"
                    };
                    res.send(json);
                    client.release();
                }else{
                    json={
                        'result':'password'
                    };
                    res.send(json);
                    client.release();
                }
            }else{
                json={
                    'result':'user'
                };
                res.send(json);
                client.release();
            }
        })
    })
});



module.exports = router;