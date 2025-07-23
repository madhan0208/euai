const WebSocket = require('ws');

let wss;

function setupWebSocket(server) {
  wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('close', () => {
      console.log('Client disconnected');
    });

    ws.on('message', (message) => {
      try {
        const data = JSON.parse(message);
      } catch (e) {
        console.error('Invalid JSON:', message);
      }
    });
  });
}

setupWebSocket.broadcast = function (message) {
  if (!wss) return;
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
};

module.exports = { setupWebSocket };
