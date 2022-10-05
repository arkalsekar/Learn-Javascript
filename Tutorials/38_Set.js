/* A Set is a special type collection – "set of values" (without keys), where each value may occur only once.

 * Its main methods are:
 * - new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
 * - set.add(value) – adds a value, returns the set itself.
 * - set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
 * - set.has(value) – returns true if the value exists in the set, otherwise false.
 * - set.clear() – removes everything from the set.
 * - set.size – is the elements count.
 *
 * The main feature is that repeated calls of set.add(value) with the same value do not do anything.
 * That’s the reason why each value appears in a Set only once.
 */

const students = [
  { name: 'Alex', last_name: 'Ventura', age: 19},
  { name: 'Joe', last_name: 'Blink', age: 11},
  { name: 'Nick', last_name: 'Doe', age: 26},
  { name: 'Nina', last_name: 'Michael', age: 6}
]

const classroom = new Set();

// the same student can't be multiple times in the same classroom
classroom.add(students[0]);
classroom.add(students[1]);
classroom.add(students[2]);
classroom.add(students[0]); // it points to a repeated student
classroom.add(students[2]); // it points to a repeated student

// set keeps only unique values
alert(classroom.size); // 3

for (let user of classroom) {
  alert(user.name); // Alex, Joe and Nick
}


/* An alternative to Set could be to use the array of students, and check for duplicates on every insertion
 * using arr.find. But the performance would be much worse
 */


/* We can loop over a Set either with for..of or using forEach: */
const fruits = new Set(['oranges', 'pinia', 'apples', 'bananas']);

for (let value of fruits) {
  console.log(value);
}

// now using forEach:
fruits.forEach(value => {
  console.log(value);
});
