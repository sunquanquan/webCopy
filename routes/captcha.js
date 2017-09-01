var express = require("express");
var router = express.Router();
var captchapng = require('captchapng');

/* GET home page. */
router.get("/", function (req, res, next) {
    var code = '0123456789';
    var length = 4;
    var randomCode = '';
    for (var i = 0; i < length; i++) {
        randomCode += code[parseInt(Math.random() * 1000) % code.length];
    }
    req.session.verifycode = randomCode;
    // 输出图片
    var p = new captchapng(80,30,parseInt(randomCode)); // width,height,numeric captcha
    p.color(255, 255, 255, 0);  // First color: background (red, green, blue, alpha)
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)
    var img = p.getBase64();
    var imgbase64 = new Buffer(img,'base64');
    res.writeHead(200, {
        'Content-Type': 'image/png'
    });
    res.end(imgbase64);
    /*var p = new captchapng(80,30,parseInt(Math.random()*9000+1000)); // width,height,numeric captchav
    p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha)
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)
    var img = p.getBase64();
    var imgbase64 = new Buffer(img,'base64');
    res.writeHead(200, {
        'Content-Type': 'image/png'
    });
    res.end(imgbase64);*/
});
module.exports = router;
