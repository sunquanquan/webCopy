/**
 * Created by quanquan.sun on 2017/8/8.
 */
var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');

var getUUID = function getUUID() {
    return uuid.v4().substring(0, 8) + uuid.v4().substring(9, 13) + uuid.v4().substring(14, 18) + uuid.v4().substring(19, 23) + uuid.v4().substring(24);//随机生成uuid
};

module.exports = getUUID;