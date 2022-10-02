var fruits = ['Mango', 'Orange', 'Banana', 'are', 'all', 'fruits'];
var Names = ['Abdul Rehman', 'Ramesh', 'Fatima', 'Sonu']

console.log('Mango' in  fruits);
console.log(fruits);

var a = 'Mango';

// Operations on Arrays 
// Concatenation
var concatenated_fruits = fruits.concat(Names);
console.log(concatenated_fruits);

// Reversing
var sorted_fruits = fruits.reverse();
console.log(sorted_fruits);

// joining
var fruits_name = fruits.join(Names);
console.log(fruits_name);

// Sorting
var sorting_names = Names.sort();
console.log(sorting_names);


// If else for an Array
if ('Orange' in fruits) {
    console.log("Yes Variable is Present in the Array ")
} else [
    console.log("Not Found")
]