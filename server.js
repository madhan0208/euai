const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { setupWebSocket } = require('./websocket');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: '*', // You may restrict to specific origin in production
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));


// Setup OpenAI
//const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


// API Routes

// Counter route
app.use('/api/counter', require('./Routes/counterroute'));





app.use('/api/ask', require('./Routes/ask'));


//  ChatGPT route
/*app.post('/api/chatgpt', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    console.log('Incoming Gemini request:', message);

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    if (!text) {
      return res.status(500).json({ error: 'No response from Gemini API' });
    }

    res.json({ response: text });

  } catch (err) {
    console.error('Gemini error:', err.message || err);
    res.status(500).json({
      error: 'Failed to communicate with Gemini API',
      details: err.message || err,
    });
  }

  console.log('Gemini API key:', process.env.GEMINI_API_KEY ? 'Loaded' : 'Missing');
});*/


// Create and start HTTP server
const server = http.createServer(app);

//  WebSocket setup
setupWebSocket(server);

//  Start listening
const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server is running on http://0.0.0.0:${PORT}`);
});
