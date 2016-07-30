// thunk函数学习

var fs = require('fs');
var thunkify = require('thunkify');

// 原先的使用方式
//fs.readFile(fileName, callback);
// var readFileThunk = Thunk(fileName);
// readFileThunk(callback);

//封装成thunk形式
// var readFile = function (fileName) {
//     return function (callback) {
//         return fs.readFile(fileName, callback);
//     }
// }

var readFile = thunkify(fs.readFile);
// readFile('a.text')((err, data) => {
//     console.log(data.toString());
// })

var gen = function* (){
    var r1 = yield readFile('a.text');
    console.log(r1.toString());
    var r2 = yield readFile('b.text');
    console.log(r2.toString());
}

//手动执行上面的generator函数
function gen_exec(){
    var g = gen();
    var r1 = g.next();
    r1.value(function(err, data){
        if(err) throw err;
        var r2 = g.next(data);
        r2.value(function(err, data){
            if(err) throw err;
            g.next(data);
        })
    })
}
//gen_exec();

//自动执行上面的generator函数
function gen_auto(fn){
    var gen = fn();

    // function next(data){
    //     var result = gen.next(data);
    //     if(result.done) return;
    //     result.value(function(err, data){
    //         if(err) throw err;
    //         //gen.next(data);
    //         next(data);
    //     })
    // }
    function next(err, data){
        var result = gen.next(data);
        if(result.done) return;
        result.value(next);
    }

    next();
}

gen_auto(gen);



