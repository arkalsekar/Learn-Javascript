//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//64ebc7201d8864abe44d4a0339d8414e
// Node Js portion...................

const http = require('http');
const fs = require("fs");
var requests= require('requests')

const homeFile=fs.readFileSync('index.html',"utf-8");

const replaceVal=(tempVal,orgVal)=>{
    let temperature= tempVal.replace("{%tempval%}",orgval.main.temp);
    temperature= temp.replace("{%tempval%",orgval.main.temp);
    temperature= tempVal.replace("{%tempval%",orgval.main.temp);
    temperature= tempVal.replace("{%tempval%",orgval.main.temp);
    temperature= tempVal.replace("{%tempval%",orgval.main.temp);
    temperature= tempVal.replace("{%tempval%",orgval.main.temp);
}


 const server= http.createServer((req,res)=>{
     //res.end("This is the server ");
     if(req.url=="/"){
         requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=64ebc7201d8864abe44d4a0339d8414e")
         .on("data",(chunk)=>{
             console.log(chunk);
             const objData=JSON.parse(chunk);
             const arrData=[objData];

             const realTimeData=arrData.map((val)=>{
                 replaceVal(homeFile,val);
             })
             console.log(arrData);
             console.log(objData);
             console.log((arrData[0].main.temp)-273.15);
             console.log((arrData[0].main.temp_min)-273.15);
             console.log((arrData[0].main.temp_max)-273.15);
         })
         .on("end",(err)=>{
             if(err) return console.log("connection closed due to error");

             console.log("end");
         });
     }

 })

 server.listen(4200,"127.0.0.1",()=>{
     console.log("the server is running")
 });