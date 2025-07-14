const express = require('express');
const { askGemini } = require('../gemini'); // renamed from askChatGPT
const router = express.Router();

router.post('/ask', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const response = await askGemini(prompt); // renamed function
    res.json({ reply: response });
  } catch (error) {
    console.error('Gemini API error:', error.message || error);
    res.status(500).json({ error: 'Gemini request failed' });
  }
});

module.exports = router;
