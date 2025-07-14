const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function askGemini(promptText) {
  try {
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      contents: "How does AI work?",
     });
    const result = await model.generateContent(promptText);
    const response = await result.response;
    return response.text();
  } catch (err) {
    console.error('Gemini error:', err.message || err);
    throw new Error('Failed to reach Gemini API');
  }
}

module.exports = { askGemini };
