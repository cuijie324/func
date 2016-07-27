var fs = require('fs');

fs.readFile('./package.json', (err, data) => {
    if(err) throw err;
    console.log(data.toString());
})

function getFile(file) {
    return new Promise(function(resolve, reject){
        fs.readFile(file, (err, data) => {
            if(err){
                reject(err);
            }else{
                resolve(data.toString());
            }
        })
    });
}