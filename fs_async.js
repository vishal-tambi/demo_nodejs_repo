const {readFile, writeFile } = require('fs');
console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
        // console.log(result);
        const first = result;
        readFile('./content/second.txt' ,'utf8', (err, result)=>{
            if (err) {
                console.log(err);
                return;
            }
                // console.log(result);
                const second = result;
                writeFile('./content/result_async.txt',  `Hello world : ${first}, ${second}`, (err, result)=>{
                    if(err){
                        console.log(err);
                        return 
                    }
                    console.log('done with thsi task and moving to another task');
                })
        })
        console.log('starting the new task');

});

