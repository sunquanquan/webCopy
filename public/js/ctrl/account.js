MPT.addAction('account', function (elm) {
    console.log("3333333333");
    var url = Utils.getUrl('cur');
    console.log(url);
    var box = $('.account_con');
    var leftnav_box = $('.leftNav');
    var accountR = $('.account_r');
    var pos = null;
    leftnav_box.html(MPT.getTmpl('t_leftnav', MPT.Config['accData']));
    var leftbox = $('.leftNav_list_con');
    var accrTip = $('.account-rightTip');
    var accountMbox = $('.account-menu_box');
    var accountMstep = $('.account-menu_step');
    $('.list_mess').each(function () {
        $(this).mouseover(function () {
            $(this).find('.list_mess_content').show();
        });
        $(this).mouseout(function () {
            $(this).find('.list_mess_content').hide();
        });
    });
    $('.list_mess_content li').each(function () {
        $(this).hover(function () {
            $(this).addClass('cur');
        }, function () {
            $(this).removeClass('cur');
        })
    });
    $('.list_mess_content li').each(function () {
        $(this).click(function () {
            $(this).parents('.list_mess').find('span').text($(this).html());
            $(this).parent().hide();
        });
    });
    getFAQ('mmzh');
    //找回密码
    switch (url) {
        case 'mobile':
            accrTip.html(MPT.getTmpl('t_rightInner', {'curpos': [{'list': '账号问题'}, {'list': '找回密码'}]}));
            pos = {'col': 2, 'pos': 2};
            accountMbox.html(MPT.getTmpl('t_findpw_menu', {'curStatus': 'mobile'}));
            accountMstep.html(MPT.getTmpl('t_findpw_step', {'curStatus': 'mobile', 'curStep': 1}));
            //getNewCaptcha('findpwCaptcha');
            findPwSubmit('mobile');
            break;
        case 'email':
            pos = {'col': 2, 'pos': 2};
            if (Utils.getUrl('step') == 3) {
                var _key = Utils.getUrl('key');
                $.ajax({
                    type: 'post',
                    url: MPT.Config['req']['keyValid'],
                    data: 'key=' + _key + '&pid=' + MPT.pid,
                    error: function () {
                        popupAlert('校验key值失败！');
                        Utils.toTargetView(MPT.Config['url']['cs']);
                    },
                    success: function (result) {
                        result = $.parseJSON(result);
                        if (result.errorCode == MPT.Config['result']['ok']) {
                            accrTip.html(MPT.getTmpl('t_rightInner', {'curpos': [{'list': '账号问题'}, {'list': '找回密码'}]}));
                            getPasswordForm('email', _key);
                        } else {
                            Utils.toTargetView(MPT.Config['url']['cs']);
                        }
                    }
                });
            } else {
                $('.system_tip p').eq(1).text('此项适合已绑定安全邮箱的用户使用。');
                accrTip.html(MPT.getTmpl('t_rightInner', {'curpos': [{'list': '账号问题'}, {'list': '找回密码'}]}));
                accountMbox.html(MPT.getTmpl('t_findpw_menu', {'curStatus': 'email'}));
                accountMstep.html(MPT.getTmpl('t_findpw_step', {'curStatus': 'email', 'curStep': 1}));
                //getNewCaptcha('findpwCaptcha');
                findPwSubmit('email');
            }
            break;
        case 'sq':
            accrTip.html(MPT.getTmpl('t_rightInner', {'curpos': [{'list': '账号问题'}, {'list': '找回密码'}]}));
            pos = {'col': 2, 'pos': 2};
            $('.system_tip p').eq(1).text('此项适合已绑定密保问题的用户使用。');
            accountMbox.html(MPT.getTmpl('t_findpw_menu', {'curStatus': 'sq'}));
            accountMstep.html(MPT.getTmpl('t_findpw_step', {'curStatus': 'sq', 'curStep': 1}));
            //getNewCaptcha('findpwCaptcha');
            findPwSubmit('sq');
            break;
        case 'ss':
            accrTip.html(MPT.getTmpl('t_rightInner', {'curpos': [{'list': '账号问题'}, {'list': '找回密码'}]}));
            pos = {'col': 2, 'pos': 2};
            accountMbox.html(MPT.getTmpl('t_findpw_menu', {'curStatus': 'ss'}));
            $('.e_findpw_content').html(MPT.getTmpl('t_findpw_ss'));
            break;
        default:
            accrTip.html(MPT.getTmpl('t_rightInner', {'curpos': [{'list': '账号问题'}, {'list': '找回密码'}]}));
            pos = {'col': 2, 'pos': 2};
            accountMbox.html(MPT.getTmpl('t_findpw_menu', {'curStatus': 'mobile'}));
            accountMstep.html(MPT.getTmpl('t_findpw_step', {'curStatus': 'mobile', 'curStep': 1}));
            //getNewCaptcha('findpwCaptcha');
            findPwSubmit('mobile');
            break;
    }
    leftbox.eq(pos.col - 1).show().find('li').eq(pos.pos - 1).addClass('curimp');
    leftnav();
});
MPT.addAction('emailExpired', function (elm) {
    getAccdata();
    var box = $('.account_con');
    var leftnav_box = $('.leftNav');
    var accountR = $('.account_r');
    var pos = null;
    leftnav_box.html(MPT.getTmpl('t_leftnav', MPT.Config['accData']));
    var leftbox = $('.leftNav_list_con');
    var accrTip = $('.account-rightTip');
    var accountMbox = $('.account-menu_box');
    getFAQ('mmzh');
    accrTip.html(MPT.getTmpl('t_rightInner', {'curpos': [{'list': '账号问题'}, {'list': '找回密码'}]}));
    pos = {'col': 2, 'pos': 1};
    accountMbox.html(MPT.getTmpl('t_findpw_menu', {'curStatus': 'email'}));
    leftbox.eq(pos.col - 1).show().find('li').eq(pos.pos - 1).addClass('curimp');
    leftnav();
});
//找回密码-账号验证码验证提交
function findPwSubmit(_curStatus) {
    var _findpwStep = $('.account-menu_step');
    var _findpwContent = $('.e_findpw_content');
    var _submit = $('.e_submit');
    _submit.removeAttr('disabled');
    $('.e_findpw_form').attr('action', MPT.Config['req']['check'] + '?type=' + _curStatus).Validform({
        tiptype: 2,
        ajaxPost: true,
        beforeSubmit: function () {
            _submit.prop('disabled', true);
            $.Hidemsg();
        },
        callback: function (result) {
            console.log("result:       "+JSON.stringify(result));
            $.Hidemsg();
            $('.e_account_tip,.e_captcha_tip').html('');
            _submit.prop('disabled', false);
            switch (result.errorCode) {
                case MPT.Config['result']['ok']:
                    _findpwStep.html(MPT.getTmpl('t_findpw_step', {'curStatus': _curStatus, 'curStep': 2}));
                    switch (_curStatus) {
                        case 'mobile':
                            var _username = $('input[name=username]')[0].value;
                            var _mobile = result.bizObj.mobile;
                            var _emobile = result.bizObj.emobile;
                            _findpwContent.html(MPT.getTmpl('t_account_mobile_bind', {
                                'mobile': _mobile,
                                'emobile': _emobile,
                                'account': _username,
                                'curStatus': 'findpw'
                            }));
                            $('.e_sendsms').click(function () {
                                sendSms(_mobile, 'pw', _username);
                            });
                            findPwValid(_curStatus);
                            break;
                        case 'email':
                            var _username = $('input[name=username]')[0].value;
                            var _email = result.bizObj.email;
                            var _eemail = result.bizObj.eemail;
                            var _emailUrl = _email.substring(_email.indexOf('@') + 1);
                            if (_emailUrl == 'gmail.com') {
                                _emailUrl = 'https://mail.google.com/';
                            } else {
                                _emailUrl = 'http://mail.' + _emailUrl + '/';
                            }
                            _findpwContent.html(MPT.getTmpl('t_findpw_email', {
                                'eemail': _eemail,
                                'emailUrl': _emailUrl
                            }));
                            $('.e_email_send').click(function () {
                                sendEmail(_email, _username);
                            });
                            break;
                        case 'sq':
                            var _username = $('input[name=username]')[0].value;
                            var _q1 = result.bizObj[0].id;
                            var _q2 = result.bizObj[1].id;
                            var _q3 = result.bizObj[2].id;
                            _findpwContent.html(MPT.getTmpl('t_findpw_sq', {
                                'username': _username,
                                'q1': _q1,
                                'q2': _q2,
                                'q3': _q3
                            }));
                            findPwValid(_curStatus);
                            break;
                        default:
                            $('.e_account_content').html('<h3 style="color:#f00;font-size:18px;line-height:100px;text-align:center;">页面加载错误！</h3>');
                    }
                    break;
                case MPT.Config['result']['notExist'][0]:
                    $('.e_account_tip').html('<span class="Validform_checktip Validform_wrong">' + MPT.Config['result']['notExist'][1] + '</span>');
                    //getNewCaptcha('findpwCaptcha');
                    break;
                case MPT.Config['result']['captchaExpired'][0]:
                    $('.e_captcha_tip').html('<span class="Validform_checktip Validform_wrong">' + MPT.Config['result']['captchaExpired'][1] + '</span>');
                    //getNewCaptcha('findpwCaptcha');
                    break;
                case MPT.Config['result']['captchaError'][0]:
                    $('.e_captcha_tip').html('<span class="Validform_checktip Validform_wrong">' + MPT.Config['result']['captchaError'][1] + '</span>');
                    break;
                case MPT.Config['result']['unbindMobile'][0]:
                    $('.e_account_tip').html('<span class="Validform_checktip Validform_wrong">' + MPT.Config['result']['unbindMobile'][1] + '</span>');
                    break;
                case MPT.Config['result']['unbindEmail'][0]:
                    $('.e_account_tip').html('<span class="Validform_checktip Validform_wrong">' + MPT.Config['result']['unbindEmail'][1] + '</span>');
                    break;
                case MPT.Config['result']['unbindSq'][0]:
                    $('.e_account_tip').html('<span class="Validform_checktip Validform_wrong">' + MPT.Config['result']['unbindSq'][1] + '</span>');
                    break;
                default:
                    popupAlert('提交失败，失败原因：内部错误！');
                    //getNewCaptcha('findpwCaptcha');
            }
        }
    });
    //$.Hidemsg();
}
//找回密码-手机和密保问题验证
function findPwValid(_curStatus) {
    console.log('findPwVaild..............');
    console.log(_curStatus);
    console.log(MPT.Config['req']['validSmsCaptcha']);
    console.log(_curStatus);
    switch (_curStatus) {
        case 'mobile':
            var _submit = $('.e_account_submit');
            $('.e_account_form').attr('action', MPT.Config['req']['validSmsCaptcha']).Validform({
                tiptype: 2,
                ajaxPost: true,
                beforeSubmit: function () {
                    $.Hidemsg();
                    _submit.prop('disabled', true);
                },
                callback: function (result) {
                    console.log('findPwVaild:       '+result);
                    $.Hidemsg();
                    switch (result.errorCode) {
                        case MPT.Config['result']['ok']:
                            getPasswordForm(_curStatus, result.bizObj);
                            break;
                        case MPT.Config['result']['smsCaptchaError'][0]:
                            $('.e_account_tip').html('<span class="Validform_checktip Validform_wrong">' + MPT.Config['result']['smsCaptchaError'][1] + '</span>');
                            _submit.prop('disabled', false);
                            break;
                        default:
                            popupAlert('提交失败，失败原因：内部错误');
                            _submit.prop('disabled', false);
                    }
                }
            });
            $.Hidemsg();
            break;
        case 'sq':
            var _submit = $('.e_findpw_submit');
            _submit.click(function () {
                _submit.prop('disabled', true);
                $.ajax({
                    type: 'post',
                    url: MPT.Config['req']['validSecurityQuestion'],
                    data: $('.e_account_form').serialize() + '&pid=' + MPT.pid,
                    error: function () {
                        popupAlert('密保问题验证失败！');
                        _submit.prop('disabled', false);
                    },
                    success: function (result) {
                        console.log(result);
                        //result = $.parseJSON(result);
                        switch (result.errorCode) {
                            case MPT.Config['result']['ok']:
                                getPasswordForm(_curStatus, result.bizObj);
                                _submit.prop('disabled', false);
                                break;
                            case MPT.Config['result']['sqError'][0]:
                                var _findPwTip = $('.e_findpw_tip');
                                for (var i = 0; i < _findPwTip.length; i++) {
                                    _findPwTip.eq(i).html('<span class="Validform_checktip Validform_wrong">答案与之前设置的不符</span>');
                                }
                                break;
                            default:
                                popupAlert('提交失败，失败原因：内部错误');
                                _submit.prop('disabled', false);
                        }
                    }
                });
            });
            break;
        default:
            popupAlert('提交失败');
    }
}
//发送短信验证码
function sendSms(_mobile, _type, _username) {
    var _sendBtn = $('.e_sendsms');
    _sendBtn.prop('disabled', true);
    $.ajax({
        type: 'post',
        url: MPT.Config['req']['sendSmsCaptcha'],
        data: 'mobileNumber=' + _mobile + '&type=' + _type + '&username=' + _username + '&pid=' + MPT.pid,
        error: function () {
            popupAlert('短信验证码发送失败！');
            _sendBtn.prop('disabled', false);
        },
        success: function (result) {
            console.log('sendSms:       '+result.errorCode);
            //result = $.parseJSON(result);
            switch (result.errorCode) {
                case MPT.Config['result']['ok']:
                    countDown(60, 'mobile');
                    break;
                case MPT.Config['result']['smsFrequent'][0]:
                    popupAlert(MPT.Config['result']['smsFrequent'][1]);
                    _sendBtn.prop('disabled', false);
                    break;
                case MPT.Config['result']['smsLimit'][0]:
                    popupAlert(MPT.Config['result']['smsLimit'][1]);
                    _sendBtn.prop('disabled', false);
                    break;
                default:
                    popupAlert('短信验证码发送失败，失败原因：内部错误');
                    _sendBtn.prop('disabled', false);
            }
        }
    });
}
//60秒倒计时
function countDown(_time, _type) {
    if (_type == 'mobile') {
        var _sendBtn = $('.e_sendsms');
    } else if (_type == 'email') {
        var _sendBtn = $('.e_email_send');
    }
    var _timer = null;
    _time = parseInt(_time);
    _timer = setInterval(function () {
        if (_time > 0) {
            if (_type == 'mobile') {
                _sendBtn.removeClass('gradient2').addClass('gray').html('重新发送验证码&nbsp;' + _time + '&nbsp;秒');
            } else if (_type == 'email') {
                _sendBtn.removeClass('form_btn').addClass('emailgray').html('重新发送&nbsp;' + _time + '&nbsp;秒');
            }
            _time--;
        } else {
            if (_type == 'mobile') {
                _sendBtn.prop('disabled', false).removeClass('gray').addClass('gradient2').html('');
            } else if (_type == 'email') {
                _sendBtn.prop('disabled', false).removeClass('emailgray').addClass('form_btn').html('发送邮件');
            }
            clearInterval(_timer);
        }
    }, 1000);
}
//找回密码-填写新密码
function getPasswordForm(_curStatus, _key) {
    var _findpwStep = $('.account-menu_step');
    var _findpwContent = $('.e_findpw_content');
    _findpwStep.html(MPT.getTmpl('t_findpw_step', {'curStatus': _curStatus, 'curStep': 3}));
    _findpwContent.html(MPT.getTmpl('t_findpw_passform', {'curStatus': _curStatus, 'key': _key}));
    $('.e_findpw_form').attr('action', MPT.Config['req']['updatePassword']).Validform({
        tiptype: 3,
        usePlugin: {
            passwordstrength: {
                minLen: 6,
                maxLen: 18
            }
        },
        ajaxPost: true,
        beforeSubmit: function () {
            $.Hidemsg();
        },
        callback: function (result) {
            $.Hidemsg();
            if (result.errorCode == MPT.Config['result']['ok']) {
                _findpwStep.html(MPT.getTmpl('t_findpw_step', {'curStatus': _curStatus, 'curStep': 4}));
                _findpwContent.html(MPT.getTmpl('t_findpw_ok'));
            } else {
                popupAlert('提交失败，失败原因：内部错误！');
            }
        }
    });
    $.Hidemsg();
}
//发送邮件
function sendEmail(_email, _username) {
    var _sendBtn = $('.e_email_send');
    _sendBtn.prop('disabled', true);
    $.ajax({
        type: 'post',
        url: MPT.Config['req']['sendMail'],
        data: 'email=' + _email + '&username=' + _username + '&pid=' + MPT.pid,
        error: function () {
            popupAlert('邮件发送失败！');
            _sendBtn.prop('disabled', false);
        },
        success: function (result) {
            //result = $.parseJSON(result);
            switch (result.errorCode) {
                case MPT.Config['result']['ok']:
                    countDown(60, 'email');
                    break;
                case MPT.Config['result']['emailChange'][0]:
                    popupAlert(MPT.Config['result']['emailChange'][1]);
                    _sendBtn.prop('disabled', false);
                    Utils.toTargetView(MPT.Config['url']['findByEmail']);
                    break;
                default:
                    popupAlert('邮件发送失败，失败原因：内部错误！');
                    _sendBtn.prop('disabled', false);
            }
        }
    });
}