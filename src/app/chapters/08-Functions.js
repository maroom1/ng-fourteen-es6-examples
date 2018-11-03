// @ts-check
/* eslint-disable */

function sayHello() {
    console.log('Hello!');
  }
  
  sayHello();
  
  /* function with parameter */
  function output(text) {
    console.log(text);
  }
  
  output('Hello!');
  console.log("2 args")
  output('Hello!', 'Other text');
  console.log("no args")
  output();
  
  /* function using the return statement */
  function sum(num1, num2) {
    return num1 + num2;
  }
  
  var result = sum(1, 2);
  output(result);