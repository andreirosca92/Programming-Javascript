/*
let args = process.argv.slice(2);
    let result = {};
    [, result.username, result.email] = args;

    console.log(result);
*/


let userArray = process.argv.slice(2);
let data = {};
[data.username, data.email] = userArray.slice(1,3);
console.log(data);
