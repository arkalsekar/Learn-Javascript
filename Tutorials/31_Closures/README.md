## Closures in Javascript

- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 

- In other words, a closure gives you access to an outer function's scope from an inner function.

- Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.

- Closure is useful in hiding implementation detail in JavaScript. In other words, it can be useful to create private variables or functions.

- Closure is created when a child function keep the environment of the parent scope even after the parent function has already executed.

<br>

Example : 

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

Explanation :

- In the above example, return InnerFunction; returns InnerFunction from OuterFunction when you call OuterFunction(). 

- A variable innerFunc reference the InnerFunction() only, not the OuterFunction(). 

- So now, when you call innerFunc(), it can still access outerVariable which is declared in OuterFunction(). This is called Closure.
