const {readFileSync, writeFileSync, readFile} = require('fs');

console.log('start');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

// console.log(first, second);

writeFileSync('./content/result_file.txt', `Hello world : ${first}, ${second}`);

console.log('done with this task');
console.log('now i am starting the new one ahahahah');

