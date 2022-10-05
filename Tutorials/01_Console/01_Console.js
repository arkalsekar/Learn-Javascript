// Everything about Console
// Console is like a print from Python and is very often used to debug JS code in the browser or in the terminal REPL.

console.log("hello World");
console.error("Hello Wrold ");
console.warn("Hello Wrold ");

// Clears the Previous Consoles and Prints
console.clear();


// Only Displays Alert Boxes
// console.alert("You might not be able to save changes after wards")

// Displays and Alert as well as an Input Field
console.prompt("Please Enter your Age")


// The .table() method is a very useful one to visualize arrays of data in a beauty way.
// - It will show every object property in a column header
// - Every column header has the sort functionality when clicking on it
// (index) | name | last_name | Age
// ---------------------------------
// 0       | Alex | Ventura   | 19
// 1       | Joe  | Blink     | 11
const users = [
  { name: 'Alex', last_name: 'Ventura', age: 19},
  { name: 'Joe', last_name: 'Blink', age: 11},
  { name: 'Nick', last_name: 'Doe', age: 26},
  { name: 'Nina', last_name: 'Michael', age: 6}
];

console.table(users);


/* Measuring how much time does an algorith takes to execute
 * In the browser console we have these two methods really handy to measure execution time:
 * console.time(_label_);
 * console.timeEnd(_label_);
 */

// We should give the timer a label identifier to be able to stop it later.
console.time('for-loop');
for (let i = 0; i < 1000000; i++) {
  // some code
}
console.timeEnd('for-loop');

let i = 0;
console.time('while-loop');
while (i < 1000000) {
  i++
}
console.timeEnd('while-loop');

// Expected output:
// for-loop: 1.703125 ms
// while-loop: 1.0322265625 ms
