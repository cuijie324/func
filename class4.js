function defineSubclass(superclass, constructor, methods, statics) {
    constructor.prototype = Object.create(superclass.prototype);
    constructor.prototype.constructor = constructor;

    if (methods) extend(constructor.prototype, methods);
    if (statics) extend(constructor, statics);

    return constructor;
}

Function.prototype.extend = function (constructor, methods, statics) {
    return defineSubclass(this, constructor, methods, statics);
}

//p是要继承的原型对象
function inherit(p) {
    if (p == null) throw TypeError();

    if (Object.create) {
        return Object.create(p);
    }

    var t = typeof p;
    if (t !== "object" && t !== "function") throw TypeError();

    function f() { };
    f.prototype = p;
    return new f();
}