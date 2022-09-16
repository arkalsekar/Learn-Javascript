// Primitive Data Types. Following are the 7 Primitive Data Types.
// NN BB SS U

let a = null; // Null 
let b = 654564; // Number
let c = BigInt(343);  // BigInt 
let d = true; // Boolean
let e = Symbol("I am a Symbol"); // Symbol
let f = "Hello World ! This is a String"; // String
let g = undefined;  // Undefined

// console.log(a, b , c , d, e, f, g)
// console.log(typeof c) // Similar to type() function in Python

// Objects in JS
// This is a Non Primitive Data Type
// Python Dictionaries are knows as Objects in JS

const item = {
    'name_of_tshirt': 'T-shirt',
    'is_in_offer': true, 
    'item_price': 5456,
    'item_tags': ['t-shirt', 'offer', 'other'],
    'item_desc': 'This is a Short Description of the T-Shirt',
}

// Indexing Objects in JS
console.log(item.name_of_tshirt)
console.log(item.item_price)
console.log(item.item_tags) // Get all Tags 
console.log(item.item_tags[0])  // Gets First Tag as Indexing Starts from 0


// Arrays in JS. Lists in Python are known as Arrays in JS
const arr = ['Abdul Rehman', 'Rohan', 'Ravi', 'Salman', 'Shahrukh']

// Indexing Arrays are as follows
console.log(arr[0])

// for (let i in arr) {
//     console.log(arr[i])
// }