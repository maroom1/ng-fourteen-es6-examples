// @ts-check
/* eslint-disable */

/* Arithmetic operators */
var num = 0; // {1}
console.log('num value is ' + num);

num = num + 2;
console.log('New num value is ' + num);

num = num * 3;
console.log('New num value is ' + num);

num = num / 2;
console.log('New num value is ' + num);

num++;
num--;

console.log('New num value is ' + num); //3

console.log('num mod 2 value is ' + num % 2); //1

/* Assignment operators */
num += 1; //4
num -= 2; //2
num *= 3; //6
num /= 2; //3
num %= 3; //0

console.log('New num value is ' + num);

/* Assignment operators */
console.log('num == 1 : ' + (num == 1)); //f
console.log('num === 1 : ' + (num === 1)); // f
console.log('num != 1 : ' + (num != 1)); //t
console.log('num > 1 : ' + (num > 1)); //f
console.log('num < 1 : ' + (num < 1)); //t
console.log('num >= 1 : ' + (num >= 1)); //f
console.log('num <= 1 : ' + (num <= 1)); //t

/* Logical operators */
console.log('true && false : ' + (true && false)); //f
console.log('true || false : ' + (true || false)); //t
console.log('!true : ' + !true); //f

/* Bitwise operators */
console.log('5 & 1:', 5 & 1); // same as 0101 & 0001 (result 0001 / 1) 
console.log('5 | 1:', 5 | 1); // same as 0101 | 0001 (result 0101 / 5)
console.log('~ 5:', ~5); // same as ~0101 (result 1010 / 10)
console.log('5 ^ 1:', 5 ^ 1); // same as 0101 ^ 0001 (result 0100 / 4)
console.log('5 << 1:', 5 << 1); // same as 0101 << 1 (result 1010 / 10)
console.log('5 >> 1:', 5 >> 1); // same as 0101 >> 1 (result 0010 / 2)

/* typeOf */
console.log('typeof num:', typeof num);
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1, 2, 3]);
console.log('typeof {name:John}:', typeof { name: 'John' });

/* delete */
var myObj = { name: 'John', age: 21 };
delete myObj.age;
console.log(myObj); // Object {name: "John"}'
console.log(5&&4)
console.log(5||4)
console.log(!4)
console.log(4)

