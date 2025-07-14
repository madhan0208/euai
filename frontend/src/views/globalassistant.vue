<!-- src/components/GptAssistant.vue -->
<template>
  <div class="gpt-popup">
    <button @click="showChat = !showChat" class="gpt-toggle">
      💬 ChatGPT
    </button>

    <div v-if="showChat" class="gpt-chat-window">
      <div class="gpt-header">
        <span>Ask ChatGPT</span>
        <button @click="showChat = false">✖</button>
      </div>

      <textarea v-model="prompt" placeholder="Ask something..."></textarea>
      <button @click="sendPrompt" :disabled="loading || !prompt">Send</button>

      <p v-if="loading">Loading...</p>
      <p v-if="response" class="reply">{{ response }}</p>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'globalassistant',
  data() {
    return {
      showChat: false,
      prompt: '',
      response: '',
      error: '',
      loading: false
    };
  },
  methods: {
    async sendPrompt() {
      this.loading = true;
      this.response = '';
      this.error = '';
      try {
        const res = await fetch('/api/ask', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: this.prompt })
        });

        const text = await res.text(); // Read raw response
        console.log('Raw response from server:', text);

        // Try to parse JSON
        const data = JSON.parse(text);
        if (data.reply) {
          this.response = data.reply;
        } else {
          this.error = 'No reply received';
        }
      } catch (err) {
        this.error = 'Invalid JSON or fetch failed: ' + err.message;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.gpt-popup {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}

.gpt-toggle {
  background-color: #4caf50;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
}

.gpt-chat-window {
  background: white;
  width: 300px;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(0,0,0,0.3);
  position: absolute;
  bottom: 60px;
  right: 0;
}

.gpt-header {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 8px;
}

textarea {
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
}

button {
  padding: 8px;
  margin-top: 5px;
}

.reply {
  margin-top: 10px;
  color: green;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
