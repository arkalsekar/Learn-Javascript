const fs=require("fs");

//this is asyncronous  method of creating the file
// wheneevre we pass the function as an argument then that is callback
// the following one will give error becausw it requires am callback function as we are performing the task asyncrounously

// fs.writeFile("read.txt","my name is Aryan ;}",
// (err)=>{
//      console.log("file is created");
//      console.log(err);
// });

// in above we passed an arrow fnction as a callback because it is must as we are performing the
// task asyncronously

//the callback has  an argument that tells you whether the operation is completed successfully

// Now we need to say what ot do when fs.writeFile 
// has completed (even if its nothing), and start 
// checking for errors

// adding more data is asyncronous way
  fs.appendFile('read.txt',"appended in asynchronous way",
  ()=>{
      console.log('task completed');
  })

 fs.readFile('read.txt','UTF-8',
 (err,data)=>{
     console.log(data);
     console.log("This is buffer data")
 })