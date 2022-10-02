// Modern way of Creating Functions also knows as Arrow Functions

const add = (num1, num2) => {
    return num1 + num2;
}

// More Compressed way if we have only one Statement
const sum = (num1, num2) => num1 + num2;
console.log(sum(13, 34))

// Still more compressed
const double = num => num * num;
console.log(double(23));