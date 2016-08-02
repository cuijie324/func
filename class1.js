function Complex(a, b){
    this.x = a;
    this.y = b;
}

Complex.value = 1;

// Complex.prototype = {
//     constructor: Complex,
//     add: function(value){
//         this.y += value;
//     }
// }

Complex.prototype.add = function(value){
    this.y += value;
}

Complex.prototype.toString = function(){
    console.log(`x = ${this.x}, y = ${this.y}`);
}

var a = new Complex(1, 2);
// a.toString();
// a.add(3);
// a.toString();

console.log(a.constructor);
console.log(Object.prototype.toString.call(a));

// console.log(a.__proto__);
// console.log(a.constructor);
// console.log(Complex.value);
// console.log(Complex.prototype.constructor === Complex);

// console.log(a.constructor == Complex);
// console.log(a instanceof Complex);

// var b = {};
// b.__proto__ = Complex.prototype;
// //b.constructor = Complex;
// console.log(b instanceof Complex);

console.log(['could not parse age:', 'fad'].join(' '));
