// Conditional Expressions
// Whenever a condition ais satisfied. it will be executed

const age = prompt("What is your Age");
const age_np = Number.parseInt(a);

if (age < 0) {
    console.log("Age can never be Negative")
}
else if (age < 18) {
    console.log("You are a Kid! Go to Study")
}
else if (age < 100 && age > 18) {
    console.log("You are a grown up")
}
else {
    console.log("Please Enter a Valid Age")
}