<template>
  <div class="chatgpt">
    <h2>Ask ChatGPT</h2>
    <textarea v-model="prompt" rows="4" cols="50" placeholder="Ask me something..."></textarea>
    <br>
    <button @click="sendPrompt" :disabled="loading">Ask</button>
    <p v-if="loading">Loading...</p>
    <p v-if="response" class="reply">{{ response }}</p>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        const data = await res.json();
        if (data.reply) {
          this.response = data.reply;
        } else {
          this.error = 'No reply received';
        }
      } catch (err) {
        this.error = 'Error communicating with backend';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.chatgpt {
  margin-top: 30px;
  text-align: center;
}
textarea {
  width: 80%;
  font-size: 16px;
  padding: 8px;
}
.reply {
  margin-top: 20px;
  color: green;
}
.error {
  margin-top: 20px;
  color: red;
}
</style>
