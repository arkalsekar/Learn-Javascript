// Everything about Console
// Console is like a print from Python

console.log("hello World")
console.error("Hello Wrold ")
console.warn("Hello Wrold ")

// Clears the Previous Consoles and Prints
console.clear()


// Only Displays Alert Boxes
// console.alert("You might not be able to save changes after wards")

// Displays and Alert as well as an Input Field
console.prompt("Please Enter your Age")



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
