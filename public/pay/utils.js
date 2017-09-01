var Utils = {
    isIe: !!window.ActiveXObject || "ActiveXObject" in window,
    isPlaceholder: "placeholder" in document.createElement("input"),
    initPlaceholder: function (d, c, a) {
        if (this.isPlaceholder && !this.isIe) {
            d.attr("placeholder", c)
        } else {
            var b = $('<span class="' + a + '">' + c + "</span>");
            d.after(b);
            $.data(d[0], "tip", b);
            if (d.val() != "") {
                this.hidePHTip(d)
            }
            this.dealPHTip(d, b)
        }
    },
    hidePHTip: function (b) {
        var a = $.data(b[0], "tip");
        if (a) {
            a.hide()
        }
    },
    dealPHTip: function (c, b) {
        var a = function () {
            var d = c.val();
            if (d == "") {
                b.show()
            } else {
                b.hide()
            }
        };
        b.click(function () {
            c.focus()
        });
        c.on("input propertychange", function () {
            clearTimeout(d);
            var d = setTimeout(a, 0)
        })
    },
    setHome: function (d, b) {
        try {
            d.style.behavior = "url(#default#homepage)";
            d.setHomePage(b)
        } catch (c) {
            if (window.netscape) {
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
                } catch (c) {
                    alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车\n\n然后将[signed.applets.codebase_principal_support]的值设置为true，双击即可。")
                }
                var a = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
                a.setCharPref("browser.startup.homepage", b)
            } else {
                alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【" + b + "】设置为首页。")
            }
        }
    },
    getUrl: function (c, d) {
        var d = d || "?";
        var a;
        if (d == "?") {
            a = location.search.substring(1).split("&")
        } else {
            a = location.hash.substring(1).split("&")
        }
        for (var b = 0; b < a.length; b++) {
            if (c == a[b].split("=")[0]) {
                return a[b].split("=")[1]
            }
        }
        return ""
    },
    ts2Show: function (a) {
        if (!a) {
            return "-"
        }
        return new Date(a * 1000).toLocaleString()
    },
    initStr: function (b, a) {
        if (!b || b == "") {
            return a
        }
        return b
    },
    toTargetView: function (a) {
        window.location.href = a
    },
    openTargetView: function (a) {
        window.open(a)
    },
    cutStr: function (b, a) {
        if (b.length > a) {
            return b.substr(0, a) + "..."
        } else {
            return b
        }
    },
    validateIdCard: function (b) {
        if (b.length == 15) {
            if (this.isValidityBrithBy15IdCard(b)) {
                if (this.getAgeByIdcard(b)) {
                    return "您属于未满18周岁的未成年人，无法注册"
                }
                return true
            }
            return false
        } else {
            if (b.length == 18) {
                var a = b.split("");
                if (this.isValidityBrithBy18IdCard(b) && this.isTrueValidateCodeBy18IdCard(a)) {
                    if (this.getAgeByIdcard(b)) {
                        return "您属于未满18周岁的未成年人，无法注册"
                    }
                    return true
                }
                return false
            }
        }
        return false
    },
    isTrueValidateCodeBy18IdCard: function (b) {
        var c = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
        var a = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
        var e = 0;
        if (b[17].toLowerCase() == "x") {
            b[17] = 10
        }
        for (var d = 0; d < 17; d++) {
            e += c[d] * b[d]
        }
        valCodePosition = e % 11;
        if (b[17] == a[valCodePosition]) {
            return true
        }
        return false
    },
    isValidityBrithBy18IdCard: function (b) {
        var d = b.substring(6, 10);
        var e = b.substring(10, 12);
        var a = b.substring(12, 14);
        var c = new Date(d, parseFloat(e) - 1, parseFloat(a));
        if (c.getFullYear() != parseFloat(d) || c.getMonth() != parseFloat(e) - 1 || c.getDate() != parseFloat(a)) {
            return false
        }
        return true
    },
    isValidityBrithBy15IdCard: function (d) {
        var c = d.substring(6, 8);
        var e = d.substring(8, 10);
        var a = d.substring(10, 12);
        var b = new Date(c, parseFloat(e) - 1, parseFloat(a));
        if (b.getYear() != parseFloat(c) || b.getMonth() != parseFloat(e) - 1 || b.getDate() != parseFloat(a)) {
            return false
        }
        return true
    },
    getAgeByIdcard: function (b) {
        var f = new Date();
        var e = b.length == 18 ? b.slice(6, 10) : 1900 + parseInt(b.slice(6, 8));
        e = parseInt(e) + 18;
        var g = b.length == 18 ? b.slice(10, 12) : b.slice(8, 10);
        var c = b.length == 18 ? b.slice(12, 14) : b.slice(10, 12);
        var a = e + "/" + g + "/" + c;
        if (Date.parse(f) - Date.parse(a) == 0) {
            return false
        }
        if (Date.parse(f) - Date.parse(a) < 0) {
            return true
        }
        if (Date.parse(f) - Date.parse(a) > 0) {
            return false
        }
        return true
    },
    cookie: function (c, g, b) {
        if (typeof g !== "undefined") {
            var d = "";
            b = b || {};
            if (g === null) {
                g = "";
                b.expires = -1
            }
            if (b.expires) {
                var e = new Date();
                e.setTime(e.getTime() + (b.expires * 60 * 60 * 1000));
                d = "; expires=" + e.toGMTString()
            }
            var i = b.path ? "; path=" + b.path : "";
            var f = b.domain ? "; domain=" + b.domain : "";
            var a = b.secure ? "; secure" : "";
            document.cookie = [c, "=", encodeURIComponent(g), d, i, f, a].join("")
        } else {
            var h;
            if (document.cookie && document.cookie !== "") {
                h = document.cookie.match(new RegExp("(^| )" + c + "=([^;]*)(;|$)"));
                if (h) {
                    return h[2]
                } else {
                    return null
                }
            }
        }
    }
};