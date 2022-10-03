//const operator=require('./Operator');

const {add,sub, mult,name} = require('./Operator')  //Using object destructuring
//console.log(name);
//console.log(operator);      //Operator here is an object , that is returning both the function
//console.log(operator.add(5,5));
//console.log(operator.sub(5,3));
//here the name of the const variable can be anything

console.log(add(5,5));
console.log(sub(5,3));
console.log(mult(5,3));
console.log(name);


