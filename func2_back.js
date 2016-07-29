var obj_a = {
    add: function (x, y) {
        return x + y;
    }
}

function trace(o, m) {
    var resource = o[m];
    console.log("Entering: " + m);
    resource.apply(o, arguments);
    console.log("End calling");
    return o;
}

trace(obj_a, 'add').add(1, 2);
