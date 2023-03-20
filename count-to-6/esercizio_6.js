/*
var numbers = process.argv.slice(2);
var min = Math.min(...numbers);

console.log(`The minimum of [${numbers}] is ${min}`);


*/

let numbers;
numbers=process.argv.slice(2);

const min =Math.min.apply(null,numbers);

console.log(`The minimum of [${numbers}] is ${min}`);
