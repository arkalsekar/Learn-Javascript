// Here are some of the Special Operators

// 1. Double == 
// The following code will return true as it first converts both the variables into same DataType and then check
console.log(1 == '1')

// 2. Triple ===
// The following code will return false because it checks for datatype as well
console.log(1 === '1')

// 3. Ternary Operator
// let age = 3;
let age = 20;
console.log("You ", age > 18 ? "can Drive " : "Cannot Drive")

// 4. Spread Operator
// Will print on numbers of the array
let arr = [55, 3, 3, 34, 4, 4, 4, 4]
console.log(...arr)

// 5. Optional chaining (?.)
// If the object is undefined or null, it returns undefined instead of throwing an error.
// The following code will return undefined
let user = {
  "name" : "foo",
  "lastName" : "bar"
}
const userAge = user?.age;
console.log(userAge);
