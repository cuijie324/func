var obj = { a: "1", b: "2", c: "3" };

console.log("\nstarting...");
testObj();
obj.d = "4";
console.log(obj);
//console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
Object.defineProperty(obj, "aa", {value: '11', writable: true, enumerable: true, configurable: true});
console.log(obj);

console.log("\npreventExtensions...");
Object.preventExtensions(obj);
testObj();
obj.e = "5";
console.log(obj);
delete obj.d;
console.log(obj);
obj.a = "11";
Object.defineProperty(obj, "bb", {value: '22', writable: true, enumerable: true, configurable: true});
console.log(obj);

console.log("\nseal...");
Object.seal(obj);
testObj();
console.log(obj);
delete obj.d;
console.log(obj);
obj.a = '111';
console.log(obj);

console.log("\nfreeze...");
Object.freeze(obj);
testObj();
console.log(obj);
obj.a = '1111';
console.log(obj);



//锁定 封闭 冻结
function testObj(){
    console.log("isExtensible: " + Object.isExtensible(obj) + " isSealed: " + Object.isSealed(obj) + " isFrozen: " + Object.isFrozen(obj));
}