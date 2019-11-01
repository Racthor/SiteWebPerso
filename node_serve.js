// Load the http module to create an http server.
const http = require('http');
const fs = require('fs');

const handleRequest = (request, response) => {
	response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./dist/index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer(handleRequest);

// Last, but not least, listen on port 8080
// The environment variable PORT is automatically defined and equals to 8080
server.listen(process.env.PORT, '0.0.0.0');