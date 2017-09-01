MPT.Config.accdata = null;
MPT.Config.bank = [{id: "icbcb2c", name: "工商银行"}, {id: "abc", name: "农业银行"}, {id: "bocb2c", name: "中国银行"}, {
    id: "ccb",
    name: "建设银行"
}, {id: "comm", name: "交通银行"}, {id: "cmbc", name: "民生银行"}, {id: "cmb", name: "招商银行"}, {
    id: "citic-debit",
    name: "中信银行"
}, {id: "ceb-debit", name: "光大银行"}, {id: "gdb", name: "广发银行"}, {id: "spdb", name: "浦发银行"}, {
    id: "cib",
    name: "兴业银行"
}, {id: "spabank", name: "平安银行"}, {id: "shbank", name: "上海银行"}, {id: "nbbank", name: "宁波银行"}, {
    id: "bjbank",
    name: "北京银行"
}, {id: "shrcb", name: "上海农商银行"}, {id: "psbc-debit", name: "中国邮政储蓄银行"}];
MPT.Config.card = null;
MPT.Config.discount = [];
MPT.Config.mobile = {
    server: [{id: "yd", name: "移动卡"}, {id: "lt", name: "联通卡"}, {id: "dx", name: "电信卡"}],
    value: [30, 50, 100, 300]
};
MPT.Config.cardpar = {sft: [10, 15, 30, 50, 100], jw: [4, 5, 6, 10, 15, 20, 30, 50, 100, 200, 500]};
MPT.Config.payMode = [{id: "bank", name: "银行卡充值"}, {id: "zfb", name: "支付宝充值"}, {
    id: "zfbqr",
    name: "支付宝扫码充值"
}, {id: "wxqr", name: "微信扫码充值"}, {id: "card", name: "绿岸一卡通充值"}, {id: "mobile", name: "手机卡充值"}];
MPT.Config.chnCode = {
    zfb: ["zfbcz", "支付宝"],
    zfbqr: ["zfbcz", "支付宝扫码"],
    zfbapp: ["zfbcz", "支付宝app"],
    wxqr: ["wxcz", "微信扫码"],
    wxapp: ["wxcz", "微信app"],
    iwcard: ["dkcz", "绿岸卡"],
    jwcard: ["dkcz", "骏网卡"],
    sftcard: ["dkcz", "盛付通卡"],
    dx: ["sjczwt", "电信卡"],
    yd: ["sjczwt", "移动卡"],
    lt: ["sjczwt", "联通卡"]
};
MPT.Config.req = {
    accdata: MPT.Config.pay_http + "/pay",
    getproductlist: MPT.Config.pay_http + "/getProductList",
    getzonelist: MPT.Config.pay_http + "/getzonelist",
    getparvalue: MPT.Config.pay_http + "/getparvalue",
    getdiscount: MPT.Config.pay_http + "/getdiscount",
    gencapid: MPT.Config.pay_http + "/gencapid.do",
    bankpay: MPT.Config.pay_http + "/bankpay",
    checkpay: MPT.Config.pay_http + "/checkpay.do",
    cardpay: MPT.Config.pay_http + "/cardpay.do",
    mobilepay: MPT.Config.pay_http + "/pagecardpay.do",
    validcap: MPT.Config.pay_http + "/validcap.do",
    getsavedinfo: MPT.Config.pay_http + "/getsavedinfo.do",
    getcardinfo: MPT.Config.pay_http + "/getcardinfo.do",
    gbankpay: MPT.Config.pay_http + "/g/bankpay",
    gcardpay: MPT.Config.pay_http + "/g/cardpay.do",
    getTime: MPT.Config.pay_http + "/getinterval.do",
    confirmst: MPT.Config.pay_http + "/confirmst.do",
    sms: MPT.Config.pay_http + "/sms.do",
    confirmsms: MPT.Config.pay_http + "/confirmsms.do"
};
MPT.Config.result = {
    ok: 0,
    notExist: [30100, "账号无效，请重新输入"],
    notLogin: [30132, "您尚未登录，请登录！"],
    captchaNull: [30405, "验证码为空，请输入验证码"],
    captchaExpired: [30407, "验证码已失效，请重新输入"],
    captchaError: [30408, "验证码出现错误，请重新输入"],
    cardError: [901, "您输入的充值卡无效，请重新输入"],
    cardFail: [854, "充值失败"],
    cardUnmatch: [857, "您输入的充值卡不匹配当前游戏,请重新输入"],
    recordDateError: [-1001, "日期选择不符合规范"],
    noSafeValid: [-1003, "请先进行安全验证"],
    payClose: [31002, "该充值方式已关闭"],
    payCloseZone: [31003, "该大区暂时不开放充值"],
    notPay: [1, "还未支付或者金额还未到账"],
    payToGame: [20, "支付成功，正在向游戏充值"],
    payError: [21, "支付失败"],
    payToGameError: [31, "支付成功，但充值到游戏失败"],
    mPayFail: [-6, "兑换失败"],
    mSysBusy: [-10014, "系统忙，请稍后再试"],
    mNoRepeatForSucc: [-10016, "该订单支付已成功，不能重复提交"],
    mPaymentClose: [-10029, "运营商系统维护，支付通道暂时关闭"],
    mParvalueClose: [-10030, "运营商系统维护，该面值暂时关闭"],
    mNoPayment: [-10031, "商户没有开通此支付通道"],
    mNoBalance: [-10062, "商户不支持余额卡支付"],
    mNoRepeatForFail: [-10076, "该订单支付已失败，不能重复提交"],
    mCardIsUsing: [-10082, "该卡已被使用，请更换其他充值卡支付"],
    mPayFailAgain: [-10083, "很抱歉！该卡已连续二次支付不成功，请更换其他充值卡支付"],
    mCardProcess: [-10091, "该卡正在处理中，请不要重复提交"],
    mSysBusy2: [-10110, "系统忙，请稍后再试"],
    mNoMultiCard: [-10118, "商户不支持多卡支付"],
    mParvalueError: [-10119, "充值卡面额选择错误"],
    mOrderProcess: [-10120, "该订单正在处理中，不能重复提交"],
    mSysBusy3: [-10123, "系统忙，请稍后再试"],
    mNoPay: [-10124, "由于运营商系统临时维护，该省充值卡暂时无法支付，请稍后再试"],
    mCardExpired: [-81000, "该卡已失效，请更换其他充值卡支付"],
    mSysBusy4: [-81001, "系统忙，请稍后再试"],
    mInsufficientMoney: [-81006, "充值卡金额不足以支付订单"],
    mExpiredCardNo: [-81007, "无效的卡号密码"],
    mNoPay2: [-82019, "暂不支持该卡支付"],
    mSysBusy5: [-82009, "系统忙，请稍后再试"],
    mMD5Error: [-11111, "卡密无效或过期"],
    mTimeout: [-9, "处理时间超时，稍后请在查询结果中查询！"],
    mInternalError: [-1000, "系统忙，请稍后再试"],
    chanDisabError: [-2000, "该支付方式暂不可用"],
    dynamicError: [32003, "动态密码错误"],
    smsError: [30410, "短信通道异常，请稍后重试！"],
    smsNoClick: [30210, "请先点击获取短信验证码"],
    smsFrequent: [32001, "短信发送太频繁了，稍后请重试！"],
    smsLimit: [32002, "短信发送次数已达到上限！"],
    nullMobile: [30406, "您的安全手机为空！"],
    sameError: [30000, "不能绑定相同的邮箱！", "您要更换的手机号码已经是当前账户的绑定手机了"],
    sameMobileFrequent: [30404, "同一手机短信发送太频繁"]
};
MPT.Config.regular = {
    account: /(^13[0-9]{9}|14[5|7][0-9]{8}|15[012356789][0-9]{8}|17[0|6-8][0-9]{8}|18[0-9]{9}$)|(^13[0-9]{9}\S{1}|14[5|7][0-9]{8}\S{1}|15[012356789][0-9]{8}\S{1}|17[0|6-8][0-9]{8}\S{1}|18[0-9]{9}\S{1}$)|^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]+)+$|^[a-z][a-z0-9]{5,15}$/,
    card: /^[0-9]{18}$/,
    cardPass: /^[0-9]{12}$/,
    sftCard: /^80133[0-9]{11}$/,
    sftCardPass: /^[0-9]{8}$/,
    jwCard: /^[0-9|a-z|A-Z]{16}$/,
    jwCardPass: /^[0-9|a-z|A-Z]{16}$/,
    mobileCard: /^[0-9]{10,19}$/,
    mobileCardPass: /^[0-9]{8,19}$/,
    captcha: /^[\w\W]{4,6}$/,
    mobileCaptcha: /^[0-9]{6}$/,
    stCaptcha: /^[0-9]{8}$/,
    httpAddress: /^http(s)?:\/\/+/
};
MPT.Config.url = {
    postJump: MPT.Config.pay_domain + "/g/jump.html",
    beian: "http://www.miitbeian.gov.cn/",
    zx110: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010802001104",
    gov: "http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/toDetail/7A94576F3EE94F118F324FA91467CAE0",
    iwgame: MPT.Config.iwgame_http + "/",
    iwgame_stdownload: "http://mkey.iwgame.com/",
    lvan_gsabout: MPT.Config.lvanol_http + "/iwinfo/gsabout/",
    lvan_cptzj: MPT.Config.lvanol_http + "/iwproduct/cptzj/",
    lvan_lxcontact: MPT.Config.lvanol_http + "/iwcontactus/lxcontact/",
    lvan_iwhr: MPT.Config.lvanol_http + "/iwhr/",
    iwgame_jiazhang: MPT.Config.iwgame_http + "/jiazhang/",
    regMobilePage: MPT.Config.passport_http + "/reg/account/regpage.do?type=m&pid=" + MPT.pid,
    pLoginPage: MPT.Config.passport_http + "/ploginpage?pid=" + MPT.pid,
    user_passport: MPT.Config.space_http + "/c/passport.do?pid=" + MPT.pid,
    user_center: MPT.Config.space_http + "/c/center.do?pid=" + MPT.pid,
    user_center_pw: MPT.Config.space_http + "/c/center.do?type=pw&pid=" + MPT.pid,
    user_center_mobile: MPT.Config.space_http + "/c/center.do?type=mobile&pid=" + MPT.pid,
    cs: MPT.Config.cs_http + "/index.do?pid=" + MPT.pid,
    cs_rss: MPT.Config.cs_http + "/rss.do?pid=" + MPT.pid,
    cs_findpw: MPT.Config.cs_http + "/findPw.do?cur=mobile&pid=" + MPT.pid,
    cs_jcbd: MPT.Config.cs_http + "/c/question.do?parentTypeCode=aqbh&typeCode=jcbd&pid=" + MPT.pid,
    cs_sjkcz: MPT.Config.cs_http + "/c/question.do?parentTypeCode=czwt&typeCode=sjkcz&pid=" + MPT.pid,
    cs_czwt: MPT.Config.cs_http + "/c/question.do?parentTypeCode=czwt&typeCode=",
    pay: MPT.Config.pay_http + "/index.do?pid=" + MPT.pid,
    pay_loginback: MPT.Config.pay_http + "/loginback?pid=" + MPT.pid,
    pay_logout: MPT.Config.pay_http + "/passport?action=logout&pid=" + MPT.pid,
    pay_history: MPT.Config.pay_http + "/savedquery.do?pid=" + MPT.pid,
    pay_check: MPT.Config.pay_http + "/cardcheck.do?pid=" + MPT.pid,
    pay_sale: MPT.Config.pay_http + "/salesite.do?pid=" + MPT.pid,
    pay_bank_help: "https://cshall.alipay.com/lab/cateQuestion.htm?cateId=210245&pcateId=210220",
    pay_game_nest_bank: MPT.Config.pay_http + "/g/gborder.do",
    pay_game_nest_zfb: MPT.Config.pay_http + "/g/gborder.do",
    pay_game_nest_card: MPT.Config.pay_http + "/g/gborder.do"
};
MPT.payEntrance = 0;
MPT.scanSuccess = 0;
MPT.scanPayToGameAgain = 0;
MPT.scanCount = 0;
MPT.gpName = "钻石";
MPT.productInfo = typeof productInfo != "undefined" ? productInfo : [];