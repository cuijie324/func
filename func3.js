function compose(f, g){
     return function(){
         return f.call(this, g.apply(this, arguments)); 
     }
}

var square = function(x) {
    return x*x;
}

var sum = function(x, y) {
    return x+y;
}

var squareofsum = compose(square, sum);

var result = squareofsum(1, 2);

console.log(result);