function array(a, n) {
    //把类数组对象转换成真正的数组
    return Array.prototype.slice.call(a, n || 0);
}

function partialLeft(f){
    var args = arguments;
    return function(){
        //排除掉第一个参数后的数组，f就是第一个参数
        var a = array(args, 1);
        //跟第二个函数调用的参数组成新数组，放在了开头的位置
        a = a.concat(array(arguments));
        //把新数组传给f处理
        return f.apply(this, a);
    }
}

var f = function(x, y, z){
    return x * (y - z);
}

var result = partialLeft(f, 2)(3, 4);
console.log(result);//2*(3-4);
