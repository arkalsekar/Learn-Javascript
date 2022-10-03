//JSON Javascript Object Notation.JSON is a lightweight format for storing and transporting data
//JSON is often used when data is sent from a server to a web page

const fs = require("fs");


const Biodata= {
    Name: 'Aryan',
    Branch: 'CSE',
    Age: 20,
    Section: 'B'
}

console.log(Biodata.Name)
//Now converting object into JSON data

const jsonData= JSON.stringify(Biodata);

console.log(jsonData);
console.log(typeof(jsonData));
console.log(typeof(jsonData.Name));  //This will be undefined now
console.log(typeof(Biodata));

const objData=JSON.parse(jsonData);
console.log(objData );

// 1.Make an object, and convert it to JSON
// 2.add it to an another file
// 3. readfile 
// 4. convert it back to js object
// 5.console.log()

const objconv= {
    Name: "Anshu Pandey",
    Branch: "ECE",
    Section:"N"
}


const jsonans= JSON.stringify(objconv);

//console.log(jsonans);

//fs.mkdirSync('JSONOBJ')
//fs.writeFileSync('JSONOBJ/test.txt',"hello");
fs.writeFileSync('JSONOBJ/test.json',jsonans);

const buf= fs.readFileSync('JSONOBJ/test.json','utf-8');
const conv= buf.toString();
console.log(conv);

const stringanshu= JSON.parse(conv);
console.log(stringanshu);