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
///////////////////////////////////////////////////////////////////////


MPT.Config['req'] = {
	accdata: MPT.Config.pay_http + "/pay",
	getproductlist: MPT.Config.pay_http + "/getProductList",
	getzonelist: MPT.Config.pay_http + "/getzonelist",
	getparvalue: MPT.Config.pay_http + "/getparvalue",
	getdiscount: MPT.Config.pay_http + "/getdiscount",


	'accData': MPT.Config['cs_http'] + '/index',
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
}
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
	'wpError': ['密码格式填写错误','密码不能与帐号名相同','密码不能全部是相同字符','密码太简单了,换个吧']
}
MPT.Config['url'] = {
	//退出
	'logout': MPT.Config['cs_http'] + '/passport?action=logout',

	'gametj':'http://www.lvanol.com/iwproduct/cptzj/',
	'company': 'http://www.iwgame.com/',
	'game_sm': 'http://www.shumenol.com/',
	'game_zxy': 'http://www.zuixiaoyao.com/',
	'game_tzj': 'http://tzj.iwgame.com/',

	//登录
	'login': MPT.Config['passport_http'] + '/sso/loginpage.do?pid=' + MPT.pid,
	//登录弹窗
	//'loginPopup': MPT.Config['passport_http'] + '/sso/ploginpage.do?ls=cs&loginback=' + MPT.Config['cs_http'] + '/loginback.do&pid=' + MPT.pid,
	'loginPopup': MPT.Config['passport_http'] + '/ploginpage?ls=cs&loginback=' + MPT.Config['cs_http'] + '/loginback&pid=' + MPT.pid,
	//注册
	'register': MPT.Config['passport_http'] + '/reg/account/regpage.do?type=m&pid=' + MPT.pid,

	'pay': MPT.Config['pay_http'] + '/index.do?pid=' + MPT.pid,
	'cs': MPT.Config['cs_http'] + '/index.do?pid=' + MPT.pid,

	//账号申诉
	'question': MPT.Config['cs_http'] + '/c/question?pid=' + MPT.pid,

	'questionList': MPT.Config['cs_http'] + '/c/questionList.do?pid=' + MPT.pid,
	'faq': MPT.Config['cs_http'] + '/faq.do?pid=' + MPT.pid,

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
}
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
}
MPT.Config['url']['passport'] = {
	'passport': MPT.Config['space_http'] + '/c/passport.do?pid=' + MPT.pid,
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
}
MPT.Config['pay_http'] = {
	'kscz':MPT.Config['pay_http']+'/index.do?pid=' + MPT.pid,
	'zfbcz':MPT.Config['pay_http']+'/index.do?pid=' + MPT.pid,
	'bankcz':MPT.Config['pay_http']+'/index.do?pid=' + MPT.pid,
	'cordercz':MPT.Config['pay_http']+'/index.do?pid=' + MPT.pid,
	'mobilecz':MPT.Config['pay_http']+'/index.do?pid=' + MPT.pid,
	'cardcheck':MPT.Config['pay_http']+'/cardcheck.do?pid=' + MPT.pid,
	'saveQuery':MPT.Config['pay_http']+'/savedquery.do?pid=' + MPT.pid
}
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
	'stCaptcha': /[0-9]{8}/
}
MPT.Config['poster'] = {
	'productPoster': MPT.Config['iwgame_http'] + '/js/poster_js/49.js'
}
MPT.Config['zoom'] = null;
MPT.Config['findpw_flag'] = false;
MPT.productInfo = typeof productInfo != 'undefined' ? productInfo : [];