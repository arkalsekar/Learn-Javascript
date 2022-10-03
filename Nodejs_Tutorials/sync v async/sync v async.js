const fs = require('fs');

const out=fs.readFileSync('../fsasync/read.txt','UTF-8');
console.log(out);
console.log("after the data, sync manner");
// the above commands will be in an order , because it will be in syncronous manner

fs.readFile('../fsasync/read.txt','utf-8',
(err,data)=>{
    console.log(data);
    
});

console.log("after the data, async manner");