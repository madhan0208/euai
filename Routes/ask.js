const express = require('express');
const { askGemini } = require('../gemini'); // or '../gemini' if renamed
const router = express.Router();

router.post('/', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const response = await askGemini(prompt);
    res.json({ reply: response });
  } catch (error) {
    console.error('Error from Gemini API:', error.message);
    res.status(500).json({ error: 'Gemini request failed' });
  }
});

module.exports = router;
