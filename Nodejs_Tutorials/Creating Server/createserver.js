// What is web server?

//To access web pages of any web application , you need a web server.
//The web server will handle all the http requests for the web applications

// Node.js will provide capabilities to create your own web server that will handle http requests asynchronously

// TO use the HTTP server and client , one must include ('http')

const http = require('http');

//createserver() is a method in http module



//This includes request and response parameters which is supplied by nodejs


//The response object can be used to send a response 
// A call back function is to be passed in the method

//req object is used to get the info about http request like , url , request header, and data
const server = http.createServer((req,res)=>{

      
      res.end('this is the response from the server');
});

//We have to pass port no and local host  in this ..have to use unused ports

//127.0.0.1 is the IP address of the localhosts
server.listen(4200,'127.0.0.1',()=>{
    console.log('listening to port no 4200')
});

