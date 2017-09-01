var express = require("express");
var router = express.Router();
var crypto = require('crypto');
var moment = require('moment');
var pool = require('../tools/getPool');
var getUUID = require('../tools/getUUID');


/* 注册 */
router.post("/", function (req, res, next) {
    if(req.body.s!=undefined){
        var params = JSON.parse(req.body.s);
        if (req.session.verifycode != undefined) {
            if (req.session.verifycode == params.captcha) {
                var nowDate = moment().format('YYYY-MM-DD HH:mm:ss');
                var md5 = crypto.createHash('md5');
                var credential = md5.update(params.credential).digest('hex');

                var insertSql;
                if(params.accountType == 'PERSONALITY'){
                    insertSql = 'insert into user(uid,account,password,name,idCardNumber,createDate) values("'+getUUID()+'","'+params.identityId+'","'+credential+'","'+params.fullname+'","'+params.idcardNumber+'","'+nowDate+'");';
                }
                pool.getConnection(function(err,client){
                    client.query(insertSql,function(err,result){
                        if(err) {
                            res.json({'bizObj': 1, 'errorCode': 1, 'errorMsg': '注册失败，稍后请重试'});
                            client.release();
                        }else{
                            res.json({'bizObj': 1, 'errorCode': 0, 'errorMsg': '成功'});
                            client.release();
                        }
                    })
                })
            } else {
                res.json({'bizObj': 1, 'errorCode': 30408, 'errorMsg': '验证码不对'});
            }
        } else {
            res.json({'bizObj': 1, 'errorCode': 30407, 'errorMsg': '验证码已失效，请重新输入！'});
        }
    }else{
        res.json({'bizObj': 1, 'errorCode': 1, 'errorMsg': '注册失败，稍后请重试'});
    }
});
module.exports = router;
