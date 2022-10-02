// prototype in JS
// In JavaScript, functions can be treated as objects. Which means, we can assign properties to the functions
// JavaScript provides an empty object known as "prototype" along with all the functions we create
// This prototype can be used to add different types of properties to the function

function newFunc(){
    console.log("Hello World!");
}

// Setting string, number and function as properties to newFunc()
newFunc.prototype.property1 = "This is a new Function";
newFunc.prototype.property2 = 123;
newFunc.prototype.property3 = function(){
    console.log("This function is assigned as a property to newFunc()");
}

console.log(newFunc.prototype.property1);
console.log(newFunc.prototype.property2);
console.log(newFunc.prototype.property3());