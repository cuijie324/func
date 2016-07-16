function Complex(a, b){
    this.x = a;
    this.y = b;
}

Complex.prototype.add = function(value){
    this.y += value;
}

Complex.prototype.toString = function(){
    console.log(`x = ${this.x}, y = ${this.y}`);
}

var a = new Complex(1, 2);
a.toString();
a.add(3);
a.toString();
