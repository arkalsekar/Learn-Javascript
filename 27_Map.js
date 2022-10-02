/* 
Maps are like Mapping Objects
You can store data in it and retrieve it easily
Following are the Methods and Properties of Maps. 

Methods are as Follows
.set()
.get()
.delete()
.has()
.foreach()
.entries()

Properties are as follows
.size  Returns the size of a Map
*/

let my_map = new Map()

// Adding Data to Map
my_map.set('name1', 'Abdul Rehman Kalsekar')
my_map.set('name2', 'Rohan Das ')
my_map.set('name3', 'Ravi Rahul ')
console.log(my_map)

// Getting Data from Maps
console.log(my_map.get('name1'))

// Deleting data from Maps
my_map.delete('name2')
console.log(my_map)

// Returns all the map Entries
console.log(my_map.entries())

// Clears the Complete Map
// my_map.clear()
console.log(my_map)

// Returns all the keys of the Map
console.log(my_map.keys())

// Returns all the Values of the Map
console.log(my_map.values())


// Returns sie of Maps
console.log(my_map.size)

