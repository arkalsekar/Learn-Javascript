// Destruction in JS

const names = ['Abdul Rehman', 'Abdul Alim', 'Rohan', 'Das', 'Rahul'];
[a, b, c, d, e] = names

console.log(a)


// Primitive Way of Doing thiss
const default_names = { "a": a, "b": b, "c": c }
console.log(default_names.a)

// Modern way using Destructuring
const diff_names = { a, b, c, d, e }
console.log(diff_names.a)