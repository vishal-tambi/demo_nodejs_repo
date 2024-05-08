const { log } = require('console');
const os = require('os');

const user = os.userInfo();
console.log(user);

console.log(`The system up time is :- ${os.uptime()} second hahaha:)`);

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem(),
}

console.log(currentOS);