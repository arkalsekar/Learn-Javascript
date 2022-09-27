// call(), apply() and bind() in JS
// These methods are used to change the reference of "this" keyword of the invoking function


// call()
// Here, we are using the call() method to invoke the func() present in firstObj using secondObj values
const firstObj = {
    val1: "hello",
    val2: "world!",
    func: function (params) {
        console.log(this.val1, this.val2, params);
    }
}
const secondObj = {
    val1: "Java",
    val2: "Script!"
}

firstObj.func.call(secondObj, "Web Developement");



// apply()
// Here, we are using the call() method to invoke the func() present in Obj1 using Obj2 values
// The only difference between call() and apply() is that, the paramters for the func() needs to be passed in form of array
const Obj1 = {
    val1: "practice",
    val2: "coding",
    func: function (params) {
        console.log(this.val1, this.val2, params);
    }
}
const Obj2 = {
    val1: "python",
    val2: "java!"
}

Obj1.func.apply(Obj2, ["Android Developemnt"]);



// bind()
// Here, we are using the call() method to invoke the func() present in object1 using object2 values
// bind() returns a new function, which can be invoked later on
const object1 = {
    val1: "apple",
    val2: "mango",
    func: function (params) {
        console.log(this.val1, this.val2, params);
    }
}
const object2 = {
    val1: "guava",
    val2: "orange!"
}

const newFunc = object1.func.bind(object2, "Web Developement");
newFunc();