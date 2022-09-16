// Iterating through iterables in JS
// Everything in Javascript is considered as an Object except the 6 Primitive Data Types. The 7 null datatype is also an object
// All other Data Types like Objects, Arrays are considered as Objects

export let sample_obj = { "Name": "Abdul Rehman", "Age": 334 };
export let my_list = ['Abdul Rehman', 'Abdul Alim', 'Ayesha'];
export let my_name = "Abdul Rehman Kalsekar";

console.log(typeof (arr)) // Object
console.log(typeof (my_list)) // Object

// Iterating over a List or Arr
for (const i in my_list) {
    console.log(my_list[i])
}

// Iterating over an Object
for (const i in sample_obj) {
    console.log(sample_obj[i])
}