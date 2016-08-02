//使用thunks模块

var thunk = require('thunks')()
var fs = require('fs')

var size = thunk.thunkify(fs.stat)

// generator
thunk(function *() {

  // sequential
  console.log(yield size('.gitignore'))
  console.log(yield size('async1.js'))
  console.log(yield size('package.json'))

})(function *(error, res) {
  //parallel
  console.log(yield [
    size('.gitignore'),
    size('async1.js'),
    size('package.json')
  ])
})()