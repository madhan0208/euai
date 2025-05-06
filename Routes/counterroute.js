const express = require("express");
const { getCounter, incrementCounter } = require("../counter");
const { setupWebSocket } = require("../websocket");
const router = express.Router();

// get api method 
router.route('/').get((req, res) => {
  res.json({ value: getCounter() });
});

// post api method
router.route('/increment').post((req, res) => {
  const newVal = incrementCounter();
  setupWebSocket.broadcast({ type: 'update', value: newVal });
  res.json({ value: newVal });
});

module.exports = router;
