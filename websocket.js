const WebSocket = require('ws');

let wss;

function setupWebSocket(server){
    wss = new WebSocket.Server({server});
    wss.on('connection',(ws) =>{
        console.log('New client connected');
    });

}

setupWebSocket.broadcast = function (msg) {
    if (!wss) return;
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(msg));
      }
    });
  };


  module.exports= {setupWebSocket};