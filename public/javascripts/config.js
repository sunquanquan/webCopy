MPT.Config.accdata = null;
MPT.Config.isopen = {email: 1, personal: 1};
MPT.Config.poster = {
    gamePrivilege: MPT.Config.iwgame_http + "/js/poster_js/32.js",
    gameInfo: MPT.Config.iwgame_http + "/js/poster_js/34.js",
    downloadInfo: MPT.Config.iwgame_http + "/js/poster_js/35.js",
    recentActivity: MPT.Config.iwgame_http + "/js/poster_js/36.js",
    productPoster: MPT.Config.iwgame_sslres + "/js/poster_js/49.js",
    passportLoginBg: MPT.Config.iwgame_sslres + "/js/poster_js/50.js"
};
MPT.Config.req = {
    login: MPT.Config.passport_http + "/sso/login.do",
    gencapid: "/captcha",
    register:"/reg/account/reg",
    check: "/reg/account/check",
    repeatmail: MPT.Config.passport_http + "/reg/account/repeatmail.do",
    smsReg: MPT.Config.passport_http + "/reg/account/sms.do",
    getTimeReg: MPT.Config.passport_http + "/reg/account/getinterval.do",
    accdata: MPT.Config.space_http + "/accdata.do",
    rp: MPT.Config.space_http + "/pro/rp.do",
    m2psub: MPT.Config.space_http + "/m2psub.do",
    confirmcp: MPT.Config.space_http + "/cp/confirmcp.do",
    sms: MPT.Config.space_http + "/sms.do",
    confirmsms: MPT.Config.space_http + "/confirmsms.do",
    sendemail: MPT.Config.space_http + "/sendemail.do",
    sqset: MPT.Config.space_http + "/sq/sqset.do",
    stset: MPT.Config.space_http + "/stset.do",
    stplogin: MPT.Config.space_http + "/stplogin.do",
    stptrade: MPT.Config.space_http + "/stptrade.do",
    confirmst: MPT.Config.space_http + "/confirmst.do",
    getTime: MPT.Config.space_http + "/getinterval.do",
    active: MPT.Config.space_http + "/jihuo/active.do",
    isactive: MPT.Config.space_http + "/jihuo/isactive.do"
};
MPT.Config.regular = {
    account: /(^1(3|4|5|7|8)[0-9]{9}$)|(^13[0-9]{9}\S{1}|14[5|7][0-9]{8}\S{1}|15[0-9]{9}\S{1}|17[0|6-8][0-9]{8}\S{1}|18[0-9]{9}\S{1}$)|^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]+)+$|^[a-z][a-z0-9_]{5,15}$/,
    mobile: /^1(3|4|5|7|8)[0-9]{9}$/,
    email: /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]+)+$/,
    personal: /^[a-z][a-z0-9_]{5,15}$/,
    mobileCaptcha: /[0-9]{6}/,
    captcha: /^[\w\W]{4,6}$/,
    password: /^[^\u4E00-\u9FA5\s]{6,16}$/,
    fullname: /^[\u4E00-\u9FA5\uF900-\uFA2D]{2,8}$/,
    stNum: /[1-9]{1}[0-9]{1}([0]{1}[1-9]{1}|[1]{1}[0-2]{1})[0-9]{8}/,
    stCaptcha: /[0-9]{8}/,
    simpleIdCard: /^\d{15}(\d{2}[A-Za-z0-9])?$/
};
MPT.Config.url = {
    beian: "http://www.miitbeian.gov.cn/",
    zx110: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010802001104",
    gov: "http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/toDetail/7A94576F3EE94F118F324FA91467CAE0",
    iwgame: "javascript:;",
    lvan_gsabout: "javascript:;",
    lvan_cptzj: "javascript:;",
    lvan_lxcontact: "javascript:;",
    lvan_iwhr:"javascript:;",
    iwgame_jiazhang: "javascript:;",
    iwgame_activity:"javascript:;",
    iwgame_stdownload:"javascript:;",
    iwgame_stdownload2: "javascript:;",
    agreement: "javascript:;",
    loginPage: "javascript:;",
    pLoginPage:"javascript:;",
    loginback: "javascript:;",
    regMobilePage: "javascript:;",
    regEmailPage: "javascript:;",
    regPersonalPage: "javascript:;",
    emailRegConfirm: "javascript:;",
    emailSuccPage: "javascript:;",
    emailFailPage: "javascript:;",
    pay:"javascript:;",
    cs: "javascript:;",
    cs_passport: "javascript:;",
    cs_lock: "javascript:;",
    cs_findpw: "javascript:;",
    cs_zbzh: "javascript:;",
    cs_bfss: "javascript:;",
    cs_jcbd: "javascript:;",
    cs_zlxg: "javascript:;",
    cs_bindsafephone: "javascript:;",
    cs_overseasbindletoken: "javascript:;",
    cs_faq: "javascript:;",
    cs_rss: "javascript:;",
    cs_getbackacc: "javascript:;",
    active_login: "javascript:;",
    active: "javascript:;",
    tzjDownload: "javascript:;",
    tzjBBS: "javascript:;",
    tzjActive: "javascript:;",
    tzj_news: "javascript:;",
    st_flash: "javascript:;",
    fs_download: "javascript:;"
};
MPT.Config.url["space"] = {
    logout: "javascript:;",
    passport: "javascript:;",
    center: "javascript:;",
    center_info:"javascript:;",
    center_fill: "javascript:;",
    center_m2p: "javascript:;",
    center_pw: "javascript:;",
    center_mobile:"javascript:;",
    center_email:"javascript:;",
    center_sq: "javascript:;",
    center_st: "javascript:;",
    center_stp:"javascript:;",
    bsp: "javascript:;",
    bsp_st: "javascript:;",
    loginback: "javascript:;"
};
MPT.Config.result = {
    ok: 0,
    ok2: 1,
    exist: [0, '手机号码已经有人使用了，需要<a href="' + MPT.Config.url["cs_getbackacc"] + '" target="_blank">找回账号</a>？', '邮箱已经有人使用了，需要<a href="' + MPT.Config.url["cs_getbackacc"] + '" target="_blank">找回账号</a>？', '账号已经有人使用了，需要<a href="' + MPT.Config.url["cs_getbackacc"] + '" target="_blank">找回账号</a>？'],
    idcError: [2014, "身份证信息无效或未满18周岁"],
    sameError: [30000, "不能绑定相同的邮箱！", "您要更换的手机号码已经是当前账户的绑定手机了"],
    notExist: [30100, "账号不存在，请重新输入！"],
    accountError: [30101, "账号或密码出现错误，请重新输入！"],
    notLogin: [30132, "您尚未登录，请登录！"],
    mobileError: [30150, "修改账号名失败，稍后请重试！"],
    bindError: [30152, "该手机号绑定失败，稍后请重试！"],
    mobileError2: [30160, "该手机号已经被注册，不能更换为新的手机号！"],
    sameAccount: [30160, "该账号名已被注册！"],
    mobileLimit: [30181, "手机绑定已经达到绑定上限！"],
    notMobile: [30190, "非手机账号暂不提供绑定手机业务"],
    emailValidatorOk: [30210, "该邮箱已经通过了验证，无法再进行二次验证", "该邮箱已注册成功！"],
    sessionExpired: [30501, "页面已过期，请重新刷新页面", "邮箱注册过期，请重新注册！"],
    emailAccept: [30210, "业务已受理"],
    smsNoClick: [30210, "请先点击获取短信验证码"],
    profileAccept: [30210, "您的账号注册信息已完善"],
    passError: [30324, "原始密码错误，请重新填写"],
    passSame: [30323, "新密码不能与当前密码相同"],
    wpError: ["密码格式填写错误", "密码不能与帐号名相同", "密码不能全部是相同字符", "密码太简单了,换个吧"],
    emailFrequent: [31001, "邮件发送太频繁了，稍后请重试！"],
    smsFrequent: [32001, "短信发送太频繁了，稍后请重试！"],
    smsLimit: [32002, "短信发送次数已达到上限！"],
    captchaError: [30408, "验证码输入错误"],
    captchaExpired: [30407, "验证码已失效，请重新输入！", "验证码已失效，请重新点击发送"],
    nullMobile: [30406, "您的安全手机为空！"],
    nullCaptcha: [30405, "请输入图片上的数字或字母，不区分大小写"],
    needCaptcha: [30140, "请输入图形验证码"],
    sameMobileFrequent: [30404, "同一手机短信发送太频繁"],
    smsError: [30410, "短信通道异常，请稍后重试！"],
    regClose: [31001, "对不起，注册业务已关闭！"],
    ssoClose: [31002, "对不起，登录业务已关闭！"],
    clickCaptcha: "对不起，您还没有发送短信验证码",
    activeError: [114, "激活码无效！"],
    activeUsing: [113, "激活码已使用！"],
    activeExpired: [115, "激活码已过期或者不允许激活！"],
    noActive: [30120, "该账号已被封杀，无法完成激活"],
    noActive2: [30130, "该账号已被冻结，无法完成激活"],
    dynamicError: [32003, "动态密码错误"],
    stIsBind: [32002, "该账号已经绑定了安全令牌"],
    snBindLimit: [32001, "该序列号绑定的账号已达到上限"],
    snExpired: [32000, "该序列号无效"],
    snSame: [30000, "新旧序列号不能相同"],
    svExpired: [-1003, "您的安全验证已失效，请重新进行安全验证"],
    notMobileLogin: [802, "当前登录的账号非手机账号"],
    stProtectAtLeastOne: [30360, "登录保护和交易保护至少开启一个"]
};
MPT.productInfo = typeof productInfo != "undefined" ? productInfo : [];