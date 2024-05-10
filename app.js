//  const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.setHeader('Content-Type', 'text/html');
//         res.end('Welcome to the world of node js and i really doing well in that, i am approaching every task with good tactics and strategy in my life!!!')
//         return;
//     }




//     if (req.url === '/about') {
//         res.setHeader('Content-Type', 'text/html');
//         res.end('Here is the command running successfully');
//         return;
//     }



//     res.setHeader('Content-Type', 'text/html');
//     res.end(
//         `
//     <h2> opps!!</h2>
//     <p>can ot seem to find the page you are looking for !!!!</p>
//     <a href="/">back home </a>
//     `
//     )
// })

// server.listen(5000);

// const _ = require('lodash');

// const items = [1,[2,[3,[4]]]];

// const newItems = _.flattenDeep(items);
// console.log(newItems);
// console.log('Hello people welcome to teh world of node js, which i am learing right now and will be mastering this:) ');                               


// const {readFile} = require('fs');

// console.log('strating a file');
// readFile('./content/first.txt', 'utf8', (err,result)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(result);
//     console.log('completed the first task');
// })

// console.log('now i am starting a new task');


//doing the next task

// console.log('first');
// setTimeout(()=>{
//     console.log('second');
// }, 0)
// console.log('Third');

// setInterval(()=>{
//     console.log('Hello world');
// }, 20);
// console.log('I will come first!!');


//last example of the server

// const http = require('http')

// const server = http.createServer((req, res)=>{
//     console.log('now i am requesting event');
//     // res.end('Hello world');
//     res.end('Hello world, Welcome to the world of the nodee js and i am doing my best to make it happend!!');
// })

// server.listen(5000, ()=>{
//     console.log('server is listing on the port 5000...');
//     console.log('This is the different example of the listing!!');
// })


const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end('Home page')
    }
    if(req.url==='/about'){
        //BLOCKING CODE
        for(let i=0; i<1000; i++){
            for(let j=0; j<1000; j++){
                console.log(`${i} ${j}`);
            }
        }
        res.end('About  page')
    }
    res.end('Error page');
})


server.listen(5000, ()=>{
    console.log('server is lietining on the port 5000.....');
})



