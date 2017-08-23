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
var _isTwoCaptcha = 0;
/*var config = {
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
            console.log(b.errorCode);
            switch (b.errorCode) {
                case MPT.Config.result["ok"]:
                    Utils.toTargetView(b.bizObj);
                    break;
                case MPT.Config.result["notExist"][0]:
                    if (_isTwoCaptcha) {
                        popupAlert(MPT.Config.result["notExist"][1], function () {
                            location.reload()
                        })
                    } else {
                        c.text(MPT.Config.result["notExist"][1]);
                        getNewCaptcha(a.parent().siblings().get(0), "sso")
                    }
                    break;
                case MPT.Config.result["accountError"][0]:
                    if (_isTwoCaptcha) {
                        popupAlert(MPT.Config.result["accountError"][1], function () {
                            location.reload()
                        })
                    } else {
                        c.text(MPT.Config.result["accountError"][1]);
                        getNewCaptcha(a.parent().siblings().get(0), "sso")
                    }
                    break;
                case MPT.Config.result["captchaExpired"][0]:
                    if (_isTwoCaptcha) {
                        e.data("captcha", e.val());
                        e.data("tip", MPT.Config.result["captchaExpired"][1]);
                        d.text(MPT.Config.result["captchaExpired"][1]);
                        getNewCaptcha(e.parent().siblings().get(0), "sso")
                    } else {
                        a.data("captcha", a.val());
                        a.data("tip", MPT.Config.result["captchaExpired"][1]);
                        c.text(MPT.Config.result["captchaExpired"][1]);
                        getNewCaptcha(a.parent().siblings().get(0), "sso")
                    }
                    break;
                case MPT.Config.result["captchaError"][0]:
                    if (_isTwoCaptcha) {
                        e.data("captcha", e.val());
                        e.data("tip", MPT.Config.result["captchaError"][1]);
                        d.text(MPT.Config.result["captchaError"][1]);
                        getNewCaptcha(e.parent().siblings().get(0), "sso")
                    } else {
                        a.data("captcha", a.val());
                        a.data("tip", MPT.Config.result["captchaError"][1]);
                        c.text(MPT.Config.result["captchaError"][1]);
                        getNewCaptcha(a.parent().siblings().get(0), "sso")
                    }
                    break;
                case MPT.Config.result["sessionExpired"][0]:
                    if (_isTwoCaptcha) {
                        popupAlert(MPT.Config.result["sessionExpired"][1], function () {
                            location.reload()
                        })
                    } else {
                        c.text(MPT.Config.result["sessionExpired"][1]);
                        getNewCaptcha(a.parent().siblings().get(0), "sso")
                    }
                    break;
                case MPT.Config.result["ssoClose"][0]:
                    if (_isTwoCaptcha) {
                        popupAlert(MPT.Config.result["ssoClose"][1], function () {
                            location.reload()
                        })
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
function loginCaptcha2() {
    var a = $(".e_login_captcha2");
    popup(a, {width: 392}, function () {
        var f = $(".e_login_captcha2_close");
        var c = $(".e_login_captcha2_error");
        var b = a.find("input[type=text]");
        var d = $(".e_login_captcha2_form");
        var e = $(".e_login_captcha2_submit");
        f.click(function () {
            $.unblockUI();
            location.reload()
        });
        b.focus(function () {
            var g = $(this);
            var h = g.parent().siblings().find("img").attr("src");
            if (!h) {
                getNewCaptcha(g.parent().siblings().get(0), "sso")
            }
        });
        d.Validform({
            tiptype: function (h, g) {
                c.text(h);
                g.obj.keydown(function (i) {
                    if (i.keyCode == 13) {
                        e.trigger("click")
                    }
                })
            }, datatype: {captcha: MPT.Config.regular["captcha"]}, beforeSubmit: function () {
                if (b.val() == b.data("captcha")) {
                    c.text($captcha.data("tip"));
                    return false
                }
                e.prop("disabled", true).val("登  录  中")
            }, callback: function () {
                $(".e_login_captcha").removeAttr("name");
                $(".e_login_form").append('<input type="hidden" name="captcha" class="e_submit_captcha" value="' + b.val() + '"/>');
                $(".e_login_submit").trigger("click");
                return false
            }
        })
    })
}
function showCapt(a) {
    $(".e_cap_pos").css("visibility", "visible");
    var b = $(".e_login_captcha");
    b.data("cl", "1");
    if (a) {
        b.trigger("focus")
    }
}*/
MPT.addAction("login", function (d) {
    loadingPublic();
    loadingPublicTop(MPT.Config.accdata);
    $(".e_login_account").val($(".e_dname").val() || "");
    $(".e_login_other").append(MPT.getTmpl("t_login_other"));
    $(".e_other").append(MPT.getTmpl("t_other"));
    $(".e_login_captcha").focus(function () {
        var e = $(this);
        var f = e.parent().siblings().find("img").attr("src");
        if (!f) {
            getNewCaptcha(e.parent().siblings().get(0), "sso");
            $(".e_login_captcha2").find("input[type=hidden]").attr("name", "capId").val(e.parent().siblings().find("input[type=hidden]").val())
        }
    });
    Utils.initPlaceholder($(".e_login_account"), "通行证账号", "login-form-tip");
    Utils.initPlaceholder($(".e_login_pass"), "密码", "login-form-tip");
    Utils.initPlaceholder($(".e_login_captcha"), "验证码", "login-form-tip");
    $(".e_login_form").attr("action", MPT.Config.req["login"]).Validform({
        tiptype: function (f, e) {
            $(".e_login_error").text(f);
            e.obj.keydown(function (g) {
                if (g.keyCode == 13) {
                    $(".e_login_submit").trigger("click")
                }
            })
        },
        datatype: {
            account: MPT.Config.regular["account"],
            password: MPT.Config.regular["password"],
            captcha: function () {
                var f = $(".e_login_captcha");
                var e = f.data("cl");
                if (!e) {
                    return true
                }
                return MPT.Config.regular["captcha"].test(f.val())
            }
        },
        beforeSubmit: function () {
            if (!_isTwoCaptcha) {
                var e = $(".e_login_captcha");
                if (e.val() == e.data("captcha")) {
                    $(".e_login_error").text(e.data("tip"));
                    return false
                }
                $(".e_login_submit").prop("disabled", true).val("登  录  中")
            }
        },
        callback: function () {
            var account = document.getElementById("identityId").value;
            var password = document.getElementById("credential").value;
             $.ajax({
                 type: 'post',
                 url: MPT.Config.req["login"],
                 data: {identityId:account,credential:password},
                 success: function (data) {
                     if(data.result == "success"){
                         Utils.toTargetView('http://www.baidu.com');
                     }else if(data.result == "user"){
                         popupAlert(MPT.Config.result["notExist"][1], function () {
                             location.reload();
                         });
                     }else if(data.result == "password"){
                         popupAlert(MPT.Config.result["accountError"][1], function () {
                             location.reload();
                         });
                     }
                 }
             });
            return false
        }
    });
    var c = MPT.Config.poster["passportLoginBg"], b = MPT.Config.poster["productPoster"], a = parseInt(Utils.cookie("isPosterShow") || 1);
    $.each(MPT.productInfo, function (e) {
        if (MPT.pid === MPT.productInfo[e].pid) {
            c = MPT.productInfo[e].passportLoginBgJs;
            b = MPT.productInfo[e].productPosterJs;
            return false
        }
    });
    $.getScript(c, function () {
        var e = [];
        $(d).css("background", "url(" + passportLoginBg[0].imgurl + ") no-repeat center top");
        if (passportLoginBg[0].url !== "javascript:;") {
            e = passportLoginBg[0].url.split("|");
            $(".e_main").prepend(MPT.getTmpl("t_login_url", e))
        }
    });
    if (a) {
        $.getScript(b, function () {
            $("body").append(MPT.getTmpl("t_product_poster", productPoster[0]));
            var e = $(".e_poster"), f = $(".e_poster_close"), g = e.find("img").parent().attr("href");
            if (g == "javascript:;" || g == "") {
                e.hide()
            } else {
                if (a) {
                    e.show()
                } else {
                    e.hide()
                }
            }
            e.click(function () {
                Utils.cookie("isPosterShow", 0, {expires: 1});
                e.hide()
            });
            f.click(function () {
                e.hide();
                return false
            })
        })
    }
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
            $(".e-mail-list").css({
                top: $(".e_mail_account").offset().top * 1 + $(".e_mail_account").height() + "px",
                left: ($(".e_mail_account").offset().left - 13) + "px"
            })
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
$(window).resize(function () {
    if ($(".e-mail-list").length != 0) {
        $(".e-mail-list").css({
            top: $(".e_mail_account").offset().top * 1 + $(".e_mail_account").height() + "px",
            left: ($(".e_mail_account").offset().left - 13) + "px"
        })
    }
});