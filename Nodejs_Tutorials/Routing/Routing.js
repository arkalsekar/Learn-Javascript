
// Routing defines a way in which the client requests are handled by the application endpoints..


const http = require('http');

const server = http.createServer((req,res)=>{

    console.log(req.url)                             
    //The url of every page will be send here , by the req.url .

    //Routing helps to map different http requests that is made to the server to map to different web pages

    //We can go to the network section of the console to see the status of the webpage
    //Now applying routing..

    if(req.url=='/')
    {
    res.end('<h1>Hello  This is node js routing</h1>');
    }
    else if(req.url=='/about')
    {
     res.end('<h1>This is about page</h1>');
    }
    else if(req.url=='/exit')
    {
     res.end('<h1>This is exit page</h1>');
    }
    else
    {
        res.writeHead(404,{"Content-type":"text/html"}) ;  //We have to tell it that it is a html file .This is used to tell the browser,,about the page to be shown and give it a response header
        res.end('<h2>This is not routed</h2>')         // This will show if any other request is made
    }
});

// We can assign any status code to any web page using res.writeHead()

server.listen(4200,'127.0.0.1',()=>{
     
    console.log('listening to port no 4200');
});


// The icon that appears against the opened tab's name is favicon

