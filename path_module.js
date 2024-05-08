// const { log } = require('console');
const path = require('path');

console.log(path.sep);
console.log(path.join);

const filPath = path.join('/content', 'subfolder', 'text.txt');
console.log(filPath);

const base = path.basename(filPath);
console.log(base);

const absolute = path.resolve(__dirname, 'content','subfolder','test.txt');
console.log(absolute);