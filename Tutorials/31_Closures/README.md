## Closures in Javascript

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. (from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)).

You can access to an outer function's scope from an inner function. The inner function always has access to the variables and parameters of its outer function, even after the outer function has returned. By creating private variables or functions, you can hide implementation details.

Closures are created when a child function keeps the environment of the parent scope, even after the parent function has already executed.

Let's have a look at the following example:

- You can call `OuterFunction()` to return `InnerFunction()`. 
- The variable `innerFunc` only references `InnerFunction()`, not `OuterFunction()`. 
- When you call `InnerFunction()`, it can still access `outerVariable`, which is declared in `OuterFunction()`.

```
  function OuterFunction()
   {

    var outerVariable = 100;

    function InnerFunction() {
        alert(outerVariable);
    }

    return InnerFunction;
}
var innerFunc = OuterFunction();

innerFunc(); // 100 
```
