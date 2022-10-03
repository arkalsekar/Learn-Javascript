// Streams are objects that let you read data from a source or write data to a 
// destiniation in continous fashion . In node  js there are four types of streams-

//Streaming means listening to music or watching video in 'real time'
// instead of downloading a file to your computer and watching it later

//Readable- stream which is used for read operation
//Writable - stream that is used for writing operation
// Duplex -- for both reading and writing
// Transform-- A type of duplex where output is computed based  on input 

// Each type of stream is an EventEmitter instance and throws several events at different instance of time..
// Some commonoly used events are-
// data- fired when data is available to read
// error- fired when there is an error
// end - fired when there is no more data to read
// finish- fired when all data has been flushed..



//  the data is streamed 
const { error } = require('console');
const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    //  var fs= require('fs');
    //  fs.readFile('input.txt',(err,data)=>{
    //      if(err)
    //      {
    //         return console.error(err);
    //      }

    //      res.end(data.toString());
    //  });

    const rstream=fs.createReadStream('input.txt');

    //firing the event data..this data is streamed chunk by chunk 
    rstream.on('data',(chunkdata)=>{

        res.write(chunkdata);
    });

        rstream.on('end',()=>{
            res.end();
        });

        rstream.on('error',(err)=>{
            console.log(err);
            res.end('file not found');
        })

});

server.listen(3200,'127.0.0.1',()=>{
    console.log('The server is listening');
});

//stream.pipe() is the method used to take a readable stream and connect it to a writable stream

 


