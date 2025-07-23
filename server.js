const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { setupWebSocket } = require('./websocket');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));



mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Euai')
  .then(() => {
    console.log(' MongoDB connected successfully!');
  })
  .catch(err => {
    console.error('MongoDB connection error:');
    console.error(err); 
    process.exit(1); 
  });

app.use(cors());
app.use(express.json());




// Counter route
//app.use('/api/counter', require('./Routes/counterroute'));





app.use('/api/ask', require('./Routes/ask'));
const submitRoutes = require('./Routes/submit');
app.use('/api/submit', submitRoutes);


const downloadRoutes = require('./Routes/download'); 
app.use('/api/download', downloadRoutes); 

//  HTTP server
const server = http.createServer(app);

//  WebSocket 
setupWebSocket(server);


const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server is running on http://0.0.0.0:${PORT}`);
});
