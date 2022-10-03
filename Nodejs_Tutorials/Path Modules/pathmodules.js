const path= require('path');


//console.log(path);


//Change the backward slash into forward slash
console.log("Name of the directory of this path--",path.dirname('C:/WEB-DEV/nodejs/Path Modules/pathmodules.js') );

console.log("Name of the extension of this path--",path.extname('C:/WEB-DEV/nodejs/Path Modules/pathmodules.js') );

console.log("Name of the basename of this path--",path.basename('C:/WEB-DEV/nodejs/Path Modules/pathmodules.js') );

//.parse returns  an object that has significant properties of the the provided path 
console.log("All three above" ,path.parse('C:/WEB-DEV/nodejs/Path Modules/pathmodules.js'));

console.log("name" ,path.parse('C:/WEB-DEV/nodejs/Path Modules/pathmodules.js').name);