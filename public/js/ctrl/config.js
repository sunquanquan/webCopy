MPT.Config['accData'] = null;
///////////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////


MPT.Config['req'] = {
	accdata: MPT.Config.pay_http + "/pay",
	getproductlist: MPT.Config.pay_http + "/getProductList",
	getzonelist: MPT.Config.pay_http + "/getzonelist",
	getparvalue: MPT.Config.pay_http + "/getparvalue",
	getdiscount: MPT.Config.pay_http + "/getdiscount",
	getTimeReg: MPT.Config.cs_http + "/reg/account/getinterval.do",
	getTime: MPT.Config.cs_http + "/getinterval.do",
	//登录
	'login': MPT.Config['passport_http'] + '/login',


	'accData': MPT.Config['cs_http'] + '/getAccData',
	'appendLockQuestion': MPT.Config['cs_http'] + '/appendLockQuestion.do',
	'appendQuestion': MPT.Config['cs_http'] + '/appendQuestion.do',
	'check': MPT.Config['cs_http'] + '/ajaxValidAccountCaptcha',
	'confirmsms': MPT.Config['cs_http'] + '/confirmsms',
	'dowloadInfo': MPT.Config['iwgame_http'] + '/js/poster_js/35.js',
	'faq': MPT.Config['cs_http'] + '/findPw',
	'gba': MPT.Config['cs_http'] + '/gba',
	'getmobilecapId':MPT.Config['cs_http'] + '/getMobileCapId.do',
	'gencapid': MPT.Config['cs_http'] + '/gencapid',
	'getAccountStatus': MPT.Config['cs_http'] + '/ajaxGetAccountStatus.do',

	//帮助说明
	'getAllFaqQuestion': MPT.Config['cs_http'] + '/getAllFaqQuestion',
	'getAnswer': MPT.Config['cs_http'] + '/getAnswerInfo.do',
	'getAreaList': MPT.Config['cs_http'] + '/getAreaList.do',
	'getGroupList': MPT.Config['cs_http'] + '/getGroupList.do',
	'getLockAccountRecord': MPT.Config['cs_http'] + '/getLockAccountRecord.do',
	'getLockAnswerInfo': MPT.Config['cs_http'] + '/getLockAnswerInfo.do',
	'getQuestionNew': MPT.Config['cs_http'] + '/getLockAndQuestionInfo.do',
	'isBindMax': MPT.Config['cs_http'] + '/isBindMax.do',
	'isBindMobile': MPT.Config['cs_http'] + '/isBindMobile.do',
	'isTradeFrozen': MPT.Config['cs_http'] + '/isTradeFrozen.do',
	'keyValid': MPT.Config['cs_http'] + '/validResetPwKey.do',
	'lock': MPT.Config['cs_http'] + '/lockAccount',
	'modUploadIdentity': MPT.Config['cs_http'] + '/modUploadIdentity.do',
	'passwordUploadIdentity': MPT.Config['cs_http'] + '/passwordUploadIdentity.do',
	'product': MPT.Config['cs_http'] + '/getProductList',
	'question_bfss': MPT.Config['cs_http'] + '/saveSealedAppeal.do',
	'question_jshf': MPT.Config['cs_http'] + '/saveRoleRecovery.do',
	'question_zlxg': MPT.Config['cs_http'] + '/saveAccountDataModify.do',
	'question_zbzh': MPT.Config['cs_http'] + '/saveSeolenHelp.do',
	'question_jcbd': MPT.Config['cs_http'] + '/saveAccountRemoveBinding.do',
	'question_mmss': MPT.Config['cs_http'] + '/saveAccountRetrievePwd.do',
	'question_bindsafephone': MPT.Config['cs_http'] + '/saveOverseasBindPhone.do',
	'question_overseasbindletoken': MPT.Config['cs_http'] + '/saveOverseasBindToken.do',
	'question_payunblock': MPT.Config['cs_http'] + '/saveAccountTradeRemove.do',
	'question_sjczwt': MPT.Config['cs_http'] + '/savePayNotArrival.do',
	'question_sjkcz': MPT.Config['cs_http'] + '/savePayFildure.do',
	'question_yxbug': MPT.Config['cs_http'] + '/saveGameBug.do',
	'question_wgjb': MPT.Config['cs_http'] + '/savePlugReport.do',
	'question_jyfk': MPT.Config['cs_http'] + '/saveSuggest.do',
	'question_tskf': MPT.Config['cs_http'] + '/saveComplaint.do',
	//发送邮件
	'sendMail': MPT.Config['cs_http'] + '/sendMail',
	//忘记密码 短信验证
	'sendSmsCaptcha': MPT.Config['cs_http'] + '/sendSmsCaptcha',
	'slide': MPT.Config['iwgame_http'] + '/js/poster_js/20.js',
	'sms': MPT.Config['cs_http'] + '/sms',
	//更改为新密码
	'updatePassword': MPT.Config['cs_http'] + '/updatePassword',
	//验证密保问题
	'validSecurityQuestion': MPT.Config['cs_http'] + '/validSecurityQuestion',
	//验证短信验证码
	'validSmsCaptcha': MPT.Config['cs_http'] + '/validSmsCaptcha'
};
MPT.Config['url'] = {
	//退出
	'logout': MPT.Config['cs_http'] + '/passport?action=logout',

	'gametj':'http://www.lvanol.com/iwproduct/cptzj/',
	'company': 'http://www.iwgame.com/',
	'game_sm': 'http://www.shumenol.com/',
	'game_zxy': 'http://www.zuixiaoyao.com/',
	'game_tzj': 'http://tzj.iwgame.com/',

	//登录
	'login': MPT.Config['passport_http'] + '/login',
	//登录弹窗
	//'loginPopup': MPT.Config['passport_http'] + '/sso/ploginpage.do?ls=cs&loginback=' + MPT.Config['cs_http'] + '/loginback.do&pid=' + MPT.pid,
	'loginPopup': MPT.Config['passport_http'] + '/ploginpage?ls=cs&loginback=' + MPT.Config['cs_http'] + '/loginback&pid=' + MPT.pid,
	//登录成功页面
	loginback: MPT.Config.passport_http + "loginback?pid=" + MPT.pid,

	//注册
	'register': MPT.Config['passport_http'] + '/reg/account/regpage.do?type=m&pid=' + MPT.pid,

	'pay': MPT.Config['pay_http'] + '/index.do?pid=' + MPT.pid,
	'cs': MPT.Config['cs_http'] + '/index.do?pid=' + MPT.pid,

	//账号申诉
	'question': MPT.Config['cs_http'] + '/c/question?pid=' + MPT.pid,

	'questionList': MPT.Config['cs_http'] + '/c/questionList.do?pid=' + MPT.pid,
	'faq': MPT.Config['cs_http'] + '/faq?pid=' + MPT.pid,

	//账号锁定
	'accountLock': MPT.Config['cs_http'] + '/accountLock?cur=lock&pid=' + MPT.pid,
	//账号解锁
	'accountUnlock': MPT.Config['cs_http'] + '/accountLock?cur=unlock&pid=' + MPT.pid,
	//记录查询
	'accountRecord': MPT.Config['cs_http'] + '/c/accountLockRecord.do?pid=' + MPT.pid,

	//忘记密码
	'findByMobile': MPT.Config['cs_http'] + '/findPw?cur=mobile&pid=' + MPT.pid,
	'findByEmail': MPT.Config['cs_http'] + '/findPw?cur=email&pid=' + MPT.pid,
	'findBySq': MPT.Config['cs_http'] + '/findPw?cur=sq&pid=' + MPT.pid,
	'findBySs': MPT.Config['cs_http'] + '/findPw?cur=ss&pid=' + MPT.pid,

	'lockItemList': MPT.Config['cs_http'] + '/c/lockItemList.do?pid=' + MPT.pid,
	//找回忘记密码
	'findPw': MPT.Config['cs_http'] + '/findPw?pid=' + MPT.pid,
	//找回账号
	'getbackacc': MPT.Config['cs_http'] + '/getbackacc?pid=' + MPT.pid,

	'rss': MPT.Config['cs_http'] + '/rss.do?pid=' + MPT.pid,
	'aboutlv':'http://www.lvanol.com/iwinfo/gsabout/',
	'lxcontact':'http://www.lvanol.com/iwcontactus/lxcontact/',
	'iwhr':'http://www.lvanol.com/iwhr/',
	'jiazhang':'http://www.iwgame.com/jiazhang/',
	'lvnews':'http://www.iwgame.com/lvnews/',
	'activity':'http://www.iwgame.com/activity/',
	'zx110':'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010802001104',
	'gov':'http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/toDetail/7A94576F3EE94F118F324FA91467CAE0'
};
MPT.Config['question'] = {
	'zzfw': MPT.Config['cs_http'] + '/allQuestion.do?cur=zzfw&pid=' + MPT.pid,
	'tjgd': MPT.Config['cs_http'] + '/allQuestion.do?pid=' + MPT.pid,
	'zbzh': MPT.Config['url']['question'] + '&parentTypeCode=yxwt&typeCode=zbzh',
	'bfss': MPT.Config['url']['question'] + '&parentTypeCode=yxwt&typeCode=bfss',
	'jshf': MPT.Config['url']['question'] + '&parentTypeCode=yxwt&typeCode=jshf',
	'zlxg': MPT.Config['url']['question'] + '&parentTypeCode=zhwt&typeCode=zlxg',
	'bindsafephone': MPT.Config['url']['question'] + '&parentTypeCode=zhwt&typeCode=bindsafephone',
	'overseasbindletoken': MPT.Config['url']['question'] + '&parentTypeCode=zhwt&typeCode=overseasbindletoken',
	'mgsh': MPT.Config['url']['question'] + '&parentTypeCode=zhwt&typeCode=payunblock',
	'jcbd': MPT.Config['url']['question'] + '&parentTypeCode=aqbh&typeCode=jcbd',
	'mmss': MPT.Config['url']['question'] + '&parentTypeCode=aqbh&typeCode=mmss',
	'sjczwt': MPT.Config['url']['question'] + '&parentTypeCode=czwt&typeCode=sjczwt',
	'sjkcz': MPT.Config['url']['question'] + '&parentTypeCode=czwt&typeCode=sjkcz',
	'yxbug': MPT.Config['url']['question'] + '&parentTypeCode=tsjy&typeCode=yxbug',
	'wgjb': MPT.Config['url']['question'] + '&parentTypeCode=tsjy&typeCode=wgjb',
	'jyfk': MPT.Config['url']['question'] + '&parentTypeCode=tsjy&typeCode=jyfk',
	'tskf': MPT.Config['url']['question'] + '&parentTypeCode=tsjy&typeCode=tskf'
};
MPT.Config['url']['passport'] = {
	'passport': MPT.Config['space_http'] + '/passport?pid=' + MPT.pid,
	'center': MPT.Config['space_http'] + '/c/center.do?pid=' + MPT.pid,
	'changePass':MPT.Config['space_http'] + '/c/center.do?type=pw&pid=' + MPT.pid,
	'securityToken':MPT.Config['space_http'] + '/c/center.do?type=st&pid=' + MPT.pid,
	'safeMobilep':MPT.Config['space_http'] + '/c/center.do?type=mobile&pid=' + MPT.pid,
	'safeEmail':MPT.Config['space_http'] + '/c/center.do?type=email&pid=' + MPT.pid,
	'securityQues':MPT.Config['space_http'] + '/c/center.do?type=sq&pid=' + MPT.pid,
	'securityTokenProtect':MPT.Config['space_http'] + '/c/center.do?type=stq&pid=' + MPT.pid,
	'regm':MPT.Config['passport_http']+'/reg/account/regpage.do?type=m&pid=' + MPT.pid,
	'regp':MPT.Config['passport_http']+'/reg/account/regpage.do?type=p&pid=' + MPT.pid,
	'regzlxg':MPT.Config['space_http']+'/c/center.do?type=fill&pid=' + MPT.pid
};
MPT.Config['pay_http'] = {
	'kscz':MPT.Config['pay_http']+'/index.do?pid=' + MPT.pid,
	'zfbcz':MPT.Config['pay_http']+'/index.do?pid=' + MPT.pid,
	'bankcz':MPT.Config['pay_http']+'/index.do?pid=' + MPT.pid,
	'cordercz':MPT.Config['pay_http']+'/index.do?pid=' + MPT.pid,
	'mobilecz':MPT.Config['pay_http']+'/index.do?pid=' + MPT.pid,
	'cardcheck':MPT.Config['pay_http']+'/cardcheck.do?pid=' + MPT.pid,
	'saveQuery':MPT.Config['pay_http']+'/savedquery.do?pid=' + MPT.pid
};
MPT.Config['regexp'] = {
	'account': /^[a-zA-Z0-9_\-@\.]{6,}$/,
	'mobile': /^13[0-9]{9}|14[5|7][0-9]{8}|15[012356789][0-9]{8}|17[0|6-8][0-9]{8}|18[0-9]{9}$/,
	'mobileCaptcha': /[0-9]{6}/,
	'allMobile': /\d/,
	'chinese': /^[\u4E00-\u9FA5\uF900-\uFA2D]{2,8}$/,
	'bank': /^[\u4E00-\u9FA5\uF900-\uFA2D]{4,32}/,
	'lvanorder': /[0-9]{16}/,
	'money': /^[0-9]{1,4}$/,
	'cardid': /[0-9]{18}/,
	'mobilecard': /[0-9]{10,19}/,
	'password': /^[^\u4E00-\u9FA5\s]{6,16}$/,
	'captcha': /^[\w\W]{4,6}$/,
	'stNum': /[1-9]{1}[0-9]{1}([0]{1}[1-9]{1}|[1]{1}[0-2]{1})[0-9]{8}/,
	'stCaptcha': /[0-9]{8}/,

	//account: /(^1(3|4|5|7|8)[0-9]{9}$)|(^13[0-9]{9}\S{1}|14[5|7][0-9]{8}\S{1}|15[0-9]{9}\S{1}|17[0|6-8][0-9]{8}\S{1}|18[0-9]{9}\S{1}$)|^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]+)+$|^[a-z][a-z0-9_]{5,15}$/,
	//mobile: /^1(3|4|5|7|8)[0-9]{9}$/,
	email: /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]+)+$/,
	personal: /^[a-z][a-z0-9_]{5,15}$/,
	fullname: /^[\u4E00-\u9FA5\uF900-\uFA2D]{2,8}$/,
	simpleIdCard: /^\d{15}(\d{2}[A-Za-z0-9])?$/
};
MPT.Config['result'] = {
	'ok': 0,
	'notExist': [30100,'账号不存在，请重新输入'],
	'notLogin': [30132,'您尚未登录，请登录！'],
	'accountError': [30101,'账号或密码出现错误，请重新输入'],
	'smsLimit': [30404,'短信发送次数已达到上限！'],
	'nullCaptcha': [30405, '请输入图片上的数字或字母，不区分大小写'],
	'captchaExpired': [30407,'验证码已失效，请重新输入'],
	'captchaError': [30408,'验证码出现错误，请重新输入'],
	'unbindMobile': [950,'您的账号尚未绑定手机'],
	'idcardError': [951,'您输入的不是您账号绑定的身份证号码'],
	'smsCaptchaError': [952,'手机验证码输入错误'],
	'unbindEmail': [954,'您的账号尚未绑定邮箱'],
	'unbindSq': [955,'您的账号尚未绑定密保问题'],
	'emailChange': [956,'您的密保邮箱已被更改'],
	'smsFrequent': [32001,'短信发送太频繁了，稍后请重试！'],
	'sqError': [-1001,'您提供的信息与账号不符'],
	'accountLock': [30130,'您的通行证已经锁定了'],
	'accountUnlock': [30131,'您的通行证没有被锁定'],
	'accountKill': [30120,'该通行证处于封停状态，无法进行锁定操作','该通行证处于封停状态，无法进行解锁操作'],
	'tradeNoActive': [2006, '您的账号米谷商行尚未激活'],
	'tradeActive': '您的账号米谷商行状态正常，可以使用',
	'tradeError': [-1000, '系统维护中，请您稍后再尝试提交工单'],
	'bindMaxLimit': [1, '该手机号码已达绑定上限', '该安全令牌序列号已达绑定上限'],
	'bindMaxError': [2, '系统维护中，请您稍后尝试'],
	'wpError': ['密码格式填写错误','密码不能与帐号名相同','密码不能全部是相同字符','密码太简单了,换个吧'],
	ok2: 1,
	//exist: [0, '手机号码已经有人使用了，需要<a href="' + MPT.Config.url["cs_getbackacc"] + '" target="_blank">找回账号</a>？', '邮箱已经有人使用了，需要<a href="' + MPT.Config.url["cs_getbackacc"] + '" target="_blank">找回账号</a>？', '账号已经有人使用了，需要<a href="' + MPT.Config.url["cs_getbackacc"] + '" target="_blank">找回账号</a>？'],
	idcError: [2014, "身份证信息无效或未满18周岁"],
	sameError: [30000, "不能绑定相同的邮箱！", "您要更换的手机号码已经是当前账户的绑定手机了"],
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
	emailFrequent: [31001, "邮件发送太频繁了，稍后请重试！"],
	nullMobile: [30406, "您的安全手机为空！"],
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
MPT.Config['poster'] = {
	'productPoster': MPT.Config['iwgame_http'] + '/js/poster_js/49.js'
};
MPT.Config['zoom'] = null;
MPT.Config['findpw_flag'] = false;
MPT.productInfo = typeof productInfo != 'undefined' ? productInfo : [];