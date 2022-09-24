var fruits = ['Mango', 'Orange', 'Banana', 'are', 'all', 'fruits'];
var Names = ['Abdul Rehman', 'Ramesh', 'Fatima', 'Sonu']

console.log('Mango' in fruits);
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
} else {
    console.log("Not Found")
}


// .map()  
// This method is used to traverse through all the elements present in array
// It returns a new array
const numList = [10, 5, 7, 54, 48, 68, 120];

// Storing the squared values of each element of numList
const squareArray = numList.map((element) => {
    return element * element;
});
console.log(squareArray);


// .filter() 
// This method is used to filter the array based on certain criteria
// It returns a new array
const numListTwo = [100, 50, 87, 54, 48, 180, 12, 9, 23];

// Storing the elements greater than 50
const findArray = numListTwo.filter((element) => {
    return (element > 50);
});
console.log(findArray);


// .reduce()
// This method returns a single value
// Initially, accumulator stores the first value and currentVal stores the current value.Then the result of  accumulator and currentVal gets stored into accumulator, and the next element of the numListThree gets stored into currentVal
const numListThree = [1, 6, 10, 8, 9, 27];

// Storing the product of all elements of numListThree
const prodValue = numListThree.reduce((accumulator, currentVal) => {
    return accumulator * currentVal;
})
console.log(prodValue);