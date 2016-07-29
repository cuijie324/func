rs.readFile(fileName, callback);

var readFileThunk = Thunk(fileName);
readFileThunk(callback);

var Thunk = function (fileName) {
    return function (callback) {
        return fs.readFile(fileName, callback);
    }
}