// Closures in JS
// Closure is a function that references variables in the outer scope from it's inner scope
// In simple words, closure is a function that has access to it's parent scope, even after the complete execution of parent function.

// Example 1:
// Here, outerFunc() returns a function, which displays some text on the console
const outerFunc = (value) => {
    const str1 = "Hello";
    const str2 = "World!";
    return function () {
        console.log(str1, " ", str2, " ", value);
    }
}
// innerFunc() stores the function returned by the outerFunc().
// After completion of outerFunc() execution, the innerFunc() is invoked. The innerFunc() is still able to use the variables "str1", "str2" and "value" of outerFunc(), even when it is closed.
const innerFunc = outerFunc("JavaScript");
innerFunc();



// Example 2:
// Here, Func() returns a function which displays the product of value1 and value2 on console
const Func = (value1) => {
    return function (value2) {
        console.log("The product of value1 and value2 is: ", value1 * value2);
    }
}
//  20 is passed to prodFunc() and it gets 5 from it's lexical environment, thus calculates the product and displays on console
const prodFunc = Func(5);
prodFunc(20);