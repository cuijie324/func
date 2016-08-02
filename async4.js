var fetch = require('node-fetch');
var co = require('co');
var url = 'http://app.chatu.com/api/article/get/518';

//promise 版本
function getBio() {    
    fetch(url)
        .then(data => data.json())
        .then(data => console.log('promise result:', data.Author.Author));
}
getBio();

//generator 版本，数据的解析放在执行器里，只能手动执行
function* gen() {
    var result = yield fetch(url);
    console.log('generator result:', result.Author.Author);
}

//执行上面的generator函数
function gen_exec(){
    var g = gen();
    var result = g.next();
    result.value.then(data => {
        return data.json();
    }).then(data => {
        g.next(data);
    });
}
gen_exec();

//另一个版本的generator函数，数据的解析放在这里，执行器只需直接返回数据，所以可以自动执行或手动执行
function* gen2(){
    var result = yield fetch(url);
    var json = result.json();
    json.then(data => {
        console.log('co:', data.Author.Author);
        return data.Author.Author;
    });
}

//手动执行上面的generator函数
function gen_manual(){
    var g = gen2();
    var result = g.next();
    result.value.then(data => {
        g.next(data);
    });    
}
gen_manual();

//自动执行上面的generator函数
co(gen2).then(data => {
    console.log("自动执行完毕");
}).catch(err => console.error(err));