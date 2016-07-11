var even = function (x) {
    return x % 2 === 0;
}

var not = function (f) {
    return function () {
        var result = f.call(this, arguments);
        console.log(this);
        return !result;
    }
}

var cal = function(x){
    console.log(this);
    return this.b +　x;
}

var a = {b: 5};

cal.call(a, 2);

var obj_a = {
    add: function (x, y) {
        return x + y;
    }
}

function trace(o, m) {
    var original = o[m];
    o[m] = function () {
        console.log("Entering: " + m);
        var result = original.apply(o, arguments);
        console.log("End calling");
        return result;
    }
}

trace(obj_a, 'add');
obj_a.add(1, 2);

