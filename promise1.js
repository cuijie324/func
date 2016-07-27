var fs = require('fs');

// fs.readFile('./package.json', (err, data) => {
//     if(err) throw err;
//     console.log(data.toString());
// })

function getFile(file) {
    return new Promise(function(resolve, reject){
        console.log("promise is starting...");
        fs.readFile(file, (err, data) => {
            if(err){
                reject(err);
            }else{
                resolve(data.toString());
            }
        })
    });
}

console.log("start");

getFile('./package.json').then(function(data){
    console.log("收到数据...");
    return JSON.parse(data);
}).then(data => {
    console.log(data);
    return data.name
}).then(data => {
    console.log(data);
})
.catch(err => {
    console.log("catch", err);
})

console.log("end");

console.log("start2");

getFile('./package.json').then(function(data){
    console.log("收到数据2...");
    return JSON.parse(data);
}).then(data => {
    return new Promise(function(resolve, reject){
        console.log(data);
        resolve(data.name);
    })
}).then(data => {
    console.log(data);
})
.catch(err => {
    console.log("catch", err);
})

console.log("end2");