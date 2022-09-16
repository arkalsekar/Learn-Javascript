// Loops 

// For Loops
for (let i = 0; i < 50; i++) {
    console.log(i)
}

// For in Loop
let stu_marks = {
    Rohit: 34,
    "Abdul Rehman": 3434,
    Saaliah: 34,
    Ayesha: 34,
    Rahul: 64,
    harry: 65,

}

for (let i in stu_marks) {
    console.log("Marks of " + i)
}

// For of Loop
// This is only valid for Strings and Arrays
const my_name = "Abdul Rehman";
for (let i in my_name) {
    console.log(my_name[i]);
}

// While Loop
let a = 100;
let i = 0;
while (i < a) {
    console.log(i);
    i++;
}


// Do While Loops

// do {
//     console.log("Hello World")

// } while (10 > 1)