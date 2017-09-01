if (!Array.indexOf) {
    Array.prototype.indexOf = function (b) {
        for (var a = 0; a < this.length; a++) {
            if (this[a] == b) {
                return a
            }
        }
        return -1
    }
}
function fhtest(b) {
    for (var a = 0; a < b.length; a++) {
        strCode = b.charCodeAt(a);
        if ((strCode > 65248) || (strCode == 12288)) {
            return false
        }
    }
    return true
}
var config = {
    form: [{
        id: "smsForm", aftersubmit: function (b) {
            $("#smsForm").remove();
            var c = $(".e_account").val();
            var a = $(".e_getCaptcha");
            switch (b.errorCode) {
                case MPT.Config.result["ok"]:
                    countDown(a, "m", "reg");
                    break;
                case MPT.Config.result["smsFrequent"][0]:
                    popupAlert(MPT.Config.result["smsFrequent"][1]);
                    countDown(a, "m", "reg");
                    break;
                case MPT.Config.result["smsLimit"][0]:
                    popupAlert(MPT.Config.result["smsLimit"][1]);
                    countDown(a, "m", "reg");
                    break;
                case MPT.Config.result["sameMobileFrequent"][0]:
                    popupAlert(MPT.Config.result["sameMobileFrequent"][1]);
                    countDown(a, "m", "reg");
                    break;
                case MPT.Config.result["nullCaptcha"][0]:
                    popup(MPT.getTmpl("t_reg_pop_sms", {sm: c}), {width: 260}, function () {
                        $(".e_reg_pop_sms_close").click(function () {
                            $.unblockUI()
                        });
                        regPopSmsCaptcha()
                    });
                    break;
                default:
                    popupAlert("短信验证码发送失败，失败原因：" + b.errorCode);
                    countDown(a, "m", "reg")
            }
        }
    }, {
        id: "regPopSmsForm", aftersubmit: function (b) {
            var a = $(".e_getCaptcha");
            var d = $(".e_reg_pop_sms_form");
            var f = $(".e_reg_pop_sms_submit");
            var e = d.find(".Validform_checktip");
            var c = d.find("input[name=cid]");
            f.removeAttr("disabled").val("提  交");
            switch (b.errorCode) {
                case MPT.Config.result["ok"]:
                    countDown(a, "m", "reg");
                    $.unblockUI();
                    break;
                case MPT.Config.result["captchaExpired"][0]:
                    e.text(MPT.Config.result["captchaExpired"][1]);
                    c.val("");
                    getNewCaptcha(c.parent().get(0), "regsms");
                    _regPopFlag = 0;
                    break;
                case MPT.Config.result["captchaError"][0]:
                    e.text(MPT.Config.result["captchaError"][1]);
                    _regPopFlag = 0;
                    break;
                default:
                    e.text("短信验证码发送失败，失败原因：" + b.errorCode);
                    _regPopFlag = 0
            }
        }
    }, {
        id: "regMobileForm", aftersubmit: function (b) {
            var d = $(".e_submit");
            var c = $(".Validform_checktip");
            var a = $(".e_captcha");
            switch (b.errorCode) {
                case MPT.Config.result["ok"]:
                    $(".e_content").html(MPT.getTmpl("t_reg_ok", {type: "m", account: $(".e_account").val()}));
                    if (MPT.pid !== "passport") {
                        $.each(MPT.productInfo, function (e) {
                            if (MPT.pid === MPT.productInfo[e].pid) {
                                $(".e_reg_ok_tip").html('&nbsp;&nbsp;&nbsp;&nbsp;您可使用通行证登录<a href="' + MPT.productInfo[e].url + '" target="_blank">' + MPT.productInfo[e].product + "</a>等游戏");
                                return false
                            }
                        })
                    }
                    if (typeof lvAnHmSetHm !== "undefined") {
                        lvAnHmSetHm(3, b.bizObj.accid)
                    }
                    break;
                case MPT.Config.result["captchaExpired"][0]:
                    a.data("captcha", a.val());
                    a.data("tip", MPT.Config.result["captchaExpired"][2]);
                    c.eq(3).text(MPT.Config.result["captchaExpired"][2]).parent().siblings().removeClass("reg-tip-success").addClass("reg-tip-error");
                    d.prop("disabled", false).val("提 交 注 册");
                    break;
                case MPT.Config.result["captchaError"][0]:
                    a.data("captcha", a.val());
                    a.data("tip", MPT.Config.result["captchaError"][1]);
                    c.eq(3).text(MPT.Config.result["captchaError"][1]).parent().siblings().removeClass("reg-tip-success").addClass("reg-tip-error");
                    d.prop("disabled", false).val("提 交 注 册");
                    break;
                case MPT.Config.result["regClose"][0]:
                    popupAlert(MPT.Config.result["regClose"][1]);
                    d.prop("disabled", false).val("提 交 注 册");
                    break;
                case MPT.Config.result["idcError"][0]:
                    popupAlert(MPT.Config.result["idcError"][1]);
                    d.prop("disabled", false).val("提 交 注 册");
                    break;
                case MPT.Config.result["sameAccount"][0]:
                    popupAlert(MPT.Config.result["sameAccount"][1]);
                    d.prop("disabled", false).val("提 交 注 册");
                    break;
                default:
                    popupAlert("注册失败，稍后请重试！");
                    d.prop("disabled", false).val("提 交 注 册")
            }
        }
    }, {
        id: "regEmailForm", aftersubmit: function (b) {
            var d = $(".e_form").find("input[name=capId]");
            var e = $(".e_submit");
            var c = $(".Validform_checktip");
            var a = $(".e_captcha");
            switch (b.errorCode) {
                case MPT.Config.result["ok"]:
                    $(".e_content").html(MPT.getTmpl("t_reg_email_confirm", {account: $(".e_account").val()}));
                    regEmailConfirm();
                    break;
                case MPT.Config.result["captchaExpired"][0]:
                    a.val("");
                    d.val("");
                    c.eq(5).text(MPT.Config.result["captchaExpired"][1]).siblings().hide().parent().siblings("div").removeClass("reg-tip-success").addClass("reg-tip-error");
                    e.prop("disabled", false).val("提 交 注 册");
                    getNewCaptcha(a.parent().siblings().get(0), "reg");
                    break;
                case MPT.Config.result["captchaError"][0]:
                    a.val("");
                    c.eq(5).text(MPT.Config.result["captchaError"][1]).siblings().hide().parent().siblings("div").removeClass("reg-tip-success").addClass("reg-tip-error");
                    e.prop("disabled", false).val("提 交 注 册");
                    getNewCaptcha(a.parent().siblings().get(0), "reg");
                    break;
                case MPT.Config.result["regClose"][0]:
                    popupAlert(MPT.Config.result["regClose"][1]);
                    e.prop("disabled", false).val("提 交 注 册");
                    getNewCaptcha(a.parent().siblings().get(0), "reg");
                    break;
                case MPT.Config.result["idcError"][0]:
                    popupAlert(MPT.Config.result["idcError"][1]);
                    e.prop("disabled", false).val("提 交 注 册");
                    getNewCaptcha(a.parent().siblings().get(0), "reg");
                    break;
                case MPT.Config.result["sameAccount"][0]:
                    popupAlert(MPT.Config.result["sameAccount"][1]);
                    e.prop("disabled", false).val("提 交 注 册");
                    getNewCaptcha(a.parent().siblings().get(0), "reg");
                    break;
                default:
                    popupAlert("注册失败，稍后请重试！");
                    a.val("");
                    d.val("");
                    e.prop("disabled", false).val("提 交 注 册");
                    getNewCaptcha(a.parent().siblings().get(0), "reg")
            }
        }
    }, {
        id: "regPersonalForm", aftersubmit: function (b) {
            console.log(b);
            var d = $(".e_form").find("input[name=capId]");
            var e = $(".e_submit");
            var c = $(".Validform_checktip");
            var a = $(".e_captcha");
            switch (b.errorCode) {
                case MPT.Config.result["ok"]:
                    $(".e_content").html(MPT.getTmpl("t_reg_ok", {type: "p", account: $(".e_account").val()}));
                    if (MPT.pid !== "passport") {
                        $.each(MPT.productInfo, function (f) {
                            if (MPT.pid === MPT.productInfo[f].pid) {
                                $(".e_reg_ok_tip").html('&nbsp;&nbsp;&nbsp;&nbsp;您可使用通行证登录<a href="' + MPT.productInfo[f].url + '" target="_blank">' + MPT.productInfo[f].product + "</a>等游戏");
                                return false
                            }
                        })
                    }
                    if (typeof lvAnHmSetHm !== "undefined") {
                        lvAnHmSetHm(3, b.bizObj.accid)
                    }
                    break;
                case MPT.Config.result["captchaExpired"][0]:
                    a.val("");
                    d.val("");
                    c.eq(5).text(MPT.Config.result["captchaExpired"][1]).siblings().hide().parent().siblings("div").removeClass("reg-tip-success").addClass("reg-tip-error");
                    e.prop("disabled", false).val("提 交 注 册");
                    getNewCaptcha(a.parent().siblings().get(0), "reg");
                    break;
                case MPT.Config.result["captchaError"][0]:
                    a.val("");
                    c.eq(5).text(MPT.Config.result["captchaError"][1]).siblings().hide().parent().siblings("div").removeClass("reg-tip-success").addClass("reg-tip-error");
                    e.prop("disabled", false).val("提 交 注 册");
                    getNewCaptcha(a.parent().siblings().get(0), "reg");
                    break;
                case MPT.Config.result["regClose"][0]:
                    popupAlert(MPT.Config.result["regClose"][1]);
                    e.prop("disabled", false).val("提 交 注 册");
                    getNewCaptcha(a.parent().siblings().get(0), "reg");
                    break;
                case MPT.Config.result["idcError"][0]:
                    popupAlert(MPT.Config.result["idcError"][1]);
                    e.prop("disabled", false).val("提 交 注 册");
                    getNewCaptcha(a.parent().siblings().get(0), "reg");
                    break;
                case MPT.Config.result["sameAccount"][0]:
                    popupAlert(MPT.Config.result["sameAccount"][1]);
                    e.prop("disabled", false).val("提 交 注 册");
                    getNewCaptcha(a.parent().siblings().get(0), "reg");
                    break;
                default:
                    popupAlert("注册失败，稍后请重试！");
                    a.val("");
                    d.val("");
                    e.prop("disabled", false).val("提 交 注 册");
                    getNewCaptcha(a.parent().siblings().get(0), "reg")
            }
        }
    }]
};
function regMobile() {
    var b = 0;
    Utils.initPlaceholder($(".e_account"), "手机号", "reg-tip2");
    Utils.initPlaceholder($(".e_pass"), "密码", "reg-tip2");
    Utils.initPlaceholder($(".e_pass2"), "确认密码", "reg-tip2");
    Utils.initPlaceholder($(".e_captcha"), "短信验证码", "reg-tip2");
    Utils.initPlaceholder($(".e_fullname"), "真实姓名", "reg-tip2");
    Utils.initPlaceholder($(".e_idcard"), "身份证号", "reg-tip2");
    var a = $(".e_getCaptcha");
    a.mouseup(function () {
        var f = $(".e_account");
        if ($.data(a[0], "isClick")) {
            return false
        }
        if (!(MPT.Config.regular["mobile"].test(f.val())) || $(".e_account").hasClass("Validform_error")) {
            return false
        } else {
            $("body").append('<form action="' + MPT.Config.req["smsReg"] + '" class="hide" id="smsForm"><input type="hidden" name="st" value="reg"/><input type="hidden" name="sm" value="' + f.val() + '"/></form>');
            config.go("smsForm")
        }
    });
    $("[datatype]").focusin(function () {
        if (this.timeout) {
            clearTimeout(this.timeout)
        }
        var f = $(this).parent().siblings().find(".e_reg_tip_focus");
        f.show().siblings().hide();
        if (!b && typeof lvAnHmSetHm !== "undefined") {
            lvAnHmSetHm(2);
            b = 1
        }
    }).focusout(function () {
        var f = $(this).parent().siblings().find(".e_reg_tip_focus");
        this.timeout = setTimeout(function () {
            f.hide().siblings().show()
        }, 0)
    }).end().first().keydown(function (f) {
        if (f.keyCode == 13) {
            return false
        }
    });
    $(".e_pass,.e_pass2,.e_fullname").keydown(function (f) {
        if (f.keyCode == 32) {
            return false
        }
    });
    var c = "";
    var d = false;
    var e = false;
    $(".e_form").Validform({
        tiptype: function (h, g, f) {
            if (g.type == 3) {
                g.obj.parent().removeClass("reg-tip-success").addClass("reg-tip-error").siblings().find(".Validform_checktip").html('<span class="errorSpan">×</span>' + h).show()
            } else {
                if (g.type == 2) {
                    g.obj.parent().removeClass("reg-tip-error").addClass("reg-tip-success").siblings().find(".Validform_checktip").html(h).show()
                }
            }
        }, datatype: {
            mobile: function (k, j, i, h) {
                var f = MPT.Config.regular["mobile"];
                var g = $(".e_account").parent();
                if (f.test(k)) {
                    if (c != k) {
                        $.ajax({
                            async: false, type: "post", url: MPT.Config.req["check"], data: "account=" + k, dataType: "json", error: function () {
                                return "验证请求发送失败，请稍后重试"
                            }, success: function (l) {
                                c = k;
                                switch (l.errorCode) {
                                    case MPT.Config.result["notExist"][0]:
                                        d = true;
                                        e = true;
                                        a.css("color", "#529e13");
                                        break;
                                    case MPT.Config.result["exist"][0]:
                                        d = false;
                                        e = false;
                                        break;
                                    default:
                                        d = false;
                                        e = false
                                }
                            }
                        });
                        if (e) {
                            g.removeClass("reg-tip-error").addClass("reg-tip-success");
                            return true
                        } else {
                            g.removeClass("reg-tip-success").addClass("reg-tip-error");
                            return MPT.Config.result["exist"][3]
                        }
                    } else {
                        if (e) {
                            return true
                        } else {
                            return MPT.Config.result["exist"][3]
                        }
                    }
                } else {
                    return false
                }
            }, password: function (g) {
                var f = Utils.checkWeakPw($(".e_account").val(), g);
                if (f == 1) {
                    return true
                } else {
                    if (f == -1) {
                        return MPT.Config.result["wpError"][1]
                    } else {
                        if (f == -2) {
                            return MPT.Config.result["wpError"][2]
                        } else {
                            if (f == -3) {
                                return MPT.Config.result["wpError"][3]
                            } else {
                                return MPT.Config.result["wpError"][0]
                            }
                        }
                    }
                }
                return false
            }, captcha: MPT.Config.regular["mobileCaptcha"], fullname: MPT.Config.regular["fullname"], idcard: function (f) {
                return Utils.validateIdCard(f)
            }
        }, beforeSubmit: function () {
            var f = $(".e_reg_agree");
            if (!f.prop("checked")) {
                popupAlert("请确认已阅读并同意绿岸用户协议！");
                return false
            }
            if (!d) {
                return false
            }
            var g = $(".e_captcha");
            if (g.val() == g.data("captcha")) {
                g.parent().removeClass("reg-tip-success").addClass("reg-tip-error");
                $(".Validform_checktip").eq(3).text(g.data("tip")).show();
                return false
            }
            $(".e_submit").prop("disabled", true).val("提 交 中")
        }, callback: function () {
            config.go("regMobileForm");
            return false
        }
    })
}
function regEmail() {
    var a = 0;
    Utils.initPlaceholder($(".e_account"), "邮箱", "reg-tip2");
    Utils.initPlaceholder($(".e_pass"), "密码", "reg-tip2");
    Utils.initPlaceholder($(".e_pass2"), "确认密码", "reg-tip2");
    Utils.initPlaceholder($(".e_fullname"), "真实姓名", "reg-tip2");
    Utils.initPlaceholder($(".e_idcard"), "身份证号", "reg-tip2");
    Utils.initPlaceholder($(".e_captcha"), "验证码", "reg-tip2");
    $("[datatype]").focusin(function () {
        if (this.timeout) {
            clearTimeout(this.timeout)
        }
        var e = $(this).parent().siblings().find(".e_reg_tip_focus");
        e.show().siblings().hide();
        if (!a && typeof lvAnHmSetHm !== "undefined") {
            lvAnHmSetHm(2);
            a = 1
        }
    }).focusout(function () {
        var e = $(this).parent().siblings().find(".e_reg_tip_focus");
        this.timeout = setTimeout(function () {
            e.hide().siblings().show()
        }, 0)
    }).end().first().keydown(function (f) {
        if (f.keyCode == 13) {
            return false
        }
    });
    $(".e_pass,.e_pass2,.e_fullname").keydown(function (f) {
        if (f.keyCode == 32) {
            return false
        }
    });
    $(".e_captcha").focus(function () {
        var e = $(this);
        var f = e.parent().siblings().find("img").attr("src");
        if (!f) {
            getNewCaptcha(e.parent().siblings().get(0), "reg")
        }
    });
    var b = "";
    var c = false;
    var d = false;
    $(".e_form").Validform({
        tiptype: function (g, f, e) {
            if (f.type == 3) {
                f.obj.parent().removeClass("reg-tip-success").addClass("reg-tip-error").siblings().find(".Validform_checktip").html('<span class="errorSpan">×</span>' + g).show()
            } else {
                if (f.type == 2) {
                    f.obj.parent().removeClass("reg-tip-error").addClass("reg-tip-success").siblings().find(".Validform_checktip").html(g).show()
                }
            }
        }, datatype: {
            email: function (j, i, h, g) {
                var e = MPT.Config.regular["email"];
                var f = $(".e_account").parent();
                if (e.test(j)) {
                    if (b != j) {
                        $.ajax({
                            async: false, type: "post", url: MPT.Config.req["check"], data: "account=" + j, dataType: "json", error: function () {
                                return "验证请求发送失败，请稍后重试"
                            }, success: function (k) {
                                b = j;
                                switch (k.errorCode) {
                                    case MPT.Config.result["notExist"][0]:
                                        c = true;
                                        d = true;
                                        break;
                                    case MPT.Config.result["exist"][0]:
                                        c = false;
                                        d = false;
                                        break;
                                    default:
                                        c = false;
                                        d = false
                                }
                            }
                        });
                        if (d) {
                            f.removeClass("reg-tip-error").addClass("reg-tip-success");
                            return true
                        } else {
                            f.removeClass("reg-tip-success").addClass("reg-tip-error");
                            return MPT.Config.result["exist"][3]
                        }
                    } else {
                        if (d) {
                            return true
                        } else {
                            return MPT.Config.result["exist"][3]
                        }
                    }
                } else {
                    return false
                }
            }, password: function (f) {
                var e = Utils.checkWeakPw($(".e_account").val(), f);
                if (e == 1) {
                    return true
                } else {
                    if (e == -1) {
                        return MPT.Config.result["wpError"][1]
                    } else {
                        if (e == -2) {
                            return MPT.Config.result["wpError"][2]
                        } else {
                            if (e == -3) {
                                return MPT.Config.result["wpError"][3]
                            } else {
                                return MPT.Config.result["wpError"][0]
                            }
                        }
                    }
                }
                return false
            }, captcha: MPT.Config.regular["captcha"], fullname: MPT.Config.regular["fullname"], idcard: function (e) {
                return Utils.validateIdCard(e)
            }
        }, beforeSubmit: function () {
            var e = $(".e_reg_agree");
            if (!e.prop("checked")) {
                popupAlert("请确认已阅读并同意绿岸用户协议！");
                return false
            }
            if (!c) {
                return false
            }
            $(".e_submit").prop("disabled", true).val("提 交 中")
        }, callback: function () {
            config.go("regEmailForm");
            return false
        }
    })
}
function regEmailConfirm() {
    var d = $(".e_email").text();
    var c = d.substring(d.indexOf("@") + 1);
    if (c == "gmail.com") {
        c = "https://mail.google.com/"
    } else {
        c = "http://mail." + c + "/"
    }
    $(".e_email_login").click(function () {
        Utils.openTargetView(c)
    });
    var a = $(".e_email_send");
    $.data(a[0], "isClick", true);
    var b = 60;
    setTimeout(function () {
        if (b <= 0) {
            a.text("重新发送邮件").css("cursor", "pointer");
            $.data(a[0], "isClick", false);
            return false
        }
        a.text("重新发送邮件 " + b).css("cursor", "default");
        $.data(a[0], "isClick", true);
        b--;
        setTimeout(arguments.callee, 1000)
    }, 1000);
    a.click(function () {
        if ($.data(a[0], "isClick")) {
            return false
        } else {
            $.data(a[0], "isClick", true);
            var e = 60;
            setTimeout(function () {
                if (e <= 0) {
                    a.text("重新发送邮件").css("cursor", "pointer");
                    $.data(a[0], "isClick", false);
                    return false
                }
                a.text("重新发送邮件 " + e).css("cursor", "default");
                $.data(a[0], "isClick", true);
                e--;
                setTimeout(arguments.callee, 1000)
            }, 1000);
            $.ajax({
                type: "post", url: MPT.Config.req["repeatmail"], data: "email=" + d, dataType: "json", error: function () {
                    popupAlert("重新发送邮件失败，请稍后重试！")
                }, success: function (f) {
                    switch (f.errorCode) {
                        case MPT.Config.result["ok"]:
                            return true;
                            break;
                        case MPT.Config.result["emailValidatorOk"][0]:
                            popupAlert(MPT.Config.result["emailValidatorOk"][2], function () {
                                Utils.toTargetView(MPT.Config.url["loginPage"])
                            });
                            break;
                        case MPT.Config.result["sessionExpired"][0]:
                            popupAlert(MPT.Config.result["sessionExpired"][2], function () {
                                Utils.toTargetView(MPT.Config.url["loginPage"])
                            });
                            break;
                        case MPT.Config.result["emailFrequent"][0]:
                            popupAlert(MPT.Config.result["emailFrequent"][1]);
                            break;
                        default:
                            popupAlert("邮件发送失败，稍后请重试！")
                    }
                }
            })
        }
    })
}
function regPersonal() {
    var a = 0;
    Utils.initPlaceholder($(".e_account"), "用户名", "reg-tip2");
    Utils.initPlaceholder($(".e_pass"), "密码", "reg-tip2");
    Utils.initPlaceholder($(".e_pass2"), "确认密码", "reg-tip2");
    Utils.initPlaceholder($(".e_email"), "电子邮箱", "reg-tip2");
    Utils.initPlaceholder($(".e_fullname"), "真实姓名", "reg-tip2");
    Utils.initPlaceholder($(".e_idcard"), "身份证号", "reg-tip2");
    Utils.initPlaceholder($(".e_captcha"), "验证码", "reg-tip2");
    $("[datatype]").focusin(function () {
        if (this.timeout) {
            clearTimeout(this.timeout)
        }
        var e = $(this).parent().siblings().find(".e_reg_tip_focus");
        e.show().siblings().hide();
        if (!a && typeof lvAnHmSetHm !== "undefined") {
            lvAnHmSetHm(2);
            a = 1
        }
    }).focusout(function () {
        var e = $(this).parent().siblings().find(".e_reg_tip_focus");
        this.timeout = setTimeout(function () {
            e.hide().siblings().show()
        }, 0)
    }).end().first().keydown(function (f) {
        if (f.keyCode == 13) {
            return false
        }
    });
    $(".e_account,.e_pass,.e_pass2,.e_fullname").keydown(function (f) {
        if (f.keyCode == 32) {
            return false
        }
    });
    $(".e_captcha").focus(function () {
        var e = $(this);
        var f = e.parent().siblings().find("img").attr("src");
        if (!f) {
            getNewCaptcha(e.parent().siblings().get(0), "reg")
        }
    });
    var b = "";
    var c = false;
    var d = false;
    $(".e_form").Validform({
        tiptype: function (g, f, e) {
            if (f.type == 3) {
                f.obj.parent().removeClass("reg-tip-success").addClass("reg-tip-error").siblings().find(".Validform_checktip").html('<span class="errorSpan">×</span>' + g).show()
            } else {
                if (f.type == 2) {
                    f.obj.parent().removeClass("reg-tip-error").addClass("reg-tip-success").siblings().find(".Validform_checktip").html(g).show()
                }
            }
        }, datatype: {
            personal: function (h, g) {
                var e = MPT.Config.regular["personal"];
                var f = $(".e_account").parent();
                if (e.test(h)) {
                    if (b != h) {
                        $.ajax({
                            async: false, type: "post", url: MPT.Config.req["check"], data: "account=" + h, dataType: "json", error: function () {
                                return "验证请求发送失败，请稍后重试"
                            }, success: function (i) {
                                b = h;
                                switch (i.errorCode) {
                                    case MPT.Config.result["notExist"][0]:
                                        c = true;
                                        d = true;
                                        break;
                                    case MPT.Config.result["exist"][0]:
                                        c = false;
                                        d = false;
                                        break;
                                    default:
                                        c = false;
                                        d = false
                                }
                            }
                        });
                        if (d) {
                            f.removeClass("reg-tip-error").addClass("reg-tip-success");
                            return true
                        } else {
                            f.removeClass("reg-tip-success").addClass("reg-tip-error");
                            return MPT.Config.result["exist"][3]
                        }
                    } else {
                        if (d) {
                            return true
                        } else {
                            return MPT.Config.result["exist"][3]
                        }
                    }
                } else {
                    return false
                }
            }, password: function (f) {
                var e = Utils.checkWeakPw($(".e_account").val(), f);
                if (e == 1) {
                    return true
                } else {
                    if (e == -1) {
                        return MPT.Config.result["wpError"][1]
                    } else {
                        if (e == -2) {
                            return MPT.Config.result["wpError"][2]
                        } else {
                            if (e == -3) {
                                return MPT.Config.result["wpError"][3]
                            } else {
                                return MPT.Config.result["wpError"][0]
                            }
                        }
                    }
                }
                return false
            }, captcha: MPT.Config.regular["captcha"], fullname: MPT.Config.regular["fullname"], idcard: function (e) {
                return Utils.validateIdCard(e)
            }
        }, beforeSubmit: function () {
            var e = $(".e_reg_agree");
            if (!e.prop("checked")) {
                popupAlert("请确认已阅读并同意绿岸用户协议！");
                return false
            }
            if (!c) {
                return false
            }
            $(".e_submit").prop("disabled", true).val("提 交 中")
        }, callback: function () {
            config.go("regPersonalForm");
            return false
        }
    })
}
MPT.addAction("reg", function () {
    loadingPublic();
    loadingPublicTop(MPT.Config.accdata);
    var d = $(".e_menu"), b = $(".e_content"), c = Utils.getUrl("type") || "m", f = decodeURIComponent(Utils.getUrl("rsurl")), a = Utils.getUrl("rsval"), e = Utils.getUrl("rstype");
    d.html(MPT.getTmpl("t_reg_menu", {type: c, rsUrl: f, rsVal: a, rsType: e}));
    switch (c) {
        case"e":
            b.html(MPT.getTmpl("t_reg_email", {rsUrl: f, rsVal: a, rsType: e, pid: MPT.pid}));
            regEmail();
            break;
        case"p":
            b.html(MPT.getTmpl("t_reg_personal", {rsUrl: f, rsVal: a, rsType: e, pid: MPT.pid}));
            regPersonal();
            break;
        default:
            b.html(MPT.getTmpl("t_reg_mobile", {rsUrl: f, rsVal: a, rsType: e, pid: MPT.pid}));
            regMobile()
    }
});
MPT.addAction("reg_email_ok", function () {
    loadingPublic();
    loadingPublicTop(MPT.Config.accdata);
    var c = $(".e_menu"), b = $(".e_content"), d = Utils.getUrl("id"), f = decodeURIComponent(Utils.getUrl("rsurl")), a = Utils.getUrl("rsval"), e = Utils.getUrl("rstype"), g = Utils.getUrl("aid");
    c.html(MPT.getTmpl("t_reg_menu", {type: "e", rsUrl: f, rsVal: a, rsType: e}));
    b.html(MPT.getTmpl("t_reg_ok", {type: "e", account: d}));
    if (MPT.pid !== "passport") {
        $.each(MPT.productInfo, function (h) {
            if (MPT.pid === MPT.productInfo[h].pid) {
                $(".e_reg_ok_tip").html('&nbsp;&nbsp;&nbsp;&nbsp;您可使用通行证登录<a href="' + MPT.productInfo[h].url + '" target="_blank">' + MPT.productInfo[h].product + "</a>等游戏");
                return false
            }
        })
    }
    if (typeof lvAnHmSetHm !== "undefined") {
        lvAnHmSetHm(3, g)
    }
});
MPT.addAction("reg_email_fail", function (f) {
    loadingPublic();
    loadingPublicTop(MPT.Config.accdata);
    var c = $(".e_menu"), b = $(".e_content"), e = decodeURIComponent(Utils.getUrl("rsurl")), a = Utils.getUrl("rsval"), d = Utils.getUrl("rstype");
    c.html(MPT.getTmpl("t_reg_menu", {type: "e", rsUrl: e, rsVal: a, rsType: d}));
    b.html(MPT.getTmpl("t_reg_email_fail"))
});
var tempHtml = "", eMailList = ["qq.com", "163.com", "iwgame.com", "126.com", "gmail.com", "hotmail.com", "sina.com", "sohu.com"], e_account_tmp = "", li_length = 0;
$("body").on("keyup", ".e_mail_account", function () {
    if ($(this).val().indexOf("@") != "-1") {
        tempHtml = '<ul class="e-mail-list">';
        var a = $(this).val();
        if (a.split("@").length > 1) {
            for (var b = 0; b < eMailList.length; b++) {
                if (eMailList[b].indexOf(a.split("@")[1].toLowerCase()) != "-1") {
                    li_length++;
                    tempHtml = tempHtml + '<li class="e-mail-li">' + a.split("@")[0] + "@" + eMailList[b] + "</li>"
                }
            }
        } else {
            for (var b = 0; b < eMailList.length; b++) {
                li_length++;
                tempHtml = tempHtml + '<li class="e-mail-li">' + a.split("@")[0] + "@" + eMailList[b] + "</li>"
            }
        }
        tempHtml = tempHtml + "</ul>";
        if ($(".e-mail-list").length == 0) {
            $("body").append(tempHtml);
            $(".e-mail-list").css({top: $(".e_mail_account").offset().top * 1 + $(".e_mail_account").height() + "px", left: ($(".e_mail_account").offset().left - 10) + "px"})
        } else {
            tempHtml = tempHtml.replace('<ul class="e-mail-list">', "").replace("</ul>", "");
            $(".e-mail-list").html(tempHtml)
        }
        if ($(".e-mail-list").find("li").length <= 6) {
            $(".e-mail-list").css({height: "auto"})
        } else {
            $(".e-mail-list").css({height: "216px"})
        }
        $(".e-mail-li").on("click", function () {
            $(".e_mail_account").val($(this).html()).focus().blur();
            $(".e-mail-list").hide()
        });
        if (li_length != "0") {
            $(".e-mail-list").show()
        } else {
            $(".e-mail-list").hide()
        }
    }
});
$("body").on("focus", "input", function () {
    $(".e-mail-list").hide()
});
$("body").on("click", function () {
    $(".e-mail-list").hide()
});
$("body").on("click", ".errorSpan", function () {
    $(this).parents("li").find("input").val("").focus()
});
$(window).resize(function () {
    if ($(".e-mail-list").length != 0) {
        $(".e-mail-list").css({top: $(".e_mail_account").offset().top * 1 + $(".e_mail_account").height() + "px", left: ($(".e_mail_account").offset().left - 10) + "px"})
    }
});