const express = require('express');
const dotenv = require("dotenv").config();
const http = require('http');
const cors = require('cors');
const { setupWebSocket } = require('./websocket');

// Create an instance of an Express application
const app = express();
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

const port = process.env.PORT || 3000 ;

//  route
app.use("/api/counter",require("./Routes/counterroute"));

require('dotenv').config(); // Load .env file
app.use('/api/chatgpt', require('./Routes/chatgptroute'));



/*app.get('/api/counter/test', (req, res) => {
    res.send('Test working!');
  });*/
  
const server= http.createServer(app);

setupWebSocket(server);




server.listen(3000 , '0.0.0.0',() => {
  console.log(`Server is running on http://0.0.0.0:3000`);
});
