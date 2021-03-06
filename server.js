const fs = require('fs');
const path = require('path');
const http = require('http');
const debug = require('debug');

const logger = debug('myLogger');

const server = http.createServer((req, resp) => {

    // logger(req.url);
    // logger(process.env.DEBUG);
    logger(process.memoryUsage());

    const filename = req.url === '/' ? 'index.html' : req.url;

    fs.readFile(path.join(__dirname, 'public', filename), (err, data) => {
        if(err) {
            resp.writeHead('404');
            resp.end();
            return;
        }

        resp.write(data);
        resp.end();
    });
});

server.listen(process.env.PORT || 3000);


