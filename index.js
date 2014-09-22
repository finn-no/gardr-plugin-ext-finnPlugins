/**
* Plugins can be registered with the banner.registerPlugin() function,
* and fetched using banner.plugin().
*/
global.banner = global.banner || {};
global.banner._plugins = {};

global.banner.plugin = function (str) {
  var plugins = global.banner._plugins;

    var plugin = plugins[str];
    if ( typeof plugin === 'function' ) {
        return plugin();
    } else {
        return plugin;
    }
};


var registerPlugin = function (str, obj) {
    global.banner._plugins[str] = obj;
}

module.exports.registerPlugin = registerPlugin;
