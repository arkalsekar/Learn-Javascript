// Promises Using JS

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.

// States in Promise:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully and the result is available.
// rejected: meaning that the operation failed.

// Example:

const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function (resolve, reject) {
    resolve("Apples");
  }, 300);
});

myPromise.then(function (e) {
  console.log(e); // expected output 'Apples'
});

// Instance Methods of a Promise

// then(): takes up to two arguments; the first argument is a callback function for the resolved case of the promise,
// the second argument is a callback function for the rejected case. Returns a newly generated promise object.

const promise1 = new Promise(function (resolve, reject) {
  resolve("Success!");
});

promise1.then(function (value) {
  console.log(value);
  // expected output: "Success!"
});

// catch(): just a .then() without a slot for a callback function for the case when the promise is resolved.
// Used to handle rejected promises.

const promise2 = new Promise((resolve, reject) => {
  throw "An error occurred";
});

promise1.catch(function (error) {
  console.error(error);
});
// expected output: An error occurred

// finally(): When the promise is settled, the specified callback function is executed.
// Provides a way for code to be run whether the promise was fulfilled successfully or rejected.

function findDataById(id) {
  return new Promise(function (resolve, reject) {
    let sampleData = [1, 2, 3, 4, 5];
    if (sampleData[id]) {
      resolve(sampleData[id]);
    } else {
      reject(new Error("Invalid id"));
    }
  });
}

findDataById(4)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (err) {
    console.error(err);
  })
  .finally(function () {
    console.log("Promise completed");
  });

// Static Methods of the Promise Class to resolve and reject promises

// Promise.all(): takes an iterable of promises as an input, returns a single Promise that resolves to an array of the results of the input promises.
// Rejects immediately upon any of the input promises rejecting or non-promises throwing an error and with this first rejection message / error.

var p1 = Promise.resolve(10);
var p2 = 45;
var p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Jill");
  }, 300);
});

Promise.all([p1, p2, p3]).then(function (values) {
  console.log(values); // => [10, 45, "Jill"]
});

// Promise.reject(): returns a Promise object that is rejected with a given reason.

Promise.reject(new Error("failed")).then(
  function () {
    // not called
  },
  function (error) {
    console.error(error); // error in the console
  }
);

// Promise.resolve(): returns a Promise object that is resolved with a given value. If the value is a promise,
// that promise is returned; if the value is a thenable (i.e. has a "then" method), the returned promise will "follow"
// that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value.

Promise.resolve("resolved!").then(
  function (value) {
    console.log(value); // "resolved!"
  },
  function (value) {
    // not called
  }
);
