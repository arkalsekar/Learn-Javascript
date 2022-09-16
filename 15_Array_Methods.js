var fruits = ['Mango', 'Orange', 'Banana', 'are', 'all', 'fruits'];
var Names = ['Abdul Rehman', 'Ramesh', 'Fatima', 'Sonu']

console.log('Mango' in  fruits);
console.log(fruits);

var a = 'Mango';

// Operations on Arrays 
// Concatination
var concated_fruits = fruits.concat(Names);
console.log(concated_fruits);

// Reversing
var sorted_frutits = fruits.reverse();
console.log(sorted_frutits);

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