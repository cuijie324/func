uniqueInteger.counter = 0;

function uniqueInteger(){
    uniqueInteger.counter++;
    console.log(uniqueInteger.counter);
}

uniqueInteger();
uniqueInteger();

(function () {
    uniqueInteger.counter = 0;
    
    uniqueInteger();
    uniqueInteger();
}())

var after = function (times, callback) {
    var count = 0, results = {};
    return function (key, value) {
        count++;
        results[key] = value;

        if(count === times){
            callback(results);
        }
    }
}