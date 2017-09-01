MPT.Config.js_path = "/javascripts/";
MPT.Config.lib_path = "/js/lib/";
MPT.Config.lib_list = ["jquery.min.js", "jquery.blockUI.min.js", "Validform.min.js", "tools.min.js"];
MPT.Config.tpl_list = ["tpl_public.js", "tpl_reg.js"];
MPT.Config.ctrl_list = ["utils.js", "public.js", "reg.js"];
for (var i = 0; i < MPT.Config.lib_list.length; i++) {
    document.write('<script src="' + MPT.Config.lib_path + MPT.Config.lib_list[i] + '"><\/script>')
}
for (var i = 0; i < MPT.Config.tpl_list.length; i++) {
    document.write('<script src="' + MPT.Config.js_path + MPT.Config.tpl_list[i] + '"><\/script>')
}
for (var i = 0; i < MPT.Config.ctrl_list.length; i++) {
    document.write('<script src="' + MPT.Config.js_path + MPT.Config.ctrl_list[i] + '"><\/script>')
}
