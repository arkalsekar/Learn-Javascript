 //C-Create
 //update,Read,Delete
  const fs= require("fs");
 //fs.mkdirSync('Thapa')
 fs.writeFileSync("thapa/bio.txt","This is for the challenge");
 fs.appendFileSync("thapa/bio.txt","This is new appended data");
 const buf= fs.readFileSync("thapa/bio.txt","utf-8");
 const conv=buf.toString();
 console.log(buf);
 console.log(conv);

 
 
 //We can also do this by the following way
 //By default the encoding of .tostring function is utf-8 to convert the buffer data
 //console.log(buf.toString('utf-8'));
 fs.renameSync('thapa/bio.txt','thapa/bio-changed.txt'); 

 //To delete the file.
 //fs.unlinkSync("thapa/bio-changed.txt");

 //To delete the folder thapa
 //fs.rmdirSync("thapa");
 

