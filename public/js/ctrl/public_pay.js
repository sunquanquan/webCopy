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
function loadingPublic(a, b) {
    $(".nav").replaceWith(MPT.getTmpl("t_conmon_nav", {cur: a || ""}));
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
    location.reload()
}
function getNewCaptcha(c, a) {
    var b = c.getElementsByTagName("img")[0];
    var d = c.getElementsByTagName("input")[0].value;
    if (!d) {
        d = genCapId(c, a)
    }
    b.src = "/captcha?c=" + d + "&r=" + Math.random();
    b.onerror = function () {
        imgError(b)
    };
    c.onclick = function () {
        getNewCaptcha(c, a)
    }
}
function genCapId(c, a) {
    var b = c.getElementsByTagName("input")[0];
    var d = null;
    $.ajax({
        async: false,
        type: "post",
        url: MPT.Config.req["gencapid"],
        data: {ct: a},
        dataType: "json",
        success: function (e) {
            if (e.errorCode == MPT.Config.result["ok"]) {
                d = e.bizObj
            }
        }
    });
    b.value = d;
    return d
}
function imgError(a) {
    popupAlert("页面已过期，请重新刷新页面！");
    a.onerror = null
}
function getProduct(a) {
    if (!productInfo || !a) {
        return null
    }
    for (var b = 0; b < productInfo.length; b++) {
        if (productInfo[b] && productInfo[b]["pid"] == a) {
            return productInfo[b]
        }
    }
    return null
};