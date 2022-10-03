//fs is the core modules
// Modules are same as js libraries..
// Set of functions to include in your application
// Node js has a setof built in modules that we can use
//const name="Aryan";
//console.log(name)
const fs = require("fs"); //For including the core modules


//creating a new file 
fs.writeFileSync('createdbyfs.txt',"This is node js intro to fs");

//Overwritting the already made file
fs.writeFileSync('createdbyfs.txt',"Overwritting the already created file ");

//Adding the data
fs.appendFileSync('createdbyfs.txt',"This is the appended data");

//reading the data of other's file
//fs.readFileSync("createdbyfs.txt");

const buf_data = fs.readFileSync("createdbyfs.txt");
console.log(buf_data);

// <Buffer 4f 76 65 72 77 72 69 74 74 69 6e 67 20 74 68 65 20 61 6c 72 65 61 64 79 20 63 72 65 61 74 65 64 20 66 69 6c 65 20 54 68 69 73 20 69 
//  73 20 74 68 65 20 ... 13 more bytes>


//This is the buffer data that we get in return here
//This is a new data type in node js which is not in js ..
//Buffer is used to store the binary data
// It is used while reading from a file or receiving packets over the network

orig_data=buf_data.toString();

console.log(orig_data);

//To rename the file
fs.renameSync('createdbyfs.txt','renameddata.txt');
