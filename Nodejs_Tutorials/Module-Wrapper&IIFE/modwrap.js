// node wraps the commands into modules because of which we are able to run them
//There is a function inside the grouping operator()

//due to module wrapper function only the scope of variables inside a particular file is private.

// node wraps up the commands into this wrapper function only



//const name ="Aryan";
//console.log(name);

//What node performs is this--

//A wrapper function is a immediately invoked function expression (iife)

//this runs as soon as it is defined in js..
//This is a self executing Anonymous function

//This has two major parts
// This first is the anonymous function with lexical scope enclosed within the grouping operator
// The second part creates the iife through which the js engine will directly interpret the function

//The data will be private inside the  grouping operator

//The syntax of an iife

//  (function(){
//   function expression......
//   })();

( function(){
 const name ="Aryan";
 console.log(name);
})();



// we pass some arguments also in module wrapper function
//The arguments we pass here are not global , instead they are local
 
(function( exports,require,module, _filename,_dirname){
    const name ="Aryan";
    console.log(name);
    

    
})();
//Note that there are two underscores below it
console.log(__dirname); 
console.log(__filename); 


//We can't acces name variable from outside the scope of iife function



