MPT.Config.lib_path = MPT.Config.passport_res_http + "/js/lib/";
MPT.Config.js_path = MPT.Config.passport_res_http + "/js/login/";
MPT.Config.lib_list = ["jquery.min.js", "Validform.min.js", "jquery.blockUI.min.js", "tools.min.js"];
MPT.Config.ctrl_list = ["config.js","utils.js", "public.js", "login_nest.js"];
for (var i = 0; i < MPT.Config.lib_list.length; i++) {
    document.write('<script src="' + MPT.Config.lib_path + MPT.Config.lib_list[i] + '"><\/script>')
}
for (var i = 0; i < MPT.Config.ctrl_list.length; i++) {
    document.write('<script src="' + MPT.Config.js_path + MPT.Config.ctrl_list[i] + '"><\/script>')
};