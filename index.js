const http = require('http');

// Create a server instance
const server = http.createServer((req, res) => {
  // Set response header to specify content type as HTML or JSON
  if (req.url === '/html') {
    res.setHeader('Content-Type', 'text/html');
    
    res.end('<html><body><h1>Hello, World!</h1></body></html>');
  } else if (req.url === '/json') {
    res.setHeader('Content-Type', 'application/json');
    // Send a JSON response
    const data = {
      message: 'Hello, World!'
    };
    res.end(JSON.stringify(data));
  } else {
    // Send a 404 response for any other route
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Start the server
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

