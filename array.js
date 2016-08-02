var undefs = [ 1, 2,];
console.log(undefs.length);

var a = new Array();
var b = new Array(9);
var c = new Array(5, 4, 'abc');

// console.log(a, b, c);

var d = [1, 2, 3];
var d2 = new Array(3, 5, 7, 9);
// console.log(d[1]);
// console.log(d2[1]);

// console.log(d.length, 1 in d);
// console.log(d2.length, 0 in d2);

// console.log(Object.keys(d));

// for(var i in d2){
//     console.log(i);
// }

// d.forEach(function(x){
//     console.log(x);
// })

// var a = "hello world";
// console.log(a.split(' '));

// var b = [3, 23, 4, 32, 7];
// b.sort();
// console.log(b);
// b.sort(function (a, b) {
//     return a - b;
// })
// console.log(b);

// console.log([1, 2, 3, [4, [5, 6]]].toString());

function findall(a, x){
    var results = [];
    var i = 0;
    while(i < a.length){
        var index = a.indexOf(x, i);
        if(index != -1){
            results.push(index);
            i = index + 1;
        }
    }

    return results;
}

var a = [1, 2, 3, 2, 5, 2, 4, 2];
console.log(findall(a, 2));

console.log(Array.isArray(a));

var s = "JavaScript";
console.log(s.charAt(0),s[0]);
