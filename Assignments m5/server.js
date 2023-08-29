const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //ans no.5
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is Home Page');
    //ans no.6
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is About Page');
    //ans no.6.2
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is Contact Page');
    //ans no.7
    } else if (req.url === '/file-write') {
        fs.writeFile('demo.txt', 'Hello World!', (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error writing file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('File created and text written');
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

//ans 2
const PORT = 3000;

//ans 4
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
