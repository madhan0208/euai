const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Use env variable for security
});

async function askChatGPT(promptText) {
  const chatCompletion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: promptText }],
  });
  return chatCompletion.choices[0].message.content;
}

module.exports = { askChatGPT };
