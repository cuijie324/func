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

co(gen).then(function () {
    console.log('Generator 函数执行完成');
}).catch(err => console.error(err));

// var asyncReadFile = async function(){
//     var f1 = await readFile('a.text');
//     var f2 = await readFile('b.text');

//     console.log(f1.toString());
//     console.log(f2.toString());
// }

// var result = asyncReadFile();
// console.log(result);