console.log('Hello Amrutha Varshini');

const add = (a, b) => a + b;

console.log(add(1, 2));

console.log(process.argv);

var args = process.argv.slice(2);

console.log("Adding two numbers:",add(parseInt(args[0]), parseInt(args[1])));