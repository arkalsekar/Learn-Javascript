const fs= require("fs");

fs.mkdir("Thapa(asynccrud)",(err)=>{
     console.log("directory created");
});

fs.writeFile("Thapa(asynccrud)/bio.txt","Async Crud ,input(1)",
(err)=>{
    console.log('file created and data inputed')
});

fs.appendFile("Thapa(asynccrud)/bio.txt","Async crud ,input (2)",
(err)=>{
    console.log('data appended');
});

fs.readFile('Thapa(asynccrud)/bio.txt','utf-8',
(err,data)=>{
    console.log(data);
});

fs.rename("Thapa(asynccrud)/bio.txt","Thapa(asynccrud)/biochanged.txt",
()=>{
    console.log("renamed file");
});



