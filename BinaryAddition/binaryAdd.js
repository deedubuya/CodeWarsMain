/*Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string. */

function addBinary(a, b) {
    let sum = a + b;
    console.log(sum.toString(2));
}

addBinary(1, 2);