function* f() {
  console.log('执行了！')
}

var generator = f();

console.log("before");

setTimeout(function () {
  generator.next()
}, 500);