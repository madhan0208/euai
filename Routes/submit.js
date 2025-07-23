const express = require('express');
const router = express.Router();
const Assessment = require('../Assessment'); 

// POST /api/submit

router.post('/', async (req, res) => {
  console.log('Body received:', req.body);
  try {
    const { answers } = req.body; 

    if (!answers || Object.keys(answers).length === 0) { 
      return res.status(400).json({ error: 'Missing or empty answers data' });
    }

    
    const result = await Assessment.create({ answers: answers });
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    console.error('Error saving assessment:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;