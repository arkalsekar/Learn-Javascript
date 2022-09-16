// Operants and Expression
let a = 10;
let b = 2;

// console.log("a + b =", a + b )
// console.log("a - b =", a - b )
// console.log("a * b =", a * b )
// console.log("a ** b =", a ** b )
// console.log("a / b =", a /  b )

// Increment and Decrement Operator
let age = 14;
let age_incremented = age++;
console.log(age)

// Logical operators
let my_name = "Abdul Rehman";
let surname = "Kalsekar";

// if (my_name == surname) {
//     console.log("Name and Surname are same ")
// } 
// else {
//     console.log("Name and Surname  not the same")
// }

function name_checker() {
    if (typeof my_name == typeof surname) {
        return "Both have the same type"
    }
    else {
        return  "Both donot have the same type"
    }
}

console.log(name_checker())