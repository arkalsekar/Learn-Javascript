// Everything about Math Module of JS
// JS Maths has 8 Mathematical Constants 

let a = Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

// console.log(a)

// Maths has 4 Methods for Rounding off a Number
let number = 12.47

let round_1 = Math.round(number)	// Returns x rounded to its nearest integer
let round_2 = Math.floor(number)	// Returns x rounded down to its nearest integer
let round_3 = Math.ceil(number)	// Returns x rounded up to its nearest integer
let round_4 = Math.trunc(number)	// Returns the integer part of x (new in ES6)
console.log(round_1, round_2, round_3, round_4)

Math.pow(34, 3)