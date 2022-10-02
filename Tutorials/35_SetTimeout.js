// setTimeout()
// It is used to perform an operation after a specified interval of time

// Example 1:
// Here the "Start statement" gets printed first
// After a delay of 5000ms, "Hello World! JavaScript is amazing" will get printed
// Since setTimeout() works in async manner, the statements present after the setTimeout() gets executed first i.e "End Statement" gets printed on console
// At last "Hello World! JavaScript is amazing" gets printed on console
console.log("Start statement");
setTimeout(() => {
    console.log("Hello World! JavaScript is amazing");
}, 5000);
console.log("End statement");


// Example 2:
// Here "Hello World!" gets printed on console for 10 times, after every 1000ms
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log("Hello World!");
    }, 1000);
}

