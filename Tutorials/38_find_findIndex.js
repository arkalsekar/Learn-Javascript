const users = [
  { name: 'Alex', last_name: 'Ventura', age: 19},
  { name: 'Joe', last_name: 'Blink', age: 11},
  { name: 'Nick', last_name: 'Doe', age: 26},
  { name: 'Nina', last_name: 'Michael', age: 6}
]

/* find() method:
 * it returns the first element from the provided array that matches the provided criteria function.
 * If any values meets the criteria, `undefined` is returned.
 */

// We want to find a user with name 'Nick' within the users collection.
// So we use the find() method and pass a function as an argument.
const nick = users.find(function(element) {
  // Element represents each user in the users collection and will respond to any of its properties like `name`.
  return element.name === 'Nick';
});

// Espected output si an Object:
console.log(nick);

// This is the short version using an arrow function
const nickArrow = users.find(element => element.name === 'Nick');
console.log(nickArrow);






/* findIndex() method:
 * it returns the index (position starting from 0) of the first element in the provided array that matches the provided criteria function.
 * If any element meets the testing criteria, then -1 is returned.
 */

// In this case, we want to know the position of a user within the users collection, so that we can delete it.
const indexPositionOfJoe = users.findIndex(function(element) {
  return element.name === 'Joe';
});

// Expected output is an integer not an object:
console.log(indexPositionOfJoe);

//Now we can delete the users using splice function:
users.splice(indexPositionOfJoe, 1);

// Now we should not see Joe in the users collection:
console.log(users);

// This is the findIndex short-version using an arrow function
const indexPositionOfJoeArrow = users.findIndex(element => element.name === 'Joe');
