function createNaturalNumber() {
    var i = 0;
    return {
        next: function next() {
            return { done: i >= 100, value: i++ };
        }
    };
}

function* generateNaturalNumber() {
    console.log('function start');
    var i = 0;
    while(i <= 10){
        console.log('yield start');
        var j = yield i;
        console.log('j = ' + j);
        //j && (i = j);
        console.log('yield end');
        i++;
    }
    console.log('function end');
}

var result = generateNaturalNumber();
// console.log(result.next());
// console.log(result.next(5));
// console.log(result.next());

// for(var i of generateNaturalNumber()){
//     console.log(i);
// }

function* genFun1(){
    yield 2;
    yield 3;
    yield 4;
}

function* genFun2() {
    yield 1;
    yield* genFun1();
    yield 5;
}

// for(var i of genFun2()){
//     console.log(i);
// }

