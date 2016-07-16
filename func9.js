// var length = 7;
// for (var i = 0; i < 100; i++) {
//     var result = '';
//     for (j = i.toString().length; j < length; j++){
//         result += '0';
//     }
//     console.log(result + i);
// }

var res = Array.from(Array(100).keys()).map(
    function (x) {
        return "0".repeat(8 - (x + 1).toString().length) + (x + 1)
    });

console.log('0'.repeat(8));

console.log(res);

// var len = 10;    //长度
// for (var i = 1; i <= 100; i++) {
//     console.log((Array(len).join(0) + Math.abs(i)).slice(-len));
// }

// console.log(Array(10).join(0));
// console.log('00001'.slice(-3));
// console.log(Math.abs(1));