;(function(){
	function LvanStatis(opt) {
		this.config = {
				'www':{
					'www'	:'85a02004f762b0cad9d791372c8439fb'
				},
				'mkey':{
					'mkey'	:'b532ca7da619c6f1e05e0dee72754953'
				},
				'passport':{
					'passport'		:'ff003592e486ca6d5063e5ce86bf9122',
					'spacepassport'	:'5e738016cb1fd5ca07157b4403fefd80'
				},
				'pay':{
					'pay'	:'9979286f100edb99b0c94496fb4c9312'
				},
				'cs':{
					'cs'	:'77cc4a1b26fb0ffadafbf64bf3efa3ac'
				},
				'tzj':{
					'tzj'	:'251a5cd010340adb3f740cb62d4179ef',
					'm'		:'36487c3f2f1f4417820ca11e3c062b92',
					'hd'	:'42d2bc415fcea0cea0f4ed71e6d75f47',
					'hds'	:'d0274f706222e0ae6e2b1fc14bb9d416',
					'act'	:'bd4ded5b243d9a98b516625f014c29a8',
					'act3'	:'374278cd2d8249324f45f512321ca1b8',
					'gh'	:'0b49675c654cbdb2011d183d2c0c7bbd',
					'bbs'	:'15d2254402504e5cf599dc4f69120031'
				},
				'qy':{
					'qy'	:'153c0fda9ab15bd2a2fc7d83d43e28a7',
					'm'		:'ba5236095d7fb6bc8d870ff0d2db1b5e',
					'hd'	:'94c29d952e28392d1aadf3ed089a4ee1',
					'hds'	:'e72de55e31652ffdd454176ef97841a5',
					'act'	:'bc6763a1e52917b6ead402b109bfb166',
					'bbs'	:'73795629afca184e7c3b16f29a187927'
				},
				'6':{
					'6'		:'6f061de6f8493e584884232b58e7d3b3',
					'm'		:'d4d31253145f2a6293c11aeba98fc611',
					'hd'	:'cebb69d61bbf3502dad78e9a90ff61d6'
				},
				'shs':{
					'shs'	:'31ae9022559ddbeda5f5a12cce3947ed',
					'hd'	:'e94ae44d441facb66ac5c9c2ffc310b7',
					'hds'	:'8997fd399cb1cf871292ad59a4af915e',
					'act'	:'bc5a462f3d914413f2086bc9a43f253c'
				},
				'shz':{
					'shz'	:'99ac42cffc6ccb30504e27e4ef8cbf8e'
				},
				'ly':{
					'ly'	:'15a8ff563a8862817f364ae5e22f53f2',
					'hd'	:'02a7cef7a14b61573d8826807abc8d0a',
					'hds'	:'52e5141c54022ed4e07cc17df5730f9c',
					'act'	:'f5ef065927b95671ce7a4530ab5cd514'
				},
				'tzj2':{
					'tzj2'	:'f331de057e8ee710a394e11014a90108',
					'hd'	:'0ba37a067ce34302dcdbb649fa415dc0',
					'hds'	:'8ebd74ed6d5ed894231a53efae4ff940',
					'act'	:'2b9646c37f0edfad5ff351ca5dcfcc51'
				},
				'jianji':{
					'jianji':'b06fd7fa84d4cdd4b6142eb7e95a0327'
				}
		};
		this.opt = {};
		this.init();
		this.append_statis();
	};
	LvanStatis.prototype.init = function() {
		this.opt['host'] = location.host;
		this.opt['pathname'] = location.pathname;
		var k_a,//config1键
			k_b='',
			cfgval;//config2键
		var host_arr = this.opt['host'].split('.');
		var _pathname = this.opt['pathname'].split('/')[1];
		var host_arr_len = host_arr.length;
		//二级及以下域名
		if(host_arr_len <= 3){
			k_a = k_b = host_arr[host_arr_len-3] ? host_arr[host_arr_len-3] : 'www';
		}else{
			k_a = host_arr[host_arr_len-3];
			for(var i=0;i< host_arr_len - 3;i++){
				k_b += host_arr[i];
			}
		}
		//hd.xx[.xx.].com/special/
		if((host_arr_len == 3 || host_arr_len == 4 ) && host_arr[0] == 'hd' && _pathname == 'special'){
			k_b = 'hds';
		}
		try{
			cfgval = this.config[k_a][k_b];
		}catch(e){
			cfgval = this.config['www']['www'];//未添加时默认值
		}
		this.opt['statis'] = '//hm.baidu.com/hm.js?' + cfgval;
	};
	LvanStatis.prototype.append_statis = function(){					//插入dom
		var htm = document.createElement('script'),
			ele = document.body || document.documentElement;
		htm.src = this.opt['statis'];
		ele.appendChild(htm);
	};
	window['LvanStatis'] = LvanStatis;
})(window);
new LvanStatis();