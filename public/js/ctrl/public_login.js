var _regPopFlag = 1;
function popup(d, c, f) {
    var a = c.width;
    var b = c.height;
    var e = c.top || "10%";
    if (b) {
        e = ($(window).height() - b) / 2
    }
    $.blockUI({
        message: d, css: {left: ($(window).width() - a) / 2, top: e}, focusInput: false, onBlock: function () {
            if (f) {
                f()
            }
        }, overlayCSS: {opacity: 0.1}
    })
}
function popupLogin() {
    popup(MPT.getTmpl("t_public_popup_login"), {width: 392}, function () {
        $(".e_public_popup_login").click(function () {
            $.unblockUI()
        })
    })
}
function popupAlert(a, b) {
    popup(MPT.getTmpl("t_iw_alert", {msg: a}), {width: 360}, function () {
        $(".iw-alert a").click(function () {
            $.unblockUI({
                onUnblock: function () {
                    if (b) {
                        b()
                    }
                }
            })
        })
    })
}
function loadingPublic(a) {
    $(".nav").replaceWith(MPT.getTmpl("t_public_header", {cur: a || ""}));
    $("#f").replaceWith(MPT.getTmpl("t_conmon_footer"))
}
function loadingPublicTop(a) {
    $("#h").replaceWith(MPT.getTmpl("t_public_top", a));
    var b = $(".e_public_top_menu > li");
    b.hover(function () {
        $(this).find("div").show()
    }, function () {
        $(this).find("div").hide()
    })
}
function loginSucc() {
    $.unblockUI();
    Utils.toTargetView( MPT.Config['url']['passport']['passport'])
}
function countDown(d, b, a) {
    var c = 0;
    $.ajax({
        type: "post",
        url: (a == "reg" ? MPT.Config.req["getTimeReg"] : MPT.Config.req["getTime"]),
        data: "st=" + b + "&bt=" + a,
        dataType: "json",
        error: function () {
            popupAlert("倒计时时间获取失败，请稍后重试！")
        },
        success: function (e) {
            if (e.errorCode == MPT.Config.result["ok"]) {
                c = parseInt(e.bizObj);
                if (b == "m") {
                    if (a == "reg") {
                        d.data("isClick", true);
                        setTimeout(function () {
                            if (c <= 0) {
                                d.data("isClick", false).text("获取验证码");
                                return false
                            }
                            d.text("已发送 " + c).css("color", "#529e13");
                            c--;
                            setTimeout(arguments.callee, 1000)
                        }, 1000)
                    } else {
                        setTimeout(function () {
                            if (c <= 0) {
                                if (d.get(0).tagName == "BUTTON") {
                                    d.removeAttr("disabled").removeClass("disabled").text("获取短信验证码")
                                } else {
                                    d.removeAttr("disabled").removeClass("disabled").val("获取短信验证码")
                                }
                                return false
                            }
                            d.prop("disabled", true).addClass("disabled");
                            if (d.get(0).tagName == "BUTTON") {
                                d.text(c + " 秒后重新获取")
                            } else {
                                d.val(c + " 秒后重新获取")
                            }
                            c--;
                            setTimeout(arguments.callee, 1000)
                        }, 1000)
                    }
                }
                if (b == "e") {
                    setTimeout(function () {
                        if (c <= 0) {
                            if (d.get(0).tagName == "BUTTON") {
                                d.removeAttr("disabled").removeClass("disabled").text("重新发送")
                            } else {
                                d.removeAttr("disabled").removeClass("disabled").val("重新发送")
                            }
                            return false
                        }
                        d.prop("disabled", true).addClass("disabled");
                        if (d.get(0).tagName == "BUTTON") {
                            d.text("重新发送（" + c + "）秒")
                        } else {
                            d.val("重新发送（" + c + "）秒")
                        }
                        c--;
                        setTimeout(arguments.callee, 1000)
                    }, 1000)
                }
            } else {
                if (e.errorCode == MPT.Config.result["notLogin"][0]) {
                    popupAlert(MPT.Config.result["notLogin"][1])
                } else {
                    if (e.errorCode == MPT.Config.result["smsError"][0]) {
                        popupAlert(MPT.Config.result["smsError"][1])
                    } else {
                        popupAlert("倒计时时间获取失败，失败原因：" + e.errorCode)
                    }
                }
            }
        }
    })
}
function getNewCaptcha(d, a, c) {
    var b = d.getElementsByTagName("img")[0];
    var e = d.getElementsByTagName("input")[0].value;
    if (!e) {
        e = genCapId(d, a)
    }
    if (e) {
        b.src = "/captcha?c=" + e + "&r=" + Math.random();
        b.style.display = "block";
        b.onerror = function () {
            imgError(b, c)
        };
        d.onclick = function () {
            getNewCaptcha(d);
            return false
        };
        d.onkeydown = function (f) {
            return false
        }
    } else {
        imgError(b, c)
    }
}
function genCapId(c, a) {
    var b = c.getElementsByTagName("input")[0];
    var e = b.name;
    var d = null;
    $.ajax({
        async: false,
        type: "post",
        url: MPT.Config.req["gencapid"],
        data: {ct: a},
        dataType: "json",
        success: function (f) {
            if (f.errorCode == MPT.Config.result["ok"]) {
                d = f.bizObj
            }
        }
    });
    b.value = d;
    if (!e) {
        b.name = "capId"
    }
    return d
}
function imgError(b, a) {
    if (a) {
        alert("页面已过期，请重新刷新页面！")
    } else {
        popupAlert("页面已过期，请重新刷新页面！")
    }
    b.onerror = null
}
function regPopSmsCaptcha() {
    var b = $(".e_reg_pop_sms_form");
    var c = $(".e_reg_pop_sms_submit");
    var a = b.find("input[name=cid]");
    getNewCaptcha(a.parent().get(0), "regsms");
    b.Validform({
        tiptype: function (f, e, d) {
            if (e.type == 3) {
                _regPopFlag = 0
            } else {
                if (e.type == 2) {
                    _regPopFlag = 1
                }
            }
            e.obj.parent().siblings().text(f)
        }, beforeCheck: function () {
            if (!_regPopFlag) {
                return false
            }
        }, beforeSubmit: function () {
            c.prop("disabled", true).val("提 交 中")
        }, callback: function () {
            config.go("regPopSmsForm");
            return false
        }
    })
}
function loadIdCardTip(b, a) {
    var b = b;
    b.html(MPT.getTmpl("t_IdCard_Tip", {type: a}))
};