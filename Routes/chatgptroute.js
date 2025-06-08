const express = require('express');
const { askChatGPT } = require('../chatgpt');
const router = express.Router();

router.post('/ask', async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await askChatGPT(prompt);
    res.json({ reply: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'ChatGPT request failed' });
  }
});

module.exports = router;
