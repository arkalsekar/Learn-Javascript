// setInterval()
// This method is used to perform a certain task at regular intervals
// This method is also async in nature 

// Example 1:
// Here, a random value between 0 and 1 will get printed on console after every 100ms for infinite number of times
setInterval(() => {
    let val = Math.random();
    console.log(val);
}, 100);


// Example 2:
// Here, we are going to use the same code as above, but we will put a limitaion so that the code does not print infinite number of times
// The code will stop the moment value of i becomes 100
for (let i = 1; i <= 100; i++) {
    setInterval(() => {
        let val = Math.random();
        console.log(val);
    }, 100);
}