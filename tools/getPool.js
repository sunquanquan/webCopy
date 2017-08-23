/**
 * Created by quanquan.sun on 2017/7/25.
 */
var mysql = require('mysql');
var fs = require('fs');

//DB连接池获取
var gameConfig = JSON.parse(fs.readFileSync('./config/config.json', "utf8"));
var pool = mysql.createPool(gameConfig.mysqlOptions);
var getConnection = function (callback){
    pool.getConnection(function (err, connection) {
        if(err) console.log("conncetion err",err);
        // 回调处理逻辑
        callback(err,connection);
    });
};

exports.getConnection = getConnection;