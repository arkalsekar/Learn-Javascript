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
// Here, a div is created
// It's height and width is set to "100px" and background-color is set to "blue"
// After every 1000ms, the background-color of div changes from "blue" to "green" and vice-versa
const newDiv = document.createElement("div");
newDiv.style.height = "100px";
newDiv.style.width = "100px";
newDiv.style.backgroundColor = "blue";
setInterval(() => {
    if(newDiv.style.backgroundColor === "blue"){
        newDiv.style.backgroundColor = "green";
    }
    else{
        newDiv.style.backgroundColor = "blue";
    }
}, 1000);
