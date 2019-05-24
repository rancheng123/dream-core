/*path start*/
var path = require('path');
var current_path = path.resolve(__dirname);
var src_path = path.resolve(current_path, '../../frontEnd/dream-operation/src');
var dist_path = path.resolve(current_path, '../../frontEnd/dream-operation/dist');
/*path end*/


function getIPAdress(){
    var interfaces = require('os').networkInterfaces();
    for(var devName in interfaces){
        var iface = interfaces[devName];
        for(var i=0;i<iface.length;i++){
            var alias = iface[i];
            if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
                return alias.address;
            }
        }
    }
}

var ip = getIPAdress();

var host = 'local-dream.mxj360.com'


module.exports = {
    src_path,
    dist_path,
    host: ip,
    port: 8388,
    alias: {
        // 新增@指引文件符号 haoliang
        '@': path.resolve(src_path),
        '@widget': path.resolve(src_path,'js/widget'),
        '@modules': path.resolve(src_path,'js/components/modules'),
        '@components': path.resolve(src_path,'js/components'),
        '@api': path.resolve(src_path,'js/api'),
        '@space': path.resolve(src_path,'js/page/space'),
        '@svg': path.resolve(src_path,'image/svg'),
        AppStore : 'js/stores/AppStores.js',  //后续直接 require('AppStore') 即可
        ActionType : 'js/actions/ActionType.js',
        AppAction : 'js/actions/AppAction.js',
        test: path.resolve(src_path,'js/asset/third/test.js')
    }
}