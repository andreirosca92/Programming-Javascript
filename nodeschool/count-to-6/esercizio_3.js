const inputs = process.argv.slice(2);
const result = inputs.map(item => item[0])
                    .reduce((acc, curr) => acc+curr,'');

console.log(`\[${inputs}\] becomes \"${result}\"`);
/*
var inputs = process.argv.slice(2);
var result = inputs.map(s => s[0])
                       .reduce((soFar, s) => soFar + s);

console.log(`[${inputs}] becomes "${result}"`);
//al posto di s[0] anche s.charAt(0)
*/
