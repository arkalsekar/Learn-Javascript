// In JavaScript, every function and object has a property named prototype by default. For example,
function Person () {
    this.name = 'John',
    this.age = 23
}

const person = new Person();

// checking the prototype value
console.log(Person.prototype); // { ... }
// n the above example, we are trying to access the prototype property of a Person constructor function.

// Since the prototype property has no value at the moment, it shows an empty object { ... }.
// You can also add new methods to a constructor function using prototype. For example,
// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
const person1 = new Person();
const person2 = new Person();

// adding a method to the constructor function
Person.prototype.greet = function() {
    console.log('hello' + ' ' +  this.name);
}

person1.greet(); // hello John
person2.greet(); // hello John
