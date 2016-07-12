function memorize(f){
    var cache = {};     
    return function(){          
        var key = arguments.length + Array.prototype.join.call(arguments, ",");
        console.log(key);
        console.log(cache);
        if(key in cache) return cache[key];
        else return cache[key] = f.apply(this, arguments);
    }
}

var factorial = memorize(function(n){
    return (n<=1)?1:n*factorial(n-1);
})

factorial(5);
factorial(4);
