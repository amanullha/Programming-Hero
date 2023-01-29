const _ = require('underscore');
const http = require('http');


// console.log(http);

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<p> This is default home page</p>')
        res.end()
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-type': 'text/html' })
        res.write('<p>This is about</p>')
        res.end();

    }
    else if (req.url === '/dataJSON') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify({ aman: 'ullha' }))
        res.end();

    }
    else {
        res.end('wrong statement')
    }
})

const PORT = 5000;

server.listen(PORT);
console.log(`Server is running at port ${PORT}`);