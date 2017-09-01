var express = require("express");
var router = express.Router();
var jade = require('jade');


/* GET home page. */
router.get("/", function (req, res, next) {
    res.render('register');
    /*var fn = jade.compileFile('./views/index.jade');
    var html = fn({nav: nav, webMap: webMap, banner: banner, tip: tip, news: news, newGame: newGame, phone: phone, email: email});

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(html);
    res.end();*/

});
module.exports = router;
