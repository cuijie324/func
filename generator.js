// function createNaturalNumber() {
//     var i = 0;
//     return {
//         next: function next() {
//             return { done: i >= 2, value: i++ };
//         }
//     }
// }

// var result = createNaturalNumber();
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());

function* generateNaturalNumber() {
    var i = 0;
    while(i <= 12){
        var j = yield i;
        j && (i = j);
        i++;
    }
    console.log("it's end");
}

var result2 = generateNaturalNumber();
console.log(result2.next());
console.log(result2.next(1));
console.log(result2.next());
console.log(result2.next());
console.log(result2.next());
console.log(result2.next());

// for(var i of generateNaturalNumber()){
//     console.log(i);
// }