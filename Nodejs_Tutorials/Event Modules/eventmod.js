// Event Modules
// NOde-js has a built in module called 'Events'
// where you can create- , fire-  and listen for-  your own events

// Example-1 Registering for the events to be fired only one time using once
// Example-2 Create an event emitter instance and register a couple of callbacks

// Example -3 register for the event with callback


//Here EventEmitter is a class and event is an object of it

const { ok } = require('assert');
const EventEmitter= require('events');

const event = new EventEmitter();

// Now we are creating our own event in event object
// listeners are the elements that are responsible for waiting for a particular event to happen

//We are adding and defining the event listener
 
event.on('saymyName',()=>{
   console.log('Your name is Aryan Pandey')
})

// emit calls every event listener in order they were registered syncronously
event.emit('saymyName')

event.on('multi-events',()=>{
    console.log('This is calling 1')
});
event.on('multi-events',()=>{
    console.log('This is calling 2')
});
event.on('multi-events',()=>{
    console.log('This is calling 3')
});

//  here we are calling multiple events ,together at a time 
event.emit('multi-events');

//  we are passing the parameters

event.on('checkPage',(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})

event.emit('checkPage',200,"ok");

