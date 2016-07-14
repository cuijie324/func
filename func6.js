function add(a, b){
    return a + b;
}

console.log(add(1, 2));
console.log(add(1, 3));

// function addOne(b){
//     return add(1, b);
// }

// function addCommon(a){
//     return function (b) {
//         return add(a, b);
//     }
// }

function bindFirstArg(fn, a){
    return function (b) {
        return fn(a, b);        
    }
}

var addOne = bindFirstArg(add, 1);
console.log(addOne(2));
console.log(addOne(3));

function multify(a, b){
    return a*b;
}

var multifyTen = bindFirstArg(multify, 10);
console.log(multifyTen(2));
console.log(multifyTen(3));