# call(), apply() and bind() method:

- In JavaScript The call, apply and bind methods can be used to assign to an object to the **this** keyword.

### call() method:

- In call() method, The object name passed as parameter to a call() method.

- The call() method takes the arguments seperately and the parameters are seperated by ','.

- Basically, call() method has ability to *reuse* the method already existing in a Object in JavaScript without redefining the same method for another object.

- The literals present in place of **this** keyword will be set with literals of the object be used inside call() method.

- Note: This is also known as **Function Borrowing**.

> Example 1:

```
const player = {
    printInfo: function () {
        return this.name + '\n' + this.age + '\n' + this.height;
    }
}

let player1 = {
    name: "Bahadur Singh",
    age: 37,
    height: 6.0
}

let player2 = {
    name: "Bhanu Bhosle",
    age: 25,
    height: 5.9
}

console.log(player.printInfo.call(player1));
console.log(player.printInfo.call(player2));

Output:

Bahadur Singh
37
6
Bhanu Bhosle
25
5.9

```

> Example 2:

```
const player = {
    greet: function (x, y) {
        return `${x} ${this.name}, ${y}`;
    }
}

let player1 = {
    name: "Bahadur Singh"
}

console.log(player.greet.call(player1, "Hello", "Whats going on!!"));

// Output: Hello Bahadur Singh, Whats going on!!
```

### <u> apply() method </u>:

- The apply() method is almost similar to call() method. But, The Only difference is the way we passed arguments.

- The Arguments are passed in a array list, except the object.

> Example:

```
const player = {
    greet: function (x, y) {
        return `${x} ${this.name}, ${y}`;
    }
}

let player1 = {
    name: "Bahadur Singh"
}

console.log(player.greet.apply(player1, ["Hello", "Whats going on!!"]));

// Output: Hello Bahadur Singh, Whats going on!!
```

### bind() method:

- The bind() method, is similar to the call() method but the main difference is,

- This creates a new function which wraps the original function object.

- We are Essentially, creating a new function called **func** to the object.

- Then, We called the function along with the arguments.

> Example:

```
let greet = function (x, y) {
    return `${x} ${this.name}, ${y}`;
}

let player1 = {
    name: "Bahadur Singh"
}

let func = greet.bind(player1);

console.log(func("Hello", "Whats going on!!"));

// Output: Hello Bahadur Singh, Whats going on!!
```
