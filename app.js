var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session  = require('express-session');

var routes = require('./routes/index');
var register = require('./routes/register');
var captcha = require('./routes/captcha');
var check = require('./routes/check');
var reg = require('./routes/reg');

var login = require('./routes/login');
var ajaxValidAccountCaptcha = require('./routes/ajaxValidAccountCaptcha');
var bankPay = require('./routes/bankPay');
var confirmSms = require('./routes/confirmSms');
var customService = require('./routes/customService');
var faq = require('./routes/faq');
var findPw = require('./routes/findPw');
var gba = require('./routes/gba');
var genCapId = require('./routes/genCapId');
var getAllFaqQuestion = require('./routes/getAllFaqQuestion');
var getBackAcc = require('./routes/getBackAcc');
var getDiscount = require('./routes/getDiscount');
var getParValue = require('./routes/getParValue');
var getProductList = require('./routes/getProductList');
var getZoneList = require('./routes/getZoneList');
var lockAccount = require('./routes/lockAccount');
var pay = require('./routes/pay');
var pLoginPage = require('./routes/pLoginPage');
var sendMail = require('./routes/sendMail');
var sendSmsCaptcha = require('./routes/sendSmsCaptcha');
var sms = require('./routes/sms');
var updatePassword = require('./routes/updatePassword');
var validSecurityQuestion = require('./routes/validSecurityQuestion');
var validSmsCaptcha = require('./routes/validSmsCaptcha');
var getAccData = require('./routes/getAccData');
var loginBack = require('./routes/loginBack');
var passport = require('./routes/passport');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.use('/', routes);
app.use('/register', register);
app.use('/captcha', captcha);
app.use('/reg/account/check', check);
app.use('/reg/account/reg', reg);

app.use('/login', login);
app.use('/ajaxvalidaccountcaptcha', ajaxValidAccountCaptcha);
app.use('/bankpay', bankPay);
app.use('/confirmsms', confirmSms);
app.use('/customservice', customService);
app.use('/faq', faq);
app.use('/findpw', findPw);
app.use('/gba', gba);
app.use('/gencapid', genCapId);
app.use('/getallfaqquestion', getAllFaqQuestion);
app.use('/getbackacc', getBackAcc);
app.use('/getdiscount', getDiscount);
app.use('/getparvalue', getParValue);
app.use('/getproductlist', getProductList);
app.use('/getzonelist', getZoneList);
app.use('/lockaccount', lockAccount);
app.use('/pay', pay);
app.use('/ploginpage', pLoginPage);
app.use('/sendmail', sendMail);
app.use('/sendsmscaptcha', sendSmsCaptcha);
app.use('/sms', sms);
app.use('/updatepassword', updatePassword);
app.use('/validsecurityquestion', validSecurityQuestion);
app.use('/validsmscaptcha', validSmsCaptcha);
app.use('/getaccdata', getAccData);
app.use('/loginback', loginBack);
app.use('/passport', passport);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
