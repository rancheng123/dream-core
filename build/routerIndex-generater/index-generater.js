var config = require('../config/business_config');
var src_path = config.src_path;
var path = require('path');
var fs = require('fs');
var readline = require('readline');



var modules = require('./config')[process.env.USER_NAME];


/*var modules = [
    //'homeRoute',
    'goodsRoute'

];*/




var importSFile = path.resolve(src_path,'./js/router/index-imports.js')
var orinalFile = path.resolve(src_path,'./js/router/index-core.js')


var generatedFile = path.resolve(src_path,'./js/router/index-result.js')







var fRead = fs.createReadStream(importSFile);
var objReadline = readline.createInterface({
    input: fRead,
})
var result = [];
objReadline.on('line', (line)=>{

    var name = line.trim().split(/\s+/)[1];
    if(modules){
        for(var value of modules){
            if(value == name){

                result.push({
                    name: name,
                    content: line
                })
            }
        }
    }
    //没有，打包全部
    else{
        result.push({
            name: name,
            content: line
        })
    }
});

objReadline.on('close', ()=>{
    fs.open(generatedFile,'w',function(error,fd){
        if(error){
            console.log(error);
        }else{
            console.log('创建文件成功');
        }
    })

    var data = fs.readFileSync(orinalFile/*文件名*/,'utf-8'/*文件字符编码（必须设置编码）*/);

    //处理import
    var a = data.split('{{imports}}')[0];
    var b = data.split('{{imports}}')[1]
    var data = a + result.map((ele)=>{
        return ele.content
    }).join('\n') + b;


    //处理router
    var a = data.split('{{routers}}')[0];
    var b = data.split('{{routers}}')[1];
    var data = a + result.map((ele)=>{
        return '{' + ele.name + '}'
    }).join('\n') + b;


    fs.writeFile(generatedFile,data,'utf-8',function(error){
        if(error){
            console.log(error);
        }else{
            console.log('写入文件成功');
        }
    });

});






