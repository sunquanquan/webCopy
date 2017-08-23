var Utils = {
	toTargetView: function(_url){
		window.location.href = _url;
	},
	openTargetView: function(_url){
		window.open(_url);
	},
	striptScript: function(str){
		return str.replace(/<script.*?>.*?<\/script>/ig,'');
	},
	getUrl: function(key){
		var keyArr = location.search.substring(1).split('&');
		for(var i = 0;i < keyArr.length;i++){
			if(key == keyArr[i].split('=')[0]){
				return keyArr[i].split('=')[1];
			}
		}
		return '';
	},
	checkWeakPw: function(_an,_pw){
		if(!_an){
			_an='';
		}
		if(!_pw){
			_pw='';
		}
		if(!MPT.Config['regexp']['password'].test(_pw)){
			return 0;
		}
		if(_an.toUpperCase()==_pw.toUpperCase()){
			return -1;
		}
		if(/^(.)\1+$/.test(_pw)){
			return -2;
		}
		var weakPws=["123456", "123456789", "12345678", "123123", "5201314", "1234567", "7758521", "654321", "1314520", "123321", "1234567890", "147258369", "123654", "5211314", "woaini", "1230123", "987654321", "147258", "123123123", "7758258", "520520", "789456", "456789", "159357", "112233", "1314521", "456123", "110110", "521521", "zxcvbnm", "789456123", "0123456789", "0123456", "123465", "159753", "qwertyuiop", "987654", "115415", "1234560", "123000", "123789", "100200", "963852741", "121212", "111222", "123654789", "12301230", "456456", "741852963", "asdasd", "asdfghjkl", "369258", "863786", "258369", "8718693", "666888", "5845201314", "741852", "168168", "iloveyou", "852963", "4655321", "102030", "147852369", "321321"];
		for(var i=0;i<weakPws.length;i++){
			if(_pw==weakPws[i]){
				return -3;
			}
		}
		//非弱密码
	    return 1;
	},
	setHome: function(obj,url){
	    try{
	        obj.style.behavior = 'url(#default#homepage)';
	        obj.setHomePage(url);
	    }catch(e){
	        if(window.netscape){
	            try{
	                netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
	            }catch(e){
	                alert('抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车\n\n然后将[signed.applets.codebase_principal_support]的值设置为true，双击即可。');
	            }
	            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
	            prefs.setCharPref('browser.startup.homepage',url);
	        }else{
	            alert('抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【' + url + '】设置为首页。');
	        }
	    }
	},
	plus: function(_content,_wrap){
		var _length = $(_content).size();
		var _list = $(_content).eq(0).clone(true);
		var _plus = $('.e_plus');
		var _minus = $('.e_minus');
		switch(_length){
			case 1:
				_minus.addClass('icon-minus').removeClass('icon-minus-disabled');
				$(_wrap).append(_list);
				$(_content).eq(_length).find(':text').val('');
				$('.e_item_tip').empty();
				break;
			case 4:
				_plus.removeClass('icon-plus').addClass('icon-plus-disabled');
				$(_wrap).append(_list);
				$(_content).eq(_length).find(':text').val('');
				$('.e_item_tip').empty();
				break;
			case 5:
				break;
			default:
				_minus.removeClass('icon-minus-disabled').addClass('icon-minus');
				$(_wrap).append(_list);
				$(_content).eq(_length).find(':text').val('');
				$('.e_item_tip').empty();
		}
		return false;
	},
	minus: function(_content){
		var _length = $(_content).size();
		var _plus = $('.e_plus');
		var _minus = $('.e_minus');
		switch(_length){
			case 1:
				_minus.addClass('icon-minus-disabled').removeClass('icon-minus');
				_plus.removeClass('icon-plus-disabled').addClass('icon-plus');
				break;
			case 2:
				_minus.addClass('icon-minus-disabled').removeClass('icon-minus');
				_plus.removeClass('icon-plus-disabled').addClass('icon-plus');
				$(_content).last().remove();
				break;
			default:
				_plus.removeClass('icon-plus-disabled').addClass('icon-plus');
				$(_content).last().remove();
		}
		return false;
	},
	cutStr: function(str, length){
		if(str.length > length){
			return str.substr(0, length) + '...';
		}else{
			return str;
		}
	},
	setCookie: function(name, value, hours){
		var d = new Date();
		d.setTime(d.getTime() + hours * 3600 * 1000);
		document.cookie = name + '=' + value + '; expires=' + d.toGMTString();
	},
	getCookie: function(name){
		var arr = document.cookie.split('; ');
		for(var i = 0; i < arr.length; i++){
			var temp = arr[i].split('=');
			if(temp[0] == name){
				return temp[1];
			}
		}
		return '';
	},
	removeCookie: function(name){
		var d = new Date();
		d.setTime(d.getTime() - 10000);
		document.cookie = name + '=1; expires=' + d.toGMTString();
	}
}
function validateIdCard(idcard){
	if(idcard.length == 15){
		if(isValidityBrithBy15IdCard(idcard)){
			if(getAgeByIdcard(idcard)){
				return '您属于未满18周岁的未成年人，无法注册';
			}
			return true;
		}
		return false;
	}else if(idcard.length == 18){
		var idCardArr = idcard.split('');// 得到身份证数组
		if(isValidityBrithBy18IdCard(idcard) && isTrueValidateCodeBy18IdCard(idCardArr)){
			if(getAgeByIdcard(idcard)){
				return '您属于未满18周岁的未成年人，无法注册';
			}
			return true;
		}
		return false;
	}
	return false;
}
function isTrueValidateCodeBy18IdCard(idCardArr){
	var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];//加权因子;
	var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];//身份证验证位值，10代表X;
	var sum = 0;	//声明加权求和变量
	if(idCardArr[17].toLowerCase() == 'x'){
		idCardArr[17] = 10;	//将最后位为x的验证码替换为10方便后续操作
	}
	for(var i = 0;i < 17;i++){
		sum += Wi[i] * idCardArr[i];	//加权求和
	}
	valCodePosition = sum % 11;	//得到验证码所位置
	if(idCardArr[17] == ValideCode[valCodePosition]){
		return true;
	}
	return false;
}
function isValidityBrithBy18IdCard(idCard18){
	var year = idCard18.substring(6,10);
	var month = idCard18.substring(10,12);
	var day = idCard18.substring(12,14);
	var temp_date = new Date(year,parseFloat(month) - 1,parseFloat(day));
	//这里用getFullYear()获取年份，避免千年虫问题
	if(temp_date.getFullYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)){
		return false;
	}
	return true;   
}
function isValidityBrithBy15IdCard(idCard15){
	var year =  idCard15.substring(6,8);
	var month = idCard15.substring(8,10);
	var day = idCard15.substring(10,12);
	var temp_date = new Date(year,parseFloat(month) - 1,parseFloat(day));
	//对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
	if(temp_date.getYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)){
		return false;
	}
	return true;
}
function getAgeByIdcard(idcard){
    var d = new Date();
    var Y = idcard.length == 18 ? idcard.slice(6, 10) : 1900 + parseInt(idcard.slice(6, 8));
    Y = parseInt(Y) + 18;
    var M = idcard.length == 18 ? idcard.slice(10, 12) : idcard.slice(8, 10);
    var D = idcard.length == 18 ? idcard.slice(12, 14) : idcard.slice(10, 12);
    var date = Y + '/' + M + '/' + D;
    if (Date.parse(d) - Date.parse(date) == 0){
        return false;
    }
    if (Date.parse(d) - Date.parse(date) < 0){
        return true;
    }
    if (Date.parse(d) - Date.parse(date) > 0){
        return false;
    }
    return true;
}