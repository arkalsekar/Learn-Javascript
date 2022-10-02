//Bitwise And Operator
//Bitwise AND & returns 1 if the corresponding bits of both operands are 1 else it returns 0
let a = 10; 
let  b = 7; 
let result = a & b; 
console.log(result); // result is 2, as binary representation of 10 is 1010 and that of 7 is 0111, so the bitwise 'and' of both these would result in 0010, which is 2

//Bitwise Or operator
//Bitwise OR | returns 1 if either of the corresponding bits of one operand is 1 else returns 0
let a = 10; 
let  b = 7; 
let result = a | b; 
console.log(result); //result is 15, as  binary representation of 10 is 1010 and that of 7 is 0111, so the bitwise 'or' of both these would result in 1111, which is 15

//Bitwise Not Operator
//Flips the value of the Bit, converts 0 to 1 and 1 to 0
let a=12;
let result=~a;
console.log(result); //result is -13 since on applying the bitwise 'not' operation, we would get 11111111111111111111111111110011, which is -13 in decimal value

//Bitwise Xor operator
//Bitwise Xor returns 1 if the corresponding bits are different and returns 0 if the corresponding bits are the same.
let a=10;
let b=7;
let result=a^b;
console.log(result); //result is 13, since the binary representation of 10 is 1010 and that of 7 is 0111, so the bitwise 'xor' of both these would result in 1101, which is 13

//Left Shift Operator
//In the left shift operator <<, the left operand specifies the number and the right operand specifies the number to be shifted left
let a = 8;
let  b = 1;
let result = a << b;
console.log(result); //result is 16, as the left shift operation on 8 by 1 bit, would result in 10000, which is 16 in decimal value

//Right Shift operator
//In the right shift >>>, it shifts the operand to the right by filling the zero bits to the left.
let a=8;
let b=1;
let result = a>>b;
console.log(result); ////result is 16, as the right shift operation on 8 by 1 bit, would result in 0100, which is 4 in decimal value
