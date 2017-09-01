MPT.Config.lib_path = MPT.Config.pay_res_http + "/js/lib/";
MPT.Config.tpl_path = MPT.Config.pay_res_http + "/js/tpl/";
MPT.Config.js_path = MPT.Config.pay_res_http + "/js/ctrl/";
MPT.Config.lib_list = ["jquery.min.js", "jquery.blockUI.min.js", "Validform.min.js"];
MPT.Config.tpl_list = ["tpl_public.js", "tpl_pay.js"];
MPT.Config.ctrl_list = ["config.js","utils.js", "public_pay.js", "pay.js"];
for (var i = 0; i < MPT.Config.lib_list.length; i++) {
    document.write('<script src="' + MPT.Config.lib_path + MPT.Config.lib_list[i] + '"><\/script>')
}
for (var i = 0; i < MPT.Config.tpl_list.length; i++) {
    document.write('<script src="' + MPT.Config.tpl_path + MPT.Config.tpl_list[i] + '"><\/script>')
}
for (var i = 0; i < MPT.Config.ctrl_list.length; i++) {
    document.write('<script src="' + MPT.Config.js_path + MPT.Config.ctrl_list[i] + '"><\/script>')
};