const express = require('express');
const WebSocket = require('ws');
const cors = require('cors');  // Import cors

const app = express();

// Enable CORS (allow requests from your frontend)
app.use(cors({
  origin: 'http://localhost:3001',  // React app's URL
}));

// Set up a basic REST API route
app.get('/api/products', (req, res) => {
  res.json([{ id: 1, name: 'T-shirt', price: 25 }]);  // Sample data
});

// Set up WebSocket server
const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws) => {
  console.log('Client connected via WebSocket');
  
  // Send a welcome message to the client
  ws.send('Hello from server!');

  // Handle messages from client
  ws.on('message', (message) => {
    console.log('Received from client:', message);
    ws.send('Message received: ' + message);
  });

  // Handle connection close
  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

// Integrate WebSocket with HTTP server
app.server = app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

app.server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});
