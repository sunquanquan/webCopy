MPT.addAction("user_passport", function () {
    loadingPublic("我的通行证");
    var c = $(".e_user_passport_main"), b = $(".e_user_passport_func"), a = $(".e_user_passport_poster");
    c.html('<h2 class="user-passport-loading e_user_passport_loading">努力加载中。。。</h2>').append(MPT.getTmpl("t_user_passport_quick"));
    b.append(MPT.getTmpl("t_user_passport_cs"));
    $.ajax({
        type: "post", url: MPT.Config.req["accdata"], dataType: "json", error: function () {
            $(".e_user_passport_loading").replaceWith('<h2 class="user-passport-loading-error e_user_passport_loading">账号信息加载失败，请稍后重试！</h2>')
        }, success: function (d) {
            switch (d.errorCode) {
                case MPT.Config.result["ok"]:
                    MPT.Config.accdata = d.bizObj;
                    loadingPublicTop(MPT.Config.accdata);
                    if (!MPT.Config.accdata.bindRealName) {
                        c.find(".e_user_passport_loading").remove().end().prepend(MPT.getTmpl("t_user_passport_idcard", MPT.Config.accdata))
                    } else {
                        c.find(".e_user_passport_loading").remove().end().prepend(MPT.getTmpl("t_user_passport_account", MPT.Config.accdata))
                    }
                    break;
                case MPT.Config.result["notLogin"][0]:
                    popupAlert(MPT.Config.result["notLogin"][1], function () {
                        Utils.toTargetView(MPT.Config.url["loginPage"])
                    });
                    break;
                default:
                    loadingPublicTop(MPT.Config.accdata);
                    $(".e_user_passport_loading").replaceWith('<h2 class="user-passport-loading-error">账号信息加载失败，失败原因：' + d.errorCode + "</h2>")
            }
        }
    });
    $.getScript(MPT.Config.poster["downloadInfo"], function () {
        a.append(MPT.getTmpl("t_user_passport_download", downloadInfo))
    })
});