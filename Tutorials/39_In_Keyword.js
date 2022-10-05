// The keyword "in" is used to determine whether a property exists in an object. 
// We use it in a "for..in" loop without understanding it was a keyword "_"

// If an object has a property, in will return // true; 
// otherwise, it will return // false.

const human = {
    brain: "yes"
}

// It returns true because we have brain defined in human.
console.log("brain" in human) // true

// It logs false, because superpower” is not available as property in the human.
console.log("superpower" in human) // false
