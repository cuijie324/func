// generator函数初学习

// function* gen(x){
//   var y = yield x + 2;
//   console.log(y);
//   yield y;
//   return 5;
// }

// var g = gen(1);
// console.log(g.next()); // { value: 3, done: false }
// //console.log(g.next(2)) // { value: undefined, done: true }
// console.log(g.next(2));
// console.log(g.next());

var fetch = require('node-fetch');

function* gen() {
    var url = 'https://api.github.com/users/github';
    var result = yield fetch(url);
    console.log(result.bio);
}

var g = gen();
var result = g.next();

result.value.then(data => {
    return data.json();
}).then(data => {
    g.next(data);
})