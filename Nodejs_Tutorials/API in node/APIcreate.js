//API Application Programming Interface
//This allows software to communicate with each other

console.log(__dirname);
const http = require('http');

const fs = require('fs');
const server = http.createServer((req,res)=>{
    if(req.url=='/')
    {
      res.end('This is the home');
    }
    else if(req.url=='/userapi')
    {
        const buff= fs.readFileSync('API.json','utf-8')
        //const data = buff.toString();
        console.log(buff);

        const obj = JSON.parse(buff);
        console.log
            
            
    
        console.log(obj);        
        console.log(obj.time.updated);        
        console.log(obj.disclaimer);        
        console.log(obj.chartName);        
        res.end( obj +  buff +  'API side');
        
    }
    else
    {
        res.end('nothing here')
    }
});

server.listen(4000,'127.0.0.1',()=>{
    console.log('listening to pxort no 4000');
})


