// var o = { x:1, y:2, z:3 };
// console.log(Object.keys(o));
// console.log(Object.getOwnPropertyNames(o));

var p = {
    data_prop: 1,
    get accessor_prop(){ 
        return this.data_prop;
    },
    set accessor_prop(value){
        console.log(value);
        this.data_prop = value;
    }
}

console.log(Object.getOwnPropertyDescriptor(p, "data_prop"));
console.log(Object.getOwnPropertyDescriptor(p, "accessor_prop"));

var o = {};
Object.defineProperty(o, "x", {
    value: 5,
    writable: true,
    enumerable: true,
    configurable: true
})

var a = { x:1, y:2, z:3 };
console.log(JSON.stringify(a));


// console.log(o);
// console.log((Object.getPrototypeOf(o)));
// console.log(o.toString());

function classof(o) {
    if(o === null) return "Null";
    if(o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8, -1);
}

// console.log(classof(o));
// console.log(Object.isExtensible(o));

