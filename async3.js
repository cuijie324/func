var fs = require('fs');
var co = require('co');

var readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (err, data) {
            if (err) reject(err);
            resolve(data);
        });
    });
}

var gen = function* () {
    var f1 = yield readFile('a.text');
    var f2 = yield readFile('b.text');

    console.log(f1.toString());
    console.log(f2.toString());
}

//使用co自动执行
// co(gen).then(function () {
//     console.log('Generator 函数执行完成');
// }).catch(err => console.error(err));

//手动执行
function gen_auto(){
    var g = gen();

    g.next().value.then(data => {
        g.next(data).value.then(data => {
            g.next(data);
        })
    })
}

gen_auto();

//手写的自动执行
function gen_co(fn){
    var g = fn();

    function next(data){
        var result = g.next(data);
        if(result.done) return result.value;

        result.value.then(next);
    }

    next();
}

gen_co(gen);

//co的并发操作
// co(function* (){
//     var res = 
// });