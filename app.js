 const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.end('Welcome to the world of node js and i really doing well in that, i am approaching every task with good tactics and strategy in my life!!!')
        return;
    }




    if (req.url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.end('Here is the command running successfully');
        return;
    }



    res.setHeader('Content-Type', 'text/html');
    res.end(
        `
    <h2> opps!!</h2>
    <p>can ot seem to find the page you are looking for !!!!</p>
    <a href="/">back home </a>
    `
    )
})

server.listen(5000);