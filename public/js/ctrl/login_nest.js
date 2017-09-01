var _isTwoCaptcha = 0;
var _xct = Utils.getUrl("xct") || "sso";
var config = {
    form: [{
        id: "loginForm", aftersubmit: function (b) {
            var c = $(".e_login_error");
            var d = $(".e_login_captcha2_error");
            var h = $(".e_login_submit");
            var g = $(".e_login_captcha2_submit");
            var a = $(".e_login_captcha");
            var e = $(".e_login_captcha2").find("input[type=text]");
            h.prop("disabled", false).val("登    录");
            g.prop("disabled", false).val("登    录");
            switch (b.errorCode) {
                case MPT.Config.result["ok"]:
                    if (Utils.getUrl("loginback") != "") {
                        parent.loginSucc();
                        //Utils.toTargetView(decodeURIComponent(Utils.getUrl("loginback")));
                    } else {
                        if (Utils.getUrl("gotourl") != "") {
                            Utils.toTargetView(decodeURIComponent(Utils.getUrl("gotourl")))
                        } else {
                            Utils.toTargetView(b.bizObj)
                        }
                    }
                    break;
                case MPT.Config.result["notExist"][0]:
                    if (_isTwoCaptcha) {
                        alert(MPT.Config.result["notExist"][1]);
                        location.reload()
                    } else {
                        c.text(MPT.Config.result["notExist"][1]);
                    }
                    break;
                case MPT.Config.result["accountError"][0]:
                    if (_isTwoCaptcha) {
                        alert(MPT.Config.result["accountError"][1]);
                        location.reload()
                    } else {
                        c.text(MPT.Config.result["accountError"][1]);
                    }
                    break;
                case MPT.Config.result["captchaExpired"][0]:
                    if (_isTwoCaptcha) {
                        e.data("captcha", e.val());
                        e.data("tip", MPT.Config.result["captchaExpired"][1]);
                        d.text(MPT.Config.result["captchaExpired"][1]);
                    } else {
                        a.data("captcha", a.val());
                        a.data("tip", MPT.Config.result["captchaExpired"][1]);
                        c.text(MPT.Config.result["captchaExpired"][1]);
                    }
                    break;
                case MPT.Config.result["captchaError"][0]:
                    if (_isTwoCaptcha) {
                        e.data("captcha", e.val());
                        e.data("tip", MPT.Config.result["captchaError"][1]);
                        d.text(MPT.Config.result["captchaError"][1]);
                    } else {
                        a.data("captcha", a.val());
                        a.data("tip", MPT.Config.result["captchaError"][1]);
                        c.text(MPT.Config.result["captchaError"][1]);
                    }
                    break;
                case MPT.Config.result["sessionExpired"][0]:
                    if (_isTwoCaptcha) {
                        alert(MPT.Config.result["sessionExpired"][1]);
                        location.reload()
                    } else {
                        c.text(MPT.Config.result["sessionExpired"][1]);
                    }
                    break;
                case MPT.Config.result["ssoClose"][0]:
                    if (_isTwoCaptcha) {
                        alert(MPT.Config.result["ssoClose"][1]);
                        location.reload()
                    } else {
                        c.text(MPT.Config.result["ssoClose"][1])
                    }
                    break;
                case MPT.Config.result["nullCaptcha"][0]:
                    _isTwoCaptcha = 1;
                    loginCaptcha2();
                    break;
                case MPT.Config.result["needCaptcha"][0]:
                    c.text(MPT.Config.result["needCaptcha"][1]);
                    showCapt(true);
                    break;
                default:
                    var f = "系统繁忙,请稍后...";
                    if (b && b.errorCode) {
                        f = "登录失败，失败原因：" + b.errorCode
                    }
                    if (_isTwoCaptcha) {
                        popupAlert(f, function () {
                            location.reload()
                        })
                    } else {
                        c.text(f)
                    }
            }
        }
    }]
};
/*MPT.addAction("login_nest", function () {
    Utils.initPlaceholder($(".e_login_account"), "通行证账号", "login-form-tip");
    Utils.initPlaceholder($(".e_login_pass"), "密码", "login-form-tip");
    Utils.initPlaceholder($(".e_login_captcha"), "验证码", "login-form-tip");
    $("#p_gotourl").val(Utils.getUrl("gotourl"));
    $(".e_login_captcha").focus(function () {
        var a = $(this);
        var b = a.parent().siblings().find("img").attr("src");
        if (!b) {
            getNewCaptcha(a.parent().siblings().get(0), _xct);
            $(".e_login_captcha2").find("input[type=hidden]").attr("name", "capId").val(a.parent().siblings().find("input[type=hidden]").val())
        }
    });
    $(".e_login_form").attr("action", MPT.Config.req["login"]).Validform({
        tiptype: function (b, a) {
            $(".e_login_error").text(b);
            a.obj.keydown(function (c) {
                if (c.keyCode == 13) {
                    $(".e_login_submit").trigger("click")
                }
            })
        },
        datatype: {
            account: MPT.Config.regexp["account"],
            password: MPT.Config.regexp["password"],
            captcha: function () {
                var b = $(".e_login_captcha");
                var a = b.data("cl");
                if (!a) {
                    return true
                }
                return MPT.Config.regexp["captcha"].test(b.val())
            }
        },
        beforeSubmit: function () {
            if (!_isTwoCaptcha) {
                var a = $(".e_login_captcha");
                if (a.val() == a.data("captcha")) {
                    $(".e_login_error").text(a.data("tip"));
                    return false
                }
                $(".e_login_submit").prop("disabled", true).val("登  录  中");
            }
        },
        callback: function () {
            config.go("loginForm");
            return false;
        }
    })
});*/
MPT.addAction("login_pop", function () {
    Utils.initPlaceholder($(".e_login_account"), "通行证账号", "login-form-tip");
    Utils.initPlaceholder($(".e_login_pass"), "密码", "login-form-tip");
    $("#p_gotourl").val(Utils.getUrl("gotourl"));
    $(".e_login_form").attr("action", MPT.Config.req["login"]).Validform({
        tiptype: function (b, a) {
            $(".e_login_error").text(b);
            a.obj.keydown(function (c) {
                if (c.keyCode == 13) {
                    $(".e_login_submit").trigger("click")
                }
            })
        },
        datatype: {
            account: MPT.Config.regexp["account"],
            password: MPT.Config.regexp["password"]
        },
        beforeSubmit: function () {
            if (!_isTwoCaptcha) {
                $(".e_login_submit").prop("disabled", true).val("登  录  中");
            }
        },
        callback: function () {
            config.go("loginForm");
            return false;
        }
    });
    $(".e_login_pop_other a").eq(0).click(function () {
        Utils.openTargetView(MPT.Config.url["findPw"])
    });
    $(".e_login_pop_other a").eq(1).click(function () {
        Utils.openTargetView(MPT.Config.url["getbackacc"])
    });
    $(".e_login_pop_other a").eq(2).click(function () {
        Utils.openTargetView(MPT.Config.url["regMobilePage"])
    });
    $(".e_login_pop_other a").eq(3).click(function () {
        Utils.openTargetView(MPT.Config.url["faq"])
    })
});