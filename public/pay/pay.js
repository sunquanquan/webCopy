function payPopup(b, c) {
    var a = b.type == "sure2" ? "540" : "330";
    popup(MPT.getTmpl("t_pay_popup", {title: b.title, type: b.type}), {width: a}, function () {
        $(".e_pay_popup_content").html(MPT.getTmpl("t_pay_popup_" + b.type, b.data));
        if (c) {
            c()
        }
    })
}
function payPopupClose(a) {
    $.unblockUI({
        onUnblock: function () {
            if (a) {
                a()
            }
        }
    })
}
function serviceInfo(b, a) {
    if (!b) {
        var c = $(".e_pay_service");
        c.empty();
        $.each(c, function (g) {
            c.eq(g).append(MPT.getTmpl("t_pay_service", {
                type: g ? "email" : "phone",
                content: MPT.productInfo,
                pid: a
            }));
            var f = c.eq(g).find("input"), e = c.eq(g).find("ul"), d = c.eq(g).find("li");
            c.eq(g).off().on("mouseover", function () {
                e.show()
            }).on("mouseout", function () {
                e.hide()
            });
            d.off().on("click", function () {
                var h = $(this);
                var i = h.text();
                f.val(i);
                e.hide()
            }).filter(function () {
                return $(this).attr("selected")
            }).trigger("click")
        })
    }
}
function getPayTmpl(j, h, f) {
    var d = $(".e_pay_mode");
    var a = $(".e_pay_content");
    var h = h || 0;
    var i = $(".e_nest_accountName").val();
    var e = $(".e_nest_productId").val();
    var k = $(".e_nest_productName").val();
    var b = $(".e_nest_zoneId").val();
    var g = $(".e_nest_zoneName").val();
    var c = $(".e_nest_gpName").val();
    Utils.cookie("payMode", j);
    if (f) {
        MPT.payEntrance = 1
    }
    d.html(MPT.getTmpl("t_pay_mode", {payMode: j, isNest: h, productName: k, gpName: c}));
    switch (j) {
        case"zfb":
        case"zfbqr":
        case"wxqr":
            a.html(MPT.getTmpl("t_pay_zfb", {
                type: j,
                isNest: h,
                nestData: {accountName: i, productId: e, productName: k, zoneId: b, zoneName: g}
            }));
            payByZfbOrZfbqrOrWxqr(h);
            break;
        case"card":
            a.html(MPT.getTmpl("t_pay_card", {
                isNest: h,
                nestData: {accountName: i, productId: e, productName: k, zoneId: b, zoneName: g}
            }));
            payByCard(h);
            break;
        case"sftcard":
            a.html(MPT.getTmpl("t_pay_card_sft"));
            payByTrdCard("sftcard", "盛付通卡充值");
            break;
        case"jwcard":
            a.html(MPT.getTmpl("t_pay_card_jw"));
            payByTrdCard("jwcard", "骏网卡充值");
            break;
        case"mobile":
            a.html(MPT.getTmpl("t_pay_mobile"));
            payByMobile();
            break;
        default:
            a.html(MPT.getTmpl("t_pay_bank", {
                isNest: h,
                nestData: {accountName: i, productId: e, productName: k, zoneId: b, zoneName: g}
            }));
            payByBank(h)
    }
    payPublic(h)
}
function getPayAccount(c, a) {
    console.log(c);
    console.log(a);
    var b = Utils.cookie("accountName") || "";
    var a = a || 0;
    if (MPT.Config.accdata) {
        b = MPT.Config.accdata["accountName"]
    }
    $(".e_pay_account").html(MPT.getTmpl("t_pay_account", {payForMe: c, accountName: b, isClear: a}))
}
function payPublic(e) {
    var c = $(".e_productCode");
    var a = $(".e_productName");
    var d = $(".e_pay_product");
    var b = "";
    if (MPT.payEntrance) {
        b = Utils.cookie("pid3") || Utils.cookie("pid2") || Utils.cookie("pid") || MPT.pid
    } else {
        b = Utils.cookie("pid2") || Utils.cookie("pid") || MPT.pid
    }
    if (MPT.Config.accdata) {
        getPayAccount(1)
    } else {
        getPayAccount(0)
    }
    serviceInfo(e, b);
    $.ajax({
        type: "post", url: MPT.Config.req["getproductlist"], dataType: "json", error: function () {
            popupAlert("获取游戏列表失败！")
        }, success: function (p) {
            if (p.errorCode == MPT.Config.result["ok"]) {
                d.html(MPT.getTmpl("t_pay_product", p.bizObj));
                var g = $(document);
                var i = $(".e_product");
                var o = i.find(".e_selected");
                var n = i.find(".e_options");
                var l = n.find("a");
                var h = $(".e_zone");
                var j = h.find(".e_options");
                var f = $(".e_options");
                var m = 0;
                var k = 1;
                i.off().on("click", function (q) {
                    i.addClass("cur");
                    n.show();
                    h.removeClass("cur");
                    j.hide();
                    q.stopPropagation()
                });
                l.on("click", function (t) {
                    var s = $(this);
                    var r = s.data("pname");
                    var q = s.data("pid");
                    var v = s.data("gpname");
                    var u = c.val();
                    i.removeClass("cur");
                    h.removeClass("cur");
                    f.hide();
                    if (q == "p-p7") {
                        $(".tzj2-right-tips").remove();
                        h.after('<div style="color:#f00;" class="fl tzj2-right-tips">游戏内的充值类活动，请通过游戏内点击参与！</div>')
                    } else {
                        $(".tzj2-right-tips").remove()
                    }
                    if (q != u) {
                        o.val(r).trigger("blur");
                        c.val(q);
                        a.val(r);
                        Utils.cookie("pid2", q);
                        getZoneList(q, k);
                        MPT.payEntrance = 0;
                        MPT.gpName = v;
                        $(".e_gpName").html(v);
                        getParValue();
                        serviceInfo(e, q)
                    }
                    t.stopPropagation()
                });
                n.on("click", function (q) {
                    i.removeClass("cur");
                    h.removeClass("cur");
                    f.hide();
                    q.stopPropagation()
                });
                g.on("click", function () {
                    i.removeClass("cur");
                    h.removeClass("cur");
                    f.hide()
                });
                if (b) {
                    $.each(l, function (q) {
                        if (l.eq(q).data("pid") == b) {
                            m = q;
                            return false
                        }
                    });
                    l.eq(m).trigger("click");
                    k = 0
                } else {
                    k = 0
                }
            } else {
                d.html(MPT.getTmpl("t_pay_product"))
            }
        }
    })
}
function getZoneList(g, k) {
    var f = $(".e_zoneCode");
    var e = $(".e_zoneName");
    var d = $(document);
    var h = $(".e_zone");
    var a = h.find(".e_selected");
    var j = h.find(".e_options");
    var i = $(".e_product");
    var l = i.find(".e_options");
    var c = $(".e_options");
    if (k) {
        var b = "";
        var m = 0;
        if (MPT.payEntrance) {
            b = Utils.cookie("zid3") || Utils.cookie("zid2") || Utils.cookie("zid")
        } else {
            b = Utils.cookie("zid2") || Utils.cookie("zid")
        }
    }
    $.ajax({
        type: "post",
        url: MPT.Config.req["getzonelist"],
        dataType: "json",
        data: {pid: g},
        beforeSend: function () {
            a.val("请选择服务器");
            f.val(0);
            e.val("")
        },
        error: function () {
            popupAlert("获取大区列表失败！")
        },
        success: function (n) {
            if (n.errorCode == MPT.Config.result["ok"]) {
                j.html(MPT.getTmpl("t_pay_zonelist", n.bizObj));
                var o = j.find("a");
                h.off().on("click", function (p) {
                    h.addClass("cur");
                    j.show();
                    i.removeClass("cur");
                    l.hide();
                    p.stopPropagation()
                });
                o.on("click", function (s) {
                    var r = $(this);
                    var p = r.text();
                    var q = r.data("zid");
                    var t = f.val();
                    h.removeClass("cur");
                    i.removeClass("cur");
                    c.hide();
                    if (q != t) {
                        a.val(p).trigger("blur");
                        f.val(q);
                        e.val(p);
                        Utils.cookie("zid2", q);
                        MPT.payEntrance = 0
                    }
                    s.stopPropagation()
                });
                j.on("click", function (p) {
                    i.removeClass("cur");
                    h.removeClass("cur");
                    c.hide();
                    p.stopPropagation()
                });
                d.on("click", function () {
                    i.removeClass("cur");
                    h.removeClass("cur");
                    c.hide()
                });
                if (k && b) {
                    $.each(o, function (p) {
                        if (o.eq(p).data("zid") == b) {
                            m = p;
                            return false
                        }
                    });
                    o.eq(m).trigger("click")
                }
            } else {
                j.html(MPT.getTmpl("t_pay_zonelist"))
            }
        }
    })
}
function getDiscount() {
    var a = MPT.Config.accdata ? MPT.Config.accdata["vipLevel"] : 0;
    if (!MPT.Config.discount.length) {
        $.ajax({
            async: false, type: "post", url: MPT.Config.req["getdiscount"], dataType: "json", error: function () {
                popupAlert("获取折扣率失败！")
            }, success: function (b) {
                if (b.errorCode == MPT.Config.result["ok"]) {
                    $.each(b.bizObj, function (c) {
                        if (a == b.bizObj[c].level) {
                            MPT.Config.discount[c] = b.bizObj[c]
                        }
                    })
                } else {
                    MPT.Config.discount = []
                }
            }
        })
    }
}
function showDiscount(b) {
    var f = $(".e_discountWrap");
    f.html('（<span class="e_discount"></span>实际支付<strong class="e_actualpay"></strong>元，将获得<strong class="e_points"></strong><span class="e_gpName">' + MPT.gpName + "</span>）");
    var c = $(".e_discount");
    var e = $(".e_actualpay");
    var d = $(".e_points");
    var a = $(".e_bankCode").val();
    var i = 100;
    var g = 0;
    var h = 0;
    $.each(MPT.Config.discount, function (j) {
        if ((a == MPT.Config.discount[j]["chnCode"] || MPT.Config.discount[j]["chnCode"] == "all") && b >= MPT.Config.discount[j]["startNum"] && b <= MPT.Config.discount[j]["endNum"]) {
            i = MPT.Config.discount[j]["discount"];
            g = MPT.Config.discount[j]["sgpDiscount"];
            if (MPT.Config.discount[j]["chnCode"] == "all") {
            } else {
                return false
            }
        }
    });
    if (i == 100 && g == 0) {
        c.html("")
    } else {
        if (i == 100) {
            c.html("充值优惠中，可多获得<em>" + g / 10 + '%</em>的<span class="e_gpName">' + MPT.gpName + "</span>，")
        } else {
            if (g == 0) {
                c.html("充值<em>" + i / 10 + "折</em>优惠，")
            } else {
                c.html("充值<em>" + i / 10 + "折</em>优惠，并可多获得<em>" + g / 10 + '%</em>的<span class="e_gpName">' + MPT.gpName + "</span>，")
            }
        }
    }
    e.text((i / 100 * b).toFixed(2));
    h = 100 * b + 100 * b * g / 1000;
    d.text(parseInt(h, 10))
}
function getParValue(b) {
    var a = $(".e_pay_money");
    $.ajax({
        type: "post",
        url: MPT.Config.req["getparvalue"],
        dataType: "json",
        data: {pid: Utils.cookie("pid2") || Utils.cookie("pid") || MPT.pid},
        error: function () {
            popupAlert("获取充值金额失败！")
        },
        success: function (c) {
            if (c.errorCode == MPT.Config.result["ok"]) {
                if (b != "card") {
                    a.html(MPT.getTmpl("t_pay_money", c.bizObj));
                    payMoneyFunc()
                } else {
                    MPT.Config.card = c.bizObj
                }
            } else {
                if (b != "card") {
                    a.html(MPT.getTmpl("t_pay_money"))
                }
            }
        }
    })
}
function payMoneyFunc() {
    var e = $(".e_savedMoneyAmount");
    var d = $(".e_pay_money li a");
    var c = $(".e_money_txt");
    var b = Utils.cookie("savedMoneyAmount3") || Utils.cookie("savedMoneyAmount");
    var a = 0;
    getDiscount();
    Utils.initPlaceholder(c, "其他金额", "pay-money-txt-tip");
    if (b) {
        $.each(d, function (f) {
            var g = $(this).data("money");
            if (g == b) {
                a = f;
                return false
            }
        })
    }
    d.click(function () {
        var g = $(this);
        var f = parseInt(g.data("money"), 10);
        g.parent("li").addClass("cur").siblings().removeClass("cur");
        e.val(f);
        showDiscount(f)
    }).eq(a).trigger("click");
    c.on("focus", function () {
        var f = parseInt(c.val() || 0, 10);
        var g = $(".e_discount");
        c.parent("li").addClass("cur").siblings().removeClass("cur");
        e.val(f);
        g.parent().html('<span style="color:#f00;">充值金额必须为100的倍数</span>')
    }).on("blur", function () {
        var f = parseInt(c.val() || 0, 10);
        var g = $(".e_discount");
        if (c.parent().hasClass("cur")) {
            if (f < 100 || f > 99900 || (f % 100 != 0) || f == "") {
                g.parent().html('<span style="color:#f00;">充值金额必须为100的倍数</span>');
                return false
            } else {
                c.parent("li").addClass("cur").siblings().removeClass("cur");
                e.val(f);
                showDiscount(f)
            }
        }
    })
}
function getCaptcha() {
    $(".e_pay_captcha").html(MPT.getTmpl("t_pay_captcha")).show().find("input").focus();
    getNewCaptcha($(".e_captcha_pic").get(0), "order")
}
function payCheck(a, b) {
    var c = $(".e_pay_info");
    var d = $(".e_pay_popup_btn");
    var b = b || 0;
    if (b && MPT.scanSuccess) {
        return false
    }
    $.ajax({
        type: "post",
        url: MPT.Config.req["checkpay"],
        dataType: "json",
        data: {orderId: a},
        beforeSend: function () {
            d.prop("disabled", true)
        },
        error: function () {
            popupAlert("订单查询失败！");
            d.removeAttr("disabled")
        },
        success: function (e) {
            switch (e.errorCode) {
                case MPT.Config.result["ok"]:
                    if (b) {
                        MPT.scanSuccess = 1
                    }
                    payPopup({title: "充值成功", type: "ok", data: $.extend({}, e.bizObj, {gpName: MPT.gpName})});
                    c.html(MPT.getTmpl("t_public_info", {
                        eaccountName: (MPT.Config.accdata) ? MPT.Config.accdata["eaccountName"] : "",
                        productName: Utils.cookie("productName"),
                        zoneName: Utils.cookie("zoneName"),
                        payMode: Utils.cookie("payMode")
                    }));
                    Utils.cookie("savedMoneyAmount3", Utils.cookie("savedMoneyAmount"));
                    Utils.cookie("bankCode3", Utils.cookie("bankCode"));
                    Utils.cookie("pid3", Utils.cookie("pid"));
                    Utils.cookie("zid3", Utils.cookie("zid"));
                    Utils.cookie("payMode3", Utils.cookie("payMode"));
                    break;
                case MPT.Config.result["notPay"][0]:
                    if (b && MPT.scanCount <= 200) {
                        setTimeout(function () {
                            payCheck(a, b);
                            MPT.scanCount++
                        }, 3000)
                    } else {
                        payPopup({title: "充值失败", type: "fail", data: {error: MPT.Config.result["notPay"][1]}})
                    }
                    break;
                case MPT.Config.result["payToGame"][0]:
                    if (b) {
                        if (MPT.scanPayToGameAgain) {
                            payPopup({title: "充值失败", type: "fail", data: {error: MPT.Config.result["payToGame"][1]}})
                        } else {
                            MPT.scanPayToGameAgain = 1;
                            setTimeout(function () {
                                payCheck(a, b)
                            }, 3000)
                        }
                    } else {
                        payPopup({title: "充值失败", type: "fail", data: {error: MPT.Config.result["payToGame"][1]}})
                    }
                    break;
                case MPT.Config.result["payError"][0]:
                    payPopup({title: "充值失败", type: "fail", data: {error: MPT.Config.result["payError"][1]}});
                    break;
                case MPT.Config.result["payToGameError"][0]:
                    payPopup({title: "充值失败", type: "fail", data: {error: MPT.Config.result["payToGameError"][1]}});
                    break;
                default:
                    payPopup({title: "充值失败", type: "fail", data: {error: e.errorCode}})
            }
        }
    })
}
function paySure(g, f) {
    var b = $(".e_pay_info");
    var a = $(".e_form");
    var e = $(".e_pay_popup_btn");
    var c = g == "mobile" ? MPT.Config.req["mobilepay"] : MPT.Config.req["cardpay"];
    var d = g == "mobile" ? 120000 : 20000;
    if (f && g == "card") {
        c = MPT.Config.req["gcardpay"]
    }
    $.ajax({
        type: "post", url: c, dataType: "json", data: a.serialize(), timeout: d, beforeSend: function () {
            e.prop("disabled", true).text("正在充值...")
        }, complete: function () {
            e.removeAttr("disabled").text("确认支付")
        }, error: function (h, j, i) {
            if (j == "timeout") {
                popupAlert("处理时间超时，稍后请在充值记录中查询！")
            } else {
                popupAlert("充值失败")
            }
        }, success: function (s) {
            var j = $(".e_accountName_tip");
            var o = $(".e_captcha_pic");
            var r = $(".e_captcha_tip");
            var n = $(".e_pay_captcha").find("[type=hidden]");
            var i = $(".e_pay_captcha").find("[type=text]");
            var p = $(".e_cardid");
            var q = $(".e_cardpass");
            var h = $(".e_cardid_tip");
            var m = $(".e_cardpass_tip");
            switch (s.errorCode) {
                case MPT.Config.result["ok"]:
                    var l;
                    var k;
                    if (g == "card") {
                        l = s.bizObj.sma * 100;
                        k = decodeURIComponent(s.bizObj.sgmt)
                    } else {
                        l = Utils.cookie("cardParvalue") * 100;
                        k = decodeURIComponent(s.bizObj || MPT.gpName)
                    }
                    payPopup({title: "充值成功", type: "ok", data: {gp: l, gpName: k}});
                    b.html(MPT.getTmpl("t_public_info", {
                        eaccountName: (MPT.Config.accdata) ? MPT.Config.accdata["eaccountName"] : "",
                        productName: Utils.cookie("productName"),
                        zoneName: Utils.cookie("zoneName"),
                        payMode: Utils.cookie("payMode")
                    }));
                    if (g == "mobile") {
                        Utils.cookie("serverCode3", Utils.cookie("serverCode"));
                        Utils.cookie("cardParvalue3", Utils.cookie("cardParvalue"));
                        Utils.cookie("pid3", Utils.cookie("pid"));
                        Utils.cookie("zid3", Utils.cookie("zid"));
                        Utils.cookie("payMode3", Utils.cookie("payMode"))
                    }
                    n.val("");
                    p.val("");
                    q.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["notExist"][0]:
                    payPopupClose(function () {
                        j.text(MPT.Config.result["notExist"][1]);
                        n.val("");
                        if (o.length) {
                            getNewCaptcha(o.get(0), "order");
                            i.val("")
                        }
                    });
                    break;
                case MPT.Config.result["captchaExpired"][0]:
                    payPopupClose(function () {
                        r.text(MPT.Config.result["captchaExpired"][1]);
                        n.val("");
                        if (o.length) {
                            getNewCaptcha(o.get(0), "order");
                            i.val("")
                        }
                    });
                    break;
                case MPT.Config.result["captchaError"][0]:
                    payPopupClose(function () {
                        r.text(MPT.Config.result["captchaError"][1])
                    });
                    break;
                case MPT.Config.result["cardError"][0]:
                    payPopupClose(function () {
                        h.text(MPT.Config.result["cardError"][1]);
                        n.val("");
                        if (o.length) {
                            getNewCaptcha(o.get(0), "order");
                            i.val("")
                        }
                    });
                    break;
                case MPT.Config.result["cardUnmatch"][0]:
                    payPopupClose(function () {
                        h.text(MPT.Config.result["cardUnmatch"][1]);
                        n.val("");
                        if (o.length) {
                            getNewCaptcha(o.get(0), "order");
                            i.val("")
                        }
                    });
                    break;
                case MPT.Config.result["payClose"][0]:
                    popupAlert(MPT.Config.result["payClose"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["mPayFail"][0]:
                    popupAlert(MPT.Config.result["mPayFail"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["mSysBusy"][0]:
                    popupAlert(MPT.Config.result["mSysBusy"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["mNoRepeatForSucc"][0]:
                    popupAlert(MPT.Config.result["mNoRepeatForSucc"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["mPaymentClose"][0]:
                    popupAlert(MPT.Config.result["mPaymentClose"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["mParvalueClose"][0]:
                    popupAlert(MPT.Config.result["mParvalueClose"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["mNoPayment"][0]:
                    popupAlert(MPT.Config.result["mNoPayment"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["mNoBalance"][0]:
                    popupAlert(MPT.Config.result["mNoBalance"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["mNoRepeatForFail"][0]:
                    popupAlert(MPT.Config.result["mNoRepeatForFail"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["mCardIsUsing"][0]:
                    payPopupClose(function () {
                        h.text(MPT.Config.result["mCardIsUsing"][1]);
                        n.val("");
                        if (o.length) {
                            getNewCaptcha(o.get(0), "order");
                            i.val("")
                        }
                    });
                    break;
                case MPT.Config.result["mPayFailAgain"][0]:
                    payPopupClose(function () {
                        h.text(MPT.Config.result["mPayFailAgain"][1]);
                        n.val("");
                        if (o.length) {
                            getNewCaptcha(o.get(0), "order");
                            i.val("")
                        }
                    });
                    break;
                case MPT.Config.result["mCardProcess"][0]:
                    payPopupClose(function () {
                        h.text(MPT.Config.result["mCardProcess"][1]);
                        n.val("");
                        if (o.length) {
                            getNewCaptcha(o.get(0), "order");
                            i.val("")
                        }
                    });
                    break;
                case MPT.Config.result["mSysBusy2"][0]:
                    popupAlert(MPT.Config.result["mSysBusy2"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["mNoMultiCard"][0]:
                    popupAlert(MPT.Config.result["mNoMultiCard"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["mParvalueError"][0]:
                    popupAlert(MPT.Config.result["mParvalueError"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["mOrderProcess"][0]:
                    popupAlert(MPT.Config.result["mOrderProcess"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["mSysBusy3"][0]:
                    popupAlert(MPT.Config.result["mSysBusy3"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["mNoPay"][0]:
                    popupAlert(MPT.Config.result["mNoPay"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["mCardExpired"][0]:
                    payPopupClose(function () {
                        h.text(MPT.Config.result["mCardExpired"][1]);
                        n.val("");
                        if (o.length) {
                            getNewCaptcha(o.get(0), "order");
                            i.val("")
                        }
                    });
                    break;
                case MPT.Config.result["mSysBusy4"][0]:
                    popupAlert(MPT.Config.result["mSysBusy4"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["mInsufficientMoney"][0]:
                    popupAlert(MPT.Config.result["mInsufficientMoney"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["mExpiredCardNo"][0]:
                    payPopupClose(function () {
                        m.text(MPT.Config.result["mExpiredCardNo"][1]);
                        n.val("");
                        if (o.length) {
                            getNewCaptcha(o.get(0), "order");
                            i.val("")
                        }
                    });
                    break;
                case MPT.Config.result["mNoPay2"][0]:
                    popupAlert(MPT.Config.result["mNoPay2"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["mSysBusy5"][0]:
                    popupAlert(MPT.Config.result["mSysBusy5"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["mMD5Error"][0]:
                    popupAlert(MPT.Config.result["mMD5Error"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["mTimeout"][0]:
                    popupAlert(MPT.Config.result["mTimeout"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["mInternalError"][0]:
                    popupAlert(MPT.Config.result["mInternalError"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                case MPT.Config.result["chanDisabError"][0]:
                    popupAlert(MPT.Config.result["chanDisabError"][1]);
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
                    break;
                default:
                    payPopup({title: "充值失败", type: "fail", data: {error: s.errorCode}});
                    n.val("");
                    if (o.length) {
                        getNewCaptcha(o.get(0), "order");
                        i.val("")
                    }
            }
        }
    })
}
function payByBank(h) {
    var f = $(".e_bankCode");
    var e = $(".e_bankName");
    var g = $(".e_banks");
    var i = g.find("a");
    var j = $(".e_bank_more");
    var a = Utils.cookie("bankCode3") || Utils.cookie("bankCode");
    var b = 0;
    var k = $(".e_form");
    var c = $(".e_submit");
    var d = 1;
    getParValue();
    if (a) {
        $.each(i, function (l) {
            if ($(this).data("bank") == a) {
                b = l;
                return false
            }
        })
    }
    i.click(function () {
        var o = $(this);
        var n = o.data("bank");
        var l = o.text();
        o.parent().addClass("cur").siblings().removeClass("cur");
        f.val(n);
        e.val(l);
        var m = $(".e_savedMoneyAmount").val();
        if (!m) {
            m = 0
        }
        showDiscount(m)
    }).eq(b).trigger("click");
    j.click(function () {
        if (j.data("show")) {
            g.css("height", "144px");
            j.html("更多银行&nbsp;&#9660;").data("show", 0)
        } else {
            g.css("height", "auto");
            j.html("收起银行&nbsp;&#9650;").data("show", 1)
        }
    });
    if (b > 11) {
        j.trigger("click")
    }
    k.Validform({
        tiptype: function (m, l) {
            l.obj.siblings(".Validform_checktip").text(m);
            if (l.type == 2) {
                d = 1
            }
            if (l.type == 3) {
                d = 0
            }
        }, beforeCheck: function () {
            if (!d) {
                return false
            }
        }, beforeSubmit: function () {
            var n = $(".e_discountWrap"), m = $(".e_money_txt"), l = parseInt(m.val() || 0, 10);
            if (m.parent().hasClass("cur")) {
                if (l < 100 || l > 99900 || (l % 100 != 0) || l == "") {
                    n.html('<span style="color:#f00;">充值金额必须为100的倍数</span>');
                    return false
                }
            }
            c.prop("disabled", true).val("提交中...")
        }, callback: function () {
            $.ajax({
                type: "post",
                url: h ? MPT.Config.req["gbankpay"] : MPT.Config.req["bankpay"],
                dataType: "json",
                data: k.serialize(),
                complete: function () {
                    var m = $(".e_captcha_pic");
                    var l = $(".e_pay_captcha").find("[type=text]");
                    if (m.length) {
                        getNewCaptcha(m.get(0), "order");
                        l.val("")
                    }
                    c.removeAttr("disabled").val("确定充值")
                },
                error: function () {
                    popupAlert("充值订单提交失败")
                },
                success: function (z) {
                    var n = $(".e_accountName_tip");
                    var y = $(".e_captcha_tip");
                    var t = $(".e_pay_captcha").find("[type=hidden]");
                    var m = $(".e_pay_captcha").find("[type=text]");
                    var r = $(".e_accountName").val();
                    var v = $(".e_productName").val();
                    var q = $(".e_zoneName").val();
                    var u = $(".e_productCode").val();
                    var x = $(".e_zoneCode").val();
                    var o = $(".e_savedMoneyAmount").val();
                    var w = $(".e_actualpay").text();
                    var p = $(".e_points").text();
                    var s = e.val();
                    var l = f.val();
                    Utils.cookie("accountName", r);
                    Utils.cookie("pid", u);
                    Utils.cookie("zid", x);
                    Utils.cookie("savedMoneyAmount", o);
                    Utils.cookie("bankCode", l);
                    Utils.cookie("payMode", "bank");
                    Utils.cookie("productName", v);
                    Utils.cookie("zoneName", q);
                    switch (z.errorCode) {
                        case MPT.Config.result["ok"]:
                            payPopup({
                                title: "确认充值",
                                type: "sure",
                                data: {
                                    account: r,
                                    product: v,
                                    zone: q,
                                    money: o,
                                    actualPay: w,
                                    points: p,
                                    channel: s,
                                    payMode: "bank",
                                    payUrl: z.bizObj.payUrl,
                                    gpn: MPT.gpName
                                }
                            }, function () {
                                $(".e_pay_popup_btn").click(function () {
                                    payPopup({
                                        title: "网银支付提示",
                                        type: "tip",
                                        data: {product: v, payMode: "bank", channel: "银行卡充值"}
                                    }, function () {
                                        $(".e_pay_popup_btn").click(function () {
                                            payCheck(z.bizObj.orderId)
                                        })
                                    })
                                })
                            });
                            t.val("");
                            break;
                        case MPT.Config.result["captchaNull"][0]:
                            getCaptcha();
                            d = 0;
                            break;
                        case MPT.Config.result["captchaExpired"][0]:
                            y.text(MPT.Config.result["captchaExpired"][1]);
                            d = 0;
                            t.val("");
                            break;
                        case MPT.Config.result["captchaError"][0]:
                            y.text(MPT.Config.result["captchaError"][1]);
                            d = 0;
                            break;
                        case MPT.Config.result["notExist"][0]:
                            n.text(MPT.Config.result["notExist"][1]);
                            d = 0;
                            t.val("");
                            break;
                        case MPT.Config.result["payClose"][0]:
                            popupAlert(MPT.Config.result["payClose"][1]);
                            t.val("");
                            break;
                        case MPT.Config.result["payCloseZone"][0]:
                            popupAlert(MPT.Config.result["payCloseZone"][1]);
                            t.val("");
                            break;
                        case MPT.Config.result["chanDisabError"][0]:
                            popupAlert(MPT.Config.result["chanDisabError"][1]);
                            t.val("");
                            break;
                        default:
                            popupAlert("充值订单提交失败，失败原因：" + z.errorCode);
                            t.val("")
                    }
                }
            });
            return false
        }
    })
}
function payByZfbOrZfbqrOrWxqr(c) {
    var a = $(".e_form");
    var d = $(".e_submit");
    var b = 1;
    getParValue();
    a.Validform({
        tiptype: function (f, e) {
            e.obj.siblings(".Validform_checktip").text(f);
            if (e.type == 2) {
                b = 1
            }
            if (e.type == 3) {
                b = 0
            }
        }, beforeCheck: function () {
            if (!b) {
                return false
            }
        }, beforeSubmit: function () {
            var g = $(".e_discountWrap"), f = $(".e_money_txt"), e = parseInt(f.val() || 0, 10);
            if (f.parent().hasClass("cur")) {
                if (e < 100 || e > 99900 || (e % 100 != 0) || e == "") {
                    g.html('<span style="color:#f00;">充值金额必须为100的倍数</span>');
                    return false
                }
            }
            d.prop("disabled", true).val("提交中...")
        }, callback: function () {
            $.ajax({
                type: "post",
                url: c ? MPT.Config.req["gbankpay"] : MPT.Config.req["bankpay"],
                dataType: "json",
                data: a.serialize(),
                complete: function () {
                    var f = $(".e_captcha_pic");
                    var e = $(".e_pay_captcha").find("[type=text]");
                    if (f.length) {
                        getNewCaptcha(f.get(0), "order");
                        e.val("")
                    }
                    d.removeAttr("disabled").val("确定充值")
                },
                error: function () {
                    popupAlert("充值订单提交失败")
                },
                success: function (s) {
                    var f = $(".e_accountName_tip");
                    var r = $(".e_captcha_tip");
                    var k = $(".e_pay_captcha").find("[type=hidden]");
                    var e = $(".e_pay_captcha").find("[type=text]");
                    var j = $(".e_accountName").val();
                    var o = $(".e_productName").val();
                    var i = $(".e_zoneName").val();
                    var l = $(".e_productCode").val();
                    var q = $(".e_zoneCode").val();
                    var g = $(".e_savedMoneyAmount").val();
                    var p = $(".e_actualpay").text();
                    var h = $(".e_points").text();
                    var n = parseInt($(".e_scanCode").val());
                    var m = $(".e_bankCode").val();
                    Utils.cookie("accountName", j);
                    Utils.cookie("pid", l);
                    Utils.cookie("zid", q);
                    Utils.cookie("savedMoneyAmount", g);
                    Utils.cookie("productName", o);
                    Utils.cookie("zoneName", i);
                    Utils.cookie("payMode", m);
                    if (n) {
                        MPT.scanSuccess = 0
                    }
                    switch (s.errorCode) {
                        case MPT.Config.result["ok"]:
                            payPopup({
                                title: n ? "确认订单及支付" : "确认充值",
                                type: n ? "sure2" : "sure",
                                data: {
                                    account: j,
                                    product: o,
                                    zone: i,
                                    money: g,
                                    actualPay: p,
                                    points: h,
                                    channel: "支付宝充值",
                                    payMode: m,
                                    payUrl: s.bizObj.payUrl,
                                    gpn: MPT.gpName
                                }
                            }, function () {
                                if (n) {
                                    MPT.scanCount = 0;
                                    setTimeout(function () {
                                        payCheck(s.bizObj.orderId, n);
                                        MPT.scanCount++
                                    }, 3000);
                                    $(".e_pay_popup_close,.e_pay_popup_cancel,.e_pay_popup_btn_back").click(function () {
                                        MPT.scanSuccess = 1;
                                        $.unblockUI()
                                    })
                                } else {
                                    $(".e_pay_popup_btn").click(function () {
                                        payPopup({
                                            title: "支付宝支付提示",
                                            type: "tip",
                                            data: {product: o, payMode: "zfb", channel: "支付宝充值"}
                                        }, function () {
                                            $(".e_pay_popup_btn").click(function () {
                                                payCheck(s.bizObj.orderId)
                                            })
                                        })
                                    })
                                }
                            });
                            k.val("");
                            break;
                        case MPT.Config.result["captchaNull"][0]:
                            getCaptcha();
                            b = 0;
                            break;
                        case MPT.Config.result["captchaExpired"][0]:
                            r.text(MPT.Config.result["captchaExpired"][1]);
                            b = 0;
                            k.val("");
                            break;
                        case MPT.Config.result["captchaError"][0]:
                            r.text(MPT.Config.result["captchaError"][1]);
                            b = 0;
                            break;
                        case MPT.Config.result["notExist"][0]:
                            f.text(MPT.Config.result["notExist"][1]);
                            b = 0;
                            k.val("");
                            break;
                        case MPT.Config.result["payClose"][0]:
                            popupAlert(MPT.Config.result["payClose"][1]);
                            k.val("");
                            break;
                        case MPT.Config.result["payCloseZone"][0]:
                            popupAlert(MPT.Config.result["payCloseZone"][1]);
                            k.val("");
                            break;
                        case MPT.Config.result["chanDisabError"][0]:
                            popupAlert(MPT.Config.result["chanDisabError"][1]);
                            k.val("");
                            break;
                        default:
                            popupAlert("充值订单提交失败，失败原因：" + s.errorCode);
                            k.val("")
                    }
                }
            });
            return false
        }
    })
}
function payByCard(d) {
    var e = $(".e_cardsInfo");
    var a = $(".e_cardid");
    var g = $(".e_cardpass");
    var b = $(".e_form");
    var f = $(".e_submit");
    var c = 1;
    b.Validform({
        tiptype: function (i, h) {
            h.obj.siblings(".Validform_checktip").text(i);
            if (h.type == 2) {
                c = 1
            }
            if (h.type == 3) {
                c = 0
            }
        }, beforeCheck: function () {
            var i = b.find(".Validform_checktip");
            var h = 0;
            $.each(i, function (j) {
                if (i.eq(j).html() == "&nbsp;" || i.eq(j).html() == "") {
                    h = 0
                } else {
                    h = 1;
                    return false
                }
            });
            if (!c || h) {
                return false
            }
        }, beforeSubmit: function () {
            var i = a.val();
            var h = g.val();
            e.val(i + ":" + h);
            f.prop("disabled", true).val("提交中...")
        }, callback: function () {
            $.ajax({
                type: "post",
                url: MPT.Config.req["validcap"],
                dataType: "json",
                data: b.serialize(),
                complete: function () {
                    f.removeAttr("disabled").val("确定充值")
                },
                error: function () {
                    popupAlert("充值订单提交失败")
                },
                success: function (r) {
                    var i = $(".e_accountName_tip");
                    var q = $(".e_captcha_tip");
                    var l = $(".e_pay_captcha").find("[type=hidden]");
                    var h = $(".e_pay_captcha").find("[type=text]");
                    var m = $(".e_captcha_pic");
                    var k = $(".e_accountName").val();
                    var o = $(".e_productName").val();
                    var j = $(".e_zoneName").val();
                    var n = $(".e_productCode").val();
                    var p = $(".e_zoneCode").val();
                    Utils.cookie("accountName", k);
                    Utils.cookie("pid", n);
                    Utils.cookie("zid", p);
                    Utils.cookie("payMode", "card");
                    Utils.cookie("productName", o);
                    Utils.cookie("zoneName", j);
                    switch (r.errorCode) {
                        case MPT.Config.result["ok"]:
                            payPopup({
                                title: "确认充值",
                                type: "sure",
                                data: {account: k, product: o, zone: j, channel: "绿岸一卡通充值", gpn: MPT.gpName}
                            }, function () {
                                $(".e_pay_popup_btn").click(function () {
                                    paySure("card", d)
                                })
                            });
                            break;
                        case MPT.Config.result["captchaNull"][0]:
                            getCaptcha();
                            c = 0;
                            break;
                        case MPT.Config.result["captchaExpired"][0]:
                            q.text(MPT.Config.result["captchaExpired"][1]);
                            c = 0;
                            l.val("");
                            getNewCaptcha(m.get(0), "order");
                            break;
                        case MPT.Config.result["captchaError"][0]:
                            q.text(MPT.Config.result["captchaError"][1]);
                            c = 0;
                            break;
                        case MPT.Config.result["notExist"][0]:
                            i.text(MPT.Config.result["notExist"][1]);
                            c = 0;
                            break;
                        case MPT.Config.result["payClose"][0]:
                            popupAlert(MPT.Config.result["payClose"][1]);
                            break;
                        case MPT.Config.result["payCloseZone"][0]:
                            popupAlert(MPT.Config.result["payCloseZone"][1]);
                            break;
                        default:
                            popupAlert("充值订单提交失败，失败原因：" + r.errorCode)
                    }
                }
            });
            return false
        }
    })
}
function payByTrdCard(l, h) {
    var d = $(".e_cardParvalue");
    var e = $(".e_card_value a");
    var g = $(".e_points");
    var c = $(".e_cardsInfo");
    var j = $(".e_cardid");
    var k = $(".e_cardpass");
    var m = $(".e_form");
    var a = $(".e_submit");
    var i = 0;
    var f = Utils.cookie("cardParvalue3") || Utils.cookie("cardParvalue");
    var b = 1;
    if (f) {
        $.each(e, function (n) {
            if ($(this).data("value") == f) {
                i = n;
                return false
            }
        })
    }
    e.click(function () {
        var o = $(this);
        var n = o.data("value");
        o.parent().addClass("cur").siblings().removeClass("cur");
        d.val(n);
        g.text(n * 100 + "点")
    }).eq(i).trigger("click");
    m.Validform({
        tiptype: function (p, n) {
            n.obj.siblings(".Validform_checktip").text(p);
            if (n.type == 2) {
                b = 1
            }
            if (n.type == 3) {
                b = 0
            }
        }, beforeCheck: function () {
            var o = m.find(".Validform_checktip");
            var n = 0;
            $.each(o, function (p) {
                if (o.eq(p).html() == "&nbsp;" || o.eq(p).html() == "") {
                    n = 0
                } else {
                    n = 1;
                    return false
                }
            });
            if (!b || n) {
                return false
            }
        }, beforeSubmit: function () {
            var o = j.val();
            var n = k.val();
            c.val(o + ":" + n);
            a.prop("disabled", true).val("提交中...")
        }, callback: function () {
            $.ajax({
                type: "post",
                url: MPT.Config.req["validcap"],
                dataType: "json",
                data: m.serialize(),
                complete: function () {
                    a.removeAttr("disabled").val("确定充值")
                },
                error: function () {
                    popupAlert("充值订单提交失败")
                },
                success: function (A) {
                    var o = $(".e_accountName_tip");
                    var z = $(".e_captcha_tip");
                    var u = $(".e_pay_captcha").find("[type=hidden]");
                    var n = $(".e_pay_captcha").find("[type=text]");
                    var v = $(".e_captcha_pic");
                    var s = $(".e_accountName").val();
                    var x = $(".e_productName").val();
                    var r = $(".e_zoneName").val();
                    var w = $(".e_productCode").val();
                    var y = $(".e_zoneCode").val();
                    var p = $(".e_cardParvalue").val();
                    var q = p * 100;
                    var t;
                    Utils.cookie("accountName", s);
                    Utils.cookie("pid", w);
                    Utils.cookie("zid", y);
                    Utils.cookie("cardParvalue", p);
                    Utils.cookie("payMode", "card");
                    Utils.cookie("productName", x);
                    Utils.cookie("zoneName", r);
                    switch (A.errorCode) {
                        case MPT.Config.result["ok"]:
                            payPopup({
                                title: "确认充值",
                                type: "sure",
                                data: {
                                    account: s,
                                    product: x,
                                    zone: r,
                                    money: p,
                                    points: q,
                                    channel: h,
                                    gpn: MPT.gpName
                                }
                            }, function () {
                                $(".e_pay_popup_btn").click(function () {
                                    paySure(l)
                                })
                            });
                            break;
                        case MPT.Config.result["captchaNull"][0]:
                            getCaptcha();
                            b = 0;
                            break;
                        case MPT.Config.result["captchaExpired"][0]:
                            z.text(MPT.Config.result["captchaExpired"][1]);
                            b = 0;
                            u.val("");
                            getNewCaptcha(v.get(0), "order");
                            break;
                        case MPT.Config.result["captchaError"][0]:
                            z.text(MPT.Config.result["captchaError"][1]);
                            b = 0;
                            break;
                        case MPT.Config.result["notExist"][0]:
                            o.text(MPT.Config.result["notExist"][1]);
                            b = 0;
                            break;
                        case MPT.Config.result["payClose"][0]:
                            popupAlert(MPT.Config.result["payClose"][1]);
                            break;
                        case MPT.Config.result["payCloseZone"][0]:
                            popupAlert(MPT.Config.result["payCloseZone"][1]);
                            break;
                        case MPT.Config.result["chanDisabError"][0]:
                            popupAlert(MPT.Config.result["chanDisabError"][1]);
                            break;
                        default:
                            popupAlert("充值订单提交失败，失败原因：" + A.errorCode)
                    }
                }
            });
            return false
        }
    })
}
function payByMobile() {
    var i = $(".e_serverCode");
    var d = $(".e_cardParvalue");
    var j = $(".e_mobile_server a");
    var g = $(".e_mobile_value a");
    var f = $(".e_points");
    var k = $(".e_form");
    var b = $(".e_submit");
    var c = 1;
    var a = Utils.cookie("serverCode3") || Utils.cookie("serverCode");
    var e = Utils.cookie("cardParvalue3") || Utils.cookie("cardParvalue");
    var h = cardParvalueIndex = 0;
    if (a) {
        $.each(j, function (l) {
            if ($(this).data("server") == a) {
                h = l;
                return false
            }
        })
    }
    if (e) {
        $.each(g, function (l) {
            if ($(this).data("value") == e) {
                cardParvalueIndex = l;
                return false
            }
        })
    }
    j.click(function () {
        var m = $(this);
        var l = m.data("server");
        m.parent().addClass("cur").siblings().removeClass("cur");
        i.val(l)
    }).eq(h).trigger("click");
    g.click(function () {
        var m = $(this);
        var l = m.data("value");
        m.parent().addClass("cur").siblings().removeClass("cur");
        d.val(l);
        f.text(l * 100 + "点")
    }).eq(cardParvalueIndex).trigger("click");
    k.Validform({
        tiptype: function (m, l) {
            l.obj.siblings(".Validform_checktip").text(m);
            if (l.type == 2) {
                c = 1
            }
            if (l.type == 3) {
                c = 0
            }
        }, beforeCheck: function () {
            if (!c) {
                return false
            }
        }, beforeSubmit: function () {
            b.prop("disabled", true).val("提交中...")
        }, callback: function () {
            $.ajax({
                type: "post",
                url: MPT.Config.req["mobilepay"],
                dataType: "json",
                data: k.serialize(),
                complete: function () {
                    b.removeAttr("disabled").val("确定充值")
                },
                error: function () {
                    popupAlert("充值订单提交失败")
                },
                success: function (x) {
                    var m = $(".e_accountName_tip");
                    var w = $(".e_captcha_tip");
                    var r = $(".e_pay_captcha").find("[type=hidden]");
                    var l = $(".e_pay_captcha").find("[type=text]");
                    var s = $(".e_captcha_pic");
                    var q = $(".e_accountName").val();
                    var u = $(".e_productName").val();
                    var p = $(".e_zoneName").val();
                    var t = $(".e_productCode").val();
                    var v = $(".e_zoneCode").val();
                    var n = $(".e_cardParvalue").val();
                    var o = n * 100;
                    Utils.cookie("accountName", q);
                    Utils.cookie("pid", t);
                    Utils.cookie("zid", v);
                    Utils.cookie("serverCode", i.val());
                    Utils.cookie("cardParvalue", n);
                    Utils.cookie("payMode", "mobile");
                    Utils.cookie("productName", u);
                    Utils.cookie("zoneName", p);
                    switch (x.errorCode) {
                        case MPT.Config.result["ok"]:
                            payPopup({
                                title: "确认充值",
                                type: "sure",
                                data: {
                                    account: q,
                                    product: u,
                                    zone: p,
                                    money: n,
                                    points: o,
                                    channel: "手机卡充值",
                                    gpn: MPT.gpName,
                                    payMode: "mobile",
                                    payUrl: x.bizObj.payUrl
                                }
                            }, function () {
                                $(".e_pay_popup_btn").click(function () {
                                    payPopup({
                                        title: "手机卡支付提示",
                                        type: "tip",
                                        data: {product: u, payMode: "bank", channel: "手机卡支付"}
                                    }, function () {
                                        $(".e_pay_popup_btn").click(function () {
                                            payCheck(x.bizObj.orderId)
                                        })
                                    })
                                })
                            });
                            break;
                        case MPT.Config.result["captchaNull"][0]:
                            getCaptcha();
                            c = 0;
                            break;
                        case MPT.Config.result["captchaExpired"][0]:
                            w.text(MPT.Config.result["captchaExpired"][1]);
                            c = 0;
                            r.val("");
                            getNewCaptcha(s.get(0), "order");
                            break;
                        case MPT.Config.result["captchaError"][0]:
                            w.text(MPT.Config.result["captchaError"][1]);
                            c = 0;
                            break;
                        case MPT.Config.result["notExist"][0]:
                            m.text(MPT.Config.result["notExist"][1]);
                            c = 0;
                            break;
                        case MPT.Config.result["payClose"][0]:
                            popupAlert(MPT.Config.result["payClose"][1]);
                            break;
                        case MPT.Config.result["payCloseZone"][0]:
                            popupAlert(MPT.Config.result["payCloseZone"][1]);
                            break;
                        case MPT.Config.result["chanDisabError"][0]:
                            popupAlert(MPT.Config.result["chanDisabError"][1]);
                            break;
                        default:
                            popupAlert("充值订单提交失败，失败原因：" + x.errorCode)
                    }
                }
            });
            return false
        }
    })
}
MPT.addAction("pay", function () {
    var c = $(".e_pay_info");
    var e = Utils.cookie("payMode") || "bank";
    var a = Utils.getUrl("pid") || Utils.getUrl("pid", "#");
    var d = Utils.getUrl("zid");
    var b = "";
    Utils.cookie("pid2", a);
    Utils.cookie("zid2", d);
    loadingPublic("充值中心");
    $.ajax({
        type: "post", url: MPT.Config.req["accdata"], dataType: "json", error: function () {
            popupAlert("账号信息加载失败！")
        }, success: function (f) {
            if (f.errorCode == MPT.Config.result["ok"]) {
                MPT.Config.accdata = f.bizObj
            }
            loadingPublicTop(MPT.Config.accdata);
            if (MPT.Config.accdata && MPT.Config.accdata["lastSaved"]) {
                switch (MPT.Config.accdata["lastSaved"]["payType"]) {
                    case"2":
                        b = "card";
                        break;
                    case"3":
                        b = "mobile";
                        Utils.cookie("serverCode3", MPT.Config.accdata["lastSaved"]["serverCode"] || "");
                        Utils.cookie("cardParvalue3", MPT.Config.accdata["lastSaved"]["savedMoney"] || "");
                        break;
                    default:
                        if (MPT.Config.accdata["lastSaved"]["bankCode"] == "zfb") {
                            b = "zfb"
                        } else {
                            if (MPT.Config.accdata["lastSaved"]["bankCode"] == "zfbqr") {
                                b = "zfbqr"
                            } else {
                                if (MPT.Config.accdata["lastSaved"]["bankCode"] == "wxqr") {
                                    b = "wxqr"
                                } else {
                                    b = "bank"
                                }
                            }
                        }
                        Utils.cookie("savedMoneyAmount3", MPT.Config.accdata["lastSaved"]["savedMoney"]);
                        Utils.cookie("bankCode3", MPT.Config.accdata["lastSaved"]["bankCode"] || "")
                }
                Utils.cookie("pid3", MPT.Config.accdata["lastSaved"]["productId"]);
                Utils.cookie("zid3", MPT.Config.accdata["lastSaved"]["gameZoneId"]);
                Utils.cookie("payMode3", b)
            }
            c.html(MPT.getTmpl("t_public_info", {
                eaccountName: (MPT.Config.accdata) ? MPT.Config.accdata["eaccountName"] : "",
                productName: (MPT.Config.accdata && MPT.Config.accdata["lastSaved"]) ? MPT.Config.accdata["lastSaved"]["productName"] : "",
                zoneName: (MPT.Config.accdata && MPT.Config.accdata["lastSaved"]) ? MPT.Config.accdata["lastSaved"]["gameZoneName"] : "",
                payMode: b
            }));
            getPayTmpl(e)
        }
    })
});
MPT.addAction("pay_ok", function () {
    loadingPublic("充值中心");
    $(".e_pay_ok").html(MPT.getTmpl("t_pay_ok", {
        account: Utils.getUrl("name"),
        points: Utils.getUrl("gp"),
        gpn: decodeURIComponent(Utils.getUrl("gpn"))
    }))
});
MPT.addAction("pay_fail", function () {
    loadingPublic("充值中心");
    $(".e_pay_fail").html(MPT.getTmpl("t_pay_fail", {error: decodeURIComponent(Utils.getUrl("error"))}))
});
MPT.addAction("pay_nest", function () {
    var a = Utils.cookie("payMode") || "bank";
    getPayTmpl(a, 1)
});