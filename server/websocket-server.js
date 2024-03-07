const WebSocket = require('ws');

// Create a WebSocket server instance
const wss = new WebSocket.Server({ port: 8080 }); // Set the port number to listen on

// Event listener for when a client connects to the server
wss.on('connection', function connection(ws) {
  console.log('Client connected');

  // Event listener for when the server receives a message from a client
  ws.on('message', function incoming(message) {
    console.log('Received: %s', message);

    // Echo the received message back to the client
    ws.send(`Echo: ${message}`);
  });

  // Event listener for when the client disconnects from the server
  ws.on('close', function close() {
    console.log('Client disconnected');
  });
});
