// thunk函数学习

var fs = require('fs');

// 原先的使用方式
//fs.readFile(fileName, callback);
// var readFileThunk = Thunk(fileName);
// readFileThunk(callback);

//封装成thunk形式
var readFile = function (fileName) {
    return function (callback) {
        return fs.readFile(fileName, callback);
    }
}

readFile('a.text')((err, data) => {
    console.log(data.toString());
})

