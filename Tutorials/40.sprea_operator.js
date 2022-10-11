//ES6 provides a new operator called spread operator that consists of three dots (...). 
//The spread operator allows you to spread out elements of
//an iterable object such as an array, map, or set. 
//For example:
const odd = [1,3,5];
const combined = [2,4,6, ...odd];
console.log(combined);
//output
[ 2, 4, 6, 1, 3, 5 ]

//In this example, the three dots ( ...) located in front of the odd array is the spread operator. 
//The spread operator (...) unpacks the elements of the odd array.
