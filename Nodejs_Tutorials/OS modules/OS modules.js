// getting the info of the Operating system using node js

const os = require('os');

//Will tell about the architecture of the operating system
console.log(os.arch());

console.log("Os-",os.type());

console.log("Hostname-",os.hostname());

console.log("platform-",os.platform());

console.log("temporary directory path-",os.tmpdir());

console.log("Free Memory(system memory in bytes)-",os.freemem());

console.log("system memory in gb",os.freemem()/1024/1024/1024);


console.log("Total Memory(system memory in bytes)-",os.totalmem());

console.log("Total memory in gb",os.totalmem()/1024/1024/1024);
